import { useEffect, useRef } from "react"
import { Marker, type Map } from "maplibre-gl"

import type { Hotspot } from "../../types/biodiversity"

interface MapAnnotationsProps {
  map: Map | null
  hotspot: Hotspot | null
}

interface AnnotationDefinition {
  id: string
  value: number | string | null | undefined
  label: string
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
}

function MapAnnotations({
  map,
  hotspot,
}: MapAnnotationsProps) {
  const markers = useRef<Marker[]>([])

  useEffect(() => {
    markers.current.forEach((marker) => {
      marker.remove()
    })

    markers.current = []

    if (!map || !hotspot) {
      return
    }

    const annotations: AnnotationDefinition[] = [
      {
        id: "plants",
        value: hotspot.plantSpeciesCount,
        label: "Plant species",
        position: "top-left",
      },
      {
        id: "animals",
        value: hotspot.animalSpeciesCount,
        label: "Animal species",
        position: "top-right",
      },
      {
        id: "ecosystems",
        value: hotspot.ecosystemCount,
        label: "Ecosystems",
        position: "bottom-left",
      },
      {
        id: "experiences",
        value: hotspot.experienceCount,
        label: "Experiences",
        position: "bottom-right",
      },
    ]

    annotations.forEach((annotation) => {
      const element = document.createElement("button")

      element.type = "button"
      element.className = `map-annotation map-annotation--${annotation.position}`

      element.setAttribute(
        "aria-label",
        `${annotation.value ?? "Information unavailable"} ${annotation.label}`,
      )

      element.innerHTML = `
        <span
          class="map-annotation__connector"
          aria-hidden="true"
        ></span>

        <span class="map-annotation__content">
          <span class="map-annotation__value">
            ${annotation.value ?? "—"}
          </span>

          <span class="map-annotation__label">
            ${annotation.label}
          </span>
        </span>
      `

      const marker = new Marker({
        element,
        anchor: "center",
      })
        .setLngLat(hotspot.coordinates)
        .addTo(map)

      markers.current.push(marker)
    })

    return () => {
      markers.current.forEach((marker) => {
        marker.remove()
      })

      markers.current = []
    }
  }, [map, hotspot])

  return null
}

export default MapAnnotations