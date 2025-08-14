import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Let’s work together</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Open to remote iOS positions (US) and full‑stack roles. Available for interviews and code
          reviews.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="mailto:figueiroadouglas@gmail.com"
            className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/douglas-figueirôa-1ba2541bb"
            target="_blank"
            className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/DouglasiOSDeveloper"
            target="_blank"
            className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
