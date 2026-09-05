import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { selectedProjects } from "@/data/selected-projects";
import { odooProjects } from "@/data/odoo-projects";
import { Project } from "@/data/types";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const ALL: Project[] = [...projects, ...selectedProjects, ...odooProjects];

export function generateStaticParams() {
  return ALL.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = ALL.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

const statusStyles: Record<Project["status"], string> = {
  PROFESSIONAL: "border-signal-ai/40 text-signal-ai",
  "INDEPENDENT PROJECT": "border-signal-erp/40 text-signal-erp",
  "IN PROGRESS": "border-signal-automation/40 text-signal-automation",
  EXPERIMENT: "border-ink-500 text-ink-300",
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink-800 py-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-ink-500">{number}</span>
        <h2 className="font-display text-2xl text-ink-50">{title}</h2>
      </div>
      <div className="mt-5 pl-0 md:pl-9">{children}</div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = ALL.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-6 pb-28 pt-40">
        <Link href="/#odoo-lab" className="font-mono text-xs uppercase tracking-wider text-ink-400 hover:text-signal-ai">
          ← Back
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className={cn("rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider", statusStyles[project.status])}>
            {project.status}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
            {project.category}
          </span>
        </div>

        <h1 className="mt-4 text-balance font-display text-4xl font-medium text-ink-50 md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-ink-300">{project.summary}</p>

        {project.isDemoData && (
          <p className="mt-4 inline-block rounded-full border border-signal-erp/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-signal-erp">
            Demo data
          </p>
        )}

        <Section number="01" title="Problem">
          <p className="text-ink-200">{project.problem}</p>
        </Section>

        <Section number="02" title="System">
          <p className="text-ink-200">{project.solution}</p>
          {project.businessWorkflow && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {project.businessWorkflow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-ink-200">
                    {step}
                  </span>
                  {i < project.businessWorkflow!.length - 1 && <span className="text-ink-600">→</span>}
                </span>
              ))}
            </div>
          )}
        </Section>

        <Section number="03" title="Architecture">
          <div className="space-y-3">
            {project.architecture.map((step, i) => (
              <div key={i} className="flex items-start gap-4 border-l-2 border-ink-700 pl-4">
                <div>
                  <p className="font-mono text-sm text-ink-100">{step.label}</p>
                  {step.detail && <p className="text-xs text-ink-400">{step.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="04" title="Engineering">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-ink-300">
                {t}
              </span>
            ))}
          </div>
          {(project.odooModules || project.integrationPoints) && (
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.odooModules && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">Odoo modules</p>
                  <p className="mt-1 text-sm text-ink-200">{project.odooModules.join(", ")}</p>
                </div>
              )}
              {project.integrationPoints && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">Integration points</p>
                  <p className="mt-1 text-sm text-ink-200">{project.integrationPoints.join(", ")}</p>
                </div>
              )}
            </div>
          )}
        </Section>

        {(project.aiCapabilities || project.aiComponents) && (
          <Section number="05" title="AI">
            <ul className="list-inside list-disc space-y-1 text-ink-200">
              {(project.aiCapabilities || project.aiComponents)!.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}

        {project.automationCapabilities && (
          <Section number="06" title="Automation">
            <ul className="list-inside list-disc space-y-1 text-ink-200">
              {project.automationCapabilities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section number="07" title="Result">
          <p className="text-ink-200">{project.outcome}</p>
          {project.exampleReadout && (
            <div className="mt-5 rounded-lg border border-ink-700 bg-ink-850/50 p-5 font-mono text-sm">
              {project.isDemoData && (
                <p className="mb-3 text-[10px] uppercase tracking-wider text-signal-erp">Demo data</p>
              )}
              <dl className="space-y-2">
                {project.exampleReadout.map((r) => (
                  <div key={r.label} className="flex justify-between gap-4">
                    <dt className="text-ink-500">{r.label}</dt>
                    <dd className="text-right text-ink-100">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
