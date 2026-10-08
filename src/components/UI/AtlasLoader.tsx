import { useEffect, useState } from "react"

interface AtlasLoaderProps {
  isReady: boolean
}

export default function AtlasLoader({ isReady }: AtlasLoaderProps) {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (isReady) {
      // Smooth fade-out duration before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 850)
      return () => clearTimeout(timer)
    }
  }, [isReady])

  if (!shouldRender) return null

  return (
    <aside
      className={`atlas-loader-overlay ${
        isReady ? "atlas-loader-overlay-fade" : ""
      }`}
      aria-label="Loading interactive biodiversity globe"
      aria-live="polite"
    >
      <div className="atlas-loader-card">
        {/* Luminous atmospheric aura ring */}
        <div className="atlas-loader-aura" aria-hidden="true">
          <div className="atlas-loader-ring atlas-loader-ring-outer" />
          <div className="atlas-loader-ring atlas-loader-ring-inner" />
          <div className="atlas-loader-globe-dot" />
        </div>

        <h1 className="atlas-loader-title">ACROS</h1>
        <p className="atlas-loader-subtitle">BIODIVERSITY ATLAS</p>
        <p className="atlas-loader-status">Forming Earth projection&hellip;</p>
      </div>
    </aside>
  )
}
