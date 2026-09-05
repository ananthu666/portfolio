"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Layer = {
  id: string;
  label: string;
  detail: string;
  tech: string[];
  useCase: string;
  accent: "ai" | "erp" | "automation";
};

const LAYERS: Layer[] = [
  {
    id: "ai",
    label: "AI — LLM / Agents",
    detail: "Reasoning, language understanding and decision support sitting above the business logic.",
    tech: ["LLM APIs", "Agent orchestration", "RAG"],
    useCase: "Explaining a sales score or drafting a support reply.",
    accent: "ai",
  },
  {
    id: "python",
    label: "Python",
    detail: "The glue layer — scripts and services that move and shape data between every other layer.",
    tech: ["Python", "pandas", "scheduled jobs"],
    useCase: "Pulling stock-move history out of Odoo for forecasting.",
    accent: "automation",
  },
  {
    id: "integration",
    label: "Integration Layer",
    detail: "Where Python, automation and external systems actually meet — auth, retries, validation.",
    tech: ["REST APIs", "Webhooks", "XML-RPC"],
    useCase: "Syncing an Odoo record to an external database on a schedule.",
    accent: "automation",
  },
  {
    id: "automation",
    label: "Automation",
    detail: "Triggers and scheduled jobs that keep the system running without a human kicking it off.",
    tech: ["Cron / schedulers", "Event triggers", "Notifications"],
    useCase: "Nightly sync job that reconciles inventory counts.",
    accent: "automation",
  },
  {
    id: "odoo",
    label: "Odoo / ERP",
    detail: "The business system of record — CRM, Sales, Inventory, Manufacturing, Helpdesk.",
    tech: ["Odoo ORM", "Odoo modules", "Odoo APIs"],
    useCase: "Reading opportunity data from Odoo CRM for lead scoring.",
    accent: "erp",
  },
  {
    id: "business",
    label: "Business System",
    detail: "CRM, Sales and Inventory working together as one coherent operation.",
    tech: ["Cross-module workflows"],
    useCase: "A quotation in Sales updating stock reservations in Inventory.",
    accent: "erp",
  },
];

const accentClasses: Record<Layer["accent"], string> = {
  ai: "border-signal-ai/40 hover:border-signal-ai text-signal-ai",
  erp: "border-signal-erp/40 hover:border-signal-erp text-signal-erp",
  automation: "border-signal-automation/40 hover:border-signal-automation text-signal-automation",
};

export default function TheSystem() {
  const [active, setActive] = useState<string>(LAYERS[0].id);
  const activeLayer = LAYERS.find((l) => l.id === active)!;

  return (
    <section id="system" className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">The System</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          AI, Python, integration and Odoo — as one stack, not separate tools.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div className="space-y-2">
            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActive(layer.id)}
                data-cursor="VIEW"
                className={cn(
                  "block w-full rounded-lg border bg-ink-900/60 px-5 py-4 text-left transition-colors",
                  layer.id === active
                    ? accentClasses[layer.accent]
                    : "border-ink-700 text-ink-200 hover:border-ink-500"
                )}
              >
                <span className="font-mono text-sm">{layer.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeLayer.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-ink-700 bg-ink-900/80 p-8"
          >
            <p className={cn("font-mono text-xs uppercase tracking-wider", accentClasses[activeLayer.accent].split(" ")[2])}>
              {activeLayer.label}
            </p>
            <p className="mt-4 text-lg text-ink-100">{activeLayer.detail}</p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink-400">
              Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeLayer.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink-400">
              Example use case
            </p>
            <p className="mt-2 text-ink-200">{activeLayer.useCase}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
