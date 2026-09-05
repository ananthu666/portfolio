"use client";

import { motion } from "framer-motion";

const STEPS = ["ODOO", "PYTHON", "APIs", "AUTOMATION", "AI", "INTELLIGENT WORKFLOW"];

export default function ErpEvolution() {
  return (
    <section className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
          From ERP → to Intelligent ERP
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Same ERP. A different amount of thinking layered on top.
        </h2>

        <div className="mt-14 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          {STEPS.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-3 md:flex-col md:items-center"
            >
              <div
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider ${
                  i === STEPS.length - 1
                    ? "border-signal-ai bg-signal-ai/10 text-signal-ai"
                    : "border-ink-600 text-ink-200"
                }`}
              >
                {step}
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-ink-500 md:rotate-0 md:py-1">
                  <span className="hidden md:inline">↓</span>
                  <span className="md:hidden">→</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Traditional ERP</p>
            <p className="mt-3 text-lg text-ink-100">Stores and manages business operations.</p>
          </div>
          <div className="rounded-xl border border-signal-ai/30 bg-ink-900/60 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-signal-ai">Intelligent ERP</p>
            <p className="mt-3 text-lg text-ink-100">
              Understands business data, identifies patterns, assists employees and automates
              repetitive decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
