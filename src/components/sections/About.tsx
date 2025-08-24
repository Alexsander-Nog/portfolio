import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");
  const quals = t.raw("quals") as string[];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#8B0000]/30 bg-[#1a1a1a] text-[#f5f5f5]"
    >
      {/* Fundo com bordô e dourado suave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,rgba(139,0,0,0.2),transparent_60%),radial-gradient(900px_500px_at_85%_-20%,rgba(184,134,11,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" />
        <div className="absolute inset-0" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-20">
        {/* Intro */}
        <div className="animate-in fade-in slide-in-from-left-2 duration-700">
          <span className="text-[11px] tracking-[0.25em] text-[#e0c097] uppercase">
            {t("kicker")}
          </span>

          <h2 className="mt-3 text-3xl leading-tight font-semibold text-[#8B0000] md:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-gray-300 md:max-w-[58ch]">
            {t.rich("desc", {
              b: (chunks) => <b className="font-semibold text-[#e0c097]">{chunks}</b>,
            })}
          </p>

          {/* Soft skills / qualifications */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium tracking-wide text-gray-400">
              {t("qualsTitle")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {quals.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#a52a2a]/40 bg-[#8B0000]/80 px-3 py-1 text-sm text-white transition-colors hover:bg-[#a52a2a]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="animate-in fade-in slide-in-from-right-2 duration-700">
          <h3 className="mb-4 text-sm font-medium tracking-wide text-gray-400">{t("eduTitle")}</h3>

          <ol className="relative ms-3 border-s border-[#8B0000]/40 ps-6">
            {(["ucb", "academy", "post"] as const).map((k) => (
              <li key={k} className="timeline-item mb-6">
                {/* Pontinho da timeline */}
                <div className="absolute -ms-[11px] mt-2 h-3 w-3 rounded-full border border-[#e0c097]/60 bg-[#8B0000] shadow-[0_0_10px_#8B0000]" />
                <article
                  tabIndex={0}
                  className="relative rounded-lg border border-[#8B0000]/30 bg-[#2a2a2a]/70 p-4 transition hover:bg-[#2a2a2a]/90"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_top_left,rgba(139,0,0,0.25),transparent_70%)] opacity-0 transition group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-[#f5f5f5]">{t(`edu.${k}.title`)}</p>
                    <span className="text-xs text-gray-400">{t(`edu.${k}.period`)}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">{t(`edu.${k}.desc`)}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
