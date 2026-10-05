import { useEffect, useRef } from "react"
import { Map, Marker, setWorkerUrl } from "maplibre-gl"
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url"

import "maplibre-gl/dist/maplibre-gl.css"

import { hotspots } from "../../data/hotspots"
import type { Hotspot } from "../../types/biodiversity"

setWorkerUrl(workerUrl)

interface ACROSMapProps {
  onHotspotSelect?: (hotspot: Hotspot) => void
}

function ACROSMap({ onHotspotSelect }: ACROSMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<Map | null>(null)
  const onHotspotSelectRef = useRef(onHotspotSelect)

  onHotspotSelectRef.current = onHotspotSelect

  useEffect(() => {
    if (!mapContainer.current || map.current) {
      return
    }

    const acrosMap = new Map({
      container: mapContainer.current,

      style: {
        version: 8,

        sources: {
          countries: {
            type: "geojson",
            data: "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
          },
        },

        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              "background-color": "#E9E2D5",
            },
          },
          {
            id: "countries",
            type: "fill",
            source: "countries",
            paint: {
              "fill-color": "#C5BBA7",
              "fill-opacity": 1,
            },
          },
          {
            id: "country-borders",
            type: "line",
            source: "countries",
            paint: {
              "line-color": "#B3A892",
              "line-width": 0.7,
              "line-opacity": 0.9,
            },
          },
        ],
      },

      center: [20, 15],
      zoom: 1.65,

      minZoom: 1,
      maxZoom: 8,

      attributionControl: false,
    })

    map.current = acrosMap

    acrosMap.on("load", () => {
      acrosMap.setProjection({
        type: "globe",
      })

      hotspots.forEach((hotspot) => {
        const markerElement = document.createElement("button")

        markerElement.type = "button"
        markerElement.className = "hotspot-marker"

        markerElement.setAttribute(
          "aria-label",
          `Explore ${hotspot.name}`,
        )

        markerElement.innerHTML = `
          <span class="hotspot-marker__dot"></span>
          <span class="hotspot-marker__label">
            ${hotspot.name}
          </span>
        `

        markerElement.addEventListener("click", () => {
          acrosMap.flyTo({
            center: hotspot.coordinates,
            zoom: 4.25,
            duration: 2200,
            essential: true,
          })

          onHotspotSelectRef.current?.(hotspot)
        })

        new Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat(hotspot.coordinates)
          .addTo(acrosMap)
      })
    })

    return () => {
      acrosMap.remove()
      map.current = null
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="acros-map"
      aria-label="ACROS world map"
    />
  )
}

export default ACROSMap