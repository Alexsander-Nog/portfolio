// src/data/projects.ts
export type ProjectType = "All" | "iOS" | "Web";
export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  summary: string;
  stack: string[];
  tags?: string[]; // Games, Health, Maps, Business, Education, etc.
  featured?: string; // e.g. "Swift Student Challenge • 2022"
  details?: string[]; // bullets shown on “More”
  links: {
    github?: string;
    websites?: string[]; // multiple websites for web projects
  };
};

export const allTags = ["Games", "Health", "Maps", "Business", "Education"] as const;

export const projects: Project[] = [
  {
    id: "hybris",
    title: "Hybris",
    type: "iOS",
    summary: "Casual horror‑themed iPhone game focused on atmosphere and GameCenter integration.",
    stack: ["Swift", "UIKit", "GameKit", "GameCenter"],
    tags: ["Games"],
    links: { github: "https://github.com/DouglasiOSDeveloper/hybris" },
    details: [
      "Immersive feedback loop with adaptive difficulty.",
      "Leaderboard and achievements via GameCenter.",
    ],
  },
  {
    id: "stretch-quest",
    title: "Stretch Quest",
    type: "iOS",
    summary: "Posture and flexibility app with RPG‑like progression and animations.",
    stack: ["SwiftUI", "UIKit"],
    tags: ["Health"],
    links: { github: "https://github.com/DouglasiOSDeveloper/stretch-quest" },
    details: [
      "Gamified routine with streaks and unlockable levels.",
      "Custom animation system and haptics.",
    ],
  },
  {
    id: "iss-tracker",
    title: "ISS Tracker",
    type: "iOS",
    summary: "Track the ISS in real time on a map using Apple frameworks and POP.",
    stack: ["Swift", "CoreLocation", "MapKit"],
    tags: ["Maps", "Education"],
    links: { github: "https://github.com/DouglasiOSDeveloper/iss-tracker" },
    details: [
      "Live position polling and map annotations.",
      "Location permissions and background updates.",
    ],
  },
  {
    id: "wwdc22-ssc",
    title: "WWDC22 SSC",
    type: "iOS",
    summary: "Interactive Swift Playgrounds experience submitted to the Swift Student Challenge.",
    stack: ["Swift", "Playgrounds", "UIKit"],
    tags: ["Education"],
    featured: "Swift Student Challenge • 2022",
    links: {
      github: "https://github.com/DouglasiOSDeveloper/wwdc22-ssc",
      websites: ["https://www.wwdcscholars.com/s/1FECEDDF-94B5-47FB-8D0D-6585A95470A0/2022"],
    },
    details: [
      "Education‑oriented content with interaction patterns.",
      "Focus on accessibility and clear visual language.",
    ],
  },
  {
    id: "genika",
    title: "Genika",
    type: "iOS",
    summary: "Apple Watch + HealthKit companion to visualize routine and health balance.",
    stack: ["SwiftUI", "WatchKit", "HealthKit", "CloudKit"],
    tags: ["Health"],
    links: { github: "https://github.com/DouglasiOSDeveloper/genika" },
    details: [
      "HealthKit data ingestion and privacy‑aware storage.",
      "CloudKit sync and minimal Watch interactions.",
    ],
  },
  {
    id: "dizcarta",
    title: "Dizcarta",
    type: "iOS",
    summary: "Co‑op card‑based game encouraging socialization among young people.",
    stack: ["SwiftUI", "CoreData", "DocC"],
    tags: ["Games", "Education"],
    links: { github: "https://github.com/DouglasiOSDeveloper/dizcarta" },
    details: ["Offline‑first with CoreData.", "Game balancing and UX for group sessions."],
  },
  {
    id: "beauty-platform",
    title: "White‑Label Beauty Platform",
    type: "Web",
    summary:
      "Next.js platform for salons/barbershops with catalog, IG gallery, WhatsApp bookings and Mercado Pago checkout.",
    stack: ["Next.js", "Tailwind", "Firebase", "Mercado Pago"],
    tags: ["Business"],
    links: { github: "https://github.com/AgenciaThifi/wl_salao_barbearia" },
    details: [
      "Serverless functions for booking + notifications.",
      "SEO‑ready pages and IG media ingestion.",
    ],
  },
  {
    id: "falaubs",
    title: "FalaUBS",
    type: "Web",
    summary: "Django web app for public health units with smart vaccine search and booking.",
    stack: ["Django", "HTML", "JS"],
    tags: ["Health", "Business"],
    links: { github: "https://github.com/DouglasiOSDeveloper/falaubs" },
    details: [
      "Search flow optimized for low‑literacy contexts.",
      "Admin panel and CSV import for schedules.",
    ],
  },
  {
    id: "websites",
    title: "Corporate & Institutional Websites",
    type: "Web",
    summary:
      "A collection of responsive websites delivered for multiple clients with strong SEO and performance.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    tags: ["Business"],
    links: {
      websites: [
        "https://odontotubarao.com.br/",
        "https://violet-leopard-139615.hostingersite.com/",
        "https://darkslateblue-goat-822240.hostingersite.com/",
      ],
    },
    details: ["Reusable component library and theming.", "Analytics + on‑page SEO best practices."],
  },
];
