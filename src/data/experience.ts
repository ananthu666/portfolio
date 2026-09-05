export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  focus: string[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Nalashaa Solutions",
    role: "Trainee Software Engineer — AI-focused",
    period: "Jun 2025 — Present",
    summary:
      "Building AI-powered internal tools and business-solution accelerators using Python, LLMs, automation workflows, APIs and enterprise systems.",
    bullets: [
      "Built an AI workflow that converts functional specifications into structured, issue-tracking-ready user stories, improving the requirements-to-development pipeline.",
      "Developed a middleware-style enterprise integration platform connecting SharePoint, databases, Jira, REST APIs, ERP systems and web-crawled sources — covering extraction, transformation, aggregation, validation and source-to-destination transfer.",
      "Built a productivity and analytics platform that collects data from enterprise systems, calculates productivity, quality and budget metrics, updates enterprise content systems, and distributes recurring management reports and notifications.",
      "Built automated workflows using Microsoft 365 services and Power Automate to connect business applications, notifications, email workflows and enterprise processes.",
      "Developed internal automation including phishing-awareness tracking, organization-wide notification workflows, acknowledgement tracking and automated document processing.",
      "Modernized a legacy Blazor/.NET application to Next.js and .NET 10 using AI-assisted development — completing the migration in three days.",
    ],
    focus: ["AI workflows", "Enterprise integration", "Python", "Power Automate", "AI-assisted development"],
  },
  {
    org: "Nalashaa Solutions",
    role: "Intern Software Developer",
    period: "Jan 2025 — Apr 2025",
    summary:
      "Developed applications using C#/.NET and Microsoft SQL Server — backend logic, databases, debugging and application development.",
    bullets: [
      "Worked with C#/.NET and Microsoft SQL Server on backend logic, database design, debugging and feature development.",
    ],
    focus: ["C# / .NET", "SQL Server", "Backend development"],
  },
];

export const learningJourney = [
  "AI Engineering",
  "Enterprise Automation",
  "Odoo / ERP",
  "AI + ERP Integration",
  "Intelligent Business Systems",
];
