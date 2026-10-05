import type { Species } from "../types/biodiversity"

interface SpeciesViewProps {
  species: Species
  onBack: () => void
}

function SpeciesView({
  species,
  onBack,
}: SpeciesViewProps) {
  return (
    <section
      className="species-view"
      aria-label={`${species.name} species detail`}
    >
      <button
        className="species-back"
        type="button"
        onClick={onBack}
      >
        <span aria-hidden="true">←</span>
        <span>Back to hotspot</span>
      </button>

      <div className="species-view__image">
        {species.image ? (
          <img
            src={species.image}
            alt={species.name}
          />
        ) : (
          <div className="species-view__image-placeholder">
            <span>Species image</span>
          </div>
        )}
      </div>

      <div className="species-view__content">
        <p className="species-view__eyebrow">
          SPECIES
        </p>

        <h1 className="species-view__title">
          {species.name}
        </h1>

        <p className="species-view__scientific">
          {species.scientificName}
        </p>

        <p className="species-view__poetic">
          {species.poeticLine}
        </p>

        <div className="species-view__details">
          <div className="species-detail">
            <span className="species-detail__label">
              Status
            </span>

            <span className="species-detail__value">
              {species.status}
            </span>
          </div>

          <div className="species-detail">
            <span className="species-detail__label">
              Habitat
            </span>

            <span className="species-detail__value">
              {species.habitat}
            </span>
          </div>
        </div>

        <p className="species-view__description">
          {species.description}
        </p>

        {species.facts.length > 0 && (
          <div className="species-facts">
            {species.facts.map((fact) => (
              <p
                className="species-fact"
                key={fact}
              >
                {fact}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SpeciesView