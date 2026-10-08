import { useCallback, useState, useMemo } from "react"
import ACROSMap from "./components/Map/ACROSMap"
import AtlasSearch from "./components/Search/AtlasSearch"
import AtlasLoader from "./components/UI/AtlasLoader"
import HotspotView from "./components/Views/HotspotView"
import SpeciesView from "./components/Views/SpeciesView"
import EcosystemsView from "./components/Views/EcosystemsView"
import ExperiencesView from "./components/Views/ExperiencesView"

import type { Hotspot } from "./types/biodiversity"
import type { AtlasView } from "./app/AppState"
import { species } from "./data/species"
import { ecosystems } from "./data/ecosystems"
import { experiences } from "./data/experiences"

export default function App() {
  const [currentView, setCurrentView] = useState<AtlasView>("earth")
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null)
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string | null>(null)
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null)
  const [isMapReady, setIsMapReady] = useState(false)

  // Handle hotspot selection from globe marker or search
  const handleHotspotSelect = useCallback((hotspot: Hotspot) => {
    setSelectedHotspot(hotspot)
    setCurrentView("hotspot")
    setSelectedSpeciesId(null)
    setSelectedExperienceId(null)
  }, [])

  // Return to global Earth view
  const handleBackToEarth = useCallback(() => {
    setSelectedHotspot(null)
    setCurrentView("earth")
    setSelectedSpeciesId(null)
    setSelectedExperienceId(null)
  }, [])

  // Return to current hotspot view
  const handleBackToHotspot = useCallback(() => {
    setCurrentView("hotspot")
  }, [])

  // Navigate deeper into species, ecosystems, or experiences via map annotations
  const handleNavigate = useCallback((view: AtlasView) => {
    setCurrentView(view)
  }, [])

  // Filtered relations based on selected hotspot ID
  const hotspotSpecies = useMemo(() => {
    if (!selectedHotspot) return []
    return species.filter((s) => s.hotspotId === selectedHotspot.id)
  }, [selectedHotspot])

  const hotspotEcosystems = useMemo(() => {
    if (!selectedHotspot) return []
    return ecosystems.filter((e) => e.hotspotId === selectedHotspot.id)
  }, [selectedHotspot])

  const hotspotExperiences = useMemo(() => {
    if (!selectedHotspot) return []
    return experiences.filter((e) => e.hotspotId === selectedHotspot.id)
  }, [selectedHotspot])

  return (
    <main className={`acros-app acros-app-view-${currentView}`}>
      {/* Editorial loader holding the screen until MapLibre globe is fully formed */}
      <AtlasLoader isReady={isMapReady} />

      {/* Persistent MapLibre GL JS Globe Map */}
      <div className="acros-app-map">
        <ACROSMap
          selectedHotspot={selectedHotspot}
          currentView={currentView}
          onHotspotSelect={handleHotspotSelect}
          onNavigate={handleNavigate}
          onMapReady={() => setIsMapReady(true)}
        />
      </div>

      {/* Top Header - In Earth or Hotspot view */}
      {(currentView === "earth" || currentView === "hotspot") && (
        <header className="acros-header">
          <button
            className="acros-logo"
            type="button"
            aria-label="Return to ACROS Earth view"
            onClick={handleBackToEarth}
          >
            ACROS
          </button>

          {selectedHotspot && currentView === "hotspot" && (
            <div className="acros-header-search-group">
              <AtlasSearch
                placeholder="Explore other hotspots..."
                onSelectHotspot={handleHotspotSelect}
                className="atlas-search-header"
              />
              <button
                type="button"
                className="acros-header-compass-btn"
                onClick={handleBackToEarth}
                title="Return to Earth view"
                aria-label="Return to Earth view"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon
                    points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                    fill="currentColor"
                    fillOpacity="0.28"
                  />
                </svg>
              </button>
            </div>
          )}
        </header>
      )}

      {/* Level 1: Earth View (Center-aligned heading and search at bottom) */}
      {!selectedHotspot && currentView === "earth" && (
        <section className="acros-earth-hero" aria-label="ACROS introduction">
          <h1 className="acros-earth-hero-title">
            Explore the places where life thrives.
          </h1>
          <div className="acros-earth-hero-search">
            <AtlasSearch
              placeholder="Explore the beauty and experience the nature offers..."
              onSelectHotspot={handleHotspotSelect}
              className="atlas-search-earth"
            />
          </div>
        </section>
      )}

      {/* Level 2: Hotspot View (Overlaid on regional map with spatial annotations) */}
      {selectedHotspot && currentView === "hotspot" && (
        <HotspotView
          hotspot={selectedHotspot}
          onBackToEarth={handleBackToEarth}
        />
      )}

      {/* Level 3: Species Field Guide Presentation */}
      {selectedHotspot && currentView === "species" && (
        <SpeciesView
          hotspot={selectedHotspot}
          speciesList={hotspotSpecies}
          selectedSpeciesId={selectedSpeciesId}
          onBackToHotspot={handleBackToHotspot}
          onSelectSpecies={setSelectedSpeciesId}
        />
      )}

      {/* Level 3: Ecosystems Editorial Flow */}
      {selectedHotspot && currentView === "ecosystems" && (
        <EcosystemsView
          hotspot={selectedHotspot}
          ecosystemsList={hotspotEcosystems}
          onBackToHotspot={handleBackToHotspot}
        />
      )}

      {/* Level 3: Experiences Specific Place Narrative */}
      {selectedHotspot && currentView === "experiences" && (
        <ExperiencesView
          hotspot={selectedHotspot}
          experiencesList={hotspotExperiences}
          selectedExperienceId={selectedExperienceId}
          onBackToHotspot={handleBackToHotspot}
          onSelectExperience={setSelectedExperienceId}
        />
      )}
    </main>
  )
}