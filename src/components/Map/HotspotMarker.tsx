import type { Hotspot } from "../../types/biodiversity"

interface HotspotMarkerProps {
  hotspot: Hotspot
  onClick: (hotspot: Hotspot) => void
}

function HotspotMarker({
  hotspot,
  onClick,
}: HotspotMarkerProps) {
  return (
    <button
      className="hotspot-marker"
      type="button"
      aria-label={`Explore ${hotspot.name}`}
      onClick={() => onClick(hotspot)}
    >
      <span
        className="hotspot-marker-dot"
        aria-hidden="true"
      />

      <span className="hotspot-marker-label">
        {hotspot.name}
      </span>
    </button>
  )
}

export default HotspotMarker