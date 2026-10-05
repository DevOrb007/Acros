export type AtlasView =
  | "earth"
  | "hotspot"
  | "species"
  | "ecosystems"
  | "experiences"

export interface AtlasState {
  view: AtlasView
  hotspotId: string | null
  speciesId: string | null
  ecosystemId: string | null
  experienceId: string | null
}

export const initialAtlasState: AtlasState = {
  view: "earth",
  hotspotId: null,
  speciesId: null,
  ecosystemId: null,
  experienceId: null,
}