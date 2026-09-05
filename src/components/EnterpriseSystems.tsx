"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Assemble from "./Assemble";

export default function EnterpriseSystems() {
  return (
    <section id="enterprise-systems" className="border-t border-ink-800 py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
          Enterprise Systems — Professional Work
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          What I&apos;ve actually shipped at work.
        </h2>
        <p className="mt-4 max-w-xl text-ink-300">
          Real systems from professional experience — automation, integration and AI-assisted
          tooling built to remove repetitive work from a team&apos;s day.
        </p>

        <Assemble className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </Assemble>
      </div>
    </section>
  );
}
