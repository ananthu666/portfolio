"use client";

import { socials } from "@/data/socials";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-800 bg-blueprint py-32">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-5xl font-medium leading-tight text-ink-50 md:text-6xl">
          Build something intelligent.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-ink-300">
          I&apos;m interested in building AI-powered systems, intelligent ERP workflows,
          enterprise automation platforms and software that solves real business problems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${socials.email}`}
            data-cursor="TALK"
            className="rounded-full bg-signal-ai px-7 py-3 font-mono text-xs uppercase tracking-wider text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Let&apos;s talk →
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="rounded-full border border-ink-600 px-7 py-3 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
          >
            LinkedIn →
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="rounded-full border border-ink-600 px-7 py-3 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
          >
            GitHub →
          </a>
          <a
            href={socials.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="rounded-full border border-ink-600 px-7 py-3 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
          >
            View Resume →
          </a>
        </div>

        <p className="mt-8 font-mono text-sm text-ink-400">{socials.email}</p>
      </div>
    </section>
  );
}
