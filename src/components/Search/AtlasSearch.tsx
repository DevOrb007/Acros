import { useState, useRef, useEffect, useId } from "react"
import { hotspots } from "../../data/hotspots"
import type { Hotspot } from "../../types/biodiversity"

interface AtlasSearchProps {
  placeholder?: string
  onSelectHotspot: (hotspot: Hotspot) => void
  className?: string
}

export default function AtlasSearch({
  placeholder = "Experience the beauty of nature...",
  onSelectHotspot,
  className = "",
}: AtlasSearchProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputId = useId()

  const trimmed = query.trim().toLowerCase()
  const filteredHotspots = trimmed
    ? hotspots.filter(
        (h) =>
          h.name.toLowerCase().includes(trimmed) ||
          h.description.toLowerCase().includes(trimmed)
      )
    : []

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function handleSelect(hotspot: Hotspot) {
    onSelectHotspot(hotspot)
    setQuery("")
    setIsOpen(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || filteredHotspots.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredHotspots.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev <= 0 ? filteredHotspots.length - 1 : prev - 1
      )
    } else if (e.key === "Enter") {
      e.preventDefault()
      const selected = filteredHotspots[selectedIndex] || filteredHotspots[0]
      if (selected) {
        handleSelect(selected)
      }
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`atlas-search ${className}`}
      role="search"
    >
      <label htmlFor={inputId} className="visually-hidden">
        Search biodiversity hotspots
      </label>
      <div className="atlas-search-input-wrapper">
        <input
          id={inputId}
          type="text"
          className="atlas-search-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setSelectedIndex(0)
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        <span className="atlas-search-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>

      {isOpen && filteredHotspots.length > 0 && (
        <ul className="atlas-search-results" role="listbox">
          {filteredHotspots.map((hotspot, idx) => (
            <li
              key={hotspot.id}
              role="option"
              aria-selected={idx === selectedIndex}
              className={`atlas-search-item ${
                idx === selectedIndex ? "atlas-search-item-active" : ""
              }`}
              onClick={() => handleSelect(hotspot)}
              onMouseEnter={() => setSelectedIndex(idx)}
            >
              <div className="atlas-search-item-title">{hotspot.name}</div>
              <div className="atlas-search-item-meta">
                {hotspot.plantSpeciesCount
                  ? `${hotspot.plantSpeciesCount.toLocaleString()} plant species`
                  : ""}{" "}
                · Biodiversity Hotspot
              </div>
            </li>
          ))}
        </ul>
      )}

      {isOpen && trimmed && filteredHotspots.length === 0 && (
        <div className="atlas-search-no-results">
          No biodiversity hotspot matches &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  )
}
