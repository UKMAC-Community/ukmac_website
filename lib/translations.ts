export const LANGUAGES = ["en", "km"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DATE_LOCALES: Record<Language, string> = {
  en: "en-GB",
  km: "km-KH",
};

const en = {
  metadata: {
    title: "UKMAC | Modern Agricultural Community",
    description:
      "The Union of Kampuchea Modern Agricultural Community advances sustainable, modern, and commercially competitive agriculture across Cambodia.",
  },
  brand: {
    name: "Kampuchea Modern Agricultural Community",
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
      about: "Our Purpose",
      pillars: "Core Pillars",
      focus: "Impact Areas",
      network: "Regional Network",
      timeline: "Our History",
    },
  },
  hero: {
    titleBefore: "Cultivating",
    titleAccent: "Modern",
    titleSeparator: ",",
    titleAfter: "Sustainable Agriculture",
    description:
      "UKMAC leads Cambodia's farming network as a semi-autonomous apex Union, supporting smart innovation, capacity building, and competitive global value chains.",
    imageAlt: "Sustainable Cambodian agriculture",
    indicatorsLabel: "Choose hero image",
    showImage: "Show hero image {number}",
  },
  stats: {
    items: {
      cooperatives: {
        label: "Member Cooperatives",
        description: "Local farming communities joined under a single unified voice",
      },
      hectares: {
        label: "Hectares Cultivated",
        description: "Vast arable land applying sustainable, high-yield methods",
      },
      families: {
        label: "Families Supported",
        description: "Improving livelihoods and ensuring fair pricing for farm households",
      },
      provinces: {
        label: "Provinces Covered",
        description: "Spanning across key agricultural heartlands of Cambodia",
      },
    },
  },
  about: {
    eyebrow: "Constitutional Identity",
    title: "An Apex, Semi-Autonomous Agricultural Union",
    introBefore:
      "The Union of Kampuchea Modern Agricultural Community (UKMAC) is established in accordance with the",
    lawName: "Law on Agricultural Cooperatives of the Kingdom of Cambodia",
    quote:
      "UKMAC is dedicated to promoting modern, sustainable, and commercially competitive agriculture. Through its network of member agricultural communities, cooperatives, and agricultural enterprises, UKMAC supports innovations, capacity building, knowledge sharing, and value chain development across the agricultural sector.",
    description:
      "As Cambodia's premier agricultural union, we serve as the vital bridge linking grassroots farming cooperatives directly with advanced technology, global trading networks, and modern governance standards. By operating at scale, we allow Cambodian farmers to collectively thrive in competitive international arenas.",
    foundationTitle: "Constitutional Foundation",
    legalPoints: [
      {
        title: "Law on Agricultural Cooperatives",
        description:
          "Formally registered as an Apex Union under the landmark Royal Decree of the Kingdom of Cambodia, ensuring secure legal standing and operations.",
      },
      {
        title: "Semi-Autonomous Apex Union",
        description:
          "Operating with corporate administrative autonomy while collaborating closely with government ministries and international development partners.",
      },
      {
        title: "Cooperative Networks Protection",
        description:
          "Creating structural policies that shield smallholders and local agricultural communities from market price fluctuations and unfair trade.",
      },
    ],
    disclaimer: "Established under Article 42 of the Agricultural Cooperatives Act.",
  },
  pillars: {
    eyebrow: "Our Strategic Directives",
    title: "The Three Pillars of UKMAC",
    description:
      "Guiding Cambodia's agricultural communities toward smart modernity, climate resilience, and unfettered access to competitive global markets.",
    viewDetails: "View details",
    closeDetails: "Close pillar details",
    operationalDirective: "Operational Directive",
    milestonesTitle: "Implementation Milestones & Standards",
    acknowledge: "Acknowledge Directive",
    items: {
      modern: {
        title: "Modern Agriculture",
        shortDescription:
          "Driving efficiency through technological integration and automated systems.",
        longDescription:
          "Transitioning traditional farming into data-driven operations. We support our cooperatives in adopting smart drone mapping, sensor-based soil analysis, automated precision irrigation, and digital pest-monitoring systems.",
        metricLabel: "Average increase in farm yield efficiency",
        highlights: [
          "IoT Soil NPK and automated soil sensors",
          "Multispectral crop imagery via customized flight logs",
          "Precision pesticide and fertilizer delivery systems",
          "Mobile cloud ledger software for local communities",
        ],
      },
      sustainable: {
        title: "Sustainable Farming",
        shortDescription: "Securing the future of agriculture through eco-friendly practices.",
        longDescription:
          "Preserving Cambodia's rich soils and water resources for generations to come. UKMAC champions bio-fertilizers, solar-powered water management, climate-resilient crop varieties, and strict environmental compliance.",
        metricLabel: "Hectares converted to certified eco-farming",
        highlights: [
          "Strict organic certification and compliance mapping",
          "Solar-powered micro-drip field installations",
          "Drought and flood resilient Jasmine rice strains",
          "Zero-waste agricultural recycling cooperatives",
        ],
      },
      competitive: {
        title: "Commercially Competitive",
        shortDescription:
          "Connecting local farming communities directly to high-value global markets.",
        longDescription:
          "Empowering cooperatives to meet rigorous global standards. By strengthening direct contract farming, optimizing collective warehouse logistics, and branding unique Cambodian crops, we eliminate costly middlemen.",
        metricLabel: "Total cooperative trade volume generated",
        highlights: [
          "Direct contract-farming dispute mitigation guidelines",
          "Unified cold-storage hubs near national borders",
          "Direct logistics integration to export container terminals",
          "Global GAP certification counseling services",
        ],
      },
    },
  },
  focus: {
    eyebrow: "Operational Strategies & Impact",
    title: "Comprehensive Support Across the Value Chain",
    description:
      "Through targeted field interventions, UKMAC fosters continuous development, ensuring local farming operations scale into sustainable commercial enterprises.",
    deliverables: "Key Deliverables",
    items: {
      innovations: {
        title: "Modern Innovations",
        description:
          "Integrating smart technology and digital intelligence into traditional field operations.",
        features: [
          "Precision spraying & multispectral drone mappings",
          "IoT soil moisture and nutrient sensor grid deployments",
          "Digital cooperative bookkeeping and yield forecasting apps",
        ],
      },
      capacity: {
        title: "Capacity Building",
        description:
          "Nurturing farmer leadership and technical proficiency across member cooperatives.",
        features: [
          "Agronomist-led modern crop management workshops",
          "Cooperative management, financial literacy, and governance training",
          "Standard Operating Procedures (SOPs) for export-grade harvesting",
        ],
      },
      knowledge: {
        title: "Knowledge Sharing",
        description:
          "Establishing an open, cross-cooperative exchange network to propagate best practices.",
        features: [
          "Inter-provincial cooperative exchange visits",
          "Centralized digital library for agronomy & crop diagnostics",
          "Monthly market intelligence and pricing advisory bulletins",
        ],
      },
      valuechain: {
        title: "Value Chain Development",
        description:
          "Bridging the gap between rural field harvests and international consumer tables.",
        features: [
          "Collective agricultural input purchasing for cost reduction",
          "Post-harvest infrastructure (cold storage, drying facilities)",
          "Direct contract-farming agreements with premium global exporters",
        ],
      },
    },
  },
  network: {
    eyebrow: "Territorial Strength & Reach",
    title: "Our Regional Cooperative Network",
    description:
      "Explore the active agricultural hubs of UKMAC. Click on a province to view its specialized crop yield, cooperative counts, and local modernization initiatives.",
    mapLabel: "Cambodia Agricultural Grid Map (Schematic)",
    tonleSap: "Tonle Sap",
    lakeReserve: "Lake Reserve",
    focusCrop: "Focus crop: {crop}",
    cooperatives: "Cooperatives",
    registered: "{count} Registered",
    families: "Families",
    members: "{count}+ Members",
    featuredCommunity: "Featured Community Union",
    modernizations: "Strategic Modernizations",
    connect: "Connect with regional director",
    provinces: {
      battambang: {
        name: "Battambang",
        cropType: "Premium Jasmine Rice",
        featuredCoop: "Thma Koul Agricultural Union",
        description:
          "Famed as the historic 'Rice Bowl' of Cambodia, Battambang leads our national modern seed-selection and collective harvester-sharing programs.",
        initiatives: [
          "Laser land leveling for optimal water distribution",
          "Premium fragrant Phka Rumduol rice seed preservation",
          "Large-scale drone spraying service hubs",
        ],
      },
      siem_reap: {
        name: "Siem Reap",
        cropType: "Organic Safe Vegetables",
        featuredCoop: "Angkor Organic Co-op",
        description:
          "Integrating safe agricultural practices with local hospitality chains, Siem Reap serves as a premier hub for chemical-free horticulture.",
        initiatives: [
          "Automated solar-pumped drip irrigation systems",
          "Net-house farming structures protecting crops from intense heat",
          "Direct farm-to-table supply chains with local hotels",
        ],
      },
      kampong_cham: {
        name: "Kampong Cham",
        cropType: "Cashew Nuts & Cocoa",
        featuredCoop: "Chamkar Leu Cashew Enterprise",
        description:
          "A crucial hub for high-yield cash crops. Focus is on transitioning raw harvests into high-value processed exports on-site.",
        initiatives: [
          "Local cooperative cashew drying and deshelling units",
          "Smart composting recycling organic farm waste",
          "Soil restoration programs with bio-char inoculations",
        ],
      },
      takeo: {
        name: "Takeo",
        cropType: "Early Rice & Aquaculture",
        featuredCoop: "Tram Kak Agriculture Cooperative",
        description:
          "Takeo has pioneered early wet-season rice cultivation. It hosts modern community mills and sustainable freshwater fisheries.",
        initiatives: [
          "Flood-resilient early crop variety selection",
          "Cooperative organic fertilizer formulation mills",
          "Community aquaculture system monitoring",
        ],
      },
      kampot: {
        name: "Kampot",
        cropType: "GI Kampot Pepper & Durian",
        featuredCoop: "Phnom Voar Pepper Cooperative",
        description:
          "Home to Cambodia's globally acclaimed Geographical Indication (GI) Pepper. UKMAC protects its high standards and supports global branding.",
        initiatives: [
          "Micro-drip irrigation for water scarcity resilience",
          "Blockchain-enabled batch tracking and digital authenticity labels",
          "Premium export packaging and marketing training",
        ],
      },
    },
  },
  timeline: {
    eyebrow: "Historic Milestones & Growth",
    title: "Journey of Cooperation",
    description:
      "From regional smallholder coalitions to an autonomous apex national authority—tracing the milestones of Cambodian agricultural modernization.",
    items: {
      legal: {
        title: "Legal Framework Established",
        description:
          "The Kingdom of Cambodia enacts the comprehensive Law on Agricultural Cooperatives, laying the foundations for farming union structures.",
      },
      consolidation: {
        title: "Regional Union Consolidation",
        description:
          "Provincial farming communities start organizing into unified cooperative unions, aligning goals for collective logistics and bargaining.",
      },
      inception: {
        title: "UKMAC Inception",
        description:
          "Established as the semi-autonomous apex Union, UKMAC brings member cooperatives together under a single cohesive national mission.",
      },
      smart: {
        title: "Smart Agriculture Launch",
        description:
          "Initiated the Digital Agriculture Roadmap, introducing multispectral drone mapping and specialized cooperative business software.",
      },
      global: {
        title: "Global Supply Chain Influx",
        description:
          "Scaling modern post-harvest infrastructure and direct eco-labeled exports to high-value markets in Asia, Europe, and America.",
      },
    },
  },
  contact: {
    eyebrow: "Cooperative Adhesion",
    title: "Join the Union Network",
    description:
      "We invite registered agricultural communities, independent farming cooperatives, and eco-agriculture enterprises across Cambodia to join our unified national network.",
    partnershipBefore:
      "Are you an independent agronomist, researcher, or development agency? Write directly to",
    partnershipAfter: "to explore strategic partnerships.",
    perks: [
      {
        title: "Full Legal Representation",
        description: "Secure trade advocacy under the Law on Agricultural Cooperatives.",
      },
      {
        title: "Advanced Technology Access",
        description: "Deploy drone diagnostics and soil moisture sensor networks at cost.",
      },
      {
        title: "Value Chain Protection",
        description:
          "Secure direct exporting channels, bypassing intermediary brokers completely.",
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
        "Describe your current harvesting scope, crops, and which UKMAC services (innovation, value chain alignment, training) you require most...",
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
    preview: "Preview Adhesion Proposal",
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
      "UKMAC is an apex, semi-autonomous agricultural Union established under the Law on Agricultural Cooperatives of the Kingdom of Cambodia, empowering agricultural cooperatives with smart technologies and direct global market entry.",
    legal:
      "Official union registration established in accordance with Royal Decrees & provisions governing the Ministry of Agriculture, Forestry, and Fisheries (MAFF), Kingdom of Cambodia.",
    quickNavigation: "Quick Navigation",
    navigationLabel: "Footer navigation",
    headquarters: "Secretariat Headquarters",
    address:
      "Preah Norodom Boulevard, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Kingdom of Cambodia.",
    copyright:
      "© {year} UKMAC (Union of Kampuchea Modern Agricultural Community). All rights reserved.",
    privacy: "Privacy Policy",
    statutes: "Constitutional Statutes",
    maff: "MAFF Cambodia",
    opensNewTab: "(opens in new tab)",
    navItems: {
      hero: "Introduction",
      news: "News & Announcements",
      about: "About & Mandate",
      pillars: "Operational Pillars",
      focus: "Strategic Focus",
      network: "Cooperative Network",
      timeline: "Historical Milestones",
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
    title: "UKMAC | សហគមន៍កសិកម្មទំនើបកម្ពុជា",
    description:
      "សហភាពសហគមន៍កសិកម្មទំនើបកម្ពុជា ជំរុញកសិកម្មប្រកបដោយចីរភាព ទំនើប និងមានសមត្ថភាពប្រកួតប្រជែងនៅទូទាំងកម្ពុជា។",
  },
  brand: {
    name: "សហគមន៍កសិកម្មទំនើបកម្ពុជា",
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
      hero: "ទំព័រដើម",
      news: "បច្ចុប្បន្នភាព",
      about: "គោលបំណង",
      pillars: "សសរស្តម្ភ",
      focus: "វិស័យអាទិភាព",
      network: "បណ្តាញតំបន់",
      timeline: "ប្រវត្តិរបស់យើង",
    },
  },
  hero: {
    titleBefore: "ដាំដុះកសិកម្ម",
    titleAccent: "ទំនើប",
    titleSeparator: "",
    titleAfter: "និងប្រកបដោយចីរភាព",
    description:
      "UKMAC ដឹកនាំបណ្តាញកសិកម្មកម្ពុជា ជាសហភាពកំពូលពាក់កណ្តាលស្វយ័ត ដោយគាំទ្រនវានុវត្តន៍ឆ្លាតវៃ ការកសាងសមត្ថភាព និងខ្សែច្រវាក់តម្លៃសកលដែលមានការប្រកួតប្រជែង។",
    imageAlt: "កសិកម្មកម្ពុជាប្រកបដោយចីរភាព",
    indicatorsLabel: "ជ្រើសរើសរូបភាពផ្ទាំងមេ",
    showImage: "បង្ហាញរូបភាពផ្ទាំងមេលេខ {number}",
  },
  stats: {
    items: {
      cooperatives: {
        label: "សហគមន៍សមាជិក",
        description: "សហគមន៍កសិកម្មមូលដ្ឋានរួមគ្នាក្រោមសំឡេងតែមួយ",
      },
      hectares: {
        label: "ហិកតាដាំដុះ",
        description: "ផ្ទៃដីកសិកម្មធំទូលាយ ប្រើវិធីសាស្ត្រចីរភាព និងទិន្នផលខ្ពស់",
      },
      families: {
        label: "គ្រួសារទទួលការគាំទ្រ",
        description: "លើកកម្ពស់ជីវភាព និងធានាតម្លៃសមរម្យសម្រាប់គ្រួសារកសិករ",
      },
      provinces: {
        label: "ខេត្តគ្របដណ្តប់",
        description: "គ្របដណ្តប់តំបន់កសិកម្មសំខាន់ៗនៅទូទាំងកម្ពុជា",
      },
    },
  },
  about: {
    eyebrow: "អត្តសញ្ញាណតាមរដ្ឋធម្មនុញ្ញ",
    title: "សហភាពកសិកម្មកំពូលពាក់កណ្តាលស្វយ័ត",
    introBefore: "សហភាពសហគមន៍កសិកម្មទំនើបកម្ពុជា (UKMAC) ត្រូវបានបង្កើតឡើងស្របតាម",
    lawName: "ច្បាប់ស្តីពីសហគមន៍កសិកម្មនៃព្រះរាជាណាចក្រកម្ពុជា",
    quote:
      "UKMAC ប្តេជ្ញាលើកកម្ពស់កសិកម្មទំនើប ប្រកបដោយចីរភាព និងមានសមត្ថភាពប្រកួតប្រជែង។ តាមរយៈបណ្តាញសហគមន៍កសិកម្ម សហករណ៍ និងសហគ្រាសកសិកម្មជាសមាជិក UKMAC គាំទ្រនវានុវត្តន៍ ការកសាងសមត្ថភាព ការចែករំលែកចំណេះដឹង និងការអភិវឌ្ឍខ្សែច្រវាក់តម្លៃ។",
    description:
      "ក្នុងនាមជាសហភាពកសិកម្មឈានមុខរបស់កម្ពុជា យើងជាស្ពានភ្ជាប់សហគមន៍កសិករមូលដ្ឋានទៅនឹងបច្ចេកវិទ្យាទំនើប បណ្តាញពាណិជ្ជកម្មសកល និងស្តង់ដារអភិបាលកិច្ចទំនើប ដើម្បីឱ្យកសិករកម្ពុជារីកចម្រើនរួមគ្នាក្នុងទីផ្សារអន្តរជាតិ។",
    foundationTitle: "មូលដ្ឋានគ្រឹះតាមច្បាប់",
    legalPoints: [
      {
        title: "ច្បាប់ស្តីពីសហគមន៍កសិកម្ម",
        description:
          "បានចុះបញ្ជីជាផ្លូវការជាសហភាពកំពូលក្រោមព្រះរាជក្រឹត្យនៃព្រះរាជាណាចក្រកម្ពុជា ដើម្បីធានាស្ថានភាពច្បាប់ និងប្រតិបត្តិការរឹងមាំ។",
      },
      {
        title: "សហភាពកំពូលពាក់កណ្តាលស្វយ័ត",
        description:
          "ដំណើរការដោយស្វ័យភាពរដ្ឋបាល ខណៈសហការយ៉ាងជិតស្និទ្ធជាមួយក្រសួង និងដៃគូអភិវឌ្ឍន៍អន្តរជាតិ។",
      },
      {
        title: "ការការពារបណ្តាញសហគមន៍",
        description:
          "បង្កើតគោលនយោបាយការពារកសិករខ្នាតតូច និងសហគមន៍កសិកម្មពីការប្រែប្រួលតម្លៃ និងពាណិជ្ជកម្មមិនយុត្តិធម៌។",
      },
    ],
    disclaimer: "បង្កើតឡើងក្រោមមាត្រា ៤២ នៃច្បាប់ស្តីពីសហគមន៍កសិកម្ម។",
  },
  pillars: {
    eyebrow: "ទិសដៅយុទ្ធសាស្ត្ររបស់យើង",
    title: "សសរស្តម្ភទាំងបីរបស់ UKMAC",
    description:
      "ដឹកនាំសហគមន៍កសិកម្មកម្ពុជាឆ្ពោះទៅរកភាពទំនើបឆ្លាតវៃ ភាពធន់នឹងអាកាសធាតុ និងការចូលទីផ្សារសកលប្រកបដោយការប្រកួតប្រជែង។",
    viewDetails: "មើលព័ត៌មានលម្អិត",
    closeDetails: "បិទព័ត៌មានសសរស្តម្ភ",
    operationalDirective: "ទិសដៅប្រតិបត្តិការ",
    milestonesTitle: "ដំណាក់កាលអនុវត្ត និងស្តង់ដារ",
    acknowledge: "យល់ព្រម",
    items: {
      modern: {
        title: "កសិកម្មទំនើប",
        shortDescription: "បង្កើនប្រសិទ្ធភាពតាមរយៈបច្ចេកវិទ្យា និងប្រព័ន្ធស្វ័យប្រវត្តិ។",
        longDescription:
          "ផ្លាស់ប្តូរកសិកម្មបែបប្រពៃណីទៅជាប្រតិបត្តិការដែលផ្អែកលើទិន្នន័យ។ យើងគាំទ្រការប្រើដ្រូនឆ្លាតវៃ ឧបករណ៍វាស់ដី ប្រព័ន្ធស្រោចស្រពច្បាស់លាស់ និងការតាមដានសត្វល្អិតឌីជីថល។",
        metricLabel: "កំណើនមធ្យមនៃប្រសិទ្ធភាពទិន្នផល",
        highlights: [
          "ឧបករណ៍វាស់ជី NPK និងសំណើមដី IoT",
          "រូបភាពពហុវិសាលគមដំណាំតាមផែនការហោះហើរ",
          "ប្រព័ន្ធបាញ់ថ្នាំ និងជីបានច្បាស់លាស់",
          "កម្មវិធីកត់ត្រាទិន្នន័យលើពពកសម្រាប់សហគមន៍",
        ],
      },
      sustainable: {
        title: "កសិកម្មប្រកបដោយចីរភាព",
        shortDescription: "ធានាអនាគតកសិកម្មតាមរយៈការអនុវត្តដែលមេត្រីនឹងបរិស្ថាន។",
        longDescription:
          "ថែរក្សាដី និងធនធានទឹករបស់កម្ពុជាសម្រាប់ជំនាន់ក្រោយ។ UKMAC លើកកម្ពស់ជីជីវៈ ការគ្រប់គ្រងទឹកដោយថាមពលព្រះអាទិត្យ ពូជដំណាំធន់នឹងអាកាសធាតុ និងការអនុលោមតាមបទដ្ឋានបរិស្ថាន។",
        metricLabel: "ហិកតាប្តូរទៅកសិកម្មអេកូមានវិញ្ញាបនបត្រ",
        highlights: [
          "ការបញ្ជាក់ស្តង់ដារសរីរាង្គ និងផែនទីអនុលោម",
          "ប្រព័ន្ធស្រោចស្រពតំណក់ដោយថាមពលព្រះអាទិត្យ",
          "ពូជស្រូវផ្កាម្លិះធន់នឹងរាំងស្ងួត និងទឹកជំនន់",
          "សហគមន៍កែច្នៃសំណល់កសិកម្មគ្មានកាកសំណល់",
        ],
      },
      competitive: {
        title: "សមត្ថភាពប្រកួតប្រជែងពាណិជ្ជកម្ម",
        shortDescription: "ភ្ជាប់សហគមន៍កសិកម្មទៅកាន់ទីផ្សារសកលតម្លៃខ្ពស់ដោយផ្ទាល់។",
        longDescription:
          "ពង្រឹងសហគមន៍ឱ្យបំពេញស្តង់ដារសកល តាមរយៈកសិកម្មកិច្ចសន្យាផ្ទាល់ ការរៀបចំឃ្លាំងរួម និងការកសាងម៉ាកដំណាំកម្ពុជា ដើម្បីកាត់បន្ថយអន្តរការី។",
        metricLabel: "ទំហំពាណិជ្ជកម្មសហគមន៍សរុប",
        highlights: [
          "គោលការណ៍ដោះស្រាយវិវាទកសិកម្មកិច្ចសន្យា",
          "មជ្ឈមណ្ឌលឃ្លាំងត្រជាក់រួមនៅជិតព្រំដែន",
          "ការភ្ជាប់ដឹកជញ្ជូនទៅស្ថានីយកុងតឺន័រនាំចេញ",
          "សេវាប្រឹក្សាវិញ្ញាបនបត្រ Global GAP",
        ],
      },
    },
  },
  focus: {
    eyebrow: "យុទ្ធសាស្ត្រប្រតិបត្តិការ និងផលប៉ះពាល់",
    title: "ការគាំទ្រគ្រប់ជ្រុងជ្រោយតាមខ្សែច្រវាក់តម្លៃ",
    description:
      "តាមរយៈអន្តរាគមន៍ជាក់លាក់នៅមូលដ្ឋាន UKMAC ជំរុញការអភិវឌ្ឍជាបន្ត ដើម្បីឱ្យប្រតិបត្តិការកសិកម្មមូលដ្ឋានក្លាយជាសហគ្រាសពាណិជ្ជកម្មប្រកបដោយចីរភាព។",
    deliverables: "លទ្ធផលសំខាន់ៗ",
    items: {
      innovations: {
        title: "នវានុវត្តន៍ទំនើប",
        description: "បញ្ចូលបច្ចេកវិទ្យាឆ្លាតវៃ និងទិន្នន័យឌីជីថលទៅក្នុងការងារកសិកម្ម។",
        features: [
          "ការបាញ់ថ្នាំច្បាស់លាស់ និងផែនទីដ្រូនពហុវិសាលគម",
          "បណ្តាញឧបករណ៍វាស់សំណើម និងសារធាតុចិញ្ចឹមដី IoT",
          "កម្មវិធីគណនេយ្យសហគមន៍ និងព្យាករណ៍ទិន្នផល",
        ],
      },
      capacity: {
        title: "ការកសាងសមត្ថភាព",
        description: "បណ្តុះភាពជាអ្នកដឹកនាំ និងជំនាញបច្ចេកទេសក្នុងសហគមន៍សមាជិក។",
        features: [
          "សិក្ខាសាលាគ្រប់គ្រងដំណាំទំនើបដោយអ្នកជំនាញកសិកម្ម",
          "បណ្តុះបណ្តាលការគ្រប់គ្រង ហិរញ្ញវត្ថុ និងអភិបាលកិច្ចសហគមន៍",
          "នីតិវិធីស្តង់ដារ (SOP) សម្រាប់ការប្រមូលផលនាំចេញ",
        ],
      },
      knowledge: {
        title: "ការចែករំលែកចំណេះដឹង",
        description: "បង្កើតបណ្តាញបើកចំហរវាងសហគមន៍ ដើម្បីផ្សព្វផ្សាយការអនុវត្តល្អៗ។",
        features: [
          "ទស្សនកិច្ចផ្លាស់ប្តូររវាងសហគមន៍តាមខេត្ត",
          "បណ្ណាល័យឌីជីថលកណ្តាលសម្រាប់ក្សេត្រសាស្ត្រ និងរោគវិនិច្ឆ័យដំណាំ",
          "ព្រឹត្តិបត្រប្រចាំខែស្តីពីទីផ្សារ និងតម្លៃ",
        ],
      },
      valuechain: {
        title: "ការអភិវឌ្ឍខ្សែច្រវាក់តម្លៃ",
        description: "ភ្ជាប់ផលិតផលពីចម្ការជនបទទៅកាន់តុអ្នកប្រើប្រាស់អន្តរជាតិ។",
        features: [
          "ការទិញធាតុចូលកសិកម្មរួម ដើម្បីកាត់បន្ថយថ្លៃដើម",
          "ហេដ្ឋារចនាសម្ព័ន្ធក្រោយប្រមូលផល ដូចជា ឃ្លាំងត្រជាក់ និងកន្លែងសម្ងួត",
          "កិច្ចសន្យាកសិកម្មផ្ទាល់ជាមួយអ្នកនាំចេញតម្លៃខ្ពស់",
        ],
      },
    },
  },
  network: {
    eyebrow: "កម្លាំង និងវិសាលភាពតាមតំបន់",
    title: "បណ្តាញសហគមន៍កសិកម្មតាមតំបន់",
    description:
      "ស្វែងយល់មជ្ឈមណ្ឌលកសិកម្មសកម្មរបស់ UKMAC។ ចុចលើខេត្ត ដើម្បីមើលដំណាំឯកទេស ចំនួនសហគមន៍ និងគម្រោងទំនើបកម្មមូលដ្ឋាន។",
    mapLabel: "ផែនទីបណ្តាញកសិកម្មកម្ពុជា (គំរូ)",
    tonleSap: "ទន្លេសាប",
    lakeReserve: "តំបន់បឹងអភិរក្ស",
    focusCrop: "ដំណាំអាទិភាព៖ {crop}",
    cooperatives: "សហគមន៍",
    registered: "បានចុះបញ្ជី {count}",
    families: "គ្រួសារ",
    members: "សមាជិក {count}+",
    featuredCommunity: "សហភាពសហគមន៍លេចធ្លោ",
    modernizations: "ទំនើបកម្មយុទ្ធសាស្ត្រ",
    connect: "ទាក់ទងនាយកតំបន់",
    provinces: {
      battambang: {
        name: "បាត់ដំបង",
        cropType: "ស្រូវផ្កាម្លិះគុណភាពខ្ពស់",
        featuredCoop: "សហភាពកសិកម្មថ្មគោល",
        description:
          "បាត់ដំបងល្បីជាជង្រុកស្រូវរបស់កម្ពុជា និងដឹកនាំកម្មវិធីជ្រើសរើសពូជទំនើប និងការប្រើម៉ាស៊ីនប្រមូលផលរួម។",
        initiatives: [
          "ការកៀរដីដោយឡាស៊ែរ ដើម្បីចែកចាយទឹកបានល្អ",
          "ការអភិរក្សពូជស្រូវផ្ការំដួលក្លិនក្រអូប",
          "មជ្ឈមណ្ឌលសេវាបាញ់ថ្នាំដោយដ្រូនទ្រង់ទ្រាយធំ",
        ],
      },
      siem_reap: {
        name: "សៀមរាប",
        cropType: "បន្លែសុវត្ថិភាពសរីរាង្គ",
        featuredCoop: "សហគមន៍សរីរាង្គអង្គរ",
        description:
          "សៀមរាបភ្ជាប់ការអនុវត្តកសិកម្មសុវត្ថិភាពជាមួយវិស័យបដិសណ្ឋារកិច្ច និងជាមជ្ឈមណ្ឌលបន្លែគ្មានសារធាតុគីមី។",
        initiatives: [
          "ប្រព័ន្ធស្រោចស្រពតំណក់ដោយបូមទឹកថាមពលព្រះអាទិត្យ",
          "ផ្ទះសំណាញ់ការពារដំណាំពីកម្តៅខ្លាំង",
          "ខ្សែផ្គត់ផ្គង់ផ្ទាល់ពីចម្ការទៅសណ្ឋាគារ",
        ],
      },
      kampong_cham: {
        name: "កំពង់ចាម",
        cropType: "គ្រាប់ស្វាយចន្ទី និងកាកាវ",
        featuredCoop: "សហគ្រាសស្វាយចន្ទីចម្ការលើ",
        description:
          "ជាមជ្ឈមណ្ឌលសំខាន់សម្រាប់ដំណាំពាណិជ្ជកម្មទិន្នផលខ្ពស់ ដោយផ្តោតលើការកែច្នៃផលិតផលឆៅទៅជាផលិតផលនាំចេញតម្លៃខ្ពស់។",
        initiatives: [
          "អង្គភាពសម្ងួត និងបកសំបកស្វាយចន្ទីក្នុងសហគមន៍",
          "ការធ្វើជីកំប៉ុសឆ្លាតវៃពីសំណល់កសិកម្ម",
          "កម្មវិធីស្តារដីដោយជីធ្យូងជីវៈ",
        ],
      },
      takeo: {
        name: "តាកែវ",
        cropType: "ស្រូវដើមរដូវ និងវារីវប្បកម្ម",
        featuredCoop: "សហគមន៍កសិកម្មត្រាំកក់",
        description:
          "តាកែវឈានមុខក្នុងការដាំស្រូវដើមរដូវវស្សា និងមានរោងម៉ាស៊ីនសហគមន៍ទំនើប ព្រមទាំងវារីវប្បកម្មប្រកបដោយចីរភាព។",
        initiatives: [
          "ជ្រើសរើសពូជដំណាំដើមរដូវធន់នឹងទឹកជំនន់",
          "រោងផលិតជីសរីរាង្គរបស់សហគមន៍",
          "ប្រព័ន្ធតាមដានវារីវប្បកម្មសហគមន៍",
        ],
      },
      kampot: {
        name: "កំពត",
        cropType: "ម្រេចកំពត GI និងទុរេន",
        featuredCoop: "សហគមន៍ម្រេចភ្នំវល្លិ៍",
        description:
          "កំពតជាទឹកដីម្រេចសម្គាល់ភូមិសាស្ត្រដ៏ល្បីលើពិភពលោក។ UKMAC ការពារស្តង់ដារខ្ពស់ និងគាំទ្រការកសាងម៉ាកសកល។",
        initiatives: [
          "ប្រព័ន្ធស្រោចស្រពតំណក់ខ្នាតតូចសម្រាប់ភាពធន់នឹងកង្វះទឹក",
          "ការតាមដានប្រភពផលិតផល និងស្លាកសញ្ញាឌីជីថល",
          "ការបណ្តុះបណ្តាលវេចខ្ចប់ និងទីផ្សារនាំចេញគុណភាពខ្ពស់",
        ],
      },
    },
  },
  timeline: {
    eyebrow: "ព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រ និងកំណើន",
    title: "ដំណើរនៃកិច្ចសហប្រតិបត្តិការ",
    description:
      "ពីសម្ព័ន្ធកសិករខ្នាតតូចតាមតំបន់ ទៅជាស្ថាប័នកំពូលថ្នាក់ជាតិពាក់កណ្តាលស្វយ័ត—បង្ហាញដំណាក់កាលនៃទំនើបកម្មកសិកម្មកម្ពុជា។",
    items: {
      legal: {
        title: "បង្កើតក្របខណ្ឌច្បាប់",
        description:
          "ព្រះរាជាណាចក្រកម្ពុជាអនុម័តច្បាប់ស្តីពីសហគមន៍កសិកម្ម ដើម្បីដាក់មូលដ្ឋានសម្រាប់រចនាសម្ព័ន្ធសហភាពកសិករ។",
      },
      consolidation: {
        title: "ការរួមបញ្ចូលសហភាពតាមតំបន់",
        description:
          "សហគមន៍កសិកម្មតាមខេត្តចាប់ផ្តើមរួមគ្នាជាសហភាព ដើម្បីសម្របសម្រួលការដឹកជញ្ជូន និងអំណាចចរចា។",
      },
      inception: {
        title: "ការបង្កើត UKMAC",
        description:
          "UKMAC ត្រូវបានបង្កើតជាសហភាពកំពូលពាក់កណ្តាលស្វយ័ត ដើម្បីរួមបញ្ចូលសហគមន៍សមាជិកក្រោមបេសកកម្មជាតិតែមួយ។",
      },
      smart: {
        title: "ចាប់ផ្តើមកសិកម្មឆ្លាតវៃ",
        description:
          "ដាក់ឱ្យដំណើរការផែនទីបង្ហាញផ្លូវកសិកម្មឌីជីថល ដោយណែនាំដ្រូនពហុវិសាលគម និងកម្មវិធីអាជីវកម្មសហគមន៍។",
      },
      global: {
        title: "ពង្រីកខ្សែផ្គត់ផ្គង់សកល",
        description:
          "ពង្រីកហេដ្ឋារចនាសម្ព័ន្ធក្រោយប្រមូលផល និងការនាំចេញផលិតផលអេកូដោយផ្ទាល់ទៅទីផ្សារតម្លៃខ្ពស់នៅអាស៊ី អឺរ៉ុប និងអាមេរិក។",
      },
    },
  },
  contact: {
    eyebrow: "ការចូលរួមសហគមន៍",
    title: "ចូលរួមបណ្តាញសហភាព",
    description:
      "យើងសូមអញ្ជើញសហគមន៍កសិកម្មដែលបានចុះបញ្ជី សហករណ៍ឯករាជ្យ និងសហគ្រាសកសិកម្មអេកូនៅទូទាំងកម្ពុជា ចូលរួមបណ្តាញជាតិរបស់យើង។",
    partnershipBefore: "តើអ្នកជាអ្នកជំនាញកសិកម្ម អ្នកស្រាវជ្រាវ ឬអង្គការអភិវឌ្ឍន៍មែនទេ? សូមសរសេរមក",
    partnershipAfter: "ដើម្បីស្វែងរកកិច្ចសហការយុទ្ធសាស្ត្រ។",
    perks: [
      {
        title: "តំណាងផ្លូវច្បាប់ពេញលេញ",
        description: "ទទួលការតស៊ូមតិពាណិជ្ជកម្មក្រោមច្បាប់ស្តីពីសហគមន៍កសិកម្ម។",
      },
      {
        title: "ការប្រើប្រាស់បច្ចេកវិទ្យាទំនើប",
        description: "ប្រើដ្រូនវិនិច្ឆ័យ និងបណ្តាញឧបករណ៍វាស់សំណើមដីក្នុងតម្លៃសមរម្យ។",
      },
      {
        title: "ការការពារខ្សែច្រវាក់តម្លៃ",
        description: "ទទួលបានបណ្តាញនាំចេញផ្ទាល់ និងកាត់បន្ថយអន្តរការី។",
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
        "ពិពណ៌នាអំពីទំហំផលិតកម្ម ដំណាំ និងសេវា UKMAC ដែលអ្នកត្រូវការបំផុត ដូចជា នវានុវត្តន៍ ខ្សែច្រវាក់តម្លៃ ឬការបណ្តុះបណ្តាល...",
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
    preview: "មើលសំណើចូលរួមជាមុន",
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
      "UKMAC ជាសហភាពកសិកម្មកំពូលពាក់កណ្តាលស្វយ័ត ដែលបង្កើតក្រោមច្បាប់ស្តីពីសហគមន៍កសិកម្មនៃព្រះរាជាណាចក្រកម្ពុជា ដើម្បីពង្រឹងសហគមន៍ដោយបច្ចេកវិទ្យាឆ្លាតវៃ និងការចូលទីផ្សារសកលដោយផ្ទាល់។",
    legal:
      "ការចុះបញ្ជីសហភាពជាផ្លូវការ ស្របតាមព្រះរាជក្រឹត្យ និងបទប្បញ្ញត្តិរបស់ក្រសួងកសិកម្ម រុក្ខាប្រមាញ់ និងនេសាទ នៃព្រះរាជាណាចក្រកម្ពុជា។",
    quickNavigation: "តំណភ្ជាប់រហ័ស",
    navigationLabel: "ម៉ឺនុយបាតទំព័រ",
    headquarters: "ទីស្នាក់ការលេខាធិការដ្ឋាន",
    address: "មហាវិថីព្រះនរោត្តម សង្កាត់ទន្លេបាសាក់ ខណ្ឌចំការមន រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា។",
    copyright: "© {year} UKMAC (សហភាពសហគមន៍កសិកម្មទំនើបកម្ពុជា)។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    privacy: "គោលការណ៍ឯកជនភាព",
    statutes: "លក្ខន្តិកៈសហភាព",
    maff: "ក្រសួងកសិកម្ម កម្ពុជា",
    opensNewTab: "(បើកក្នុងផ្ទាំងថ្មី)",
    navItems: {
      hero: "សេចក្តីផ្តើម",
      news: "ព័ត៌មាន និងសេចក្តីជូនដំណឹង",
      about: "អំពីយើង និងអាណត្តិ",
      pillars: "សសរស្តម្ភប្រតិបត្តិការ",
      focus: "យុទ្ធសាស្ត្រអាទិភាព",
      network: "បណ្តាញសហគមន៍",
      timeline: "ព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រ",
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
