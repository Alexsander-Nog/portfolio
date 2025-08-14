export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-8">
          <Item
            title="iOS Mobile Developer — Creative Pack (Hapvida)"
            period="Jun 2022 – Jun 2023"
            bullets={[
              "Worked with innovation team to refine user journeys and features.",
              "Built digital prescription features improving patient control and doctor monitoring.",
            ]}
          />
          <Item
            title="Apple Developer Academy — Application Developer (Training)"
            period="Mar 2021 – Dec 2022"
            bullets={[
              "Selected among 50 spots; developed and shipped multiple Apple platform apps.",
              "Presented in PT/EN to Apple staff and mentors.",
            ]}
          />
          <Item
            title="Manager & Full‑Stack Developer — ThiFi"
            period="Jan 2025 – Present"
            bullets={[
              "Built corporate sites, e‑commerce and dashboards with Next.js/React/Tailwind/Firebase.",
              "Integrations: Google Maps, Instagram, WhatsApp Business; Mercado Pago Transparent Checkout.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Item({ title, period, bullets }: { title: string; period: string; bullets: string[] }) {
  return (
    <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
      <div>
        <h3 className="font-medium">{title}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      <span className="text-xs text-zinc-400">{period}</span>
    </div>
  );
}
