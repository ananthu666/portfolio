"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  PROFESSIONAL: "border-signal-ai/40 text-signal-ai",
  "INDEPENDENT PROJECT": "border-signal-erp/40 text-signal-erp",
  "IN PROGRESS": "border-signal-automation/40 text-signal-automation",
  EXPERIMENT: "border-ink-500 text-ink-300",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} data-cursor="OPEN CASE STUDY →">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group flex h-full flex-col justify-between rounded-xl border border-ink-700 bg-ink-850/50 p-6 transition-colors hover:border-ink-500"
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span
              className={cn(
                "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider",
                statusStyles[project.status]
              )}
            >
              {project.status}
            </span>
          </div>
          <h3 className="font-display text-xl font-medium text-ink-50">{project.title}</h3>
          <p className="mt-3 text-sm text-ink-300">{project.summary}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[11px] text-ink-400">
              {t}
              {"  "}·
            </span>
          ))}
        </div>
        <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-ink-200 transition-colors group-hover:text-signal-ai">
          View system →
        </span>
      </motion.article>
    </Link>
  );
}
