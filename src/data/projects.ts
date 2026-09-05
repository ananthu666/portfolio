import { Project } from "./types";

// Real professional work from Nalashaa Solutions. Copy is drawn directly from
// the resume — nothing invented. Replace [ADD REAL RESULT] with a verified
// figure if you want to quantify outcomes later.
export const projects: Project[] = [
  {
    slug: "ai-requirement-generator",
    title: "AI Requirement / User Story Generator",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "An AI workflow that converts functional specifications into structured, issue-tracking-ready user stories.",
    problem:
      "Turning long functional specification documents into individual, well-formed user stories for Jira was slow and inconsistent across writers.",
    solution:
      "An AI pipeline reads the FSD, extracts discrete requirements, and restructures each one into a consistent user-story format — improving the requirements-to-development pipeline.",
    architecture: [
      { label: "Functional Spec Document" },
      { label: "AI extraction", detail: "Requirement identification" },
      { label: "Structuring", detail: "Consistent user-story format" },
      { label: "Jira", detail: "Ready for grooming" },
    ],
    technologies: ["Python", "LLM APIs", "Jira API"],
    aiCapabilities: ["Document understanding", "Requirement extraction", "Structured generation"],
    outcome: "In active use for converting specs into development-ready user stories.",
  },
  {
    slug: "synapse-middleware",
    title: "Enterprise Integration Platform",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "A middleware-style platform connecting SharePoint, databases, Jira, REST APIs, ERP systems and web-crawled sources.",
    problem:
      "Data relevant to a single workflow was scattered across SharePoint, Jira, a database, ERP systems and external web sources, with no single layer keeping them in sync.",
    solution:
      "Built a middleware layer covering extraction, transformation, aggregation, validation and source-to-destination transfer across every connected system.",
    architecture: [
      { label: "SharePoint ↔ Database ↔ Jira ↔ REST APIs ↔ ERP ↔ Web sources" },
      { label: "Extraction" },
      { label: "Transformation & aggregation" },
      { label: "Validation" },
      { label: "Source-to-destination transfer" },
    ],
    technologies: ["Python", "REST APIs", "SharePoint API", "Jira API", "SQL", "Web crawling"],
    automationCapabilities: ["Extraction", "Transformation", "Aggregation", "Validation", "Synchronization"],
    outcome: "[ADD REAL RESULT]",
  },
  {
    slug: "enterprise-productivity-automation",
    title: "Enterprise Productivity & Analytics Platform",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "Collects data from enterprise systems, calculates productivity, quality and budget metrics, and distributes recurring reports automatically.",
    problem:
      "Productivity, quality and budget metrics had to be pulled together by hand from multiple enterprise systems before every management report.",
    solution:
      "Built a platform that collects the underlying data on a schedule, calculates the metrics, updates enterprise content systems, and distributes recurring management reports and notifications — removing the manual reporting step.",
    architecture: [
      { label: "Enterprise systems", detail: "Source data" },
      { label: "Python collector layer" },
      { label: "Metric calculation", detail: "Productivity, quality, budget" },
      { label: "Enterprise content systems", detail: "Updated automatically" },
      { label: "Reports & notifications", detail: "Distributed on schedule" },
    ],
    technologies: ["Python", "REST APIs", "SQL", "Power BI"],
    automationCapabilities: ["Data collection", "KPI calculation", "Automated reporting", "Notification delivery"],
    outcome: "[ADD REAL RESULT]",
  },
  {
    slug: "m365-power-automate-workflows",
    title: "Microsoft 365 & Power Automate Workflows",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "Automated workflows built on Microsoft 365 and Power Automate connecting business applications, notifications and email processes.",
    problem:
      "Several business processes — notifications, email workflows, cross-app handoffs — depended on someone manually triggering the next step.",
    solution:
      "Built low-code automated workflows in Power Automate across Microsoft 365 services to connect business applications and trigger notification and email workflows automatically.",
    architecture: [
      { label: "Business application event" },
      { label: "Power Automate flow" },
      { label: "Microsoft 365 services" },
      { label: "Notification / email delivery" },
    ],
    technologies: ["Power Automate", "Microsoft 365", "Webhooks"],
    automationCapabilities: ["Cross-app workflow automation", "Notification workflows", "Email automation"],
    outcome: "[ADD REAL RESULT]",
  },
  {
    slug: "phishing-awareness-automation",
    title: "Phishing Awareness & Notification Automation",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "Internal automation for phishing-awareness tracking, organization-wide notifications, acknowledgement tracking and document processing.",
    problem:
      "Running organization-wide security-awareness exercises meant manually tracking who was notified, who acknowledged, and who still needed a document processed.",
    solution:
      "Built internal automation that handles phishing-awareness tracking, sends organization-wide notification workflows, tracks acknowledgements, and automates the related document processing.",
    architecture: [
      { label: "Awareness exercise trigger" },
      { label: "Notification workflow" },
      { label: "Acknowledgement tracking" },
      { label: "Automated document processing" },
    ],
    technologies: ["Python", "Email delivery", "Power Automate"],
    automationCapabilities: ["Phishing-awareness tracking", "Notification workflows", "Acknowledgement tracking", "Document processing"],
    outcome: "[ADD REAL RESULT]",
  },
  {
    slug: "blazor-to-nextjs-modernization",
    title: "Legacy Modernization: Blazor/.NET → Next.js & .NET 10",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",
    summary:
      "Modernized a legacy Blazor/.NET application to Next.js and .NET 10 using AI-assisted development — in three days.",
    problem:
      "A legacy Blazor/.NET application needed to move to a modern Next.js frontend and .NET 10 backend without a multi-week rewrite eating into the team's roadmap.",
    solution:
      "Used AI-assisted development tooling to accelerate the rewrite — restructuring the frontend in Next.js and upgrading the backend to .NET 10 — completing the full migration in three days.",
    architecture: [
      { label: "Legacy Blazor / .NET app" },
      { label: "AI-assisted rewrite", detail: "Component + logic translation" },
      { label: "Next.js frontend" },
      { label: ".NET 10 backend" },
    ],
    technologies: ["Next.js", ".NET 10", "AI coding assistants", "C#"],
    aiCapabilities: ["AI-assisted code translation", "Accelerated migration"],
    outcome: "Migration completed in three days using AI-assisted development.",
  },
];
