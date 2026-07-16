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
    image: "/images/union/governance.webp",
  },
  {
    id: "business",
    iconName: "BriefcaseBusiness",
    metric: "02",
    image: "/images/union/development.webp",
  },
  {
    id: "technology",
    iconName: "Cpu",
    metric: "03",
    image: "/images/union/technique.webp",
  },
  {
    id: "market",
    iconName: "TrendingUp",
    metric: "04",
    image: "/images/union/market.webp",
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

// `mapName` must match a "name" in lib/cambodia-provinces.json — that's
// how the map finds the province shape and places its marker. To add a
// new province, just add an entry with its id and its exact map name;
// no manual coordinates needed.
export const provinces = [
  {
    id: "battambang",
    mapName: "Battambang",
  },
  {
    id: "siem_reap",
    mapName: "Siem Reap",
  },
  {
    id: "kampong_cham",
    mapName: "Kampong Cham",
  },
  {
    id: "takeo",
    mapName: "Takeo",
  },
  {
    id: "kampot",
    mapName: "Kampot",
  },
] as const;
