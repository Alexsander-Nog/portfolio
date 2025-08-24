import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-[#a52a2a] bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="text-xs text-[#f5f5f5]/70">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-[#e0c097]">Alexsander Nogueira</span>. {t("rights")}
        </p>
        <div className="flex items-center gap-5 text-xs text-[#f5f5f5]">
          <Link
            href="mailto:alexsandernogueira2117@gmail.com"
            className="transition-colors hover:text-[#a52a2a]"
          >
            {t("email")}
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexsander-nogueira-87819477"
            target="_blank"
            className="transition-colors hover:text-[#a52a2a]"
          >
            {t("linkedin")}
          </Link>
          <Link
            href="https://github.com/AlexsanderTG"
            target="_blank"
            className="transition-colors hover:text-[#a52a2a]"
          >
            {t("github")}
          </Link>
          <Link
            href="https://www.instagram.com/alexsno17"
            target="_blank"
            className="transition-colors hover:text-[#a52a2a]"
          >
            {t("instagram")}
          </Link>
          <Link
            href="https://wa.me/61994524393?text=Hello Alexsander! I'm Interested in your work. Let's chat!"
            target="_blank"
            className="transition-colors hover:text-[#a52a2a]"
          >
            {t("whatsapp")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
