export type SkillCluster = {
  id: string;
  label: string;
  accent: "ai" | "erp" | "automation";
  note?: string;
  items: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    id: "ai-genai",
    label: "AI & Generative AI",
    accent: "ai",
    items: [
      "LLMs",
      "Generative AI",
      "AI Agents",
      "Agentic AI",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "Function Calling",
      "LLM APIs",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    accent: "automation",
    items: [
      "n8n",
      "Power Automate",
      "AI Workflows",
      "Workflow Automation",
      "Process Automation",
      "Multi-step Workflows",
      "AI-assisted Development",
    ],
  },
  {
    id: "erp",
    label: "ERP",
    accent: "erp",
    note: "Junior — actively learning",
    items: [
      "Odoo fundamentals",
      "ERP workflows",
      "Odoo ORM",
      "Odoo modules",
      "Odoo APIs",
      "Customization",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    accent: "automation",
    items: ["Python", "C#", "JavaScript", "SQL", "C / C++"],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    accent: "ai",
    items: ["FastAPI", "Django", ".NET", "REST APIs", "JSON", "Webhooks", "API Integration", "Data Transformation"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    accent: "erp",
    items: [
      "SQL",
      "Microsoft Excel",
      "Power BI",
      "Data Analysis",
      "Data Visualization",
      "KPI Analysis",
      "Reporting",
      "Data Validation",
      "SQLite",
      "SQL Server",
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise & Business Systems",
    accent: "erp",
    items: ["SharePoint", "Microsoft 365", "Jira", "Test Management Systems", "ERP Systems", "CRM Integrations", "Enterprise Data Workflows"],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "automation",
    items: ["React", "Next.js", "React Native", "HTML", "CSS"],
  },
  {
    id: "tools",
    label: "Databases & Tools",
    accent: "ai",
    items: ["SQL Server", "SQLite", "Vector Databases", "Git", "Cursor", "AI Coding Assistants"],
  },
];
