import type { Hotspot } from "../types/biodiversity"

interface HotspotViewProps {
  hotspot: Hotspot
  onBack: () => void
}

function HotspotView({
  hotspot,
  onBack,
}: HotspotViewProps) {
  return (
    <section
      className="hotspot-view"
      aria-label={`${hotspot.name} biodiversity hotspot`}
    >
      <button
        className="hotspot-back"
        type="button"
        onClick={onBack}
      >
        <span aria-hidden="true">←</span>
        <span>Back to Earth</span>
      </button>

      <div className="hotspot-view__content">
        <p className="hotspot-view__eyebrow">
          BIODIVERSITY HOTSPOT
        </p>

        <h1 className="hotspot-view__title">
          {hotspot.name}
        </h1>

        <p className="hotspot-view__poetic">
          {hotspot.poeticLine}
        </p>

        <p className="hotspot-view__description">
          {hotspot.description}
        </p>
      </div>

      <div
        className="hotspot-annotations"
        aria-label="Hotspot biodiversity information"
      >
        <div className="hotspot-annotation">
          <span className="hotspot-annotation__value">
            {hotspot.plantSpeciesCount ?? "—"}
          </span>

          <span className="hotspot-annotation__label">
            Plant species
          </span>
        </div>

        <div className="hotspot-annotation">
          <span className="hotspot-annotation__value">
            {hotspot.animalSpeciesCount ?? "—"}
          </span>

          <span className="hotspot-annotation__label">
            Animal species
          </span>
        </div>

        <div className="hotspot-annotation">
          <span className="hotspot-annotation__value">
            {hotspot.ecosystemCount ?? "—"}
          </span>

          <span className="hotspot-annotation__label">
            Ecosystems
          </span>
        </div>

        <div className="hotspot-annotation">
          <span className="hotspot-annotation__value">
            {hotspot.experienceCount ?? "—"}
          </span>

          <span className="hotspot-annotation__label">
            Experiences
          </span>
        </div>
      </div>
    </section>
  )
}

export default HotspotView