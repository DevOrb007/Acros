import type { Ecosystem } from "../types/biodiversity"

export const ecosystems: Ecosystem[] = [
  // =========================================================================
  // 1. ATLANTIC FOREST
  // =========================================================================
  {
    id: "serra-do-mar-rainforests",
    hotspotId: "atlantic-forest",
    name: "Serra do Mar Coastal Rainforest",
    image: "",
    poeticLine: "Steep granite escarpments rising from the Atlantic into perpetual oceanic cloud banks.",
    description:
      "A coastal mountain chain hugging the southeastern Brazilian coastline, where steep topography creates dramatic rainfall zones and preserves deep rainforest tracts.",
    area: "~ 45,000 km²",
    bestTime: "April – October (Drier winter months)",
    facts: [
      "Experiences up to 4,500 millimeters of rainfall annually, making it one of the wettest non-equatorial forests on Earth.",
      "Hosts more than 450 distinct tree species in a single surveyed hectare in Bahia and São Paulo reserves.",
      "Acts as the primary water catchment basin for major metropolitan centers including São Paulo and Rio de Janeiro.",
    ],
    source: "UNESCO World Heritage Centre (Atlantic Forest South-East Reserves)",
    sourceUrl: "https://whc.unesco.org/en/list/893",
  },
  {
    id: "araucaria-moist-forests",
    hotspotId: "atlantic-forest",
    name: "Araucaria Highland Moist Forest",
    image: "",
    poeticLine: "Candelabra-shaped ancient pines standing tall above the highland plateaus.",
    description:
      "Highland subtropical forests dominated by the iconic Brazilian pine (Araucaria angustifolia), characterized by cool winters and abundant ground frost.",
    area: "~ 216,000 km² historic extent (~12% remaining)",
    bestTime: "March – August (Crisp highland season)",
    facts: [
      "The dominant tree, Araucaria angustifolia, is a living fossil whose lineage dates back over 200 million years to the Triassic.",
      "Produces large edible seeds called 'pinhão' that sustain dozens of winter wildlife species.",
      "Severe timber exploitation in the 20th century reduced virgin stands by over 88%.",
    ],
    source: "WWF Terrestrial Ecoregions & CEPF",
    sourceUrl: "https://www.worldwildlife.org/ecoregions/nt0101",
  },
  {
    id: "restinga-coastal-scrub",
    hotspotId: "atlantic-forest",
    name: "Restinga Coastal Dunes & Marine Scrub",
    image: "",
    poeticLine: "Salt-sprayed sandy dunes and freshwater lagoons fringing the Atlantic surf.",
    description:
      "A mosaic of sandy coastal plains, beach scrub, and freshwater wetlands formed by Quaternary marine deposits along the Atlantic shoreline.",
    area: "~ 9,800 km²",
    bestTime: "May – September (Moderate humidity)",
    facts: [
      "Plants are heavily adapted to salt spray, shifting sand, intense ultraviolet exposure, and drought.",
      "Crucial staging ground for migratory shorebirds flying between Arctic breeding grounds and Patagonia.",
      "Home to the endemic restinga antwren and giant terrestrial bromeliads that form living reservoirs for treefrogs.",
    ],
    source: "Conservation International & ICMBio Brazil",
    sourceUrl: "https://www.icmbio.gov.br",
  },

  // =========================================================================
  // 2. CAPE FLORISTIC REGION
  // =========================================================================
  {
    id: "mountain-fynbos",
    hotspotId: "cape-floristic-region",
    name: "Mountain Fynbos",
    image: "",
    poeticLine: "Windswept sandstone ridges ablaze with proteas, ericas, and restios.",
    description:
      "The dominant vegetation type of the Cape Fold Belt, characterized by sclerophyllous, fire-adapted shrublands growing in nutrient-poor quartzitic sandstone soils.",
    area: "~ 35,000 km²",
    bestTime: "September – November (Peak spring wildflower bloom)",
    facts: [
      "Contains over 7,000 plant species, of which more than 80% are endemic to these specific mountain ranges.",
      "Requires periodic ecological fires every 10 to 30 years to trigger seed release and clear senescent vegetation.",
      "Dominated by three key botanical families: Proteaceae, Ericaceae (heaths), and Restionaceae (reed-like restios).",
    ],
    source: "UNESCO World Heritage Centre & CapeNature",
    sourceUrl: "https://whc.unesco.org/en/list/1007",
  },
  {
    id: "lowland-renosterveld",
    hotspotId: "cape-floristic-region",
    name: "Lowland Renosterveld",
    image: "",
    poeticLine: "Fine-leaved gray shrubs and subterranean bulbs thriving on fertile clay flats.",
    description:
      "A threatened ecosystem growing on shale-derived fertile soils in the coastal valleys and lowlands of the Western Cape.",
    area: "~ 1,800 km² remaining (less than 5% of original)",
    bestTime: "August – October (Spring geophyte display)",
    facts: [
      "Supports the richest geophyte (flowering bulb) flora on Earth, with hundreds of endemic iris, lily, and orchid species.",
      "Historically grazed by megafauna including black rhinos, quaggas, and Cape mountain zebras before agricultural conversion.",
      "Dominated by the gray, aromatic renosterbos (Elytropappus rhinocerotis).",
    ],
    source: "Overberg Renosterveld Conservation Trust & SANBI",
    sourceUrl: "https://overbergrenosterveld.org.za",
  },
  {
    id: "strandveld-coastal-scrub",
    hotspotId: "cape-floristic-region",
    name: "Strandveld Marine Coastal Scrub",
    image: "",
    poeticLine: "Succulent thickets and calcareous dunes facing the cold Benguela ocean current.",
    description:
      "Dense, semi-succulent coastal dune scrub growing on alkaline, marine-derived sands along the Atlantic and southwestern Indian Ocean coastlines.",
    area: "~ 4,500 km²",
    bestTime: "October – March (Warm coastal season)",
    facts: [
      "Unlike fire-dependent fynbos, strandveld is fire-intolerant, relying on thick succulent leaves to store moisture and survive salt winds.",
      "Features abundant succulent Euphorbias, bone-fruit trees, and coastal sea-guarri.",
      "Crucial foraging corridor for African black oystercatchers and breeding colonies of Cape fur seals.",
    ],
    source: "CapeNature & SANBI",
    sourceUrl: "http://pza.sanbi.org",
  },

  // =========================================================================
  // 3. MADAGASCAR & INDIAN OCEAN ISLANDS
  // =========================================================================
  {
    id: "atsinanana-rainforests",
    hotspotId: "madagascar-indian-ocean",
    name: "Atsinanana Lowland Rainforest",
    image: "",
    poeticLine: "Primeval eastern slopes dripping with mist, echoing the haunting calls of the indri.",
    description:
      "A serial network of eastern mountain rainforest parks preserving relict forests critical for maintaining Madagascar's unique biodiversity.",
    area: "~ 4,796 km² protected core",
    bestTime: "September – December (Warm, active wildlife season)",
    facts: [
      "Inscribed as a UNESCO World Heritage site across six national parks along the eastern escarpment.",
      "Provides critical habitat for all 25 species of lemurs native to eastern Madagascar.",
      "Holds exceptionally high plant endemism, with over 80% of species occurring only in these eastern forest strips.",
    ],
    source: "UNESCO World Heritage Centre (Rainforests of the Atsinanana)",
    sourceUrl: "https://whc.unesco.org/en/list/1257",
  },
  {
    id: "madagascar-spiny-thicket",
    hotspotId: "madagascar-indian-ocean",
    name: "Southern Spiny Thicket",
    image: "",
    poeticLine: "Surreal forests of octopus trees and swollen baobabs defying relentless drought.",
    description:
      "A unique semi-arid ecoregion in southwestern Madagascar characterized by bizarre, thorny succulent plants from the endemic Didiereaceae family.",
    area: "~ 44,000 km²",
    bestTime: "June – September (Cooler dry season)",
    facts: [
      "Over 95% of plant species in this ecosystem are endemic, representing one of the highest endemism rates on Earth.",
      "Dominated by towering Alluaudia procera (octopus trees) whose leaves sprout directly along spine-studded vertical trunks.",
      "Receives irregular rainfall under 400 mm per year, with plants storing water in massive swollen trunks and underground tubers.",
    ],
    source: "WWF Madagascar & CEPF",
    sourceUrl: "https://www.worldwildlife.org/ecoregions/at1311",
  },
  {
    id: "tsingy-limestone-karst",
    hotspotId: "madagascar-indian-ocean",
    name: "Tsingy Limestone Karst Forest",
    image: "",
    poeticLine: "Razor-sharp limestone spires protecting secret canyon groves of ebony and pachypodium.",
    description:
      "A surreal geomorphological labyrinth of razor-sharp limestone pinnacles (tsingy) punctuated by deep subterranean canyons and deciduous dry forests in western Madagascar.",
    area: "~ 1,520 km² (Bemaraha Reserve)",
    bestTime: "May – November (Dry season when canyon trails are accessible)",
    facts: [
      "The word 'Tsingy' translates from Malagasy as 'where one cannot walk barefoot' due to needle-sharp eroded karst needles.",
      "Deep moisture-rich canyon bottoms harbor isolated micro-climates where rare baobabs, orchids, and sifakas thrive.",
      "A designated UNESCO World Heritage site since 1990.",
    ],
    source: "UNESCO World Heritage Centre (Tsingy de Bemaraha)",
    sourceUrl: "https://whc.unesco.org/en/list/494",
  },

  // =========================================================================
  // 4. WESTERN GHATS
  // =========================================================================
  {
    id: "shola-grassland-mosaic",
    hotspotId: "western-ghats",
    name: "Montane Shola-Grassland Mosaic",
    image: "",
    poeticLine: "Stunted cloud forests tucked into rolling high-altitude grasslands above the clouds.",
    description:
      "A distinctive high-altitude landscape in the Nilgiris and Anamalai ranges of Kerala and Tamil Nadu, where patches of stunted, ancient evergreen cloud forest (sholas) nestle within undulating montane grasslands.",
    area: "~ 4,200 km²",
    bestTime: "September – March (Post-monsoon clear skies)",
    facts: [
      "Functions as an ecological sponge, capturing moisture from heavy monsoon clouds and releasing it slowly into perennial South Indian rivers.",
      "Features high micro-endemism, with tree canopy species adapted to withstand night frosts followed by intense tropical sunlight.",
      "Every 12 years, the grasslands burst into intense blue blossoms during the mass flowering of the Kurinji shrub.",
    ],
    source: "UNESCO Western Ghats Serial World Heritage & Wildlife Institute of India",
    sourceUrl: "https://whc.unesco.org/en/list/1342",
  },
  {
    id: "southern-ghats-wet-evergreen",
    hotspotId: "western-ghats",
    name: "Southern Western Ghats Wet Evergreen Rainforest",
    image: "",
    poeticLine: "Multi-tiered primary dipterocarp canopies guarding ancient lineages of Silent Valley and Agasthyamala.",
    description:
      "Dense, multi-layered tropical evergreen rainforests cloaking the steep windward slopes of Kerala and Karnataka. Iconic sites such as Silent Valley National Park and Agasthyamala Biosphere Reserve harbor towering Cullenia and Dipterocarpus canopies with unmatched micro-endemism.",
    area: "~ 15,500 km²",
    bestTime: "October – March (Mild temperatures and rich wildlife activity)",
    facts: [
      "Over 60% of the tree species in these climax rainforests are strictly endemic to the Western Ghats.",
      "Silent Valley preserves one of India's last undisturbed tracts of South Western Ghats moist evergreen forest, devoid of human settlements.",
      "The rainforest canopy reaches 35 to 45 meters, providing shelter to endangered lion-tailed macaques, hornbills, and rare amphibians.",
    ],
    source: "Kerala Forest Department & UNESCO World Heritage Centre",
    sourceUrl: "https://whc.unesco.org/en/list/1342",
  },
  {
    id: "moist-deciduous-foothill-forest",
    hotspotId: "western-ghats",
    name: "Moist Deciduous & Teak Foothill Forests",
    image: "",
    poeticLine: "Sun-dappled teak and bamboo sanctuaries supporting Asia's largest wild elephant and tiger populations.",
    description:
      "Bordering the evergreen core across the leeward rain-shadow and middle elevations of Karnataka, Kerala, and Tamil Nadu (including Bandipur, Nagarahole, Wayanad, and Mudumalai), these forests form the premier contiguous megafauna corridor of India.",
    area: "~ 23,800 km²",
    bestTime: "November – May (Optimal mammal viewing around waterholes)",
    facts: [
      "Harbors the world's largest single population of wild Asian elephants and Bengal tigers in the Nilgiri Biosphere Reserve.",
      "Characterized by prominent hardwood canopies of Tectona grandis (teak), Terminalia, and dense understories of thorny bamboo.",
      "Serves as an essential seasonal migration corridor connecting the Nilgiris, Western Ghats, and Eastern Ghats plateau.",
    ],
    source: "Project Tiger (NTCA) & Wildlife Institute of India (WII)",
    sourceUrl: "https://wii.gov.in",
  },

  // =========================================================================
  // 5. SUNDALAND
  // =========================================================================
  {
    id: "bornean-lowland-dipterocarp",
    hotspotId: "sundaland",
    name: "Lowland Dipterocarp Rainforest",
    image: "",
    poeticLine: "Cathedral-like emergent canopies reaching seventy meters into equatorial skies.",
    description:
      "Among the oldest rainforests in the world (over 130 million years old), dominated by giant winged-seed trees of the family Dipterocarpaceae.",
    area: "~ 381,000 km²",
    bestTime: "April – September (Slightly drier transition)",
    facts: [
      "Individual emergent Shorea trees can soar over 80 meters high, forming multi-layered microhabitats for thousands of canopy organisms.",
      "Exhibits synchronized 'mast fruiting' every 2 to 10 years, where millions of dipterocarp trees flower and fruit in unison across vast regions.",
      "Hosts over 3,000 tree species on Borneo alone—more than the entire African continent.",
    ],
    source: "Center for International Forestry Research (CIFOR) & WWF",
    sourceUrl: "https://www.cifor.org",
  },
  {
    id: "tropical-peat-swamp",
    hotspotId: "sundaland",
    name: "Tropical Peat Swamp Forest",
    image: "",
    poeticLine: "Blackwater river mazes storing colossal ancient carbon beneath stilt-rooted trees.",
    description:
      "Waterlogged, acidic wetland forests where slow decomposition has accumulated deep layers of organic peat up to 20 meters thick over millennia.",
    area: "~ 140,000 km² historic extent",
    bestTime: "May – September",
    facts: [
      "Stores up to 60 billion tons of carbon—roughly 5% of all global terrestrial carbon—in its waterlogged peat soils.",
      "Home to the largest remaining wild populations of Bornean and Sumatran orangutans.",
      "Trees feature specialized breathing roots (pneumatophores) and stilt roots to survive waterlogged, oxygen-depleted soils.",
    ],
    source: "CIFOR & Wetlands International",
    sourceUrl: "https://www.wetlands.org",
  },
  {
    id: "sundaland-mangrove-estuaries",
    hotspotId: "sundaland",
    name: "Sundaland Mangrove & Estuarine Delta",
    image: "",
    poeticLine: "Tidal stilt-root labyrinths where proboscis monkeys leap above estuarine waters.",
    description:
      "Extensive intertidal mangrove forests lining the major river mouths and shallow coastlines of Borneo, Sumatra, and the Malay Peninsula.",
    area: "~ 42,000 km²",
    bestTime: "Year-round; early mornings and late afternoons",
    facts: [
      "Dominated by Rhizophora, Avicennia, and Bruguiera trees with remarkable salt-filtering root membranes.",
      "Crucial nursery grounds for tiger prawns, mud crabs, and juvenile pelagic fish.",
      "Exclusive daytime habitat for proboscis monkeys and estuarine crocodiles.",
    ],
    source: "Mangrove Action Project & WWF",
    sourceUrl: "https://mangroveactionproject.org",
  },

  // =========================================================================
  // 6. WALLACEA
  // =========================================================================
  {
    id: "sulawesi-tropical-rainforest",
    hotspotId: "wallacea",
    name: "Sulawesi Lowland & Hill Rainforest",
    image: "",
    poeticLine: "Dense equatorial island forests sheltering ancient marsupial and suid lineages.",
    description:
      "Evergreen tropical rainforests covering the mountainous volcanic terrain of Sulawesi, characterized by high endemism of canopy trees, palms, and endemic mammals.",
    area: "~ 120,000 km²",
    bestTime: "June – October (Drier season)",
    facts: [
      "Over 60% of all mammal species in this forest type are found nowhere else on Earth.",
      "Lacks the dominant Asian dipterocarp trees, featuring instead rich assemblages of fig trees, ebonies, and palms.",
      "Provides vital year-round fruit for the endemic Sulawesi black macaque and red-knobbed hornbill.",
    ],
    source: "CEPF Wallacea Ecosystem Profile",
    sourceUrl: "https://www.cepf.net/our-work/biodiversity-hotspots/wallacea",
  },
  {
    id: "komodo-savanna",
    hotspotId: "wallacea",
    name: "Komodo Dry Deciduous Savanna & Scrub",
    image: "",
    poeticLine: "Arid grassy hills and lontar palms fringed by turquoise coral channels.",
    description:
      "A dramatic volcanic island landscape within the Lesser Sundas, shaped by long dry seasons and savanna fires.",
    area: "~ 1,817 km² (marine & terrestrial national park)",
    bestTime: "April – October (Dry season with optimal visibility)",
    facts: [
      "One of the driest zones in Indonesia, receiving less than 800 mm of annual rainfall.",
      "Dominated by the fire-resistant Borassus flabellifer (lontar palm) that dot yellow grassland hillsides.",
      "The terrestrial reserve is bordered by some of the most biodiverse coral reef drop-offs in the Coral Triangle.",
    ],
    source: "UNESCO World Heritage Centre (Komodo National Park)",
    sourceUrl: "https://whc.unesco.org/en/list/609",
  },
  {
    id: "coral-triangle-barrier-reef",
    hotspotId: "wallacea",
    name: "Coral Triangle Marine Barrier Reef",
    image: "",
    poeticLine: "Vibrant coral atolls and oceanic drop-offs holding the highest marine biodiversity on Earth.",
    description:
      "Deep-water drop-offs, fringing reefs, and marine straits across Wakatobi, the Banda Sea, and Flores, situated at the epicenter of global marine biodiversity.",
    area: "~ 13,900 km² protected marine waters",
    bestTime: "March – May & September – November (Calm sea conditions)",
    facts: [
      "Harbors over 500 species of reef-building corals—more than 75% of all known coral species on the planet.",
      "Swept by powerful oceanic currents of the Indonesian Throughflow, which pump nutrient-rich upwellings to pelagic manta rays and whales.",
      "Home to six of the world's seven species of sea turtles.",
    ],
    source: "Coral Triangle Initiative & Wakatobi National Park",
    sourceUrl: "https://coraltriangleinitiative.org",
  },

  // =========================================================================
  // 7. FORESTS OF EAST AUSTRALIA
  // =========================================================================
  {
    id: "gondwana-rainforests",
    hotspotId: "forests-of-east-australia",
    name: "Gondwana Subtropical & Temperate Rainforest",
    image: "",
    poeticLine: "Moss-bearded Antarctic beeches clinging to volcanic caldera rims.",
    description:
      "A serial World Heritage area spanning 50 separate reserves across New South Wales and southern Queensland, preserving the ancient vegetation of the supercontinent Gondwana.",
    area: "~ 3,665 km²",
    bestTime: "September – November (Spring wildflowers and moderate climate)",
    facts: [
      "Contains living lineages of primitive flowering plants and ancient Antarctic beech trees over 2,000 years old.",
      "Protects remnants of the extinct Mount Warning shield volcano caldera—the largest erosion caldera in the Southern Hemisphere.",
      "Provides sanctuary for over 200 rare or threatened plant and animal species.",
    ],
    source: "UNESCO World Heritage Centre & NSW National Parks",
    sourceUrl: "https://whc.unesco.org/en/list/368",
  },
  {
    id: "wet-sclerophyll-eucalyptus",
    hotspotId: "forests-of-east-australia",
    name: "Wet Sclerophyll Eucalyptus Forest",
    image: "",
    poeticLine: "Towering white-barked mountain gums soaring above lush tree-fern gullies.",
    description:
      "Tall open forests dominated by massive eucalyptus species like mountain ash, flooded gum, and blackbutt, with a dense, moist rainforest understory.",
    area: "~ 25,000 km²",
    bestTime: "Autumn & Spring (March – May, September – November)",
    facts: [
      "Individual eucalypts can exceed 70 meters in height, creating an impressive multi-tiered forest canopy.",
      "Primary habitat for arboreal marsupials including greater gliders, yellow-bellied gliders, and koalas.",
      "Dependent on high rainfall and occasional high-intensity wildfires to trigger eucalypt seed germination.",
    ],
    source: "Australian Government DCCEEW",
    sourceUrl: "https://www.dcceew.gov.au/environment/biodiversity",
  },
  {
    id: "coastal-wallum-heathlands",
    hotspotId: "forests-of-east-australia",
    name: "Coastal Wallum Heathlands & Estuaries",
    image: "",
    poeticLine: "Banksia-studded sandy dunes and tea-tree wetlands bordering the Pacific Ocean.",
    description:
      "Low, acidic shrubby heathlands and freshwater paperbark tea-tree swamps growing on nutrient-deficient coastal sandplains of southeastern Queensland and northern New South Wales.",
    area: "~ 6,200 km²",
    bestTime: "July – October (Spectacular heathland spring flowering)",
    facts: [
      "Dominated by banksias, tea-trees (Melaleuca), and insectivorous sundews adapted to acidic peat swamps.",
      "Home to the specialized 'acid frogs' (like the wallum froglet) whose larvae only survive in water with pH below 4.0.",
      "Provides essential winter nectar for migrating regent honeyeaters and flying foxes.",
    ],
    source: "Queensland Herbarium & DCCEEW",
    sourceUrl: "https://www.qld.gov.au/environment/plants-animals/plants/herbarium",
  },

  // =========================================================================
  // 8. CARIBBEAN ISLANDS
  // =========================================================================
  {
    id: "cuban-karst-moist-forests",
    hotspotId: "caribbean-islands",
    name: "Mogote Karst Moist Forest",
    image: "",
    poeticLine: "Towering limestone mogotes draped in prehistoric cycads and hanging vines.",
    description:
      "Stunning limestone karst landscape characterized by steep-sided, rounded hills (mogotes) rising dramatically out of agricultural valleys in western and eastern Cuba.",
    area: "~ 21,400 km²",
    bestTime: "November – April (Dry, pleasant winter season)",
    facts: [
      "Mogote summits harbor micro-habitats with 100% endemic plant species that evolved in isolation on individual rock towers.",
      "Shelters the living fossil Microcycas calocoma (cork palm), a prehistoric cycad that has survived unchanged since the Jurassic.",
      "Perforated by extensive cave networks and underground river systems.",
    ],
    source: "UNESCO World Heritage Centre (Viñales Valley)",
    sourceUrl: "https://whc.unesco.org/en/list/840",
  },
  {
    id: "caribbean-marine-coral-reefs",
    hotspotId: "caribbean-islands",
    name: "Caribbean Fringing Coral Reefs & Mangrove Keys",
    image: "",
    poeticLine: "Sun-drenched barrier reefs and stilt mangrove keys encircling turquoise lagoons.",
    description:
      "Extensive shallow barrier reefs, patch reefs, and fringing mangrove cays stretching across the Greater and Lesser Antilles and the Bahamas Bank.",
    area: "~ 26,000 km² coral reef coverage",
    bestTime: "December – May (Clear Caribbean dry season)",
    facts: [
      "Dominated by reef-building elkhorn (Acropora palmata) and brain corals that create structural habitats for thousands of fish.",
      "Provides critical habitat for hawksbill sea turtles, queen conch, and Caribbean spiny lobsters.",
      "Mangrove prop roots act as a natural biological filter, trapping land sediment and protecting offshore corals.",
    ],
    source: "UNEP Caribbean Environment Programme",
    sourceUrl: "https://www.unep.org/cep",
  },
  {
    id: "hispaniolan-pine-forests",
    hotspotId: "caribbean-islands",
    name: "Hispaniolan High Pine Forest",
    image: "",
    poeticLine: "Endemic pine woods sweeping across mist-draped Caribbean summits up to three thousand meters.",
    description:
      "Subtropical high-elevation conifer forests dominated by the endemic Pinus occidentalis, blanketing the rugged peaks of the Cordillera Central in the Dominican Republic and Haiti.",
    area: "~ 12,800 km²",
    bestTime: "December – March (Crisp mountain air, winter migratory birds)",
    facts: [
      "Encompasses Pico Duarte (3,098 m), the highest mountain peak in the entire Caribbean archipelago.",
      "Adapted to ground frosts and natural lightning-sparked fires that maintain open, grassy forest floors.",
      "Crucial refuge for the endangered Hispaniolan crossbill and Hispaniolan amazon parrot.",
    ],
    source: "CEPF Caribbean Islands & Grupo Jaragua",
    sourceUrl: "https://www.cepf.net/our-work/biodiversity-hotspots/caribbean-islands",
  },

  // =========================================================================
  // 9. HIMALAYA
  // =========================================================================
  {
    id: "eastern-himalayan-subalpine",
    hotspotId: "himalaya",
    name: "Subalpine Conifer & Rhododendron Forest",
    image: "",
    poeticLine: "Giant firs and blazing rhododendron valleys standing against glacial walls.",
    description:
      "High-altitude mountain forests spanning elevations between 3,000 and 4,000 meters in Nepal, Sikkim, Bhutan, and Arunachal Pradesh.",
    area: "~ 27,500 km²",
    bestTime: "March – May (Rhododendron bloom) & October – November (Clear mountain views)",
    facts: [
      "More than 170 species of rhododendrons bloom in dazzling colors from scarlet to cream across mountain slopes in spring.",
      "Forms the vital elevational bridge between temperate broadleaf forests below and high alpine meadows above.",
      "Provides essential summer foraging grounds for red pandas, musk deer, and Himalayan monals.",
    ],
    source: "WWF Terrestrial Ecoregions & ICIMOD",
    sourceUrl: "https://www.worldwildlife.org/ecoregions/im0501",
  },
  {
    id: "alpine-shrub-meadows",
    hotspotId: "himalaya",
    name: "Alpine Scree & High Meadow Tundra",
    image: "",
    poeticLine: "Woolly cushion flora and azure poppies clinging to permafrost rocks beneath eight-thousand-meter summits.",
    description:
      "Extreme high-altitude meadows and rock screes between 4,000 and 5,500 meters, characterized by dwarf shrubs, cushion plants, and permafrost moraines.",
    area: "~ 48,000 km²",
    bestTime: "June – August (Brief summer alpine bloom)",
    facts: [
      "Home to the highest vascular plants on Earth, including Ermania himalayensis found above 6,000 meters.",
      "Supports specialist herbivorous ungulates like the blue sheep (bharal) and Himalayan ibex, the primary prey of the snow leopard.",
      "Plants develop dense woolly coats and subterranean taproots to withstand freezing gale-force blizzards.",
    ],
    source: "ICIMOD & Department of National Parks Nepal",
    sourceUrl: "https://www.icimod.org",
  },
  {
    id: "terai-duar-savannas",
    hotspotId: "himalaya",
    name: "Terai-Duar Savanna & Alluvial Grassland",
    image: "",
    poeticLine: "Towering elephant grasses and river floodplains at the foot of the Himalayan escarpment.",
    description:
      "Lowland alluvial grasslands and sal forests along the southern base of the Himalayan foothills, nourished by annual monsoon river inundations.",
    area: "~ 34,600 km²",
    bestTime: "November – March (Pleasant dry winter, excellent wildlife sightings)",
    facts: [
      "Contains the tallest grasslands on Earth, with elephant grasses (Saccharum ravennae) reaching over 7 meters in height.",
      "One of the few remaining global strongholds for the greater one-horned rhinoceros, Bengal tiger, and Asian elephant.",
      "Functions as an essential water recharge zone for the Indo-Gangetic river system.",
    ],
    source: "WWF Terai Arc Landscape & National Parks of Nepal",
    sourceUrl: "https://www.worldwildlife.org",
  },
]
