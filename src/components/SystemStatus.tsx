"use client";

const SYSTEMS = [
  "AI Engine",
  "Automation Layer",
  "Odoo Lab",
  "Integration Layer",
  "Data Systems",
];

export default function SystemStatus() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="rounded-xl border border-ink-700 bg-ink-950/60 p-6 font-mono text-xs">
          <p className="mb-4 uppercase tracking-wider text-ink-500">
            Portfolio system — visual simulation, not production services
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
            {SYSTEMS.map((s) => (
              <div key={s} className="flex items-center justify-between gap-2 text-ink-300">
                <span>{s}</span>
                <span className="text-signal-ai animate-blink">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
