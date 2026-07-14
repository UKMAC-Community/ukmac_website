export interface Pillar {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  metric: string;
  metricLabel: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface ProvinceData {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage coords on custom map container
  cropType: string;
  coopCount: number;
  farmersCount: number;
  featuredCoop: string;
  description: string;
  initiatives: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const ukmacStats = [
  { value: "140+", label: "Member Cooperatives", desc: "Local farming communities joined under a single unified voice" },
  { value: "45k+", label: "Hectares Cultivated", desc: "Vast arable land applying sustainable, high-yield methods" },
  { value: "35k+", label: "Families Supported", desc: "Improving livelihoods and ensuring fair pricing for farm households" },
  { value: "18+", label: "Provinces Covered", desc: "Spanning across key agricultural heartlands of Cambodia" },
];

export const pillars: Pillar[] = [
  {
    id: "modern",
    title: "Modern Agriculture",
    shortDesc: "Driving efficiency through technological integration and automated systems.",
    longDesc: "Transitioning traditional farming into data-driven operations. We support our cooperatives in adopting smart drone mapping, sensor-based soil analysis, automated precision irrigation, and digital pest-monitoring systems.",
    iconName: "Cpu",
    metric: "40%",
    metricLabel: "Average increase in farm yield efficiency",
  },
  {
    id: "sustainable",
    title: "Sustainable Farming",
    shortDesc: "Securing the future of agriculture through eco-friendly practices.",
    longDesc: "Preserving Cambodia's rich soils and water resources for generations to come. UKMAC champions bio-fertilizers, solar-powered water management, climate-resilient crop varieties, and strict environmental compliance.",
    iconName: "Leaf",
    metric: "12k+",
    metricLabel: "Hectares converted to certified eco-farming",
  },
  {
    id: "competitive",
    title: "Commercially Competitive",
    shortDesc: "Connecting local farming communities directly to high-value global markets.",
    longDesc: "Empowering cooperatives to meet rigorous global standards. By strengthening direct contract farming, optimizing collective warehouse logistics, and branding unique Cambodian crops, we eliminate costly middlemen.",
    iconName: "TrendingUp",
    metric: "$24M+",
    metricLabel: "Total cooperative trade volume generated",
  },
];

export const focusAreas: FocusArea[] = [
  {
    id: "innovations",
    title: "Modern Innovations",
    description: "Integrating smart technology and digital intelligence into traditional field operations.",
    features: [
      "Precision spraying & multispectral drone mappings",
      "IoT soil moisture and nutrient sensor grid deployments",
      "Digital cooperative bookkeeping and yield forecasting apps",
    ],
    iconName: "Sparkles",
  },
  {
    id: "capacity",
    title: "Capacity Building",
    description: "Nurturing farmer leadership and technical proficiency across member cooperatives.",
    features: [
      "Agronomist-led modern crop management workshops",
      "Cooperative management, financial literacy, and governance training",
      "Standard Operating Procedures (SOPs) for export-grade harvesting",
    ],
    iconName: "Award",
  },
  {
    id: "knowledge",
    title: "Knowledge Sharing",
    description: "Establishing an open, cross-cooperative exchange network to propagate best practices.",
    features: [
      "Inter-provincial cooperative exchange visits",
      "Centralized digital library for agronomy & crop diagnostics",
      "Monthly market intelligence and pricing advisory bulletins",
    ],
    iconName: "BookOpen",
  },
  {
    id: "valuechain",
    title: "Value Chain Development",
    description: "Bridging the gap between rural field harvests and international consumer tables.",
    features: [
      "Collective agricultural input purchasing for cost reduction",
      "Post-harvest infrastructure (cold storage, drying facilities)",
      "Direct contract-farming agreements with premium global exporters",
    ],
    iconName: "Network",
  },
];

export const provinces: ProvinceData[] = [
  {
    id: "battambang",
    name: "Battambang",
    coordinates: { x: 28, y: 35 },
    cropType: "Premium Jasmine Rice",
    coopCount: 34,
    farmersCount: 8500,
    featuredCoop: "Thma Koul Agricultural Union",
    description: "Famed as the historic 'Rice Bowl' of Cambodia, Battambang leads our national modern seed-selection and collective harvester-sharing programs.",
    initiatives: [
      "Laser land leveling for optimal water distribution",
      "Premium fragrant Phka Rumduol rice seed preservation",
      "Large-scale drone spraying service hubs",
    ],
  },
  {
    id: "siem_reap",
    name: "Siem Reap",
    coordinates: { x: 42, y: 22 },
    cropType: "Organic Safe Vegetables",
    coopCount: 22,
    farmersCount: 4200,
    featuredCoop: "Angkor Organic Co-op",
    description: "Integrating safe agricultural practices with local hospitality chains, Siem Reap serves as a premier hub for chemical-free horticulture.",
    initiatives: [
      "Automated solar-pumped drip irrigation systems",
      "Net-house farming structures protecting crops from intense heat",
      "Direct farm-to-table supply chains with local hotels",
    ],
  },
  {
    id: "kampong_cham",
    name: "Kampong Cham",
    coordinates: { x: 68, y: 54 },
    cropType: "Cashew Nuts & Cocoa",
    coopCount: 28,
    farmersCount: 6100,
    featuredCoop: "Chamkar Leu Cashew Enterprise",
    description: "A crucial hub for high-yield cash crops. Focus is on transitioning raw harvests into high-value processed exports on-site.",
    initiatives: [
      "Local cooperative cashew drying and deshelling units",
      "Smart composting recycling organic farm waste",
      "Soil restoration programs with bio-char inoculations",
    ],
  },
  {
    id: "takeo",
    name: "Takeo",
    coordinates: { x: 52, y: 84 },
    cropType: "Early Rice & Aquaculture",
    coopCount: 19,
    farmersCount: 4800,
    featuredCoop: "Tram Kak Agriculture Cooperative",
    description: "Takeo has pioneered early wet-season rice cultivation. It hosts modern community mills and sustainable freshwater fisheries.",
    initiatives: [
      "Flood-resilient early crop variety selection",
      "Cooperative organic fertilizer formulation mills",
      "Community aquaculture system monitoring",
    ],
  },
  {
    id: "kampot",
    name: "Kampot",
    coordinates: { x: 38, y: 88 },
    cropType: "GI Kampot Pepper & Durian",
    coopCount: 15,
    farmersCount: 2500,
    featuredCoop: "Phnom Voar Pepper Cooperative",
    description: "Home to Cambodia's globally acclaimed Geographical Indication (GI) Pepper. UKMAC protects its high standards and supports global branding.",
    initiatives: [
      "Micro-drip irrigation for water scarcity resilience",
      "Blockchain-enabled batch tracking and digital authenticity labels",
      "Premium export packaging and marketing training",
    ],
  },
];

export const timelineMilestones: Milestone[] = [
  {
    year: "2013",
    title: "Legal Framework Established",
    description: "The Kingdom of Cambodia enacts the comprehensive Law on Agricultural Cooperatives, laying the foundations for farming union structures.",
  },
  {
    year: "2018",
    title: "Regional Union Consolidation",
    description: "Provincial farming communities start organizing into unified cooperative unions, aligning goals for collective logistics and bargaining.",
  },
  {
    year: "2021",
    title: "UKMAC Inception",
    description: "Established as the semi-autonomous apex Union, UKMAC brings member cooperatives together under a single cohesive national mission.",
  },
  {
    year: "2024",
    title: "Smart Agriculture Launch",
    description: "Initiated the Digital Agriculture Roadmap, introducing multispectral drone mapping and specialized cooperative business software.",
  },
  {
    year: "2026",
    title: "Global Supply Chain Influx",
    description: "Scaling modern post-harvest infrastructure and direct eco-labeled exports to high-value markets in Asia, Europe, and America.",
  },
];
