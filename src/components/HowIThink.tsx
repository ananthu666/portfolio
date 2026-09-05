"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  "Start with the business problem.",
  "Design the workflow before the prompt.",
  "Use deterministic logic where deterministic logic is better.",
  "Use AI where reasoning, language or ambiguity adds value.",
  "Connect AI to real business data.",
  "Keep humans in the loop for important decisions.",
  "Design for reliability, observability and failure handling.",
];

export default function HowIThink() {
  return (
    <section className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">How I Think</p>
        <h2 className="mt-3 max-w-xl text-balance font-display text-4xl font-medium leading-tight text-ink-50 md:text-5xl">
          AI is the brain. The system is everything around it.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
              className="flex gap-4 border-b border-ink-800 pb-6"
            >
              <span className="font-mono text-sm text-ink-500">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg text-ink-100">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
