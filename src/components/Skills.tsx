"use client";

import { skillClusters } from "@/data/skills";
import { accentColor } from "@/lib/utils";
import Assemble from "./Assemble";

export default function Skills() {
  return (
    <section className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Skills</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Grouped by what they&apos;re for, not logo soup.
        </h2>

        <Assemble className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillClusters.map((cluster) => (
            <div
              key={cluster.id}
              className="rounded-xl border border-ink-700 bg-ink-850/50 p-6"
              style={{ borderTopColor: accentColor[cluster.accent], borderTopWidth: 2 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg text-ink-50">{cluster.label}</h3>
              </div>
              {cluster.note && (
                <p
                  className="mt-1 font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: accentColor[cluster.accent] }}
                >
                  {cluster.note}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {cluster.items.map((item) => (
                  <li key={item} className="text-sm text-ink-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Assemble>
      </div>
    </section>
  );
}
