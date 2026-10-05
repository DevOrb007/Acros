export type Coordinates = [
  longitude: number,
  latitude: number,
]

export interface Hotspot {
  id: string
  name: string
  coordinates: Coordinates

  description: string
  poeticLine: string

  plantSpeciesCount: number | null
  animalSpeciesCount: number | null
  ecosystemCount: number | null
  experienceCount: number | null
}

export interface Species {
  id: string
  hotspotId: string

  name: string
  scientificName: string

  image: string
  poeticLine: string

  status: string
  habitat: string
  description: string

  facts: string[]
  ecosystemIds?: string[]
}

export interface Ecosystem {
  id: string
  hotspotId: string

  name: string
  image: string
  poeticLine: string

  description: string
  area: string
  species: string

  bestTime?: string
  notablePlaces: string[]
}

export interface Experience {
  id: string
  hotspotId: string

  name: string
  image: string
  poeticLine: string

  place: string
  region: string
  description: string

  bestTime?: string
  duration?: string
  difficulty?: string
  restrictions?: string

  source: string
  coordinates?: Coordinates
}