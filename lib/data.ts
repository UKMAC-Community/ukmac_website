export const ukmacStats = [
  { id: "cooperatives", value: "140+" },
  { id: "hectares", value: "45k+" },
  { id: "families", value: "35k+" },
  { id: "provinces", value: "18+" },
] as const;

export const pillars = [
  {
    id: "modern",
    iconName: "Cpu",
    metric: "40%",
    image: "/images/ukmac_smart_innovation_1784000222966.jpg",
  },
  {
    id: "sustainable",
    iconName: "Leaf",
    metric: "12k+",
    image: "/images/cambodia_agriculture_hero_1784000209131.jpg",
  },
  {
    id: "competitive",
    iconName: "TrendingUp",
    metric: "$24M+",
    image: "/images/ukmac_cooperative_collaboration_1784000237090.jpg",
  },
] as const;

export type Pillar = (typeof pillars)[number];

export const focusAreas = [
  { id: "innovations", iconName: "Sparkles" },
  { id: "capacity", iconName: "Award" },
  { id: "knowledge", iconName: "BookOpen" },
  { id: "valuechain", iconName: "Network" },
] as const;

export const provinces = [
  {
    id: "battambang",
    coordinates: { x: 28, y: 35 },
    coopCount: 34,
    farmersCount: 8500,
  },
  {
    id: "siem_reap",
    coordinates: { x: 42, y: 22 },
    coopCount: 22,
    farmersCount: 4200,
  },
  {
    id: "kampong_cham",
    coordinates: { x: 68, y: 54 },
    coopCount: 28,
    farmersCount: 6100,
  },
  {
    id: "takeo",
    coordinates: { x: 52, y: 84 },
    coopCount: 19,
    farmersCount: 4800,
  },
  {
    id: "kampot",
    coordinates: { x: 38, y: 88 },
    coopCount: 15,
    farmersCount: 2500,
  },
] as const;

export const timelineMilestones = [
  { id: "legal", year: "2013" },
  { id: "consolidation", year: "2018" },
  { id: "inception", year: "2021" },
  { id: "smart", year: "2024" },
  { id: "global", year: "2026" },
] as const;
