"use client";

import { motion } from "framer-motion";

const LAYERS = [
  "AI Agents",
  "AI Orchestrator",
  "Odoo / APIs / Data",
  "Automation Engine",
  "Business Workflows",
  "Human Decision",
];

export default function FutureSystem() {
  return (
    <section className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
          What I&apos;m Building Toward
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          The Future System
        </h2>
        <p className="mt-4 max-w-xl text-ink-300">
          An engineering direction, not a claim about an existing production platform: intelligent
          enterprise systems that understand business context, automate repetitive workflows, and
          help people make better decisions.
        </p>

        <div className="mt-14 mx-auto flex max-w-md flex-col items-center gap-3">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="w-full"
            >
              <div
                className={`w-full rounded-lg border py-4 text-center font-mono text-xs uppercase tracking-wider ${
                  layer === "Human Decision"
                    ? "border-signal-erp bg-signal-erp/10 text-signal-erp"
                    : "border-ink-600 text-ink-200"
                }`}
              >
                {layer}
              </div>
              {i < LAYERS.length - 1 && (
                <div className="mx-auto h-4 w-px bg-ink-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
