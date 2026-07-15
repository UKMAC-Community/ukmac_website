export const LANGUAGES = ["en", "km"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DATE_LOCALES: Record<Language, string> = {
  en: "en-GB",
  km: "km-KH",
};

const en = {
  metadata: {
    title: "UKMAC | Modern Agricultural Cooperative Union",
    description:
      "UKMAC unites Cambodia's Modern Agricultural Cooperatives to expand markets, strengthen governance, and build one of the country's leading agricultural enterprises.",
  },
  brand: {
    name: "Modern Agricultural Cooperative Union",
    logoAlt: "UKMAC logo",
  },
  language: {
    english: "English",
    khmer: "ភាសាខ្មែរ",
    englishShort: "EN",
    khmerShort: "ខ្មែរ",
    switchToEnglish: "Switch to English",
    switchToKhmer: "Switch to Khmer",
  },
  nav: {
    ariaLabel: "Primary navigation",
    toggleMenu: "Toggle menu",
    joinNetwork: "Join Union Network",
    items: {
      hero: "Overview",
      news: "Updates",
      about: "Why Now",
      pillars: "Core Pillars",
      focus: "Member Benefits",
      network: "Structure & Roles",
      timeline: "Shared Vision",
    },
  },
  hero: {
    presentationNote: "Board of Directors Presentation • May 2026",
    tagline: "Uniting Solidarity • Expanding Markets • Strengthening Management",
    titleBefore: "Modern Agricultural",
    titleAccent: "Cooperative Union",
    titleSeparator: "",
    titleAfter: "(UKMAC)",
    description:
      "Today, we are no longer individual cooperatives operating in isolation. We are a network of Modern Agricultural Cooperatives joining hands to form one of Cambodia's largest agricultural enterprises.",
    imageAlt: "Cambodian modern agricultural cooperative members working together",
    indicatorsLabel: "Choose hero image",
    showImage: "Show hero image {number}",
  },
  stats: {
    conclusion:
      "If we work together as one, we will possess greater market leverage, stronger financial capacity, and more powerful management capabilities than ever before.",
    items: {
      communities: {
        label: "Modern Agricultural Cooperatives",
        description: "No longer just a trial phase",
      },
      cycleRevenue: {
        label: "Estimated Total Revenue",
        description: "For the 2026–2027 cycle",
      },
      revenueTarget: {
        label: "Joint Goal by 2028",
        description: "To become a robust national agricultural enterprise",
      },
    },
  },
  about: {
    eyebrow: "Why Strengthen the Union Now?",
    title: "From Policy Pilot to Vision-Driven Mission",
    intro:
      "The network is scaling rapidly. Modern Agricultural Cooperatives have grown to 32 and are projected to reach as many as 50 by 2030, requiring a sustainable support system beyond the original pilot phase.",
    cooperativeTitle: "Challenges at the Cooperative Level",
    cooperativeChallenges: [
      "The network has grown to 32 cooperatives and may reach 50 by 2030.",
      "Direct Ministry support during the pilot phase cannot be sustained during expansion.",
      "Cooperatives across provinces need robust business support, good governance, and strong financial backing.",
      "The network's market potential has not yet been fully harnessed.",
    ],
    nationalTitle: "Challenges at the National Level",
    nationalChallenges: [
      "Market connectivity remains fragile and lacks competitiveness.",
      "Joint production planning is not yet aligned with shared market demand.",
      "Banks, institutional buyers, and development partners remain difficult to attract.",
      "Value-added opportunities in storage, processing, packaging, and branding are being lost.",
    ],
    solutionTitle: "The National Solution",
    solution:
      "A national-level institution is essential to unite all Modern Agricultural Cooperatives and drive them forward in a single direction.",
  },
  pillars: {
    eyebrow: "Core Pillars",
    title: "Four Strategic Pillars",
    description: "Our mission is driven by four strategic pillars that strengthen every part of the agricultural community network.",
    viewDetails: "View details",
    closeDetails: "Close pillar details",
    operationalDirective: "Strategic Pillar",
    milestonesTitle: "Primary Areas of Work",
    acknowledge: "Close Details",
    items: {
      finance: {
        title: "Finance & Governance",
        shortDescription:
          "Building disciplined, transparent, and accountable community institutions.",
        longDescription:
          "Instilling strict financial discipline, transparent accounting systems, regular reporting, and robust internal auditing.",
        metricLabel: "Strategic Pillar",
        highlights: [
          "Strict financial discipline",
          "Transparent accounting systems",
          "Regular financial reporting",
          "Robust internal auditing",
        ],
      },
      business: {
        title: "Crop-Based Business Development",
        shortDescription: "Turning community production into scalable, commercially viable enterprises.",
        longDescription:
          "Organizing crop-based business plans, establishing partnerships, and expanding commercial activities.",
        metricLabel: "Strategic Pillar",
        highlights: [
          "Crop-specific business plans",
          "Strong commercial partnerships",
          "Expanded production capacity",
        ],
      },
      technology: {
        title: "Agricultural Technology",
        shortDescription: "Improving productivity, consistency, and resilience through modern methods.",
        longDescription:
          "Supporting production, quality management, standardization, and risk reduction.",
        metricLabel: "Strategic Pillar",
        highlights: [
          "Production support",
          "Quality management and standardization",
          "Agricultural risk reduction",
        ],
      },
      market: {
        title: "Market & Value Chains",
        shortDescription: "Creating stronger buyer connections and more value from every harvest.",
        longDescription:
          "Connecting buyers, managing agricultural contract farming, matching demand forecasts, and facilitating processing.",
        metricLabel: "Strategic Pillar",
        highlights: [
          "Buyer connections",
          "Agricultural contract farming",
          "Demand forecasting",
          "Processing facilitation",
        ],
      },
    },
  },
  focus: {
    eyebrow: "Benefits for Cooperatives",
    title: "Serving the Best Interests of Member Farmers",
    description:
      "UKMAC turns collective strength into six practical benefits that make cooperatives stronger, open better markets, and stabilize farmer incomes.",
    deliverables: "What Members Receive",
    items: {
      loans: {
        title: "Loans & Grants",
        description:
          "Access low-interest loans, financial support, and backing from national and international partners.",
        features: [
          "Low-interest finance and grants",
          "Support from institutions and development partners",
        ],
      },
      markets: {
        title: "Robust Markets",
        description:
          "Secure agricultural contract farming with buyers and execute network-wide sales.",
        features: [
          "Reliable buyer contracts",
          "Sales executed across the network",
        ],
      },
      lowerCosts: {
        title: "Lower Cost of Capital",
        description:
          "Cut costs through bulk input purchasing, shared services, and the removal of unnecessary expenses.",
        features: [
          "Bulk purchasing power",
          "Shared services and leaner operations",
        ],
      },
      standards: {
        title: "Production Standards",
        description:
          "Achieve uniform quality under high standards to meet premium market demand.",
        features: [
          "Consistent quality across production",
          "Readiness for premium markets",
        ],
      },
      governance: {
        title: "Strong Governance",
        description:
          "Ensure clear decisions, disciplined financial management, and high member confidence.",
        features: [
          "Transparent decision-making",
          "Financial discipline and member trust",
        ],
      },
      valueAddition: {
        title: "Added Value",
        description:
          "Enable storage, processing, packaging, product branding, and inventory financing.",
        features: [
          "Processing, packaging, and branding",
          "Storage and inventory finance",
        ],
      },
    },
  },
  network: {
    eyebrow: "Structure & Roles",
    title: "Functions and Management Structure of the Union",
    description:
      "UKMAC is a non-profit institution dedicated to strengthening the governance of Modern Agricultural Cooperatives.",
    definition:
      "Cooperatives remain the primary owners of local operations. The Union supports them by doing what individual cooperatives cannot achieve efficiently on their own.",
    policyRule: "Maintain local cooperative management + Build a national support system",
    hierarchyTitle: "Management Hierarchy",
    hierarchy: [
      { title: "Advisory Council" },
      { title: "Board of Directors" },
      { title: "Management Committee" },
    ],
    teamsTitle: "Specialized Working Groups",
    teams: [
      { title: "Business & Technical Support Team", tone: "blue" },
      { title: "Training & Capacity Building Team", tone: "green" },
      { title: "Production Chain Management System Team", tone: "darkGreen" },
      { title: "Production Processing Team", tone: "lightGreen" },
    ],
    rolesEyebrow: "Operating Model from July 1",
    rolesTitle: "Working Directly Through the Union",
    transition:
      "Support shifts from direct Ministry delivery to the Union serving as the core supporting institution.",
    roles: {
      cooperatives: {
        title: "The Cooperatives",
        items: [
          "Manage daily operations.",
          "Supervise local work teams.",
          "Execute production plans and sales.",
          "Maintain accountability to members.",
        ],
      },
      union: {
        title: "The Union (UKMAC)",
        items: [
          "Discuss and execute major decisions.",
          "Support business plans, programs, marketing, finances, and contracts.",
          "Audit financial management, build transparency, and protect collective interests.",
          "Meet with each cooperative at least once a month.",
        ],
      },
      ministry: {
        title: "Ministry of Agriculture",
        items: [
          "Define and drive policies for Modern Agricultural Cooperatives.",
          "Monitor and evaluate both the Cooperatives and the Union.",
          "Support the mobilization of resources and partners.",
          "Act as final arbitrator in the event of disputes.",
        ],
      },
    },
  },
  timeline: {
    eyebrow: "Shared Vision",
    title: "We Are Stronger When We Walk Together",
    principle:
      "Joining UKMAC means building the future of both Modern Agricultural Cooperatives and our farmers.",
    vision:
      "If all Modern Agricultural Cooperatives unite as one solid block, we can become one of Cambodia's leading agricultural enterprises.",
    achievementsTitle: "What We Must Achieve Together",
    achievements: [
      {
        title: "Networked Production",
        description:
          "Coordinate rice, cashews, vegetables, tubers, spices, and meat production across the network.",
      },
      {
        title: "Networked Sales",
        description:
          "Achieve scale, standardized quality, and strong collective bargaining power.",
      },
      {
        title: "Networked Management",
        description:
          "Build transparency, discipline, and trust among members, banks, and buyers.",
      },
    ],
    startingToday:
      "Starting today, embrace the Union as our national supporting institution.",
    motto: "The Union is born from all of us, and it serves the benefit of all of us.",
  },
  contact: {
    eyebrow: "Build the Future Together",
    title: "Join UKMAC",
    description:
      "Joining UKMAC means building the future of Modern Agricultural Cooperatives and member farmers through shared production, markets, and management.",
    partnershipBefore:
      "Are you a cooperative, buyer, financial institution, researcher, or development partner? Write directly to",
    partnershipAfter: "to explore how we can work together.",
    perks: [
      {
        title: "Stronger Markets",
        description:
          "Join network-wide sales, contract farming, and collective negotiations with major buyers.",
      },
      {
        title: "Finance & Governance",
        description:
          "Improve access to financing through disciplined, transparent, and trusted management.",
      },
      {
        title: "Value Addition",
        description:
          "Develop storage, processing, packaging, branding, and inventory-finance opportunities.",
      },
    ],
    errors: {
      required: "Please complete all required fields (*).",
      email: "Please provide a valid official email address.",
    },
    fields: {
      representative: "Representative Name",
      organization: "Cooperative/Entity Name",
      email: "Official Email",
      phone: "Contact Phone Number",
      province: "Province Location",
      households: "Farming Households",
      crop: "Primary Focus Crop",
      goals: "Tell us about your community goals",
    },
    placeholders: {
      representative: "e.g. Sok Sopheap",
      organization: "e.g. Angkor Wheat Seed Alliance",
      email: "e.g. contact@coop.org.kh",
      phone: "e.g. +855 23 888 999",
      goals:
        "Describe your production, priority crops, and the support you need in finance, markets, technology, or governance...",
    },
    provinceOptions: {
      battambang: "Battambang",
      siem_reap: "Siem Reap",
      kampong_cham: "Kampong Cham",
      takeo: "Takeo",
      kampot: "Kampot",
      other: "Other Province",
    },
    householdOptions: {
      small: "1 to 50 families",
      medium: "51 to 200 families",
      large: "201 to 500 families",
      largest: "500+ families",
    },
    cropOptions: {
      rice: "Jasmine Rice",
      vegetables: "Safe Organic Vegetables",
      cashew: "Cashews & Nuts",
      pepper: "GI Kampot Pepper",
      other: "Other Cash Crops",
    },
    preparing: "Preparing Preview...",
    preview: "Preview Membership Proposal",
    successEyebrow: "Application Preview Complete",
    successTitle: "Proposal Details Validated",
    successDescription:
      "This prototype validated your entries locally and generated a preview reference. No information has been sent to or stored by UKMAC.",
    reference: "Local Preview Reference",
    serviceWarningBefore:
      "Connect this form to an approved UKMAC submission service before accepting live applications for",
    serviceWarningAfter: "or any other province.",
    startAnother: "Start Another Preview",
  },
  news: {
    eyebrow: "Latest from UKMAC",
    title: "News & Announcements",
    description:
      "Follow UKMAC initiatives, public notices, events, and career opportunities across Cambodia.",
    filterLabel: "Filter updates by category",
    filters: {
      all: "All",
      announcement: "Announcements",
      news: "News",
      hiring: "Hiring",
      event: "Events",
    },
    categories: {
      announcement: "Announcement",
      news: "News",
      hiring: "Hiring",
      event: "Event",
      update: "Update",
    },
    unavailableTitle: "Updates are temporarily unavailable",
    unavailableDescription:
      "Please check again soon for the latest UKMAC announcements and opportunities.",
    emptyTitle: "No posts in this category yet",
    emptyDescription: "New published updates will appear here automatically.",
    readMore: "Read more",
    emptyPreview: "Open this update to read more.",
    recentUpdate: "Recent update",
    coverAlt: "{title} cover",
  },
  newsDetail: {
    allUpdates: "All updates",
    gallery: "Photo gallery",
    back: "Back to news & announcements",
    galleryAlt: "{title} gallery image",
    loading: "Loading update...",
  },
  notFound: {
    title: "Update not found",
    description: "This post may have been removed, unpublished, or its address has changed.",
    action: "Return to updates",
  },
  footer: {
    homeLabel: "UKMAC — go to homepage",
    description:
      "UKMAC is a non-profit institution dedicated to the governance and growth of Modern Agricultural Cooperatives across Cambodia.",
    legal:
      "Local cooperative management, supported by national-level coordination for finance, technology, markets, and governance.",
    quickNavigation: "Quick Navigation",
    navigationLabel: "Footer navigation",
    headquarters: "Secretariat Headquarters",
    address:
      "Preah Norodom Boulevard, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Kingdom of Cambodia.",
    copyright:
      "© {year} UKMAC (Modern Agricultural Cooperative Union). All rights reserved.",
    privacy: "Privacy Policy",
    statutes: "Constitutional Statutes",
    maff: "MAFF Cambodia",
    opensNewTab: "(opens in new tab)",
    navItems: {
      hero: "Overview",
      news: "News & Announcements",
      about: "Why Now",
      pillars: "Core Pillars",
      focus: "Member Benefits",
      network: "Structure & Roles",
      timeline: "Shared Vision",
    },
  },
} as const;

type TranslationShape<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly unknown[]
      ? { readonly [K in keyof T]: TranslationShape<T[K]> }
      : T extends object
        ? { readonly [K in keyof T]: TranslationShape<T[K]> }
        : T;

const km: TranslationShape<typeof en> = {
  metadata: {
    title: "UKMAC | សហភាពសហគមន៍កសិកម្មទំនើប",
    description:
      "UKMAC រួបរួមសហគមន៍កសិកម្មទំនើបនៅកម្ពុជា ដើម្បីពង្រីកទីផ្សារ ពង្រឹងអភិបាលកិច្ច និងកសាងសហគ្រាសកសិកម្មឈានមុខមួយរបស់ប្រទេស។",
  },
  brand: {
    name: "សហភាពសហគមន៍កសិកម្មទំនើប",
    logoAlt: "និមិត្តសញ្ញា UKMAC",
  },
  language: {
    english: "អង់គ្លេស",
    khmer: "ភាសាខ្មែរ",
    englishShort: "EN",
    khmerShort: "ខ្មែរ",
    switchToEnglish: "ប្តូរទៅភាសាអង់គ្លេស",
    switchToKhmer: "ប្តូរទៅភាសាខ្មែរ",
  },
  nav: {
    ariaLabel: "ម៉ឺនុយមេ",
    toggleMenu: "បើក ឬបិទម៉ឺនុយ",
    joinNetwork: "ចូលរួមបណ្តាញសហភាព",
    items: {
      hero: "ទិដ្ឋភាពទូទៅ",
      news: "បច្ចុប្បន្នភាព",
      about: "ហេតុអ្វីឥឡូវនេះ",
      pillars: "សសរស្តម្ភស្នូល",
      focus: "អត្ថប្រយោជន៍សមាជិក",
      network: "រចនាសម្ព័ន្ធ និងតួនាទី",
      timeline: "ចក្ខុវិស័យរួម",
    },
  },
  hero: {
    presentationNote: "បទបង្ហាញជូនក្រុមប្រឹក្សាភិបាល • ខែឧសភា ឆ្នាំ ២០២៦",
    tagline: "រួបរួមសាមគ្គីភាព • ពង្រីកទីផ្សារ • ពង្រឹងការគ្រប់គ្រង",
    titleBefore: "សហភាពសហគមន៍",
    titleAccent: "កសិកម្មទំនើប",
    titleSeparator: "",
    titleAfter: "(UKMAC)",
    description:
      "ថ្ងៃនេះ យើងមិនមែនជាសហគមន៍នីមួយៗដែលដំណើរការដាច់ដោយឡែកទៀតទេ។ យើងជាបណ្តាញសហគមន៍កសិកម្មទំនើប ដែលរួមដៃគ្នាបង្កើតសហគ្រាសកសិកម្មដ៏ធំបំផុតមួយនៅកម្ពុជា។",
    imageAlt: "សមាជិកសហគមន៍កសិកម្មទំនើបកម្ពុជាធ្វើការរួមគ្នា",
    indicatorsLabel: "ជ្រើសរើសរូបភាពផ្ទាំងមេ",
    showImage: "បង្ហាញរូបភាពផ្ទាំងមេលេខ {number}",
  },
  stats: {
    conclusion:
      "ប្រសិនបើយើងធ្វើការរួមគ្នាជាធ្លុងមួយ យើងនឹងមានអំណាចទីផ្សារកាន់តែខ្លាំង សមត្ថភាពហិរញ្ញវត្ថុកាន់តែរឹងមាំ និងសមត្ថភាពគ្រប់គ្រងកាន់តែប្រសើរជាងមុន។",
    items: {
      communities: {
        label: "សហគមន៍កសិកម្មទំនើប",
        description: "លែងស្ថិតនៅត្រឹមដំណាក់កាលសាកល្បង",
      },
      cycleRevenue: {
        label: "ចំណូលសរុបប៉ាន់ស្មាន",
        description: "សម្រាប់វដ្តឆ្នាំ ២០២៦–២០២៧",
      },
      revenueTarget: {
        label: "គោលដៅរួមត្រឹមឆ្នាំ ២០២៨",
        description: "ដើម្បីក្លាយជាសហគ្រាសកសិកម្មជាតិដ៏រឹងមាំ",
      },
    },
  },
  about: {
    eyebrow: "ហេតុអ្វីត្រូវពង្រឹងសហភាពឥឡូវនេះ?",
    title: "ពីការសាកល្បងគោលនយោបាយ ទៅបេសកកម្មដឹកនាំដោយចក្ខុវិស័យ",
    intro:
      "បណ្តាញកំពុងរីកធំយ៉ាងឆាប់រហ័ស។ សហគមន៍កសិកម្មទំនើបបានកើនដល់ ៣២ និងរំពឹងថាអាចកើនដល់ ៥០ ត្រឹមឆ្នាំ ២០៣០ ដែលទាមទារប្រព័ន្ធគាំទ្រប្រកបដោយចីរភាព ក្រៅពីដំណាក់កាលសាកល្បងដំបូង។",
    cooperativeTitle: "បញ្ហាប្រឈមនៅកម្រិតសហគមន៍",
    cooperativeChallenges: [
      "បណ្តាញបានកើនដល់ ៣២ សហគមន៍ ហើយអាចដល់ ៥០ ត្រឹមឆ្នាំ ២០៣០។",
      "ការគាំទ្រផ្ទាល់ពីក្រសួងក្នុងដំណាក់កាលសាកល្បង មិនអាចបន្តបានជានិរន្តរភាពក្នុងដំណាក់កាលពង្រីក។",
      "សហគមន៍តាមរាជធានី-ខេត្តត្រូវការប្រព័ន្ធគាំទ្រអាជីវកម្ម អភិបាលកិច្ចល្អ និងទុនហិរញ្ញវត្ថុរឹងមាំ។",
      "សក្តានុពលទីផ្សាររបស់បណ្តាញមិនទាន់ត្រូវបានប្រើប្រាស់ពេញលេញ។",
    ],
    nationalTitle: "បញ្ហាប្រឈមនៅកម្រិតជាតិ",
    nationalChallenges: [
      "ការតភ្ជាប់ទីផ្សារនៅតែខ្សោយ និងខ្វះសមត្ថភាពប្រកួតប្រជែង។",
      "ផែនការផលិតកម្មរួមមិនទាន់ស្របតាមតម្រូវការទីផ្សាររួម។",
      "ការទាក់ទាញធនាគារ អ្នកទិញស្ថាប័ន និងដៃគូអភិវឌ្ឍន៍នៅតែពិបាក។",
      "ឱកាសបន្ថែមតម្លៃលើការស្តុក កែច្នៃ វេចខ្ចប់ និងបង្កើតម៉ាកកំពុងបាត់បង់។",
    ],
    solutionTitle: "ដំណោះស្រាយថ្នាក់ជាតិ",
    solution:
      "ស្ថាប័នថ្នាក់ជាតិមួយគឺចាំបាច់ ដើម្បីរួបរួមសហគមន៍កសិកម្មទំនើបទាំងអស់ និងជំរុញពួកគេឆ្ពោះទៅទិសដៅតែមួយ។",
  },
  pillars: {
    eyebrow: "សសរស្តម្ភស្នូល",
    title: "សសរស្តម្ភយុទ្ធសាស្ត្រទាំងបួន",
    description:
      "បេសកកម្មរបស់យើងត្រូវបានជំរុញដោយសសរស្តម្ភយុទ្ធសាស្ត្រចំនួនបួន ដែលពង្រឹងគ្រប់ផ្នែកនៃបណ្តាញសហគមន៍កសិកម្ម។",
    viewDetails: "មើលព័ត៌មានលម្អិត",
    closeDetails: "បិទព័ត៌មានសសរស្តម្ភ",
    operationalDirective: "សសរស្តម្ភយុទ្ធសាស្ត្រ",
    milestonesTitle: "វិស័យការងារសំខាន់ៗ",
    acknowledge: "បិទព័ត៌មានលម្អិត",
    items: {
      finance: {
        title: "ហិរញ្ញវត្ថុ និងអភិបាលកិច្ច",
        shortDescription: "កសាងស្ថាប័នសហគមន៍ដែលមានវិន័យ តម្លាភាព និងគណនេយ្យភាព។",
        longDescription:
          "បង្កើតវិន័យហិរញ្ញវត្ថុតឹងរ៉ឹង ប្រព័ន្ធគណនេយ្យមានតម្លាភាព ការរាយការណ៍ទៀងទាត់ និងសវនកម្មផ្ទៃក្នុងរឹងមាំ។",
        metricLabel: "សសរស្តម្ភយុទ្ធសាស្ត្រ",
        highlights: [
          "វិន័យហិរញ្ញវត្ថុតឹងរ៉ឹង",
          "ប្រព័ន្ធគណនេយ្យមានតម្លាភាព",
          "ការរាយការណ៍ហិរញ្ញវត្ថុទៀងទាត់",
          "សវនកម្មផ្ទៃក្នុងរឹងមាំ",
        ],
      },
      business: {
        title: "ការអភិវឌ្ឍអាជីវកម្មតាមដំណាំ",
        shortDescription: "បម្លែងផលិតកម្មសហគមន៍ទៅជាសហគ្រាសពាណិជ្ជកម្មដែលអាចពង្រីកបាន។",
        longDescription:
          "រៀបចំផែនការអាជីវកម្មតាមដំណាំ បង្កើតភាពជាដៃគូ និងពង្រីកសកម្មភាពពាណិជ្ជកម្ម។",
        metricLabel: "សសរស្តម្ភយុទ្ធសាស្ត្រ",
        highlights: [
          "ផែនការអាជីវកម្មតាមប្រភេទដំណាំ",
          "ភាពជាដៃគូពាណិជ្ជកម្មរឹងមាំ",
          "ការពង្រីកសមត្ថភាពផលិតកម្ម",
        ],
      },
      technology: {
        title: "បច្ចេកវិទ្យាកសិកម្ម",
        shortDescription: "បង្កើនផលិតភាព ភាពស្មើគ្នានៃគុណភាព និងភាពធន់តាមរយៈវិធីសាស្ត្រទំនើប។",
        longDescription:
          "គាំទ្រផលិតកម្ម ការគ្រប់គ្រងគុណភាព ការធ្វើស្តង់ដារ និងការកាត់បន្ថយហានិភ័យ។",
        metricLabel: "សសរស្តម្ភយុទ្ធសាស្ត្រ",
        highlights: [
          "ការគាំទ្រផលិតកម្ម",
          "ការគ្រប់គ្រងគុណភាព និងស្តង់ដារ",
          "ការកាត់បន្ថយហានិភ័យកសិកម្ម",
        ],
      },
      market: {
        title: "ទីផ្សារ និងខ្សែច្រវាក់តម្លៃ",
        shortDescription: "បង្កើតទំនាក់ទំនងជាមួយអ្នកទិញកាន់តែរឹងមាំ និងបន្ថែមតម្លៃដល់គ្រប់ទិន្នផល។",
        longDescription:
          "ភ្ជាប់អ្នកទិញ គ្រប់គ្រងកសិកម្មតាមកិច្ចសន្យា ផ្គូផ្គងការព្យាករណ៍តម្រូវការ និងសម្របសម្រួលការកែច្នៃ។",
        metricLabel: "សសរស្តម្ភយុទ្ធសាស្ត្រ",
        highlights: [
          "ការភ្ជាប់អ្នកទិញ",
          "កសិកម្មតាមកិច្ចសន្យា",
          "ការព្យាករណ៍តម្រូវការ",
          "ការសម្របសម្រួលការកែច្នៃ",
        ],
      },
    },
  },
  focus: {
    eyebrow: "អត្ថប្រយោជន៍សម្រាប់សហគមន៍",
    title: "បម្រើផលប្រយោជន៍ល្អបំផុតរបស់កសិករសមាជិក",
    description:
      "UKMAC បម្លែងកម្លាំងរួមទៅជាអត្ថប្រយោជន៍ជាក់ស្តែងចំនួនប្រាំមួយ ដែលធ្វើឱ្យសហគមន៍រឹងមាំ បើកទីផ្សារល្អ និងរក្សាស្ថិរភាពចំណូលកសិករ។",
    deliverables: "អ្វីដែលសមាជិកទទួលបាន",
    items: {
      loans: {
        title: "កម្ចី និងជំនួយឥតសំណង",
        description: "ទទួលបានកម្ចីការប្រាក់ទាប ការគាំទ្រហិរញ្ញវត្ថុ និងការគាំទ្រពីដៃគូជាតិ និងអន្តរជាតិ។",
        features: [
          "ហិរញ្ញប្បទានការប្រាក់ទាប និងជំនួយឥតសំណង",
          "ការគាំទ្រពីស្ថាប័ន និងដៃគូអភិវឌ្ឍន៍",
        ],
      },
      markets: {
        title: "ទីផ្សាររឹងមាំ",
        description: "ធានាកសិកម្មតាមកិច្ចសន្យាជាមួយអ្នកទិញ និងអនុវត្តការលក់ទូទាំងបណ្តាញ។",
        features: [
          "កិច្ចសន្យាអ្នកទិញដែលអាចទុកចិត្តបាន",
          "ការលក់រួមទូទាំងបណ្តាញ",
        ],
      },
      lowerCosts: {
        title: "កាត់បន្ថយថ្លៃដើមទុន",
        description: "កាត់បន្ថយចំណាយតាមរយៈការទិញធាតុចូលជាបរិមាណច្រើន សេវារួម និងការលុបបំបាត់ចំណាយមិនចាំបាច់។",
        features: [
          "អំណាចទិញជាបរិមាណច្រើន",
          "សេវារួម និងប្រតិបត្តិការសន្សំសំចៃ",
        ],
      },
      standards: {
        title: "ស្តង់ដារផលិតកម្ម",
        description: "សម្រេចគុណភាពស្មើគ្នាក្រោមស្តង់ដារខ្ពស់ ដើម្បីបំពេញតម្រូវការទីផ្សារកម្រិតខ្ពស់។",
        features: [
          "គុណភាពស្មើគ្នាទូទាំងផលិតកម្ម",
          "ត្រៀមខ្លួនសម្រាប់ទីផ្សារកម្រិតខ្ពស់",
        ],
      },
      governance: {
        title: "អភិបាលកិច្ចរឹងមាំ",
        description: "ធានាការសម្រេចចិត្តច្បាស់លាស់ ការគ្រប់គ្រងហិរញ្ញវត្ថុមានវិន័យ និងទំនុកចិត្តខ្ពស់របស់សមាជិក។",
        features: [
          "ការសម្រេចចិត្តប្រកបដោយតម្លាភាព",
          "វិន័យហិរញ្ញវត្ថុ និងទំនុកចិត្តសមាជិក",
        ],
      },
      valueAddition: {
        title: "ការបន្ថែមតម្លៃ",
        description: "សម្របសម្រួលការស្តុក កែច្នៃ វេចខ្ចប់ បង្កើតម៉ាកផលិតផល និងហិរញ្ញប្បទានស្តុក។",
        features: [
          "ការកែច្នៃ វេចខ្ចប់ និងបង្កើតម៉ាក",
          "ការស្តុក និងហិរញ្ញប្បទានស្តុក",
        ],
      },
    },
  },
  network: {
    eyebrow: "រចនាសម្ព័ន្ធ និងតួនាទី",
    title: "មុខងារ និងរចនាសម្ព័ន្ធគ្រប់គ្រងរបស់សហភាព",
    description: "UKMAC គឺជាស្ថាប័នមិនស្វែងរកប្រាក់ចំណេញ ដែលប្តេជ្ញាពង្រឹងអភិបាលកិច្ចរបស់សហគមន៍កសិកម្មទំនើប។",
    definition:
      "សហគមន៍នៅតែជាម្ចាស់ចម្បងនៃប្រតិបត្តិការមូលដ្ឋាន។ សហភាពគាំទ្រដោយធ្វើការងារដែលសហគមន៍នីមួយៗមិនអាចសម្រេចបានដោយមានប្រសិទ្ធភាពដោយខ្លួនឯង។",
    policyRule: "រក្សាការគ្រប់គ្រងមូលដ្ឋាន + កសាងប្រព័ន្ធគាំទ្រថ្នាក់ជាតិ",
    hierarchyTitle: "ឋានានុក្រមគ្រប់គ្រង",
    hierarchy: [
      { title: "ក្រុមប្រឹក្សាប្រឹក្សា" },
      { title: "ក្រុមប្រឹក្សាភិបាល" },
      { title: "គណៈកម្មការគ្រប់គ្រង" },
    ],
    teamsTitle: "ក្រុមការងារឯកទេស",
    teams: [
      { title: "ក្រុមគាំទ្រអាជីវកម្ម និងបច្ចេកទេស", tone: "blue" },
      { title: "ក្រុមបណ្តុះបណ្តាល និងកសាងសមត្ថភាព", tone: "green" },
      { title: "ក្រុមប្រព័ន្ធគ្រប់គ្រងខ្សែច្រវាក់ផលិតកម្ម", tone: "darkGreen" },
      { title: "ក្រុមកែច្នៃផលិតកម្ម", tone: "lightGreen" },
    ],
    rolesEyebrow: "គំរូប្រតិបត្តិការចាប់ពីថ្ងៃទី ១ ខែកក្កដា",
    rolesTitle: "ធ្វើការដោយផ្ទាល់តាមរយៈសហភាព",
    transition:
      "ការគាំទ្រផ្លាស់ប្តូរពីការផ្តល់ដោយផ្ទាល់ពីក្រសួង ទៅឱ្យសហភាពដើរតួជាស្ថាប័នគាំទ្រស្នូល។",
    roles: {
      cooperatives: {
        title: "សហគមន៍",
        items: [
          "គ្រប់គ្រងប្រតិបត្តិការប្រចាំថ្ងៃ។",
          "ត្រួតពិនិត្យក្រុមការងារមូលដ្ឋាន។",
          "អនុវត្តផែនការផលិតកម្ម និងការលក់។",
          "រក្សាគណនេយ្យភាពចំពោះសមាជិក។",
        ],
      },
      union: {
        title: "សហភាព (UKMAC)",
        items: [
          "ពិភាក្សា និងអនុវត្តសេចក្តីសម្រេចសំខាន់ៗ។",
          "គាំទ្រផែនការអាជីវកម្ម កម្មវិធី ទីផ្សារ ហិរញ្ញវត្ថុ និងកិច្ចសន្យា។",
          "ធ្វើសវនកម្មហិរញ្ញវត្ថុ កសាងតម្លាភាព និងការពារផលប្រយោជន៍រួម។",
          "ប្រជុំជាមួយសហគមន៍នីមួយៗយ៉ាងហោចណាស់ម្តងក្នុងមួយខែ។",
        ],
      },
      ministry: {
        title: "ក្រសួងកសិកម្ម",
        items: [
          "កំណត់ និងជំរុញគោលនយោបាយសម្រាប់សហគមន៍កសិកម្មទំនើប។",
          "តាមដាន និងវាយតម្លៃទាំងសហគមន៍ និងសហភាព។",
          "គាំទ្រការកៀរគរធនធាន និងដៃគូ។",
          "ដើរតួជាអាជ្ញាកណ្តាលចុងក្រោយនៅពេលមានវិវាទ។",
        ],
      },
    },
  },
  timeline: {
    eyebrow: "ចក្ខុវិស័យរួម",
    title: "យើងកាន់តែរឹងមាំ នៅពេលដើររួមគ្នា",
    principle: "ការចូលរួម UKMAC គឺជាការកសាងអនាគតរបស់សហគមន៍កសិកម្មទំនើប និងកសិកររបស់យើង។",
    vision: "ប្រសិនបើសហគមន៍កសិកម្មទំនើបទាំងអស់រួបរួមជាធ្លុងមួយ យើងអាចក្លាយជាសហគ្រាសកសិកម្មឈានមុខមួយរបស់កម្ពុជា។",
    achievementsTitle: "អ្វីដែលយើងត្រូវសម្រេចរួមគ្នា",
    achievements: [
      {
        title: "ផលិតកម្មជាបណ្តាញ",
        description:
          "សម្របសម្រួលផលិតកម្មស្រូវ ស្វាយចន្ទី បន្លែ ដំណាំមើម គ្រឿងទេស និងសាច់ទូទាំងបណ្តាញ។",
      },
      {
        title: "ការលក់ជាបណ្តាញ",
        description:
          "សម្រេចទំហំធំ គុណភាពស្តង់ដារ និងអំណាចចរចារួមដ៏រឹងមាំ។",
      },
      {
        title: "ការគ្រប់គ្រងជាបណ្តាញ",
        description:
          "កសាងតម្លាភាព វិន័យ និងទំនុកចិត្តក្នុងចំណោមសមាជិក ធនាគារ និងអ្នកទិញ។",
      },
    ],
    startingToday: "ចាប់ពីថ្ងៃនេះ សូមទទួលយកសហភាពជាស្ថាប័នគាំទ្រថ្នាក់ជាតិរបស់យើង។",
    motto: "សហភាពកើតចេញពីយើងទាំងអស់គ្នា ហើយបម្រើផលប្រយោជន៍របស់យើងទាំងអស់គ្នា។",
  },
  contact: {
    eyebrow: "រួមគ្នាកសាងអនាគត",
    title: "ចូលរួមជាមួយ UKMAC",
    description:
      "ការចូលរួម UKMAC គឺជាការកសាងអនាគតរបស់សហគមន៍កសិកម្មទំនើប និងកសិករសមាជិក តាមរយៈផលិតកម្ម ទីផ្សារ និងការគ្រប់គ្រងរួម។",
    partnershipBefore:
      "តើអ្នកជាសហគមន៍ អ្នកទិញ ស្ថាប័នហិរញ្ញវត្ថុ អ្នកស្រាវជ្រាវ ឬដៃគូអភិវឌ្ឍន៍មែនទេ? សូមសរសេរមក",
    partnershipAfter: "ដើម្បីស្វែងរកឱកាសធ្វើការរួមគ្នា។",
    perks: [
      {
        title: "ទីផ្សារកាន់តែរឹងមាំ",
        description:
          "ចូលរួមការលក់ជាបណ្តាញ កសិកម្មតាមកិច្ចសន្យា និងការចរចារួមជាមួយអ្នកទិញធំៗ។",
      },
      {
        title: "ហិរញ្ញវត្ថុ និងអភិបាលកិច្ច",
        description:
          "បង្កើនលទ្ធភាពទទួលបានហិរញ្ញប្បទាន តាមរយៈការគ្រប់គ្រងប្រកបដោយវិន័យ តម្លាភាព និងទំនុកចិត្ត។",
      },
      {
        title: "ការបន្ថែមតម្លៃ",
        description:
          "អភិវឌ្ឍឱកាសស្តុក កែច្នៃ វេចខ្ចប់ បង្កើតម៉ាក និងហិរញ្ញប្បទានសារពើភ័ណ្ឌ។",
      },
    ],
    errors: {
      required: "សូមបំពេញគ្រប់កន្លែងដែលតម្រូវ (*).",
      email: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។",
    },
    fields: {
      representative: "ឈ្មោះអ្នកតំណាង",
      organization: "ឈ្មោះសហគមន៍/ស្ថាប័ន",
      email: "អ៊ីមែលផ្លូវការ",
      phone: "លេខទូរស័ព្ទទំនាក់ទំនង",
      province: "ទីតាំងខេត្ត",
      households: "ចំនួនគ្រួសារកសិករ",
      crop: "ដំណាំអាទិភាព",
      goals: "ប្រាប់យើងអំពីគោលដៅសហគមន៍របស់អ្នក",
    },
    placeholders: {
      representative: "ឧ. សុខ សុភាព",
      organization: "ឧ. សម្ព័ន្ធពូជស្រូវអង្គរ",
      email: "ឧ. contact@coop.org.kh",
      phone: "ឧ. +855 23 888 999",
      goals:
        "ពិពណ៌នាអំពីផលិតកម្ម ដំណាំអាទិភាព និងការគាំទ្រដែលអ្នកត្រូវការផ្នែកហិរញ្ញវត្ថុ ទីផ្សារ បច្ចេកវិទ្យា ឬអភិបាលកិច្ច...",
    },
    provinceOptions: {
      battambang: "បាត់ដំបង",
      siem_reap: "សៀមរាប",
      kampong_cham: "កំពង់ចាម",
      takeo: "តាកែវ",
      kampot: "កំពត",
      other: "ខេត្តផ្សេងទៀត",
    },
    householdOptions: {
      small: "១ ដល់ ៥០ គ្រួសារ",
      medium: "៥១ ដល់ ២០០ គ្រួសារ",
      large: "២០១ ដល់ ៥០០ គ្រួសារ",
      largest: "លើសពី ៥០០ គ្រួសារ",
    },
    cropOptions: {
      rice: "ស្រូវផ្កាម្លិះ",
      vegetables: "បន្លែសុវត្ថិភាពសរីរាង្គ",
      cashew: "ស្វាយចន្ទី និងគ្រាប់ធញ្ញជាតិ",
      pepper: "ម្រេចកំពត GI",
      other: "ដំណាំពាណិជ្ជកម្មផ្សេងទៀត",
    },
    preparing: "កំពុងរៀបចំការមើលជាមុន...",
    preview: "មើលសំណើសមាជិកភាពជាមុន",
    successEyebrow: "ការមើលពាក្យស្នើសុំជាមុនបានបញ្ចប់",
    successTitle: "ព័ត៌មានសំណើបានផ្ទៀងផ្ទាត់",
    successDescription:
      "គំរូនេះបានផ្ទៀងផ្ទាត់ព័ត៌មាននៅលើឧបករណ៍របស់អ្នក និងបង្កើតលេខយោងមើលជាមុន។ មិនមានព័ត៌មានណាត្រូវបានផ្ញើ ឬរក្សាទុកដោយ UKMAC ទេ។",
    reference: "លេខយោងមើលជាមុន",
    serviceWarningBefore:
      "ត្រូវភ្ជាប់ទម្រង់នេះទៅសេវាផ្ញើពាក្យសុំដែល UKMAC អនុម័ត មុនពេលទទួលពាក្យសុំផ្លូវការសម្រាប់",
    serviceWarningAfter: "ឬខេត្តផ្សេងទៀត។",
    startAnother: "ចាប់ផ្តើមការមើលថ្មី",
  },
  news: {
    eyebrow: "ព័ត៌មានថ្មីពី UKMAC",
    title: "ព័ត៌មាន និងសេចក្តីជូនដំណឹង",
    description: "តាមដានគម្រោង សេចក្តីជូនដំណឹង ព្រឹត្តិការណ៍ និងឱកាសការងាររបស់ UKMAC នៅកម្ពុជា។",
    filterLabel: "ត្រងបច្ចុប្បន្នភាពតាមប្រភេទ",
    filters: {
      all: "ទាំងអស់",
      announcement: "សេចក្តីជូនដំណឹង",
      news: "ព័ត៌មាន",
      hiring: "ជ្រើសរើសបុគ្គលិក",
      event: "ព្រឹត្តិការណ៍",
    },
    categories: {
      announcement: "សេចក្តីជូនដំណឹង",
      news: "ព័ត៌មាន",
      hiring: "ជ្រើសរើសបុគ្គលិក",
      event: "ព្រឹត្តិការណ៍",
      update: "បច្ចុប្បន្នភាព",
    },
    unavailableTitle: "បច្ចុប្បន្នភាពមិនអាចប្រើបានជាបណ្តោះអាសន្ន",
    unavailableDescription: "សូមព្យាយាមម្តងទៀតឆាប់ៗ ដើម្បីទទួលព័ត៌មាន និងឱកាសថ្មីៗពី UKMAC។",
    emptyTitle: "មិនទាន់មានអត្ថបទក្នុងប្រភេទនេះទេ",
    emptyDescription: "អត្ថបទដែលបានផ្សព្វផ្សាយថ្មីនឹងបង្ហាញនៅទីនេះដោយស្វ័យប្រវត្តិ។",
    readMore: "អានបន្ថែម",
    emptyPreview: "បើកបច្ចុប្បន្នភាពនេះដើម្បីអានបន្ថែម។",
    recentUpdate: "បច្ចុប្បន្នភាពថ្មី",
    coverAlt: "រូបគម្រប {title}",
  },
  newsDetail: {
    allUpdates: "បច្ចុប្បន្នភាពទាំងអស់",
    gallery: "កម្រងរូបភាព",
    back: "ត្រឡប់ទៅព័ត៌មាន និងសេចក្តីជូនដំណឹង",
    galleryAlt: "រូបភាពក្នុងកម្រងរបស់ {title}",
    loading: "កំពុងផ្ទុកព័ត៌មាន...",
  },
  notFound: {
    title: "រកមិនឃើញបច្ចុប្បន្នភាព",
    description: "អត្ថបទនេះអាចត្រូវបានលុប មិនផ្សព្វផ្សាយ ឬអាសយដ្ឋានរបស់វាបានផ្លាស់ប្តូរ។",
    action: "ត្រឡប់ទៅបច្ចុប្បន្នភាព",
  },
  footer: {
    homeLabel: "UKMAC — ត្រឡប់ទៅទំព័រដើម",
    description:
      "UKMAC គឺជាស្ថាប័នមិនស្វែងរកប្រាក់ចំណេញ ដែលប្តេជ្ញាពង្រឹងអភិបាលកិច្ច និងកំណើនរបស់សហគមន៍កសិកម្មទំនើបនៅទូទាំងកម្ពុជា។",
    legal:
      "ការគ្រប់គ្រងដោយសហគមន៍មូលដ្ឋាន គាំទ្រដោយការសម្របសម្រួលថ្នាក់ជាតិលើហិរញ្ញវត្ថុ បច្ចេកវិទ្យា ទីផ្សារ និងអភិបាលកិច្ច។",
    quickNavigation: "តំណភ្ជាប់រហ័ស",
    navigationLabel: "ម៉ឺនុយបាតទំព័រ",
    headquarters: "ទីស្នាក់ការលេខាធិការដ្ឋាន",
    address: "មហាវិថីព្រះនរោត្តម សង្កាត់ទន្លេបាសាក់ ខណ្ឌចំការមន រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា។",
    copyright: "© {year} UKMAC (សហភាពសហគមន៍កសិកម្មទំនើប)។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    privacy: "គោលការណ៍ឯកជនភាព",
    statutes: "លក្ខន្តិកៈសហភាព",
    maff: "ក្រសួងកសិកម្ម កម្ពុជា",
    opensNewTab: "(បើកក្នុងផ្ទាំងថ្មី)",
    navItems: {
      hero: "ទិដ្ឋភាពទូទៅ",
      news: "ព័ត៌មាន និងសេចក្តីជូនដំណឹង",
      about: "ហេតុអ្វីឥឡូវនេះ",
      pillars: "សសរស្តម្ភស្នូល",
      focus: "អត្ថប្រយោជន៍សមាជិក",
      network: "រចនាសម្ព័ន្ធ និងតួនាទី",
      timeline: "ចក្ខុវិស័យរួម",
    },
  },
};

export const translations = { en, km } as const;

export type SiteTranslation = TranslationShape<typeof en>;

export function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "km";
}

export function formatTranslation(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match,
  );
}
