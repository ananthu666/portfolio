"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Experience</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Professional timeline.
        </h2>

        <div className="mt-14 space-y-8">
          {experience.map((e) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-4 border-l-2 border-signal-ai/40 pl-6 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-display text-xl text-ink-50">{e.org}</p>
                <p className="mt-1 text-sm text-ink-300">{e.role}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-500">
                  {e.period}
                </p>
              </div>
              <div>
                <p className="text-ink-200">{e.summary}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-300">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-ink-600 px-3 py-1 font-mono text-[11px] text-ink-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
