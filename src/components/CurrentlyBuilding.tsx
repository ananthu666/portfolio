"use client";

import { motion } from "framer-motion";
import { learningJourney } from "@/data/experience";

export default function CurrentlyBuilding() {
  return (
    <section className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Currently Building</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Learning Odoo by building, not just studying modules.
        </h2>

        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center">
          {learningJourney.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider ${
                  i === learningJourney.length - 1
                    ? "border-signal-ai bg-signal-ai/10 text-signal-ai"
                    : "border-ink-600 text-ink-200"
                }`}
              >
                {step}
              </span>
              {i < learningJourney.length - 1 && <span className="text-ink-600">→</span>}
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-lg text-ink-200">
          I&apos;m intentionally learning Odoo by building systems rather than only studying
          individual modules. The objective is to understand how real business processes operate
          inside an ERP, then connect those workflows with AI and automation.
        </p>
      </div>
    </section>
  );
}
