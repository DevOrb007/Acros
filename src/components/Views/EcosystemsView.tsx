import type { Hotspot, Ecosystem } from "../../types/biodiversity"
import EditorialImage from "../UI/EditorialImage"

interface EcosystemsViewProps {
  hotspot: Hotspot
  ecosystemsList: Ecosystem[]
  onBackToHotspot: () => void
}

export default function EcosystemsView({
  hotspot,
  ecosystemsList,
  onBackToHotspot,
}: EcosystemsViewProps) {
  return (
    <section
      className="ecosystems-page"
      aria-label={`${hotspot.name} major ecosystems`}
    >
      {/* Top Editorial Header */}
      <header className="atlas-view-header">
        <button
          className="acros-view-logo"
          type="button"
          onClick={onBackToHotspot}
          aria-label="Return to hotspot view"
        >
          ACROS
        </button>

        <button
          className="atlas-back-link"
          type="button"
          onClick={onBackToHotspot}
        >
          <span>Back to {hotspot.name}</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </header>

      {/* Editorial Page Lead */}
      <div className="ecosystems-page-intro">
        <span className="editorial-kicker">
          BIODIVERSITY ATLAS &middot; {hotspot.name}
        </span>
        <h1 className="ecosystems-page-title">Major Ecosystems</h1>
        <p className="ecosystems-page-subtitle">
          Three primary ecological realms defining the geography and endemic life of {hotspot.name}.
        </p>
      </div>

      {/* 3-Column Editorial Spread matching PDF Page 6 Top */}
      <div className="ecosystems-flow">
        {ecosystemsList.map((eco, index) => {
          const numStr = `0${index + 1}`
          return (
            <article key={eco.id} className="ecosystem-column">
              <header className="ecosystem-column-header">
                <span className="ecosystem-column-index">
                  ECOSYSTEM {numStr}
                </span>
                <h2 className="ecosystem-title">{eco.name}</h2>
                {eco.poeticLine && (
                  <p className="ecosystem-poetic">{eco.poeticLine}</p>
                )}
              </header>

              {/* Compact, restrained landscape image frame (not giant) */}
              <EditorialImage
                src={eco.image}
                alt={eco.name}
                className="ecosystem-editorial-image"
                aspectRatio="16 / 10"
              />

              <div className="ecosystem-metrics-block">
                <div className="ecosystem-metric-item">
                  <span className="ecosystem-metric-val">{eco.area}</span>
                  <span className="ecosystem-metric-lbl">Estimated land area</span>
                </div>

                {eco.bestTime && (
                  <div className="ecosystem-season-item">
                    <span className="ecosystem-season-val">
                      {eco.bestTime}
                    </span>
                    <span className="ecosystem-season-lbl">
                      Recommended visitation season
                    </span>
                  </div>
                )}
              </div>

              <p className="ecosystem-description">{eco.description}</p>

              {eco.facts && eco.facts.length > 0 && (
                <div className="ecosystem-facts-block">
                  <h3 className="ecosystem-facts-title">Key Characteristics</h3>
                  <ul className="ecosystem-facts-items">
                    {eco.facts.map((fact, idx) => (
                      <li key={idx} className="ecosystem-fact-entry">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <footer className="editorial-source-citation">
                <span>Source: </span>
                <a
                  href={eco.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-source-link"
                >
                  {eco.source}
                </a>
              </footer>
            </article>
          )
        })}
      </div>
    </section>
  )
}
