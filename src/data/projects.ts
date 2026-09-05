import { Project } from "./types";

// Professional work from Nalashaa Solutions.
// Outcomes are intentionally qualitative where verified metrics are unavailable.
// Add numerical metrics later only when they can be verified.

export const projects: Project[] = [
  {
    slug: "ai-requirement-generator",
    title: "AI Requirement & User Story Generator",
    category: "AI & Enterprise Systems",
    status: "PROFESSIONAL",

    summary:
      "An AI-powered workflow that converts functional specification documents into structured, Jira-ready user stories.",

    problem:
      "Converting large functional specification documents into individual, well-structured user stories was time-consuming and could vary between writers. The process required manually reading specifications, identifying individual requirements and rewriting them into a consistent format.",

    solution:
      "Built an AI workflow that processes functional specification documents, identifies discrete requirements and transforms them into a consistent user-story structure suitable for Jira-based development workflows.",

    architecture: [
      {
        label: "Functional Specification",
        detail: "Source requirement document",
      },
      {
        label: "Document Processing",
        detail: "Reads and prepares specification content",
      },
      {
        label: "AI Requirement Extraction",
        detail: "Identifies individual requirements",
      },
      {
        label: "Structured Generation",
        detail: "Converts requirements into consistent user stories",
      },
      {
        label: "Validation",
        detail: "Checks generated output structure",
      },
      {
        label: "Jira Integration",
        detail: "Produces development-ready Jira content",
      },
    ],

    technologies: [
      "Python",
      "LLM APIs",
      "Jira API",
      "REST APIs",
    ],

    aiCapabilities: [
      "Document understanding",
      "Requirement extraction",
      "LLM-powered generation",
      "Structured output generation",
      "Prompt engineering",
      "Workflow automation",
    ],

    automationCapabilities: [
      "Document-to-requirement processing",
      "Requirement-to-user-story generation",
      "Jira workflow integration",
    ],

    engineeringChallenges: [
      "Handling long functional specification documents",
      "Extracting individual requirements from unstructured content",
      "Maintaining a consistent output structure",
      "Reducing ambiguity in AI-generated requirements",
      "Integrating AI-generated output into an existing Jira workflow",
    ],

    outcome:
      "Automated a significant portion of the requirements-to-user-story preparation workflow and provided a more consistent structure for Jira-ready development requirements.",

    impact:
      "Reduced repetitive manual requirement-authoring work and created a repeatable AI-assisted process between functional specifications and development planning.",

    role:
      "Designed and implemented the AI workflow, including document processing, requirement extraction, structured generation and Jira integration.",

    keyLearning:
      "Learned how to apply LLMs to enterprise requirements engineering while keeping the workflow structured and aligned with an existing development process.",
  },

  {
    slug: "synapse-middleware",
    title: "Enterprise Integration & Data Orchestration Platform",
    category: "Enterprise Systems",
    status: "PROFESSIONAL",

    summary:
      "A middleware-style integration platform connecting SharePoint, databases, Jira, REST APIs, ERP systems and external web sources.",

    problem:
      "Business data required for workflows was distributed across multiple enterprise systems and external sources. Moving information between these systems required repeated extraction, transformation, validation and synchronization work.",

    solution:
      "Built a reusable integration layer for extracting data from multiple sources, transforming and aggregating it, validating the resulting data and transferring it between source and destination systems.",

    architecture: [
      {
        label: "Enterprise & External Sources",
        detail:
          "SharePoint, Jira, Database, ERP, REST APIs and web sources",
      },
      {
        label: "Extraction Layer",
        detail: "Retrieves data from connected systems",
      },
      {
        label: "Transformation",
        detail: "Normalizes and transforms source data",
      },
      {
        label: "Aggregation",
        detail: "Combines data required for downstream workflows",
      },
      {
        label: "Validation",
        detail: "Checks data before transfer",
      },
      {
        label: "Data Orchestration",
        detail: "Controls source-to-destination movement",
      },
      {
        label: "Destination Systems",
        detail:
          "SharePoint, databases, ERP systems and connected APIs",
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
      "Data validation",
      "API integration",
      "Cross-system synchronization",
      "Source-to-destination transfer",
    ],

    engineeringChallenges: [
      "Working with different data formats across systems",
      "Integrating multiple enterprise APIs",
      "Transforming data between incompatible structures",
      "Validating data before downstream processing",
      "Handling external web-based data sources",
      "Designing a reusable integration workflow instead of isolated scripts",
    ],

    outcome:
      "Created a centralized integration layer capable of connecting multiple enterprise and external data sources and coordinating extraction, transformation, validation and transfer workflows.",

    impact:
      "Reduced the need for isolated point-to-point data movement scripts and established a reusable foundation for enterprise data integration workflows.",

    role:
      "Worked on the design and implementation of the integration workflows, including API connectivity, data extraction, transformation, aggregation, validation and synchronization.",

    keyLearning:
      "Developed practical experience in enterprise integration architecture, API orchestration, data transformation and building systems that operate across heterogeneous applications.",
  },

  {
    slug: "enterprise-productivity-automation",
    title: "Enterprise Productivity & Analytics Platform",
    category: "Enterprise Automation",
    status: "PROFESSIONAL",

    summary:
      "An automated reporting platform that collects enterprise data, calculates productivity and quality metrics, and distributes recurring management reports.",

    problem:
      "Productivity, quality and budget information had to be collected from multiple enterprise systems and consolidated before recurring management reporting. This involved repetitive data collection, processing and report distribution activities.",

    solution:
      "Built an automated data pipeline that collects information from connected enterprise systems, processes the underlying data, calculates business metrics, updates enterprise content and distributes recurring reports and notifications.",

    architecture: [
      {
        label: "Enterprise Data Sources",
        detail: "Operational systems, APIs and databases",
      },
      {
        label: "Data Collection Layer",
        detail: "Scheduled data extraction",
      },
      {
        label: "Data Processing",
        detail: "Cleaning and preparation",
      },
      {
        label: "KPI Calculation Engine",
        detail: "Productivity, quality and budget metrics",
      },
      {
        label: "Enterprise Content Update",
        detail: "Automated publishing of processed information",
      },
      {
        label: "Reporting Layer",
        detail: "Management reporting and analytics",
      },
      {
        label: "Notification Layer",
        detail: "Scheduled report and notification delivery",
      },
    ],

    technologies: [
      "Python",
      "REST APIs",
      "SQL",
      "Power BI",
      "SharePoint",
    ],

    automationCapabilities: [
      "Automated data collection",
      "Data processing",
      "KPI calculation",
      "Productivity tracking",
      "Quality tracking",
      "Budget-related metrics",
      "Automated reporting",
      "Notification delivery",
      "Scheduled workflows",
    ],

    engineeringChallenges: [
      "Collecting data from multiple enterprise sources",
      "Keeping metric calculations consistent",
      "Transforming raw operational data into business metrics",
      "Automating recurring report generation",
      "Connecting reporting outputs with enterprise content systems",
      "Ensuring scheduled workflows execute reliably",
    ],

    outcome:
      "Replaced a largely manual reporting workflow with an automated pipeline for collecting enterprise data, calculating business metrics, updating reporting sources and distributing recurring reports.",

    impact:
      "Created a repeatable reporting process that reduced repetitive data-collection and report-preparation activities for recurring management reporting.",

    role:
      "Developed the data collection, processing and automation workflows and worked on integrating enterprise systems, KPI calculations and automated reporting.",

    keyLearning:
      "Gained practical experience in enterprise data pipelines, business KPI processing, scheduled automation and turning operational data into management-level reporting.",
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
      {
        label: "Business Event / Trigger",
        detail: "Initiates the workflow",
      },
      {
        label: "Power Automate Workflow",
        detail: "Workflow orchestration and business logic",
      },
      {
        label: "Microsoft 365 Services",
        detail: "Connected enterprise applications",
      },
      {
        label: "Data / Process Handoff",
        detail: "Moves information to the next business step",
      },
      {
        label: "Notification & Email Delivery",
        detail: "Automated communication",
      },
    ],

    technologies: [
      "Power Automate",
      "Microsoft 365",
      "SharePoint",
      "Webhooks",
      "REST APIs",
    ],

    automationCapabilities: [
      "Cross-application workflows",
      "Event-driven automation",
      "Microsoft 365 integration",
      "Notification automation",
      "Email automation",
      "Business process orchestration",
    ],

    engineeringChallenges: [
      "Connecting multiple Microsoft 365 services",
      "Designing reliable event-driven workflows",
      "Managing information handoffs between applications",
      "Handling automated notifications and email communication",
      "Building workflows that require minimal manual intervention",
    ],

    outcome:
      "Automated recurring business workflows across Microsoft 365 services, reducing manual handoffs for notifications, email communication and cross-application processes.",

    impact:
      "Established repeatable event-driven workflows that allow business processes to move automatically from one application or stage to the next.",

    role:
      "Designed and implemented Power Automate workflows and integrations connecting Microsoft 365 services and business processes.",

    keyLearning:
      "Developed practical experience in low-code enterprise automation, event-driven workflows, Microsoft 365 integrations and business process orchestration.",
  },

  {
    slug: "phishing-awareness-automation",
    title: "Phishing Awareness & Notification Automation",
    category: "Enterprise Automation",
    status: "PROFESSIONAL",

    summary:
      "Internal automation for phishing-awareness exercises, organization-wide notifications, acknowledgement tracking and document workflows.",

    problem:
      "Security-awareness exercises required tracking notifications, user acknowledgements and follow-up actions across the organization. These activities involved repetitive communication and status-tracking work.",

    solution:
      "Built internal automation to support phishing-awareness tracking, organization-wide notification workflows, acknowledgement tracking and related document-processing activities.",

    architecture: [
      {
        label: "Awareness Exercise Trigger",
        detail: "Initiates the exercise workflow",
      },
      {
        label: "Notification Workflow",
        detail: "Sends organization-wide communications",
      },
      {
        label: "User Interaction",
        detail: "Tracks acknowledgement or response",
      },
      {
        label: "Status Tracking",
        detail: "Maintains acknowledgement and follow-up state",
      },
      {
        label: "Automated Follow-up",
        detail: "Handles pending actions",
      },
      {
        label: "Document Processing",
        detail: "Automates related document workflows",
      },
    ],

    technologies: [
      "Python",
      "Email Automation",
      "Power Automate",
      "Microsoft 365",
    ],

    automationCapabilities: [
      "Security-awareness tracking",
      "Organization-wide notifications",
      "Email automation",
      "Acknowledgement tracking",
      "Automated follow-up",
      "Document processing",
    ],

    engineeringChallenges: [
      "Managing organization-wide notification workflows",
      "Tracking individual acknowledgement states",
      "Handling follow-up actions based on user responses",
      "Connecting notification and tracking workflows",
      "Automating repetitive security-awareness administration",
    ],

    outcome:
      "Automated key administrative workflows associated with phishing-awareness exercises, including notifications, acknowledgement tracking and follow-up processing.",

    impact:
      "Provided a repeatable process for running awareness workflows and maintaining visibility into notification and acknowledgement status.",

    role:
      "Developed automation for notification delivery, acknowledgement tracking and related document-processing workflows.",

    keyLearning:
      "Gained practical experience in organization-wide communication automation, state tracking, workflow design and security-awareness process automation.",
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
      "Used AI-assisted development tools to accelerate the migration by analyzing the existing codebase, translating and restructuring frontend components and application logic into Next.js, and upgrading the backend to .NET 10.",

    architecture: [
      {
        label: "Legacy Blazor / .NET Application",
        detail: "Existing application",
      },
      {
        label: "Codebase Analysis",
        detail: "Understanding existing components and logic",
      },
      {
        label: "AI-Assisted Development",
        detail: "Translation, restructuring and development acceleration",
      },
      {
        label: "Next.js Frontend",
        detail: "Modernized frontend",
      },
      {
        label: ".NET 10 Backend",
        detail: "Modernized backend",
      },
      {
        label: "Modernized Application",
        detail: "Updated application architecture",
      },
    ],

    technologies: [
      "Next.js",
      ".NET 10",
      "C#",
      "Blazor",
      "AI Coding Assistants",
    ],

    aiCapabilities: [
      "AI-assisted code translation",
      "Codebase analysis",
      "Code restructuring",
      "Development acceleration",
    ],

    engineeringChallenges: [
      "Understanding an existing legacy codebase",
      "Translating frontend components between frameworks",
      "Preserving existing application behavior during migration",
      "Adapting application logic to the modernized stack",
      "Using AI-generated code while validating correctness",
      "Completing the migration within a short delivery window",
    ],

    outcome:
      "Completed the migration from the legacy Blazor/.NET application to a Next.js frontend and .NET 10 backend in three days using AI-assisted development techniques.",

    impact:
      "Demonstrated how AI coding assistants can accelerate legacy application modernization while keeping engineering validation and application correctness in the development process.",

    role:
      "Worked on the modernization process using AI-assisted development techniques to analyze, translate and restructure the existing application into the new technology stack.",

    keyLearning:
      "Learned how to use AI coding assistants as engineering accelerators rather than replacements for software engineering, with human validation remaining essential throughout the migration.",
  },
];
