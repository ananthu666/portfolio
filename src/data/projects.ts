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
  slug: "employee-onboarding-automation",
  title: "Employee Onboarding Workflow Automation",
  category: "Enterprise Automation",
  status: "INDEPENDENT PROJECT",

  summary:
    "A role-based employee onboarding automation system that coordinates HR, IT, and manager tasks from employee creation through onboarding completion.",

  problem:
    "Employee onboarding often requires HR, IT, and managers to coordinate multiple tasks such as account setup, equipment preparation, access requests, documentation, and orientation. Tracking these activities manually can lead to missed tasks, delayed actions, and poor visibility into onboarding progress.",

  solution:
    "Built a workflow-driven onboarding system using Microsoft Forms, SharePoint and Power Automate. HR submits new employee information through a structured form, which triggers an automated workflow that creates the required onboarding tasks, assigns them to the appropriate teams, tracks completion status, sends reminders for pending tasks, and escalates overdue activities to HR.",

  architecture: [
    {
      label: "Employee Information",
      detail:
        "HR submits employee details such as name, department, role, manager, location and joining date through Microsoft Forms."
    },
    {
      label: "Power Automate Trigger",
      detail:
        "A new form submission automatically triggers the onboarding workflow."
    },
    {
      label: "SharePoint Employee Record",
      detail:
        "Employee information is stored in a centralized SharePoint list for onboarding tracking."
    },
    {
      label: "Role-Based Task Creation",
      detail:
        "The workflow identifies the employee role and creates the corresponding onboarding tasks."
    },
    {
      label: "Task Assignment",
      detail:
        "Tasks are assigned to HR, IT or the employee's manager based on task ownership."
    },
    {
      label: "Task Tracking",
      detail:
        "Each onboarding task maintains a status such as Pending, In Progress or Completed."
    },
    {
      label: "Reminder Workflow",
      detail:
        "A scheduled Power Automate flow checks pending and approaching due tasks and sends automated reminders."
    },
    {
      label: "Escalation",
      detail:
        "Overdue tasks can be escalated to HR when they remain incomplete after the defined deadline."
    },
    {
      label: "Onboarding Completion",
      detail:
        "When all required onboarding tasks are completed, the employee's onboarding status is marked as completed."
    }
  ],

  technologies: [
    "Microsoft Forms",
    "SharePoint",
    "Power Automate",
    "Microsoft 365"
  ],

  automationCapabilities: [
    "Employee onboarding workflow automation",
    "Role-based task generation",
    "Task assignment",
    "Due-date management",
    "Automated reminders",
    "Overdue task detection",
    "Escalation workflows",
    "Onboarding status tracking",
    "Cross-team workflow coordination"
  ],

  engineeringChallenges: [
    "Designing a reliable workflow across HR, IT and management teams",
    "Creating reusable role-based onboarding task templates",
    "Maintaining consistent employee and task relationships",
    "Handling task due dates and completion states",
    "Designing reminder and escalation conditions",
    "Preventing duplicate onboarding task creation",
    "Maintaining centralized visibility of onboarding progress"
  ],

  outcome:
    "Created a centralized and repeatable onboarding workflow that automatically coordinates employee onboarding activities across HR, IT and management.",

  impact:
    "Reduced manual coordination involved in onboarding and provided HR with centralized visibility into task ownership, pending activities and overall onboarding progress.",

  role:
    "Designed and implemented the end-to-end onboarding workflow, including the SharePoint data structure, Power Automate flows, role-based task creation, notifications, reminders and escalation logic.",

  keyLearning:
    "Gained practical experience designing multi-step business workflows, event-driven automation, SharePoint-based data models, scheduled workflows, task orchestration and exception handling."
},

{
  slug: "phishing-awareness-automation",
  title: "Phishing Awareness & Activity Tracking Automation",
  category: "Enterprise Automation",
  status: "PROFESSIONAL",

  summary:
    "An internal phishing-awareness automation system that sends simulated phishing communications and records user interactions for security-awareness analysis.",

  problem:
    "Running phishing-awareness exercises required sending simulated phishing communications and tracking how users interacted with them. Manually collecting and maintaining this activity information made it difficult to consistently monitor participation and user responses.",

  solution:
    "Built an internal Python-based automation system that supports phishing-awareness exercises by handling notification workflows, tracking user interactions and storing activity data in a database for later analysis and reporting.",

  architecture: [
    {
      label: "Phishing Awareness Campaign",
      detail: "Initiates the simulated phishing exercise",
    },
    {
      label: "Email Notification",
      detail: "Delivers simulated phishing communications",
    },
    {
      label: "User Interaction",
      detail: "Captures relevant user activity",
    },
    {
      label: "Activity Tracking",
      detail: "Processes interaction events",
    },
    {
      label: "Database",
      detail: "Persists user activity and campaign data",
    },
    {
      label: "Activity Analysis",
      detail: "Provides data for awareness monitoring and reporting",
    },
  ],

  technologies: [
    "Python",
    "SQL",
    "Database",
    "Email Automation",
  ],

  automationCapabilities: [
    "Phishing-awareness campaign automation",
    "Email notification automation",
    "User activity tracking",
    "Event-based activity recording",
    "Database persistence",
    "Activity monitoring",
    "Security-awareness reporting",
  ],

  engineeringChallenges: [
    "Designing reliable tracking for user interactions",
    "Capturing activity events without disrupting the user experience",
    "Associating activity with the appropriate user and campaign",
    "Persisting interaction data consistently in the database",
    "Handling multiple activity events during an awareness campaign",
    "Structuring stored data for later analysis and reporting",
  ],

  outcome:
    "Automated the core phishing-awareness workflow and established a centralized database-driven system for recording and monitoring user interaction data.",

  impact:
    "Replaced manual activity collection with a repeatable automated tracking process, providing a structured source of data for evaluating phishing-awareness exercises.",

  role:
    "Designed and developed the Python automation, implemented the notification and activity-tracking workflow, and integrated database persistence for campaign and user interaction data.",

  keyLearning:
    "Gained practical experience in event tracking, database-backed automation, email workflows and designing systems for security-awareness activities."
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
