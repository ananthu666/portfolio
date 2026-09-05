import { Project } from "./types";

// Independent engineering lab — NOT professional / client work. Every metric
// here is synthetic demo data unless explicitly stated otherwise.
export const odooProjects: Project[] = [
  {
    slug: "ai-sales-intelligence",
    title: "AI-Powered Sales Intelligence",
    category: "Odoo Lab",
    status: "INDEPENDENT PROJECT",
    summary:
      "Reads Odoo CRM opportunity data and generates lead scores, next-best-action suggestions and lost-opportunity analysis.",
    problem:
      "Odoo CRM stores rich opportunity data — engagement, quotations, contact history — but a rep still has to manually judge which leads deserve attention today.",
    solution:
      "A Python service pulls opportunity records from Odoo CRM, computes an engagement-weighted score, and asks an LLM to explain the score in plain language with a recommended next action — kept separate so the scoring stays deterministic and the explanation stays natural-language.",
    architecture: [
      { label: "Odoo CRM", detail: "Source of opportunity data" },
      { label: "Sales data extraction" },
      { label: "Python scoring model", detail: "Deterministic engagement score" },
      { label: "AI analysis", detail: "Natural-language explanation" },
      { label: "Lead scoring & next-best-action" },
      { label: "Sales dashboard" },
    ],
    technologies: ["Python", "Odoo ORM", "Odoo XML-RPC API", "LLM API"],
    aiCapabilities: [
      "AI-generated opportunity summaries",
      "Next-action recommendations",
      "Lost-opportunity analysis",
      "Sales trend explanation",
    ],
    odooModules: ["CRM"],
    integrationPoints: ["Odoo XML-RPC API", "Python scoring service"],
    aiComponents: ["Recommendation explanation", "Natural-language summary"],
    businessWorkflow: ["Lead", "Opportunity", "Quotation", "Sales Order", "Invoice"],
    exampleReadout: [
      { label: "Lead", value: "ABC Packaging" },
      { label: "AI score", value: "78%" },
      { label: "Recommendation", value: "Schedule technical discussion" },
      { label: "Reason", value: "High engagement + quotation requested" },
    ],
    isDemoData: true,
    outcome:
      "Working prototype against a local Odoo CRM instance with synthetic lead data — not deployed to a production business.",
  },
  {
    slug: "odoo-ai-support-agent",
    title: "Odoo AI Support Agent",
    category: "Odoo Lab",
    status: "INDEPENDENT PROJECT",
    summary:
      "Classifies incoming Odoo Helpdesk tickets, retrieves relevant knowledge, and drafts a suggested response for a human to approve.",
    problem:
      "Support tickets need triage — priority, category, likely resolution — before a human can act, and drafting a first response from scratch is repetitive for common issues.",
    solution:
      "Tickets flow from Odoo Helpdesk into a classification step, then a retrieval-augmented step pulls relevant knowledge-base articles, and an AI agent drafts a suggested reply. Nothing is sent to the customer without human approval.",
    architecture: [
      { label: "Customer ticket" },
      { label: "Odoo Helpdesk" },
      { label: "Ticket processor", detail: "Classification & priority detection" },
      { label: "RAG / knowledge base" },
      { label: "AI agent", detail: "Drafts suggested response" },
      { label: "Human approval", detail: "Required before sending" },
      { label: "Customer" },
    ],
    technologies: ["Python", "Odoo Helpdesk module", "Vector retrieval", "LLM API"],
    aiCapabilities: [
      "Ticket classification",
      "Priority detection",
      "Knowledge retrieval (RAG)",
      "Suggested-response drafting",
      "Sentiment detection",
    ],
    odooModules: ["Helpdesk"],
    integrationPoints: ["Odoo Helpdesk API", "Knowledge base index"],
    aiComponents: ["Classifier", "RAG retriever", "Response draft agent"],
    businessWorkflow: ["Ticket", "Classification", "Assignment", "Resolution", "Closure"],
    exampleReadout: [
      { label: "Ticket", value: "\"Invoice PDF won't open\"" },
      { label: "Classification", value: "Billing — low priority" },
      { label: "Suggested reply", value: "Drafted, pending approval" },
    ],
    isDemoData: true,
    outcome:
      "Working prototype with a human-in-the-loop approval step — AI never sends a reply automatically.",
  },
  {
    slug: "odoo-inventory-intelligence",
    title: "Odoo Inventory Intelligence",
    category: "Odoo Lab",
    status: "INDEPENDENT PROJECT",
    summary:
      "Statistical forecasting over Odoo Inventory data to flag stock-out risk, overstock and unusual consumption, explained in plain language.",
    problem:
      "Odoo Inventory shows current stock, but spotting stock-out risk or slow-moving products before they become a problem takes manual review of usage trends.",
    solution:
      "A Python job extracts stock-move history from Odoo, runs a statistical forecast (moving average + trend) to project stock-out dates and flag anomalies, then uses AI only to explain the numbers in plain language for a manager — the forecast itself stays deterministic.",
    architecture: [
      { label: "Odoo Inventory" },
      { label: "Data extraction", detail: "Stock-move history" },
      { label: "Python statistical analysis", detail: "Forecasting model" },
      { label: "Anomaly detection" },
      { label: "AI explanation", detail: "Plain-language summary" },
      { label: "Manager dashboard" },
    ],
    technologies: ["Python", "Odoo Inventory module", "pandas", "statistical forecasting", "LLM API"],
    aiCapabilities: ["Plain-language explanation of forecasts", "Anomaly summarization"],
    odooModules: ["Inventory"],
    integrationPoints: ["Odoo stock-move API"],
    aiComponents: ["Explanation layer only — forecasting is deterministic, not AI"],
    businessWorkflow: ["Purchase", "Receipt", "Stock", "Delivery"],
    exampleReadout: [
      { label: "Product", value: "Industrial Film" },
      { label: "Current stock", value: "120 units" },
      { label: "Predicted stock-out", value: "18 days" },
      { label: "Recommendation", value: "Review replenishment quantity" },
    ],
    isDemoData: true,
    outcome: "Forecasting logic validated against synthetic stock-movement datasets.",
  },
  {
    slug: "odoo-integration-hub",
    title: "Odoo Enterprise Integration Hub",
    category: "Odoo Lab",
    status: "IN PROGRESS",
    summary:
      "A gateway connecting Odoo to REST APIs, an external database and SharePoint, with retry handling, validation and a live sync monitor.",
    problem:
      "Odoo needs to stay in sync with systems outside it — REST services, a separate database, SharePoint document stores — reliably, with visibility when something fails.",
    solution:
      "An API gateway sits in front of Odoo and routes data through a Python integration layer that validates, transforms and retries failed calls to each downstream system, with a monitoring dashboard showing sync health.",
    architecture: [
      { label: "Odoo" },
      { label: "API gateway" },
      { label: "Python integration layer" },
      { label: "REST / Database / SharePoint", detail: "Parallel sync targets" },
      { label: "Data transform" },
      { label: "External system" },
    ],
    technologies: ["Python", "REST APIs", "SharePoint API", "SQL", "Webhooks"],
    automationCapabilities: [
      "API integrations",
      "Authentication",
      "Data transformation & validation",
      "Retry mechanism",
      "Error handling & logging",
      "Scheduled synchronization",
    ],
    odooModules: ["Base / external API layer"],
    integrationPoints: ["REST", "Database", "SharePoint"],
    businessWorkflow: ["Extract", "Validate", "Transform", "Sync", "Monitor"],
    exampleReadout: [
      { label: "Odoo → API", value: "SUCCESS" },
      { label: "Odoo → Database", value: "SUCCESS" },
      { label: "Odoo → SharePoint", value: "WARNING" },
      { label: "Records processed", value: "2,481 (demo data)" },
      { label: "Successful", value: "2,463 (demo data)" },
      { label: "Failed", value: "18 (demo data)" },
    ],
    isDemoData: true,
    outcome: "Core gateway and retry logic built; SharePoint sync path still being hardened.",
  },
  {
    slug: "manufacturing-procurement-assistant",
    title: "Intelligent Manufacturing & Procurement Assistant",
    category: "Odoo Lab",
    status: "EXPERIMENT",
    summary:
      "Cross-references Odoo sales demand, inventory and supplier lead time to recommend purchase quantities, with AI used for the explanation only.",
    problem:
      "Deciding how much of a material to purchase means weighing expected usage, current stock, open purchase orders and supplier lead time together — easy to get wrong doing it by hand.",
    solution:
      "A Python calculation combines demand forecast, current stock, open POs and lead time into a recommended purchase quantity; an AI layer explains the recommendation and flags risk, with a human required to approve the purchase order in Odoo.",
    architecture: [
      { label: "Sales" },
      { label: "Demand" },
      { label: "Inventory" },
      { label: "Manufacturing" },
      { label: "Material requirements" },
      { label: "Purchase" },
      { label: "Supplier" },
    ],
    technologies: ["Python", "Odoo Manufacturing & Purchase modules", "LLM API"],
    aiCapabilities: ["Risk explanation", "Procurement recommendation narrative"],
    odooModules: ["Manufacturing", "Purchase", "Inventory"],
    integrationPoints: ["Odoo MRP API", "Odoo Purchase API"],
    aiComponents: ["Explanation & risk-flagging layer — quantity math is deterministic"],
    businessWorkflow: [
      "Business data",
      "AI analysis",
      "Risk detection",
      "Procurement recommendation",
      "Human approval",
      "Odoo purchase order",
    ],
    exampleReadout: [
      { label: "Material", value: "Resin A" },
      { label: "Current stock", value: "480 kg" },
      { label: "Expected usage", value: "620 kg" },
      { label: "Open purchase", value: "100 kg" },
      { label: "Supplier lead time", value: "14 days" },
      { label: "Recommendation", value: "Review purchase of ~500 kg" },
    ],
    isDemoData: true,
    outcome: "Early-stage experiment — calculation logic prototyped, not yet integrated end-to-end.",
  },
];
