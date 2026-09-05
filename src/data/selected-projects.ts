import { Project } from "./types";

// Independent / self-directed projects from the resume's "Selected Projects"
// section — distinct from professional/client work and the Odoo Lab.

export const selectedProjects: Project[] = [
  {
    slug: "agentic-talent-acquisition",
    title: "Agentic Talent Acquisition System",
    category: "Selected Projects",
    status: "INDEPENDENT PROJECT",

    summary:
      "An AI-driven recruitment workflow that transforms a job description into structured hiring requirements, discovers potential candidates, evaluates their fit, and prepares personalized outreach.",

    problem:
      "Recruiters and hiring teams often spend significant time moving between job descriptions, candidate profiles, screening decisions, and outreach. The process becomes repetitive and difficult to scale when multiple roles are open.",

    solution:
      "Built an agentic recruitment pipeline that converts a job description into structured requirements, discovers candidates through browser automation, evaluates candidate-job alignment using LLMs, and generates personalized outreach. The workflow connects these stages into a single sourcing-to-outreach process.",

    architecture: [
      { label: "Job description", detail: "Hiring requirements" },
      { label: "AI requirement analysis", detail: "Structured role criteria" },
      { label: "Candidate discovery", detail: "Automated web research" },
      { label: "Candidate evaluation", detail: "AI-assisted fit analysis" },
      { label: "Outreach generation", detail: "Personalized communication" },
    ],

    technologies: [
      "Python",
      "FastAPI",
      "LLM APIs",
      "Browser automation",
      "SQLite",
    ],

    aiCapabilities: [
      "Job requirement extraction",
      "Candidate-job fit evaluation",
      "Candidate profile analysis",
      "Personalized outreach generation",
    ],

    automationCapabilities: [
      "Candidate discovery workflow", 
      "Multi-stage agent orchestration",
      "Automated screening pipeline",
      "Sourcing-to-outreach workflow",
    ],

    outcome:
      "Working end-to-end prototype demonstrating how AI agents can automate repetitive recruitment operations from role definition through candidate outreach.",

    impact:
      "Demonstrates the potential to reduce repetitive recruiter effort and create a more structured, scalable sourcing workflow.",

    role:
      "Designed and implemented the end-to-end workflow, including AI processing, browser automation, API orchestration, candidate evaluation and persistence.",

    keyLearning:
      "Learned how to design multi-stage AI workflows where deterministic automation and LLM-based reasoning work together instead of relying on a single AI call.",
  },

  {
    slug: "ai-browser-automation-reliability",
    title: "AI Browser Automation Reliability Layer",
    category: "Selected Projects",
    status: "INDEPENDENT PROJECT",

    summary:
      "An engineering reliability layer designed to make AI-driven browser workflows more resilient to changing pages, expired sessions, inconsistent AI outputs, and temporary failures.",

    problem:
      "Browser automation can be fragile in real-world environments. UI elements change, sessions expire, results load asynchronously, and AI-generated outputs may not always follow the expected structure. These failures can interrupt an otherwise working automation workflow.",

    solution:
      "Built reusable reliability mechanisms around AI browser workflows, including dynamic selector discovery, session-expiry detection, lazy-loaded result handling, retry mechanisms, and normalization of inconsistent LLM outputs.",

    architecture: [
      { label: "AI browser workflow", detail: "Automated task execution" },
      { label: "Dynamic element discovery", detail: "Adapt to UI changes" },
      { label: "Session monitoring", detail: "Detect authentication expiry" },
      { label: "Retry & recovery", detail: "Handle temporary failures" },
      { label: "Output normalization", detail: "Standardize AI responses" },
    ],

    technologies: [
      "Python",
      "Browser automation",
      "LLM APIs",
    ],

    aiCapabilities: [
      "LLM output normalization",
      "AI workflow validation",
      "Structured response handling",
    ],

    automationCapabilities: [
      "Dynamic selector discovery",
      "Session-expiry detection",
      "Retry and recovery mechanisms",
      "Lazy-loaded content handling",
      "Workflow failure handling",
    ],

    outcome:
      "Developed a reusable reliability layer that can be applied across browser-automation workflows instead of solving the same failure cases independently in each automation.",

    impact:
      "Improves resilience of AI-driven automation by reducing failures caused by changing web interfaces, temporary connectivity issues, expired sessions and inconsistent AI responses.",

    role:
      "Designed and implemented the reliability mechanisms around AI browser workflows, with a focus on failure detection, recovery and consistent downstream processing.",

    keyLearning:
      "Learned that reliable AI automation requires more than prompting — it needs validation, state management, recovery strategies and deterministic safeguards around probabilistic AI components.",
  },

  {
    slug: "promptos",
    title: "PromptOS — Enterprise AI Orchestration Platform",
    category: "Selected Projects",
    status: "IN PROGRESS",

    summary:
      "An AI infrastructure platform designed to help organizations manage multiple AI models and applications through intelligent routing, semantic caching, persistent context, multi-agent workflows, and centralized usage governance.",

    problem:
      "As organizations adopt multiple AI applications and model providers, AI usage can become fragmented. Teams may repeatedly send similar requests, maintain context separately across applications, struggle to control model costs, and lack a centralized view of AI usage.",

    solution:
      "Designing an AI orchestration layer that sits between enterprise applications and model providers. The platform evaluates incoming requests, routes them to an appropriate model, reuses semantically similar responses where possible, maintains persistent context, coordinates multi-agent workflows, and provides centralized cost and usage visibility.",

    architecture: [
      { label: "Enterprise AI request", detail: "Application input" },
      { label: "Request routing", detail: "Select appropriate model" },
      { label: "Semantic cache", detail: "Reuse similar responses" },
      { label: "Context layer", detail: "Persistent application context" },
      { label: "Agent orchestration", detail: "Coordinate AI workflows" },
      { label: "Usage & governance", detail: "Cost and model visibility" },
    ],

    technologies: [
      "Python",
      "LLM APIs",
      "Vector databases",
      "LangGraph",
    ],

    aiCapabilities: [
      "Intelligent model routing",
      "Semantic prompt caching",
      "Persistent AI context",
      "Multi-agent orchestration",
      "Model-provider abstraction",
    ],

    automationCapabilities: [
      "Automated model selection",
      "Reusable AI workflow orchestration",
      "Centralized AI request management",
      "Usage and cost tracking",
    ],

    outcome:
      "Architecture and core routing logic are in progress, with the platform being designed as a reusable foundation for multiple AI-powered business applications.",

    impact:
      "Designed to reduce unnecessary model usage, improve consistency across AI applications, and give organizations greater control over AI infrastructure and operating costs.",

    role:
      "Designed the platform architecture and core orchestration concepts, including routing, semantic caching, persistent context and multi-agent workflow coordination.",

    keyLearning:
      "Explored the infrastructure challenges that emerge when AI moves from individual prototypes to multiple production applications, particularly model selection, context management, cost control and governance.",
  },
];