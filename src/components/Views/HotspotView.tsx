import type { Hotspot } from "../../types/biodiversity"

interface HotspotViewProps {
  hotspot: Hotspot
  onBackToEarth: () => void
}

export default function HotspotView({
  hotspot,
  onBackToEarth,
}: HotspotViewProps) {
  return (
    <section
      className="hotspot-intro-panel"
      aria-label={`${hotspot.name} biodiversity hotspot`}
    >
      <button
        className="atlas-back-link"
        type="button"
        onClick={onBackToEarth}
        aria-label="Return to global Earth view"
      >
        <span aria-hidden="true">←</span>
        <span>Back to Earth</span>
      </button>

      <div className="hotspot-intro-content">
        <h1 className="hotspot-intro-title">{hotspot.name}</h1>

        {hotspot.poeticLine && (
          <p className="hotspot-intro-poetic">{hotspot.poeticLine}</p>
        )}

        <p className="hotspot-intro-desc">{hotspot.description}</p>

        {hotspot.source && (
          <p className="hotspot-intro-source">
            <span>Source: </span>
            <a
              href={hotspot.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hotspot-intro-source-link"
            >
              {hotspot.source}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
