// src/components/sections/Experience.tsx
"use client";

import { cn } from "@/lib/utils";

type ItemProps = {
  role: string;
  company: string;
  period: string;
  headline: string;
  bullets: string[];
  tech?: string[];
  className?: string;
};

export function Experience() {
  const items: ItemProps[] = [
    {
      role: "iOS Mobile Developer - Contractor",
      company: "Creative Pack (Hapvida) - Remote",
      period: "Jun 2022 – Jun 2023",
      headline: "Shipped health features that improved patient control and doctor monitoring.",
      bullets: [
        "Redesigned key user journeys with the Innovation team, increasing completion rates and reducing friction on critical flows.",
        "Implemented digital prescription and follow‑up, enabling safer hand‑offs between patients and medical staff.",
      ],
      tech: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "HealthKit",
        "Combine",
        "HIG",
        "MVVM / MVVM-C",
        "CocoaPods",
        "Git",
        "Agile",
      ],
    },
    {
      role: "Apple Platforms Application Developer - Training Program",
      company: "Apple Developer Academy - Onsite",
      period: "Mar 2021 – Dec 2022",
      headline:
        "Built and shipped multiple Apple‑platform apps(iPhone, iPad, WatchOs, TvOs, MacOs); strong focus on product and publishing.",
      bullets: [
        "Selected among limited spots; delivered end‑to‑end projects with product thinking and iteration.",
        "Presented demos and technical talks in PT/EN to Apple staff and mentors.",
        "Identified problems and proposed solutions through research using the CBL(Challenge-Based Learning) methodology, developing Apple platform applications in a team of five",
        "Published apps on the App Store, including a Swift Student Challenge winner.",
      ],
      tech: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "Xcode",
        "App Store",
        "Combine",
        "RxSwift",
        "HIG",
        "Unit Testing",
        "MVVM / MVVM-C",
        "VIP / VIPER",
        "CocoaPods",
        "Git",
        "Agile",
        "CBL",
        "Design Thinking",
        "Accessibility",
        "Localization",
        "TestFlight",
        "CoreData",
        "CoreLocation",
        "MapKit",
        "HealthKit",
        "CoreML",
      ],
    },
    {
      role: "Manager & Full‑Stack Developer",
      company: "ThiFi",
      period: "Jan 2025 – Present",
      headline:
        "Led delivery of corporate websites, e‑commerce and dashboards. Combining technology, design, and strategic marketing",
      bullets: [
        "Built SEO‑friendly websites and internal dashboards using a reusable component system.",
        "Integrated Google Maps, Instagram and WhatsApp Business; implemented Mercado Pago Transparent Checkout.",
        "e-commerce platforms, and web applications using Next.js, React, Tailwind CSS, and Firebase",
        "Managed a team of 3 developers, ensuring quality and timely delivery.",
        "Implemented analytics and tracking for performance insights.",
        "Coordinated multidisciplinary teams using agile methodologies.",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Firebase",
        "Mercado Pago",
        "Google Maps",
        "API",
        "SEO",
        "Analytics",
        "Agile",
      ],
    },
  ];

  return (
    <section id="experience" className="border-border relative overflow-hidden border-t">
      {/* fundo sutil para dar continuidade visual com a Hero/About */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,oklch(0.67_0.13_320/.12),transparent_60%),radial-gradient(900px_500px_at_90%_-20%,oklch(0.65_0.12_250/.10),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <div className="mt-8 grid gap-6">
          {items.map((item, i) => (
            <ExperienceItem
              key={item.company + i}
              {...item}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-2 duration-700",
                // leve “stagger”
                i === 1 && "delay-100",
                i === 2 && "delay-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ role, company, period, headline, bullets, tech, className }: ItemProps) {
  return (
    <article
      className={cn(
        "exp-card border-foreground/10 bg-foreground/[0.03] rounded-2xl border p-5 md:p-6",
        className
      )}
    >
      <header className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h3 className="text-lg leading-tight font-semibold">
            {role} <span className="text-foreground/70">— {company}</span>
          </h3>
          <p className="text-foreground/75 mt-1 text-sm">{headline}</p>
        </div>
        <time className="text-foreground/60 text-xs whitespace-nowrap md:pl-6" aria-label="Period">
          {period}
        </time>
      </header>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, idx) => (
          <li key={idx} className="li-dot text-foreground/85 text-sm">
            {b}
          </li>
        ))}
      </ul>

      {!!tech?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="chip border-pink-400/30 text-[11px] text-pink-400">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
