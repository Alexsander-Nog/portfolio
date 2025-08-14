import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* fundo sutil com gradiente inspirado na ThiFi */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,#ff4da6_0,transparent_35%),radial-gradient(circle_at_70%_0%,#3b82f6_0,transparent_35%)] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-sm tracking-widest text-zinc-400 uppercase">Portfolio</p>
        <h1 className="mt-3 text-4xl leading-tight font-bold md:text-6xl">
          iOS & Full‑Stack Developer
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          I craft fast, clean apps and web experiences using Swift, SwiftUI, UIKit, Next.js, React
          and Firebase.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="https://github.com/DouglasiOSDeveloper" target="_blank">
              View GitHub
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#projects">See Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume/DouglasFigueiroa_Developer.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
