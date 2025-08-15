// src/components/sections/Contact.tsx
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-border relative overflow-hidden border-t">
      {/* fundo sutil que combina com as outras seções */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,oklch(0.67_0.13_320/.14),transparent_60%),radial-gradient(900px_500px_at_85%_-20%,oklch(0.65_0.12_250/.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.145_0_0/.5))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Let’s work together</h2>

        <p className="text-foreground/80 mt-3 max-w-2xl">
          Open to remote iOS roles (US) and full‑stack work. Available for interviews, contracts and
          code reviews. I speak EN/PT and can relocate to the US. Available for full‑time or
          part‑time positions.
        </p>

        {/* quick facts */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            "Open to US remote",
            "GMT‑3 / UTC-3",
            "English / Português",
            "Developer",
            "iOS",
            "Web",
            "App",
          ].map((c) => (
            <li key={c} className="chip">
              {c}
            </li>
          ))}
        </ul>

        {/* contatos */}
        <div className="mt-6 flex flex-wrap gap-3">
          <ContactBtn
            href="mailto:figueiroadouglas@gmail.com"
            label="Email"
            icon={<Mail size={16} />}
          />
          <ContactBtn
            href="https://linkedin.com/in/douglas-figueirôa-1ba2541bb"
            target="_blank"
            label="LinkedIn"
            icon={<Linkedin size={16} />}
          />
          <ContactBtn
            href="https://github.com/DouglasiOSDeveloper"
            target="_blank"
            label="GitHub"
            icon={<Github size={16} />}
          />
          <ContactBtn
            href={"https://www.instagram.com/douglas.figueiroa/"}
            target="_blank"
            label="Instagram"
            icon={<Instagram size={16} />}
          />
          <ContactBtn
            href={
              "https://wa.me/61982541672?text=Hello Douglas! I'm Interested in your work. Let's chat!"
            }
            target="_blank"
            label="WhatsApp"
            icon={<MessageCircle size={16} />}
          />
        </div>
      </div>
    </section>
  );
}

function ContactBtn({
  href,
  label,
  icon,
  target,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  target?: "_blank";
}) {
  // botão “fantasma” com ótimo contraste em dark/light
  return (
    <Link
      href={href}
      target={target}
      aria-label={label}
      className="contact-btn group border-foreground/12 hover:bg-foreground/[0.06] focus-visible:ring-ring/60 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2"
    >
      <span className="opacity-80 transition-opacity group-hover:opacity-100">{icon}</span>
      {label}
    </Link>
  );
}
