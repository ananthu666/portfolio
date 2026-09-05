
import { Project } from "./types";

// Professional work from Nalashaa Solutions.
// Claims are intentionally limited to work that can be explained and verified.
// Add quantified outcomes only when you have a real, defensible figure.
export const projects: Project[] = [
  {
    slug: "ai-requirement-generator",
    title: "AI Requirement & User Story Generator",
    category: "AI & Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "An AI-powered workflow that converts functional specification documents into structured, Jira-ready user stories.",
    problem:
      "Converting large functional specification documents into individual, well-structured user stories was time-consuming and could vary between writers.",
    solution:
      "Built an AI workflow that processes functional specifications, identifies discrete requirements, and transforms them into a consistent user-story structure suitable for Jira-based development workflows.",
    architecture: [
      { label: "Functional Specification", detail: "Input document" },
      { label: "Document Processing" },
      { label: "AI Requirement Extraction", detail: "Identify discrete requirements" },
      { label: "Structured Generation", detail: "Consistent user-story format" },
      { label: "Jira Integration", detail: "Development-ready output" },
    ],
    technologies: ["Python", "LLM APIs", "Jira API"],
    aiCapabilities: [
      "Document understanding",
      "Requirement extraction",
      "Structured generation",
      "LLM-powered workflow automation",
    ],
    outcome:
      "Automates a significant part of the requirements-to-user-story preparation workflow.",
  },

  {
    slug: "synapse-middleware",
    title: "Enterprise Integration & Data Orchestration Platform",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "A middleware-style integration platform connecting SharePoint, databases, Jira, REST APIs, ERP systems and external web sources.",
    problem:
      "Business data required for workflows was distributed across multiple enterprise systems and external sources, requiring repeated extraction, transformation and synchronization between systems.",
    solution:
      "Built a reusable integration layer for extracting data from multiple sources, transforming and aggregating it, validating the resulting data, and transferring it between source and destination systems.",
    architecture: [
      {
        label: "Enterprise & External Sources",
        detail: "SharePoint, Jira, Database, ERP, REST APIs, Web sources",
      },
      { label: "Extraction Layer" },
      { label: "Transformation & Aggregation" },
      { label: "Validation Layer" },
      { label: "Data Orchestration" },
      {
        label: "Destination Systems",
        detail: "SharePoint, Database, ERP and other APIs",
      },
    ],
    technologies: [
      "Python",
      "REST APIs",
      "SharePoint API",
      "Jira API",
      "SQL",
      "Web Crawling",
    ],
    automationCapabilities: [
      "Data extraction",
      "Data transformation",
      "Data aggregation",
      "Validation",
      "Cross-system synchronization",
      "API integration",
    ],
    outcome:
      "[ADD REAL RESULT — e.g. number of systems connected, workflows automated, or processing time reduced]",
  },

  {
    slug: "enterprise-productivity-automation",
    title: "Enterprise Productivity & Analytics Platform",
    category: "Enterprise Automation",
    status: "PROFESSIONAL",
    summary:
      "An automated reporting platform that collects enterprise data, calculates productivity and quality metrics, and distributes recurring management reports.",
    problem:
      "Productivity, quality and budget information had to be collected from multiple enterprise systems and consolidated before recurring management reporting.",
    solution:
      "Built an automated data pipeline that collects information from connected enterprise systems, calculates business metrics, updates enterprise content, and distributes recurring reports and notifications.",
    architecture: [
      { label: "Enterprise Data Sources", detail: "Operational systems and APIs" },
      { label: "Data Collection Layer", detail: "Scheduled extraction" },
      {
        label: "Processing & KPI Engine",
        detail: "Productivity, quality and budget metrics",
      },
      {
        label: "Enterprise Content Update",
        detail: "Automated data publishing",
      },
      {
        label: "Reporting & Notifications",
        detail: "Scheduled distribution",
      },
    ],
    technologies: ["Python", "REST APIs", "SQL", "Power BI"],
    automationCapabilities: [
      "Automated data collection",
      "KPI calculation",
      "Data processing",
      "Automated reporting",
      "Notification delivery",
      "Scheduled workflows",
    ],
    outcome:
      "[ADD REAL RESULT — e.g. reporting time saved, reporting frequency, or number of data sources]",
  },

  {
    slug: "m365-power-automate-workflows",
    title: "Microsoft 365 & Power Automate Workflow Automation",
    category: "Enterprise Automation",
    status: "PROFESSIONAL",
    summary:
      "Business workflow automation using Microsoft 365 and Power Automate to connect applications, notifications and email processes.",
    problem:
      "Several business processes depended on manual handoffs, including notifications, email communication and movement of information between applications.",
    solution:
      "Designed and implemented Power Automate workflows that respond to business events, connect Microsoft 365 services and automate downstream notification and email processes.",
    architecture: [
      { label: "Business Event / Trigger" },
      { label: "Power Automate Workflow" },
      {
        label: "Microsoft 365 Services",
        detail: "Connected business applications",
      },
      { label: "Business Logic / Handoff" },
      { label: "Notification & Email Delivery" },
    ],
    technologies: ["Power Automate", "Microsoft 365", "Webhooks"],
    automationCapabilities: [
      "Cross-application workflows",
      "Event-driven automation",
      "Notification automation",
      "Email automation",
      "Microsoft 365 integration",
    ],
    outcome:
      "[ADD REAL RESULT — e.g. workflows automated, users/processes covered, or manual steps removed]",
  },

  {
    slug: "phishing-awareness-automation",
    title: "Phishing Awareness & Notification Automation",
    category: "Enterprise Automation",
    status: "PROFESSIONAL",
    summary:
      "Internal automation for phishing-awareness exercises, organization-wide notifications, acknowledgement tracking and document workflows.",
    problem:
      "Security-awareness exercises required tracking notifications, user acknowledgements and follow-up actions across the organization.",
    solution:
      "Built internal automation to support phishing-awareness tracking, organization-wide notification workflows, acknowledgement tracking and related document-processing activities.",
    architecture: [
      { label: "Awareness Exercise Trigger" },
      { label: "Notification Workflow" },
      { label: "User Interaction / Acknowledgement" },
      { label: "Tracking & Status Processing" },
      { label: "Automated Follow-up / Document Processing" },
    ],
    technologies: ["Python", "Email Automation", "Power Automate"],
    automationCapabilities: [
      "Security-awareness tracking",
      "Organization-wide notifications",
      "Acknowledgement tracking",
      "Email automation",
      "Document processing",
    ],
    outcome:
      "[ADD REAL RESULT — e.g. number of recipients, acknowledgements tracked, or manual steps automated]",
  },

  {
    slug: "blazor-to-nextjs-modernization",
    title: "Legacy Application Modernization: Blazor/.NET → Next.js & .NET 10",
    category: "Software Modernization",
    status: "PROFESSIONAL",
    summary:
      "Modernized a legacy Blazor/.NET application to a Next.js frontend and .NET 10 backend using AI-assisted development techniques.",
    problem:
      "A legacy Blazor/.NET application required modernization to a contemporary frontend and backend stack while minimizing development time and disruption to the existing roadmap.",
    solution:
      "Used AI-assisted development tools to accelerate the migration, translating and restructuring frontend components and application logic into Next.js while upgrading the backend to .NET 10.",
    architecture: [
      { label: "Legacy Blazor / .NET Application" },
      {
        label: "AI-Assisted Development",
        detail: "Code analysis, translation and restructuring",
      },
      { label: "Next.js Frontend" },
      { label: ".NET 10 Backend" },
      { label: "Modernized Application" },
    ],
    technologies: ["Next.js", ".NET 10", "C#", "AI Coding Assistants"],
    aiCapabilities: [
      "AI-assisted code translation",
      "Codebase analysis",
      "Development acceleration",
    ],
    outcome:
      "Completed the application migration in three days using AI-assisted development techniques.",
  },
];
