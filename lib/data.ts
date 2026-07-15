export const ukmacStats = [
  { id: "communities", value: "32+" },
  { id: "cycleRevenue", value: "$55M" },
  { id: "revenueTarget", value: "$100M" },
] as const;

export const pillars = [
  {
    id: "finance",
    iconName: "Landmark",
    metric: "01",
    image: "/images/ukmac_cooperative_collaboration_1784000237090.jpg",
  },
  {
    id: "business",
    iconName: "BriefcaseBusiness",
    metric: "02",
    image: "/images/cambodia_agriculture_hero_1784000209131.jpg",
  },
  {
    id: "technology",
    iconName: "Cpu",
    metric: "03",
    image: "/images/ukmac_smart_innovation_1784000222966.jpg",
  },
  {
    id: "market",
    iconName: "TrendingUp",
    metric: "04",
    image: "/images/ukmac_cooperative_collaboration_1784000237090.jpg",
  },
] as const;

export type Pillar = (typeof pillars)[number];

export const focusAreas = [
  { id: "loans", iconName: "HandCoins" },
  { id: "markets", iconName: "Handshake" },
  { id: "lowerCosts", iconName: "ShoppingBasket" },
  { id: "standards", iconName: "BadgeCheck" },
  { id: "governance", iconName: "ShieldCheck" },
  { id: "valueAddition", iconName: "PackageCheck" },
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
