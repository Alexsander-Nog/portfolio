import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Douglas Figueirôa. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs">
          <Link href="mailto:figueiroadouglas@gmail.com" className="hover:underline">
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/douglas-figueirôa-1ba2541bb"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/DouglasiOSDeveloper"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://www.instagram.com/douglas.figueiroa/"
            target="_blank"
            className="hover:underline"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
