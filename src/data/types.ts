export type ProjectStatus =
  | "PROFESSIONAL"
  | "INDEPENDENT PROJECT"
  | "IN PROGRESS"
  | "EXPERIMENT";

export type ArchitectureStep = {
  label: string;
  detail?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  architecture: ArchitectureStep[]; // top-to-bottom pipeline
  technologies: string[];
  aiCapabilities?: string[];
  automationCapabilities?: string[];
  engineeringChallenges?: string[];
  impact?: string;
  role?: string;
  keyLearning?: string;
  outcome: string;
  github?: string;
  demo?: string;
  // Odoo-specific, optional
  odooModules?: string[];
  integrationPoints?: string[];
  aiComponents?: string[];
  businessWorkflow?: string[];
  exampleReadout?: { label: string; value: string }[];
  isDemoData?: boolean;
};
