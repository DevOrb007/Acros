import { useState } from "react"
import type { Hotspot, Species } from "../../types/biodiversity"
import EditorialImage from "../UI/EditorialImage"

interface SpeciesViewProps {
  hotspot: Hotspot
  speciesList: Species[]
  selectedSpeciesId?: string | null
  onBackToHotspot: () => void
  onSelectSpecies?: (speciesId: string) => void
}

export default function SpeciesView({
  hotspot,
  speciesList,
  selectedSpeciesId,
  onBackToHotspot,
  onSelectSpecies,
}: SpeciesViewProps) {
  const [internalSpeciesId, setInternalSpeciesId] = useState<string>(
    selectedSpeciesId || speciesList[0]?.id || ""
  )

  const activeId = selectedSpeciesId || internalSpeciesId
  const activeSpecies =
    speciesList.find((s) => s.id === activeId) || speciesList[0]

  const otherSpecies = speciesList.filter((s) => s.id !== activeSpecies?.id)

  function handleChooseSpecies(id: string) {
    setInternalSpeciesId(id)
    onSelectSpecies?.(id)
  }

  if (!activeSpecies) {
    return (
      <section className="species-page">
        <header className="atlas-view-header">
          <button
            className="acros-view-logo"
            type="button"
            onClick={onBackToHotspot}
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
        <p className="editorial-empty-text">
          No species records currently available for this hotspot.
        </p>
      </section>
    )
  }

  const activeIndex = speciesList.findIndex((s) => s.id === activeSpecies.id)

  return (
    <section
      className="species-page"
      aria-label={`${activeSpecies.name} species field guide`}
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
      <div className="species-page-intro">
        <span className="editorial-kicker">
          BIODIVERSITY ATLAS &middot; {hotspot.name}
        </span>
        <h1 className="species-page-title">Endemic Flora &amp; Fauna</h1>
        <p className="species-page-subtitle">
          Documented keystones, vulnerable endemics, and botanical treasures of {hotspot.name}.
        </p>
      </div>

      <div className="species-composition">
        {/* Left Column: Featured Species Profile (PDF Page 5 Left) */}
        <article className="species-profile">
          <header className="species-identity">
            <div className="species-identity-eyebrow">
              <span className="species-identity-tag">
                RECORD 0{activeIndex + 1}
              </span>
              <span className="species-identity-bullet">&middot;</span>
              <span className="species-identity-taxa">
                {activeSpecies.scientificName.split(" ")[0]} genus
              </span>
            </div>

            <h2 className="species-common-name">{activeSpecies.name}</h2>
            <p className="species-scientific-name">
              {activeSpecies.scientificName}
            </p>
          </header>

          {/* Compact, restrained image frame (not giant hero block) */}
          <EditorialImage
            src={activeSpecies.image}
            alt={activeSpecies.name}
            className="species-editorial-image"
            aspectRatio="16 / 10"
          />

          {activeSpecies.poeticLine && (
            <p className="species-poetic-line">
              &ldquo;{activeSpecies.poeticLine}&rdquo;
            </p>
          )}

          {/* Unboxed editorial metadata columns */}
          <div className="species-meta-columns">
            {activeSpecies.metricLabel && (
              <div className="species-meta-col">
                <span className="species-meta-val">
                  {activeSpecies.metricValue}
                </span>
                <span className="species-meta-lbl">
                  {activeSpecies.metricLabel}
                </span>
              </div>
            )}

            <div className="species-meta-col">
              <span className="species-meta-val">{activeSpecies.habitat}</span>
              <span className="species-meta-lbl">Native Habitat</span>
            </div>

            <div className="species-meta-col">
              <span className="species-meta-val species-meta-val-status">
                {activeSpecies.status}
              </span>
              <span className="species-meta-lbl">IUCN Status</span>
            </div>
          </div>

          <p className="species-description-text">
            {activeSpecies.description}
          </p>

          {activeSpecies.facts && activeSpecies.facts.length > 0 && (
            <div className="species-facts-block">
              <h3 className="species-facts-title">Field Notes &amp; Observations</h3>
              <ul className="species-facts-items">
                {activeSpecies.facts.map((fact, i) => (
                  <li key={i} className="species-fact-entry">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <footer className="editorial-source-citation">
            <span>Authoritative Source: </span>
            <a
              href={activeSpecies.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-source-link"
            >
              {activeSpecies.source}
            </a>
          </footer>
        </article>

        {/* Right Column: Companion Species Directory (PDF Page 5 Right) */}
        {otherSpecies.length > 0 && (
          <aside
            className="species-directory"
            aria-label="Other species in this hotspot"
          >
            <div className="species-directory-header">
              <h3 className="species-directory-heading">Other Species</h3>
              <p className="species-directory-subheading">
                Explore more endemic taxa in {hotspot.name}
              </p>
            </div>

            <ol className="species-directory-list">
              {otherSpecies.map((sp) => {
                const spIndex = speciesList.findIndex((s) => s.id === sp.id)
                const numStr = `0${spIndex + 1}`
                return (
                  <li key={sp.id} className="species-directory-item">
                    <button
                      type="button"
                      className="species-directory-card"
                      onClick={() => handleChooseSpecies(sp.id)}
                    >
                      <span className="species-directory-card-num">
                        {numStr}
                      </span>
                      <div className="species-directory-card-info">
                        <span className="species-directory-card-name">
                          {sp.name}
                        </span>
                        <span className="species-directory-card-sci">
                          {sp.scientificName}
                        </span>
                        {sp.poeticLine && (
                          <span className="species-directory-card-poetic">
                            {sp.poeticLine}
                          </span>
                        )}
                      </div>
                    </button>
                  </li>
                )
              })}
            </ol>
          </aside>
        )}
      </div>
    </section>
  )
}
