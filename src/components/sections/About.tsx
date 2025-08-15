import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");
  const quals = t.raw("quals") as string[];

  return (
    <section id="about" className="border-border relative overflow-hidden border-t">
      <div className="about-bg pointer-events-none absolute inset-0 -z-10">
        <div className="bg-accents absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,oklch(0.67_0.13_320/.18),transparent_60%),radial-gradient(900px_500px_at_85%_-20%,oklch(0.65_0.12_250/.16),transparent_55%)]" />
        <div className="bg-vignette absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.145_0_0/.6))]" />
        <div className="about-contrast absolute inset-0" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-20">
        {/* Intro */}
        <div className="animate-in fade-in slide-in-from-left-2 duration-700">
          <span className="text-foreground/60 text-[11px] tracking-[0.25em] uppercase">
            {t("kicker")}
          </span>

          <h2 className="mt-3 text-3xl leading-tight font-semibold md:text-4xl">{t("title")}</h2>

          {/* >>> FIX: usar t.rich ao invés de dangerouslySetInnerHTML <<< */}
          <p className="text-foreground/80 mt-4 md:max-w-[58ch]">
            {t.rich("desc", {
              // Você pode estilizar o <b> aqui se quiser
              b: (chunks) => <b className="font-semibold">{chunks}</b>,
            })}
          </p>

          {/* Soft skills / qualifications */}
          <div className="mt-6">
            <h3 className="text-foreground/70 mb-3 text-sm font-medium tracking-wide">
              {t("qualsTitle")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {quals.map((item) => (
                <li key={item} className="chip chip--interactive">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="animate-in fade-in slide-in-from-right-2 duration-700">
          <h3 className="text-foreground/70 mb-4 text-sm font-medium tracking-wide">
            {t("eduTitle")}
          </h3>

          <ol className="border-foreground/10 relative ms-3 border-s ps-6">
            {(["ucb", "academy", "post"] as const).map((k) => (
              <li key={k} className="timeline-item">
                <div className="timeline-dot" />
                <article tabIndex={0} className="edu-card group">
                  <span aria-hidden className="edu-glow" />
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{t(`edu.${k}.title`)}</p>
                    <span className="text-foreground/60 text-xs">{t(`edu.${k}.period`)}</span>
                  </div>
                  <p className="text-foreground/75 mt-1 text-sm">{t(`edu.${k}.desc`)}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
