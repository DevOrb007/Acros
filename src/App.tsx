import { useCallback, useState } from "react"

import ACROSMap from "./components/Map/ACROSMap"
import type { Hotspot } from "./types/biodiversity"

function App() {
  const [selectedHotspot, setSelectedHotspot] =
    useState<Hotspot | null>(null)

  const handleHotspotSelect = useCallback(
    (hotspot: Hotspot) => {
      setSelectedHotspot(hotspot)
    },
    [],
  )

  const handleBackToEarth = useCallback(() => {
    setSelectedHotspot(null)
  }, [])

  return (
    <main className="acros-app">
      <div className="acros-app__map">
        <ACROSMap onHotspotSelect={handleHotspotSelect} />
      </div>

      <header className="acros-header">
        <button
          className="acros-logo"
          type="button"
          aria-label="Return to ACROS Earth view"
          onClick={handleBackToEarth}
        >
          ACROS
        </button>

        <button
          className="acros-search"
          type="button"
          aria-label="Search hotspots"
        >
          <span
            className="acros-search__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="acros-search__label">
            Search
          </span>
        </button>
      </header>

      {!selectedHotspot && (
        <section
          className="acros-intro"
          aria-label="ACROS introduction"
        >
          <p className="acros-intro__eyebrow">
            BIODIVERSITY ATLAS
          </p>

          <h1 className="acros-intro__title">
            Explore the places
            <br />
            where life thrives.
          </h1>

          <p className="acros-intro__description">
            Discover biodiversity hotspots, the species they
            shelter, the landscapes they shape, and the
            experiences within them.
          </p>
        </section>
      )}

      {selectedHotspot && (
        <section
          className="hotspot-preview"
          aria-label={`${selectedHotspot.name} preview`}
        >
          <button
            className="hotspot-back"
            type="button"
            onClick={handleBackToEarth}
          >
            <span aria-hidden="true">←</span>
            Back to Earth
          </button>

          <p className="hotspot-preview__eyebrow">
            BIODIVERSITY HOTSPOT
          </p>

          <h1 className="hotspot-preview__title">
            {selectedHotspot.name}
          </h1>
        </section>
      )}
    </main>
  )
}

export default App