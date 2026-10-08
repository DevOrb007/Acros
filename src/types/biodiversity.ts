export type Coordinates = [longitude: number, latitude: number]

export interface Hotspot {
  id: string
  name: string
  coordinates: Coordinates
  zoom: number

  description: string
  poeticLine: string

  plantSpeciesCount: number | null
  animalSpeciesCount: number | null
  ecosystemCount: number | null
  experienceCount: number | null

  source: string
  sourceUrl: string
}

export interface Species {
  id: string
  hotspotId: string

  name: string
  scientificName: string

  image: string
  poeticLine: string

  status: string
  metricLabel?: string
  metricValue?: string
  habitat: string
  description: string

  facts: string[]
  source: string
  sourceUrl: string
}

export interface Ecosystem {
  id: string
  hotspotId: string

  name: string
  image: string
  poeticLine: string

  description: string
  area: string
  bestTime: string
  facts: string[]

  source: string
  sourceUrl: string
  coordinates?: Coordinates
}

export interface Experience {
  id: string
  hotspotId: string

  name: string // Activity name
  place: string
  region: string
  country: string

  image: string
  poeticLine: string
  description: string

  bestTime: string
  duration: string
  difficulty: string
  restrictions?: string[]

  coordinates?: Coordinates
  source: string
  sourceUrl: string
}