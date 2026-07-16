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
    joinNetwork: "Contact UKMAC",
    items: {
      home: "Home",
      about: "About Us",
      news: "Announcements",
      projects: "Projects & Activities",
      gallery: "Gallery",
      contact: "Contact",
    },
    aboutMenu: {
      background: "Organization Background",
      visionMission: "Vision and Mission",
      objectives: "Objectives",
      leadership: "Leadership & Management",
      members: "Member Benefits",
      structure: "Organizational Structure",
      documents: "Documents",
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
  home: {
    about: {
      eyebrow: "About UKMAC",
      title: "Local ownership, strengthened by national support.",
      description:
        "UKMAC is a non-profit institution that unites Modern Agricultural Cooperatives across Cambodia. It helps member communities strengthen governance, coordinate production, access finance, and negotiate better markets together.",
      learnMore: "Learn more about UKMAC",
      imageAlt: "Modern Agricultural Cooperative members working together",
    },
    projects: {
      eyebrow: "Projects & Activities",
      title: "Practical work across the cooperative network",
      description:
        "Our activities connect local production with shared technical support, stronger markets, and more valuable agricultural products.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "UKMAC in the field",
      description:
        "A visual record of cooperative production, shared learning, community activity, and agricultural progress.",
      imageFallbackAlt: "UKMAC agricultural activity",
    },
  },
  documents: {
    eyebrow: "Documents",
    title: "Official resources in one place",
    description: "UKMAC — a partnership you can trust.",
    status: "Preparing for publication",
    items: [
      {
        title: "Governance & Statutes",
        description: "Union governance documents and approved constitutional statutes.",
      },
      {
        title: "Reports & Publications",
        description: "Public reports, presentations, and cooperative network publications.",
      },
      {
        title: "Policies & Guidelines",
        description: "Operational policies, standards, and practical guidance for members.",
      },
    ],
  },
  aboutPage: {
    eyebrow: "About UKMAC",
    title: "Built locally. Stronger nationally.",
    description:
      "Discover why UKMAC was created, how the Union serves Modern Agricultural Cooperatives, and the shared structure guiding our work across Cambodia.",
    statsEyebrow: "Union of Modern Agricultural Communities (UKMAC)",
    statsTitle: "Solidify Unity • Expand the Market • Strengthen Management",
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
    title: "What is the Union?",
    description:
      "A non-profit institution established to help strengthen the governance of Modern Agricultural Communities.",
    conclusion:
      "Principle: Maintain local management belonging to the Modern Agricultural Communities + Establish a national-level support system.",
    items: {
      finance: {
        title: "Finance and Governance",
        shortDescription:
          "Strengthen financial discipline, transparency, reporting, and monitoring.",
      },
      business: {
        title: "Crop-based Business Development",
        shortDescription: "Plan, connect with partners, and expand businesses.",
      },
      technology: {
        title: "Agricultural Techniques",
        shortDescription: "Support production, quality, standards, and risk reduction.",
      },
      market: {
        title: "Market and Value Chain",
        shortDescription:
          "Connect buyers, handle contract farming, plan demand, and manage processing.",
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
      {
        title: "Starting Today",
        description: "Embrace the Union as our national supporting institution.",
      },
    ],
  },
  contact: {
    eyebrow: "Build the Future Together",
    title: "Join UKMAC",
    description:
      "Joining UKMAC means building the future of Modern Agricultural Cooperatives and member farmers through shared production, markets, and management.",
    unavailableEyebrow: "Membership Applications",
    unavailableTitle: "Online applications are temporarily unavailable",
    unavailableDescription:
      "We are preparing an approved and secure submission service. In the meantime, please contact the UKMAC Secretariat directly for membership enquiries.",
    unavailableAction: "Email the Secretariat",
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
    importantEyebrow: "Important Announcement",
    importantTitle: "Priority update from UKMAC",
    viewAll: "View all news & announcements",
    listingEyebrow: "UKMAC Updates",
    listingTitle: "News, announcements, and opportunities",
    listingDescription:
      "Browse all published UKMAC notices, organizational news, events, and career opportunities.",
    loadMore: "View more",
    backToHome: "Back to home",
  },
  newsDetail: {
    allUpdates: "All updates",
    gallery: "Photo gallery",
    back: "Back to news & announcements",
    galleryAlt: "{title} gallery image",
    loading: "Loading update...",
    emptyContent: "Article details are not available yet.",
    imageUnavailable: "This article image is unavailable.",
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
      home: "Home",
      about: "About Us",
      news: "News & Announcements",
      projects: "Projects & Activities",
      gallery: "Gallery",
      documents: "Documents",
      contact: "Contact",
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
    joinNetwork: "ទាក់ទង UKMAC",
    items: {
      home: "ទំព័រដើម",
      about: "អំពីយើង",
      news: "សេចក្តីជូនដំណឹង",
      projects: "គម្រោង និងសកម្មភាព",
      gallery: "កម្រងរូបភាព",
      contact: "ទំនាក់ទំនង",
    },
    aboutMenu: {
      background: "ប្រវត្តិអង្គការ",
      visionMission: "ចក្ខុវិស័យ និងបេសកកម្ម",
      objectives: "គោលបំណង",
      leadership: "ភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រង",
      members: "អត្ថប្រយោជន៍សមាជិក",
      structure: "រចនាសម្ព័ន្ធអង្គការ",
      documents: "ឯកសារ",
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
  home: {
    about: {
      eyebrow: "អំពី UKMAC",
      title: "ភាពជាម្ចាស់នៅមូលដ្ឋាន ពង្រឹងដោយការគាំទ្រថ្នាក់ជាតិ",
      description:
        "UKMAC គឺជាស្ថាប័នមិនស្វែងរកប្រាក់ចំណេញ ដែលរួបរួមសហគមន៍កសិកម្មទំនើបនៅទូទាំងកម្ពុជា។ សហភាពជួយសមាជិកពង្រឹងអភិបាលកិច្ច សម្របសម្រួលផលិតកម្ម ទទួលបានហិរញ្ញប្បទាន និងចរចាទីផ្សារកាន់តែប្រសើររួមគ្នា។",
      learnMore: "ស្វែងយល់បន្ថែមអំពី UKMAC",
      imageAlt: "សមាជិកសហគមន៍កសិកម្មទំនើបធ្វើការរួមគ្នា",
    },
    projects: {
      eyebrow: "គម្រោង និងសកម្មភាព",
      title: "ការងារជាក់ស្តែងទូទាំងបណ្តាញសហគមន៍",
      description:
        "សកម្មភាពរបស់យើងភ្ជាប់ផលិតកម្មមូលដ្ឋានជាមួយការគាំទ្របច្ចេកទេសរួម ទីផ្សារកាន់តែរឹងមាំ និងផលិតផលកសិកម្មមានតម្លៃខ្ពស់។",
    },
    gallery: {
      eyebrow: "កម្រងរូបភាព",
      title: "UKMAC នៅតាមមូលដ្ឋាន",
      description:
        "កំណត់ត្រារូបភាពនៃផលិតកម្មសហគមន៍ ការរៀនសូត្ររួម សកម្មភាពមូលដ្ឋាន និងវឌ្ឍនភាពកសិកម្ម។",
      imageFallbackAlt: "សកម្មភាពកសិកម្មរបស់ UKMAC",
    },
  },
  documents: {
    eyebrow: "ឯកសារ",
    title: "ធនធានផ្លូវការនៅកន្លែងតែមួយ",
    description: "UKMAC — ដៃគូដែលអ្នកអាចទុកចិត្តបាន។",
    status: "កំពុងរៀបចំសម្រាប់ការផ្សព្វផ្សាយ",
    items: [
      {
        title: "អភិបាលកិច្ច និងលក្ខន្តិកៈ",
        description: "ឯកសារអភិបាលកិច្ចសហភាព និងលក្ខន្តិកៈដែលបានអនុម័ត។",
      },
      {
        title: "របាយការណ៍ និងការបោះពុម្ពផ្សាយ",
        description: "របាយការណ៍សាធារណៈ បទបង្ហាញ និងការបោះពុម្ពផ្សាយរបស់បណ្តាញសហគមន៍។",
      },
      {
        title: "គោលនយោបាយ និងសេចក្តីណែនាំ",
        description: "គោលនយោបាយប្រតិបត្តិការ ស្តង់ដារ និងសេចក្តីណែនាំជាក់ស្តែងសម្រាប់សមាជិក។",
      },
    ],
  },
  aboutPage: {
    eyebrow: "អំពី UKMAC",
    title: "កសាងនៅមូលដ្ឋាន រឹងមាំនៅថ្នាក់ជាតិ",
    description:
      "ស្វែងយល់ពីមូលហេតុបង្កើត UKMAC របៀបដែលសហភាពបម្រើសហគមន៍កសិកម្មទំនើប និងរចនាសម្ព័ន្ធរួមដែលដឹកនាំការងាររបស់យើងទូទាំងកម្ពុជា។",
    statsEyebrow: "បណ្តាញក្នុងទិដ្ឋភាពសង្ខេបសហភាពសហគមន៍កសិកម្មទំនើប ( UKMAC )",
    statsTitle: "រួមសាមគ្គីភាព • ពង្រីកទីផ្សារ • ពង្រឹងការគ្រប់គ្រង",
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
    title: "សហភាពជាអ្វី?",
    description:
      "ស្ថាប័នមិនស្វែងរកប្រាក់ចំណេញ ដើម្បីជួយពង្រឹងអភិបាលកិច្ចរបស់សហគមន៍កសិកម្មទំនើប",
    conclusion:
      "គោលការណ៍៖ រក្សាការគ្រប់គ្រងនៅមូលដ្ឋានរបស់សហគមន៍កសិកម្មទំនើប + បង្កើតប្រព័ន្ធគាំទ្រកម្រិតជាតិ។",
    items: {
      finance: {
        title: "ហិរញ្ញវត្ថុ និងអភិបាលកិច្ច",
        shortDescription: "ពង្រឹងវិន័យហិរញ្ញវត្ថុ តម្លាភាព ការរាយការណ៍ និងការត្រួតពិនិត្យ",
      },
      business: {
        title: "អភិវឌ្ឍអាជីវកម្មតាមដំណាំ",
        shortDescription: "រៀបចំផែនការ ការភ្ជាប់ដៃគូ និងការពង្រីកអាជីវកម្ម",
      },
      technology: {
        title: "បច្ចេកទេសកសិកម្ម",
        shortDescription: "គាំទ្រផលិតកម្ម គុណភាព ស្តង់ដារ និងការកាត់បន្ថយហានិភ័យ",
      },
      market: {
        title: "ទីផ្សារ និងខ្សែច្រវាក់តម្លៃ",
        shortDescription: "ភ្ជាប់អ្នកទិញ កិច្ចសន្យាផលិតកម្មកសិកម្ម ផែនការតម្រូវការ និងការកែច្នៃ",
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
      {
        title: "ចាប់ពីថ្ងៃនេះ",
        description:
          "ទទួលយក សហភាព ជាស្ថាប័នគាំទ្ររួមថ្នាក់ជាតិ",
      },
    ],
  },
  contact: {
    eyebrow: "រួមគ្នាកសាងអនាគត",
    title: "ចូលរួមជាមួយ UKMAC",
    description:
      "ការចូលរួម UKMAC គឺជាការកសាងអនាគតរបស់សហគមន៍កសិកម្មទំនើប និងកសិករសមាជិក តាមរយៈផលិតកម្ម ទីផ្សារ និងការគ្រប់គ្រងរួម។",
    unavailableEyebrow: "ពាក្យស្នើសុំសមាជិកភាព",
    unavailableTitle: "ការដាក់ពាក្យតាមអនឡាញមិនអាចប្រើបានជាបណ្តោះអាសន្ន",
    unavailableDescription:
      "យើងកំពុងរៀបចំសេវាដាក់ពាក្យដែលមានសុវត្ថិភាព និងទទួលបានការអនុម័ត។ ក្នុងអំឡុងពេលនេះ សូមទាក់ទងលេខាធិការដ្ឋាន UKMAC ដោយផ្ទាល់សម្រាប់ព័ត៌មានសមាជិកភាព។",
    unavailableAction: "ផ្ញើអ៊ីមែលទៅលេខាធិការដ្ឋាន",
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
    importantEyebrow: "សេចក្តីជូនដំណឹងសំខាន់",
    importantTitle: "បច្ចុប្បន្នភាពអាទិភាពពី UKMAC",
    viewAll: "មើលព័ត៌មាន និងសេចក្តីជូនដំណឹងទាំងអស់",
    listingEyebrow: "បច្ចុប្បន្នភាព UKMAC",
    listingTitle: "ព័ត៌មាន សេចក្តីជូនដំណឹង និងឱកាស",
    listingDescription:
      "រកមើលសេចក្តីជូនដំណឹង ព័ត៌មានអង្គការ ព្រឹត្តិការណ៍ និងឱកាសការងាររបស់ UKMAC ដែលបានផ្សព្វផ្សាយទាំងអស់។",
    loadMore: "មើលបន្ថែម",
    backToHome: "ត្រឡប់ទៅទំព័រដើម",
  },
  newsDetail: {
    allUpdates: "បច្ចុប្បន្នភាពទាំងអស់",
    gallery: "កម្រងរូបភាព",
    back: "ត្រឡប់ទៅព័ត៌មាន និងសេចក្តីជូនដំណឹង",
    galleryAlt: "រូបភាពក្នុងកម្រងរបស់ {title}",
    loading: "កំពុងផ្ទុកព័ត៌មាន...",
    emptyContent: "ព័ត៌មានលម្អិតនៃអត្ថបទនេះមិនទាន់មាននៅឡើយទេ។",
    imageUnavailable: "រូបភាពក្នុងអត្ថបទនេះមិនអាចបង្ហាញបានទេ។",
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
      home: "ទំព័រដើម",
      about: "អំពីយើង",
      news: "ព័ត៌មាន និងសេចក្តីជូនដំណឹង",
      projects: "គម្រោង និងសកម្មភាព",
      gallery: "កម្រងរូបភាព",
      documents: "ឯកសារ",
      contact: "ទំនាក់ទំនង",
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
