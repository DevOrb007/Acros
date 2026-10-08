import { useEffect, useRef } from "react"
import { Marker, type Map } from "maplibre-gl"
import type { AtlasView } from "../../app/AppState"
import type { Hotspot } from "../../types/biodiversity"

interface MapAnnotationsProps {
  map: Map | null
  hotspot: Hotspot | null
  onNavigate: (view: AtlasView) => void
}

export default function MapAnnotations({
  map,
  hotspot,
  onNavigate,
}: MapAnnotationsProps) {
  const markersRef = useRef<Marker[]>([])

  useEffect(() => {
    markersRef.current.forEach((m) => m.remove())
    markersRef.current = []

    if (!map || !hotspot) return

    const [centerLng, centerLat] = hotspot.coordinates

    // 4 spatial annotations placed around the hotspot geography as pure floating text
    const annotations = [
      {
        id: "animals",
        view: "species" as AtlasView,
        value: hotspot.animalSpeciesCount
          ? `${hotspot.animalSpeciesCount.toLocaleString()}+`
          : "2,000+",
        label: "Animal species",
        offset: [-2.4, 1.3] as [number, number],
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>`,
      },
      {
        id: "experiences",
        view: "experiences" as AtlasView,
        value: hotspot.experienceCount ? `${hotspot.experienceCount}+` : "5+",
        label: "Fun Activities",
        offset: [2.5, 1.4] as [number, number],
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>`,
      },
      {
        id: "ecosystems",
        view: "ecosystems" as AtlasView,
        value: hotspot.ecosystemCount ? `${hotspot.ecosystemCount}` : "3",
        label: "Ecosystems",
        offset: [-1.8, -1.0] as [number, number],
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 2 22 22 22"/>
          <line x1="12" y1="18" x2="12" y2="22"/>
        </svg>`,
      },
      {
        id: "plants",
        view: "species" as AtlasView,
        value: hotspot.plantSpeciesCount
          ? `${hotspot.plantSpeciesCount.toLocaleString()}+`
          : "6,000+",
        label: "Plant species",
        offset: [2.2, -1.4] as [number, number],
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22v-8"/>
          <path d="M12 14c-4 0-7-3-7-7 0 0 3 0 7 2"/>
          <path d="M12 10c4 0 7-3 7-7 0 0-3 0-7 2"/>
        </svg>`,
      },
    ]

    annotations.forEach((item) => {
      const el = document.createElement("button")
      el.type = "button"
      el.className = "floating-annotation"
      el.setAttribute(
        "aria-label",
        `${item.value} ${item.label} in ${hotspot.name} - Explore`
      )

      // Pure floating text with icon, count, and label (NO dot, NO line)
      el.innerHTML = `
        <span class="floating-annotation-icon" aria-hidden="true">${item.icon}</span>
        <span class="floating-annotation-value">${item.value}</span>
        <span class="floating-annotation-label">${item.label}</span>
      `

      el.addEventListener("click", (e) => {
        e.stopPropagation()
        onNavigate(item.view)
      })

      const targetLng = centerLng + item.offset[0]
      const targetLat = centerLat + item.offset[1]

      const marker = new Marker({
        element: el,
        anchor: "center",
      })
        .setLngLat([targetLng, targetLat])
        .addTo(map)

      markersRef.current.push(marker)
    })

    return () => {
      markersRef.current.forEach((m) => m.remove())
      markersRef.current = []
    }
  }, [map, hotspot, onNavigate])

  return null
}