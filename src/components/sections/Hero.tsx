"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 40 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
    const nx = x / 100 - 0.5;
    const ny = y / 100 - 0.5;
    setTilt({ x: nx * 10, y: ny * 10 });
  }

  const chips = t.raw("chips") as string[];
  const skills = [
    "Python",
    "Flask",
    "JavaScript",
    "Java",
    "C",
    "MySQL",
    "Power Apps",
    "Power Automate",
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-[#1a1a1a] px-4 text-[#f5f5f5]"
    >
      {/* Fundo com bordô + dourado suave */}
      <div className="animate-gradientShift pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(128,0,32,0.4)_0%,transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(184,134,11,0.35)_0%,transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(600px 300px at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,.05), transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 pt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:pt-16 lg:gap-12 lg:pt-16">
        <div className="animate-in fade-in slide-in-from-left-2 order-2 min-w-0 text-center duration-700 md:order-1 md:text-left">
          <p className="text-[11px] tracking-[0.25em] text-[#e0c097] uppercase">{t("kicker")}</p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-bold text-[#8B0000] md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-balance text-gray-300 md:max-w-[60ch]">{t("desc")}</p>

          {/* Chips */}
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {chips.map((c, i) => (
              <li
                key={i}
                className="rounded-full border border-[#a52a2a]/40 bg-[#8B0000]/80 px-3 py-1 text-sm text-white"
                style={{ animation: "chipFadeIn .5s both", animationDelay: `${150 + i * 70}ms` }}
              >
                {c}
              </li>
            ))}
          </ul>

          {/* Botões */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild size="lg" className="btn-fx bg-[#8B0000] text-white hover:bg-[#a52a2a]">
              <Link href="https://github.com/AlexsanderTG" target="_blank">
                {t("cta.github")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="btn-fx bg-[#a52a2a]/80 text-white hover:bg-[#8B0000]"
            >
              <Link href="#projects">{t("cta.projects")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-fx border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/10"
            >
              <Link href="/resume/Alexsander_Nogueira_Developer.pdf" target="_blank">
                {t("cta.resume_en")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-fx border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/10"
            >
              <Link href="/resume/Alexsander_Nogueira_Desenvolvedor.pdf" target="_blank">
                {t("cta.resume_pt")}
              </Link>
            </Button>
          </div>

          {/* Skills rolando */}
          <div className="mt-8 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee inline-flex items-center text-sm whitespace-nowrap text-gray-400 will-change-transform">
              {skills.map((skill, i) => (
                <span key={i} className="mx-4">
                  {skill}
                </span>
              ))}
              {skills.map((skill, i) => (
                <span key={`repeat-${i}`} className="mx-4">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Imagem com glow bordô */}
        <div className="order-1 -mb-8 flex items-end justify-center md:order-2 md:justify-end lg:-mb-12">
          <div
            aria-hidden
            className="relative z-20 -mr-4 md:mr-0"
            style={{
              transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
              transition: "transform 80ms linear",
            }}
          >
            <div
              className="absolute -inset-24 -z-10 opacity-80"
              style={{
                WebkitMask:
                  "radial-gradient(60% 60% at 50% 45%, black 0%, black 45%, transparent 60%)",
                mask: "radial-gradient(60% 60% at 50% 45%, black 0%, black 45%, transparent 60%)",
                background:
                  "radial-gradient(closest-side, rgba(139,0,0,.2), transparent 70%), conic-gradient(from 0deg, rgba(139,0,0,.25), transparent 30%, rgba(139,0,0,.25) 60%, transparent 80%, rgba(139,0,0,.25))",
                filter: "blur(8px)",
              }}
            />
            <div
              className="absolute -inset-16 -z-10 rounded-[40px] blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 40%, rgba(139,0,0,.3), transparent 70%)",
              }}
            />
            <Image
              src="/Alexs.png"
              alt="Alexsander Nogueira De Jesus"
              width={820}
              height={820}
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="rounded-[28px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,.55)] select-none md:translate-y-6 lg:translate-y-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
