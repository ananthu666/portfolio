import { Project } from "./types";

// Independent / self-directed projects from the resume's "Selected Projects"
// section — distinct from client/employer work and from the Odoo Lab.
export const selectedProjects: Project[] = [
  {
    slug: "agentic-talent-acquisition",
    title: "Agentic Talent Acquisition System",
    category: "Selected Projects",
    status: "INDEPENDENT PROJECT",
    summary:
      "An AI-powered recruitment workflow that parses job descriptions, discovers candidates, evaluates fit, and drafts personalized outreach.",
    problem:
      "Sourcing and screening candidates for a role means reading a job description, finding matching candidates, judging fit, and writing outreach — repeated for every open role.",
    solution:
      "Built an agentic pipeline with FastAPI and LLM APIs: one stage parses the job description into structured requirements, another discovers candidates via browser automation, another scores candidate-job fit, and a final stage drafts personalized recruitment messages.",
    architecture: [
      { label: "Job description" },
      { label: "AI parsing", detail: "Structured requirements" },
      { label: "Candidate discovery", detail: "Browser automation" },
      { label: "Fit evaluation", detail: "LLM-scored match" },
      { label: "Personalized outreach", detail: "Generated communication" },
    ],
    technologies: ["Python", "FastAPI", "LLM APIs", "Browser automation", "SQLite"],
    aiCapabilities: ["Job/requirement parsing", "Candidate-fit evaluation", "Personalized message generation"],
    outcome: "Working end-to-end prototype covering the full sourcing-to-outreach pipeline.",
  },
  {
    slug: "ai-browser-automation-reliability",
    title: "AI Browser Automation Reliability",
    category: "Selected Projects",
    status: "INDEPENDENT PROJECT",
    summary:
      "Reliability mechanisms for AI-driven browser workflows — the unglamorous engineering that makes agentic browsing actually work.",
    problem:
      "AI-driven browser agents break constantly in practice: selectors change, sessions expire silently, results load lazily, and LLM outputs come back inconsistent.",
    solution:
      "Built dynamic selector discovery, session-expiry detection, lazy-loaded result handling, retry logic, and normalization of inconsistent LLM outputs — turning a fragile agent into a reliable one.",
    architecture: [
      { label: "AI browser agent" },
      { label: "Dynamic selector discovery" },
      { label: "Session-expiry detection" },
      { label: "Lazy-load handling & retries" },
      { label: "LLM output normalization" },
    ],
    technologies: ["Python", "Browser automation", "LLM APIs"],
    aiCapabilities: ["Output normalization for inconsistent LLM responses"],
    automationCapabilities: ["Retry mechanisms", "Session handling", "Dynamic selector discovery"],
    outcome: "Reliability layer reused across multiple browser-automation workflows.",
  },
  {
    slug: "promptos",
    title: "PromptOS — AI Orchestration Platform",
    category: "Selected Projects",
    status: "IN PROGRESS",
    summary:
      "An AI orchestration platform with intelligent model routing, semantic prompt caching, persistent context and multi-agent workflows.",
    problem:
      "Running multiple AI features across multiple providers means repeated cost, no shared context between calls, and no central view of what's actually being spent or used.",
    solution:
      "Designing a platform that routes each request to the right model, caches semantically similar prompts, keeps persistent context across calls, coordinates multi-agent workflows, and centralizes cost analytics and AI-provider governance.",
    architecture: [
      { label: "Incoming AI request" },
      { label: "Intelligent model routing" },
      { label: "Semantic prompt cache" },
      { label: "Persistent context store" },
      { label: "Multi-agent orchestration" },
      { label: "Cost analytics & governance" },
    ],
    technologies: ["Python", "LLM APIs", "Vector databases", "LangGraph"],
    aiCapabilities: ["Model routing", "Semantic caching", "Multi-agent orchestration"],
    outcome: "In design — architecture and core routing logic in progress.",
  },
];
