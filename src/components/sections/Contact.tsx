import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");
  const chips = t.raw("chips") as string[];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#8B0000]/40 bg-[#1a1a1a] text-[#f5f5f5]"
    >
      {/* Fundo com degradês sutis */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_-10%,#8B0000/.18,transparent_60%),radial-gradient(900px_500px_at_85%_-20%,#a52a2a/.15,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#1a1a1a/80)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-[#e0c097]">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-[#f5f5f5]/80">{t("desc")}</p>

        {/* Chips */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c}
              className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-[#e0c097] shadow-md shadow-black/20"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* Botões de contato */}
        <div className="mt-6 flex flex-wrap gap-3">
          <ContactBtn
            href="mailto:alexsandernogueira2117@gmail.com"
            label={t("buttons.email")}
            icon={<Mail size={16} />}
          />
          <ContactBtn
            href="https://www.linkedin.com/in/alexsander-nogueira-87819477"
            target="_blank"
            label={t("buttons.linkedin")}
            icon={<Linkedin size={16} />}
          />
          <ContactBtn
            href="https://github.com/AlexsanderTG"
            target="_blank"
            label={t("buttons.github")}
            icon={<Github size={16} />}
          />
          <ContactBtn
            href="https://www.instagram.com/alexsno17"
            target="_blank"
            label={t("buttons.instagram")}
            icon={<Instagram size={16} />}
          />
          <ContactBtn
            href={
              "https://wa.me/61994524393?text=Hello Alexsander! I'm Interested in your work. Let's chat!"
            }
            target="_blank"
            label={t("buttons.whatsapp")}
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
  return (
    <Link
      href={href}
      target={target}
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-xl border border-[#8B0000]/50 bg-[#2a2a2a] px-4 py-2 text-sm text-[#f5f5f5] shadow-md shadow-black/30 transition-colors hover:bg-[#a52a2a] hover:text-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e0c097]/60"
    >
      <span className="text-[#e0c097] transition-transform group-hover:scale-110">{icon}</span>
      {label}
    </Link>
  );
}
