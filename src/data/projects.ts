export type Project = {
  id: string;
  title: string;
  type: "iOS" | "Web";
  summary: string;
  stack: string[];
  links: { github?: string; live?: string; appstore?: string };
};

export const projects: Project[] = [
  {
    id: "hybris",
    title: "Hybris",
    type: "iOS",
    summary:
      "Casual horror‑themed iPhone game with immersive atmosphere and GameCenter integration.",
    stack: ["Swift", "UIKit", "GameKit", "GameCenter"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/AppleDeveloperAcademy_InfiniteRunner",
      // appstore: "APPSTORE_LINK_IF_AVAILABLE"
    },
  },
  {
    id: "stretch-quest",
    title: "Stretch Quest",
    type: "iOS",
    summary: "Posture & flexibility app with RPG mechanics and animations.",
    stack: ["SwiftUI", "UIKit"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/AppleDeveloperAcademy_StretchQuest",
    },
  },
  {
    id: "iss-tracker",
    title: "ISS Tracker",
    type: "iOS",
    summary: "Track the ISS in real time on a map using Apple frameworks and POP.",
    stack: ["Swift", "CoreLocation"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/AppleDeveloperAcademy_ISSTracker",
    },
  },
  {
    id: "wwdc22",
    title: "WWDC22 SSC",
    type: "iOS",
    summary:
      "Interactive playground with levels and challenges submitted to Swift Student Challenge.",
    stack: ["Swift", "Playgrounds", "UIKit"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/wwdc-project",
    },
  },
  {
    id: "genika",
    title: "Genika",
    type: "iOS",
    summary: "Apple Watch + HealthKit app to visualize routine and health balance.",
    stack: ["SwiftUI", "WatchKit", "HealthKit", "CloudKit"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/AppleDeveloperAcademy_Genika",
    },
  },
  {
    id: "dizcarta",
    title: "Dizcarta",
    type: "iOS",
    summary: "Cooperative card‑based game fostering socialization among young people.",
    stack: ["SwiftUI", "CoreData", "DocC"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/AppleDeveloperAcademy_Dizcarta",
    },
  },
  {
    id: "wl-salao",
    title: "White‑Label Beauty Platform",
    type: "Web",
    summary:
      "Next.js platform for salons/barbershops with catalog, IG gallery, WhatsApp bookings and MP checkout.",
    stack: ["Next.js", "Tailwind", "Firebase", "Mercado Pago"],
    links: {
      github: "https://github.com/AgenciaThifi/wl_salao_barbearia",
      live: "https://github.com/AgenciaThifi/wl_salao_barbearia", // ajuste quando tiver demo
    },
  },
  {
    id: "falaubs",
    title: "FalaUBS",
    type: "Web",
    summary: "Django web app for public health units with smart vaccine search and booking.",
    stack: ["Django", "HTML", "JS"],
    links: {
      github: "https://github.com/DouglasiOSDeveloper/falaUBS",
    },
  },
];
