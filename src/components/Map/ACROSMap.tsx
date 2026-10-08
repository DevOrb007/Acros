import { useEffect, useRef, useState } from "react"
import { Map, Marker, setWorkerUrl } from "maplibre-gl"
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url"
import "maplibre-gl/dist/maplibre-gl.css"

import { hotspots } from "../../data/hotspots"
import type { Hotspot } from "../../types/biodiversity"
import type { AtlasView } from "../../app/AppState"
import MapAnnotations from "./MapAnnotations"

setWorkerUrl(workerUrl)

interface ACROSMapProps {
  selectedHotspot: Hotspot | null
  currentView: AtlasView
  onHotspotSelect: (hotspot: Hotspot) => void
  onNavigate: (view: AtlasView) => void
  onMapReady?: () => void
}

export default function ACROSMap({
  selectedHotspot,
  currentView,
  onHotspotSelect,
  onNavigate,
  onMapReady,
}: ACROSMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<Map | null>(null)
  const [mapInstance, setMapInstance] = useState<Map | null>(null)
  const hotspotMarkersRef = useRef<Marker[]>([])

  const onHotspotSelectRef = useRef(onHotspotSelect)
  const onMapReadyRef = useRef(onMapReady)

  useEffect(() => {
    onHotspotSelectRef.current = onHotspotSelect
  }, [onHotspotSelect])

  useEffect(() => {
    onMapReadyRef.current = onMapReady
  }, [onMapReady])

  // Initialize MapLibre globe map with soft natural earth tones and clean elevation
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    const acrosMap = new Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          physicalTiles: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
            maxzoom: 8,
          },
          terrainSource: {
            type: "raster-dem",
            tiles: [
              "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
            ],
            encoding: "terrarium",
            tileSize: 256,
            maxzoom: 12,
          },
          countries: {
            type: "geojson",
            data: "/countries.geojson",
          },
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              // Soft, tranquil, desaturated ocean sea tone matching reference
              "background-color": "#D0D9DE",
            },
          },
          {
            id: "physical-basemap",
            type: "raster",
            source: "physicalTiles",
            paint: {
              "raster-opacity": 1,
              // Soft natural earth tones: desaturate harsh blues and greens
              "raster-saturation": -0.3,
              "raster-contrast": -0.05,
              "raster-brightness-max": 0.96,
              "raster-brightness-min": 0.04,
            },
          },
          {
            id: "country-borders",
            type: "line",
            source: "countries",
            paint: {
              "line-color": "#635848",
              "line-width": 0.5,
              "line-opacity": 0.22,
            },
          },
        ],
      },
      center: [25, 12],
      zoom: 2.35,
      pitch: 20, // Gentle tilted perspective
      minZoom: 1.0, // Allows user to smoothly zoom out
      maxZoom: 6.8, // Strict limit to prevent 'map data not available' tile errors
      maxPitch: 75,
      scrollZoom: true,
      boxZoom: true,
      doubleClickZoom: true,
      touchZoomRotate: true,
      dragPan: true,
      dragRotate: true,
      pitchWithRotate: true,
      touchPitch: true,
      attributionControl: false,
    })

    mapRef.current = acrosMap

    acrosMap.on("load", () => {
      // Set left padding on desktop so the 3D globe sits on the right with part visible
      if (typeof window !== "undefined" && window.innerWidth > 900) {
        acrosMap.setPadding({
          top: 0,
          bottom: 0,
          left: Math.round(window.innerWidth * 0.48),
          right: 0,
        })
      }

      // Enable spherical globe projection
      acrosMap.setProjection({
        type: "globe",
      })

      // Realistic, gentle 3D terrain elevation for terrestrial mountain ranges
      // (1.25x exaggeration prevents bathymetric ocean trenches from erupting into spiky ridges)
      acrosMap.setTerrain({
        source: "terrainSource",
        exaggeration: 1.25,
      })

      // Add globe markers for all 9 hotspots
      hotspots.forEach((hotspot) => {
        const markerEl = document.createElement("button")
        markerEl.type = "button"
        markerEl.className = "hotspot-marker"
        markerEl.setAttribute("aria-label", `Discover ${hotspot.name}`)

        markerEl.innerHTML = `
          <span class="hotspot-marker-dot" aria-hidden="true"></span>
          <span class="hotspot-marker-label">${hotspot.name}</span>
        `

        markerEl.addEventListener("click", (e) => {
          e.stopPropagation()
          onHotspotSelectRef.current(hotspot)
        })

        const marker = new Marker({
          element: markerEl,
          anchor: "center",
        })
          .setLngLat(hotspot.coordinates)
          .addTo(acrosMap)

        hotspotMarkersRef.current.push(marker)
      })

      setMapInstance(acrosMap)

      // Notify parent that the globe is formed and initial rendering is underway
      // Using a short idle/delay listener to ensure the globe sphere has rendered
      let notified = false
      const notifyReady = () => {
        if (!notified) {
          notified = true
          onMapReadyRef.current?.()
        }
      }

      acrosMap.once("idle", notifyReady)
      setTimeout(notifyReady, 1200)
    })

    return () => {
      acrosMap.remove()
      mapRef.current = null
      setMapInstance(null)
    }
  }, [])

  // Handle camera movements between global Earth and regional Hotspot
  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    if (selectedHotspot) {
      const padding = {
        top: 60,
        bottom: 60,
        left: window.innerWidth > 900 ? 340 : 20,
        right: 40,
      }

      // Fly to hotspot with smooth, natural elevation perspective
      map.flyTo({
        center: selectedHotspot.coordinates,
        zoom: selectedHotspot.zoom || 5.2,
        pitch: 42, // Natural, serene mountain perspective (not extreme)
        bearing: -8,
        duration: 2200,
        essential: true,
        padding,
      })

      // Hide global small markers when inside a hotspot
      hotspotMarkersRef.current.forEach((marker) => {
        const el = marker.getElement()
        if (el) el.style.opacity = "0"
        if (el) el.style.pointerEvents = "none"
      })
    } else {
      // Return to global 3D Earth view (large globe on the right with part visible)
      const leftPadding =
        typeof window !== "undefined" && window.innerWidth > 900
          ? Math.round(window.innerWidth * 0.48)
          : 0

      map.flyTo({
        center: [25, 12],
        zoom: 2.35,
        pitch: 20,
        bearing: 0,
        duration: 2000,
        essential: true,
        padding: { top: 0, bottom: 0, left: leftPadding, right: 0 },
      })

      // Show global markers again
      hotspotMarkersRef.current.forEach((marker) => {
        const el = marker.getElement()
        if (el) el.style.opacity = "1"
        if (el) el.style.pointerEvents = "auto"
      })
    }
  }, [selectedHotspot])

  return (
    <div className="acros-map-wrapper">
      {/* Globe Atmospheric Aura (Luminous halo behind the 3D globe) */}
      <div className="acros-globe-aura" aria-hidden="true" />
      <div className="acros-viewport-vignette" aria-hidden="true" />

      <div
        ref={mapContainer}
        className="acros-map"
        aria-label="ACROS interactive 3D world globe"
      />

      {/* Spatial Map Floating Text Annotations when a hotspot is active */}
      {selectedHotspot && currentView === "hotspot" && (
        <MapAnnotations
          map={mapInstance}
          hotspot={selectedHotspot}
          onNavigate={onNavigate}
        />
      )}
    </div>
  )
}