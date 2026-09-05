"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LEADS = [
  {
    name: "ABC Packaging",
    revenue: "₹12,00,000",
    probability: "62%",
    lastContact: "3 days ago",
    analysis: {
      health: "HIGH POTENTIAL",
      action: "Follow up with the decision maker.",
      reason: "High expected value combined with recent engagement.",
    },
  },
  {
    name: "Meridian Textiles",
    revenue: "₹4,50,000",
    probability: "28%",
    lastContact: "17 days ago",
    analysis: {
      health: "AT RISK",
      action: "Re-engage or mark as a lost opportunity.",
      reason: "Low probability and no contact in over two weeks.",
    },
  },
  {
    name: "Orion Logistics",
    revenue: "₹31,00,000",
    probability: "80%",
    lastContact: "Today",
    analysis: {
      health: "READY TO CLOSE",
      action: "Send the final quotation this week.",
      reason: "High probability, active contact, large deal size.",
    },
  },
];

export default function Playground() {
  const [leadIndex, setLeadIndex] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);
  const lead = LEADS[leadIndex];

  const runAnalysis = () => {
    setLoading(true);
    setAnalyzed(false);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 900);
  };

  const selectLead = (i: number) => {
    setLeadIndex(i);
    setAnalyzed(false);
    setLoading(false);
  };

  return (
    <section className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
            What happens when AI meets ERP?
          </p>
          <span className="rounded-full border border-signal-ai/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal-ai">
            Interactive demo
          </span>
        </div>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          AI + Odoo playground
        </h2>
        <p className="mt-4 max-w-xl text-ink-300">
          A simulation over static demo leads — pick one and ask the AI layer to analyze it. No
          real CRM is connected here.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
          <div className="space-y-2">
            {LEADS.map((l, i) => (
              <button
                key={l.name}
                onClick={() => selectLead(i)}
                data-cursor="SELECT"
                className={`block w-full rounded-lg border px-4 py-3 text-left font-mono text-xs transition-colors ${
                  i === leadIndex
                    ? "border-signal-ai text-signal-ai"
                    : "border-ink-700 text-ink-300 hover:border-ink-500"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-ink-700 bg-ink-900/70 p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
              Odoo CRM · demo data
            </p>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl text-ink-50">{lead.name}</h3>
              <span className="font-mono text-sm text-ink-300">{lead.revenue}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 font-mono text-xs text-ink-400 sm:grid-cols-3">
              <div>
                <p className="text-ink-500">Probability</p>
                <p className="mt-1 text-ink-100">{lead.probability}</p>
              </div>
              <div>
                <p className="text-ink-500">Last contact</p>
                <p className="mt-1 text-ink-100">{lead.lastContact}</p>
              </div>
            </div>

            <button
              onClick={runAnalysis}
              data-cursor="RUN"
              disabled={loading}
              className="mt-6 rounded-full bg-signal-ai px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-950 transition-opacity disabled:opacity-60"
            >
              {loading ? "Analyzing…" : "Analyze with AI"}
            </button>

            <AnimatePresence>
              {analyzed && (
                <motion.div
                  initial={{ opacity: 0, y: 8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden rounded-lg border border-signal-ai/30 bg-signal-ai/5 p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-signal-ai">
                    AI analysis
                  </p>
                  <p className="mt-3 font-display text-lg text-ink-50">{lead.analysis.health}</p>
                  <p className="mt-2 text-sm text-ink-200">
                    <span className="text-ink-400">Suggested action — </span>
                    {lead.analysis.action}
                  </p>
                  <p className="mt-1 text-sm text-ink-300">
                    <span className="text-ink-400">Reason — </span>
                    {lead.analysis.reason}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
