// src/components/sections/About.tsx
export function About() {
  return (
    <section id="about" className="border-border relative overflow-hidden border-t">
      {/* subtle background (matches the Hero vibe) */}
      <div className="about-bg pointer-events-none absolute inset-0 -z-10">
        <div className="bg-accents absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,oklch(0.67_0.13_320/.18),transparent_60%),radial-gradient(900px_500px_at_85%_-20%,oklch(0.65_0.12_250/.16),transparent_55%)]" />
        <div className="bg-vignette absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.145_0_0/.6))]" />
        <div className="about-contrast absolute inset-0" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-20">
        {/* Intro */}
        <div className="animate-in fade-in slide-in-from-left-2 duration-700">
          <span className="text-foreground/60 text-[11px] tracking-[0.25em] uppercase">About</span>
          <h2 className="mt-3 text-3xl leading-tight font-semibold md:text-4xl">
            iOS‑first developer with a solid web foundation
          </h2>
          <p className="text-foreground/80 mt-4 md:max-w-[58ch]">
            Full‑Stack Developer and iOS specialist with <b>5+ years</b> building apps, websites and
            integrations. Experienced with <b>agile teams</b>, <b>payments</b>, <b>SEO/UX</b> and
            cross‑functional collaboration. I work primarily across the Apple ecosystem (Swift,
            SwiftUI, UIKit) and a modern web stack (Next.js, React, TypeScript, Firebase).
          </p>

          {/* Soft skills / qualifications */}
          <div className="mt-6">
            <h3 className="text-foreground/70 mb-3 text-sm font-medium tracking-wide">
              Qualifications & behavioral strengths
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "Clear communication",
                "Ownership & pragmatism",
                "UX & quality focus",
                "Design/PM collaboration",
                "Fast learner",
                "Consistent delivery",
              ].map((item) => (
                <li key={item} className="chip chip--interactive">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="animate-in fade-in slide-in-from-right-2 duration-700">
          <h3 className="text-foreground/70 mb-4 text-sm font-medium tracking-wide">Education</h3>

          <ol className="border-foreground/10 relative ms-3 border-s ps-6">
            <li className="timeline-item">
              <div className="timeline-dot" />
              <article tabIndex={0} className="edu-card group">
                {/* glow on hover/focus */}
                <span aria-hidden className="edu-glow" />
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">B.S. in Computer Science — UCB</p>
                  <span className="text-foreground/60 text-xs">Jan/2019–Jul/2025</span>
                </div>
                <p className="text-foreground/75 mt-1 text-sm">
                  Strong foundations in CS, data structures, networking and software engineering.
                </p>
              </article>
            </li>

            <li className="timeline-item">
              <div className="timeline-dot" />
              <article tabIndex={0} className="edu-card group">
                <span aria-hidden className="edu-glow" />
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">Apple Developer Academy</p>
                  <span className="text-foreground/60 text-xs">Mar/2021–Dec/2022</span>
                </div>
                <p className="text-foreground/75 mt-1 text-sm">
                  Apple platforms development: Swift, SwiftUI, UIKit; product thinking and App Store
                  publishing.
                </p>
              </article>
            </li>

            <li className="timeline-item">
              <div className="timeline-dot" />
              <article tabIndex={0} className="edu-card group">
                <span aria-hidden className="edu-glow" />
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">
                    Postgrad: Innovation & Digital Transformation — Gran College
                  </p>
                  <span className="text-foreground/60 text-xs">Jan/2023–Sep/2025</span>
                </div>
                <p className="text-foreground/75 mt-1 text-sm">
                  Digital strategy, product and business — bridging technology with real impact.
                </p>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
