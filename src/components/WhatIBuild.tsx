"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Assemble from "./Assemble";

const CATEGORIES = [
  {
    id: "ai",
    label: "AI",
    accent: "text-signal-ai border-signal-ai/40",
    items: [
      "LLM applications",
      "AI agents",
      "RAG",
      "AI automation",
      "Intelligent document processing",
      "AI-assisted workflows",
    ],
  },
  {
    id: "erp",
    label: "ERP / Odoo",
    accent: "text-signal-erp border-signal-erp/40",
    note: "Odoo — junior / actively developing",
    items: [
      "Odoo fundamentals",
      "Module exploration",
      "ORM",
      "Models & views",
      "Business workflows",
      "Odoo APIs",
      "Customization",
      "ERP integrations",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    accent: "text-signal-automation border-signal-automation/40",
    items: [
      "Workflow automation",
      "Business process automation",
      "Test automation",
      "Scheduled jobs",
      "Notifications",
      "Data synchronization",
    ],
  },
  {
    id: "integration",
    label: "Integration",
    accent: "text-ink-100 border-ink-500",
    items: ["REST APIs", "Python", "Databases", "SharePoint", "Jira", "External services", "Middleware"],
  },
];

export default function WhatIBuild() {
  const [tab, setTab] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === tab)!;

  return (
    <section className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">What I Build</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          A capability map, not a list of buzzwords.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setTab(c.id)}
              data-cursor="VIEW"
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                tab === c.id ? c.accent : "border-ink-700 text-ink-300 hover:border-ink-500"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-10"
          >
            {active.note && (
              <p className="mb-4 inline-block rounded-full border border-signal-erp/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-signal-erp">
                {active.note}
              </p>
            )}
            <Assemble className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" stagger={0.05}>
              {active.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-ink-700 bg-ink-850/50 px-4 py-4 text-sm text-ink-200 transition-colors hover:border-ink-500"
                >
                  {item}
                </div>
              ))}
            </Assemble>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
