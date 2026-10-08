import { useState } from "react"
import type { Hotspot, Experience } from "../../types/biodiversity"
import EditorialImage from "../UI/EditorialImage"

interface ExperiencesViewProps {
  hotspot: Hotspot
  experiencesList: Experience[]
  selectedExperienceId?: string | null
  onBackToHotspot: () => void
  onSelectExperience?: (experienceId: string) => void
}

export default function ExperiencesView({
  hotspot,
  experiencesList,
  selectedExperienceId,
  onBackToHotspot,
  onSelectExperience,
}: ExperiencesViewProps) {
  const [internalId, setInternalId] = useState<string>(
    selectedExperienceId || experiencesList[0]?.id || ""
  )

  const activeId = selectedExperienceId || internalId
  const activeExperience =
    experiencesList.find((e) => e.id === activeId) || experiencesList[0]

  function handleChoose(id: string) {
    setInternalId(id)
    onSelectExperience?.(id)
  }

  if (!activeExperience) {
    return (
      <section className="experiences-page">
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
          No experience records currently available for this hotspot.
        </p>
      </section>
    )
  }

  const activeIndex = experiencesList.findIndex((e) => e.id === activeExperience.id)

  return (
    <section
      className="experiences-page"
      aria-label={`${hotspot.name} curated field experiences`}
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
      <div className="experiences-page-intro">
        <span className="editorial-kicker">
          BIODIVERSITY ATLAS &middot; {hotspot.name}
        </span>
        <h1 className="experiences-page-title">Curated Experiences</h1>
        <p className="experiences-page-subtitle">
          Regulated ecotourism and conservation immersion within {hotspot.name}.
        </p>
      </div>

      <div className="experiences-composition">
        {/* Left Column: Numbered Activities Index (PDF Page 6 Bottom) */}
        <aside
          className="experiences-catalog"
          aria-label="Field experiences catalog"
        >
          <div className="experiences-catalog-header">
            <h3 className="experiences-catalog-title">Activities Index</h3>
            <p className="experiences-catalog-subtitle">
              Permitted routes &amp; expeditions
            </p>
          </div>

          <ol className="experiences-catalog-list">
            {experiencesList.map((exp, idx) => {
              const isSelected = exp.id === activeExperience.id
              const numStr = `0${idx + 1}`
              return (
                <li key={exp.id} className="experiences-catalog-item">
                  <button
                    type="button"
                    className={`experience-nav-btn ${
                      isSelected ? "experience-nav-btn-active" : ""
                    }`}
                    onClick={() => handleChoose(exp.id)}
                  >
                    <span className="experience-nav-btn-num">{numStr}</span>
                    <div className="experience-nav-btn-text">
                      <span className="experience-nav-btn-title">{exp.name}</span>
                      <span className="experience-nav-btn-place">
                        {exp.place || exp.region}
                      </span>
                    </div>
                  </button>
                </li>
              )
            })}
          </ol>
        </aside>

        {/* Right Column: Featured Activity Narrative */}
        <article className="experience-feature">
          <header className="experience-feature-header">
            <div className="experience-feature-eyebrow">
              <span className="experience-feature-tag">
                ACTIVITY 0{activeIndex + 1}
              </span>
              <span className="experience-feature-bullet">&middot;</span>
              <span className="experience-feature-geo">
                {activeExperience.country}
              </span>
            </div>

            <h2 className="experience-feature-title">
              {activeExperience.name}
            </h2>

            {activeExperience.poeticLine && (
              <p className="experience-feature-poetic">
                &ldquo;{activeExperience.poeticLine}&rdquo;
              </p>
            )}

            <p className="experience-feature-desc">
              {activeExperience.description}
            </p>
          </header>

          {/* Asymmetric Split Layout: Logistics on left, Compact photo & unboxed metrics on right */}
          <div className="experience-feature-body">
            <div className="experience-feature-logistics">
              <div className="experience-logistics-group">
                <span className="experience-logistics-lbl">Location</span>
                <span className="experience-logistics-val">
                  {activeExperience.region}
                  {activeExperience.place ? ` (${activeExperience.place})` : ""}, {activeExperience.country}
                </span>
              </div>

              <div className="experience-logistics-group">
                <span className="experience-logistics-lbl">
                  Recommended Season
                </span>
                <span className="experience-logistics-val">
                  {activeExperience.bestTime}
                </span>
              </div>

              {activeExperience.restrictions &&
                activeExperience.restrictions.length > 0 && (
                  <div className="experience-restrictions-section">
                    <h3 className="experience-restrictions-heading">
                      Conservation Guidelines &amp; Regulations
                    </h3>
                    <ul className="experience-restrictions-list">
                      {activeExperience.restrictions.map((res, i) => (
                        <li key={i} className="experience-restriction-point">
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            <div className="experience-feature-visual-column">
              {/* Compact, restrained image frame (not giant) */}
              <EditorialImage
                src={activeExperience.image}
                alt={activeExperience.name}
                className="experience-editorial-photo"
                aspectRatio="16 / 10"
              />

              {/* Unboxed metrics placed directly beneath the image */}
              <div className="experience-unboxed-metrics">
                <div className="experience-unboxed-metric">
                  <span className="experience-unboxed-metric-val">
                    {activeExperience.difficulty}
                  </span>
                  <span className="experience-unboxed-metric-lbl">
                    Difficulty Level
                  </span>
                </div>

                <div className="experience-unboxed-metric">
                  <span className="experience-unboxed-metric-val">
                    {activeExperience.duration}
                  </span>
                  <span className="experience-unboxed-metric-lbl">
                    Average Duration
                  </span>
                </div>
              </div>
            </div>
          </div>

          <footer className="editorial-source-citation">
            <span>Authoritative Source: </span>
            <a
              href={activeExperience.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-source-link"
            >
              {activeExperience.source}
            </a>
          </footer>
        </article>
      </div>
    </section>
  )
}
