"use client";

import { odooProjects } from "@/data/odoo-projects";
import ProjectCard from "./ProjectCard";
import Assemble from "./Assemble";

export default function OdooLab() {
  return (
    <section id="odoo-lab" className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-signal-erp">
          Independent Engineering Projects
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Odoo Lab
        </h2>
        <p className="mt-4 max-w-xl text-ink-300">
          Exploring Odoo by building practical ERP systems and connecting them with AI, Python,
          APIs and automation. These are self-directed learning projects, not client work.
        </p>

        <Assemble className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {odooProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </Assemble>
      </div>
    </section>
  );
}
