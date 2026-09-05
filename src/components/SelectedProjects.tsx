"use client";

import { selectedProjects } from "@/data/selected-projects";
import ProjectCard from "./ProjectCard";
import Assemble from "./Assemble";

export default function SelectedProjects() {
  return (
    <section className="border-t border-ink-800 bg-ink-850/30 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
          Self-Directed Builds
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          Selected Projects
        </h2>
        <p className="mt-4 max-w-xl text-ink-300">
          Independent projects built outside of work — agentic systems, automation reliability
          engineering, and AI infrastructure.
        </p>

        <Assemble className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </Assemble>
      </div>
    </section>
  );
}
