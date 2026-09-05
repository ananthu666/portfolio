"use client";

import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import GithubActivity from "./GithubActivity";

export default function RecruiterView() {
  return (
    <section id="recruiter" className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="rounded-2xl border border-ink-700 bg-ink-850/60 p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-wider text-signal-ai">Quick Profile</p>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr_1fr]">
            <div>
              <h3 className="font-display text-3xl text-ink-50">{profile.title}</h3>
              <p className="mt-1 font-mono text-sm text-ink-400">{profile.experienceYears} experience</p>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink-500">Focus</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["AI", "Automation", "Python", "APIs", "Odoo / ERP"].map((f) => (
                  <span key={f} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-ink-200">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">Current</p>
              <p className="mt-2 text-ink-100">{profile.currentOrg}</p>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                Building toward
              </p>
              <p className="mt-2 text-ink-100">AI + ERP + Enterprise Automation</p>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                Location
              </p>
              <p className="mt-2 text-ink-100">
                {socials.location} <span className="text-ink-500">— {socials.openTo}</span>
              </p>
            </div>

            <GithubActivity />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="rounded-full bg-signal-ai px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-950"
            >
              View Resume
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="rounded-full border border-ink-600 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
            >
              LinkedIn
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="rounded-full border border-ink-600 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
            >
              GitHub
            </a>
            <a
              href="#contact"
              data-cursor="TALK"
              className="rounded-full border border-ink-600 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-100 hover:border-signal-ai hover:text-signal-ai"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
