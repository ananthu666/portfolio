import { Project } from "./types";

// Odoo AI & ERP Innovation Lab — internal learning / POC initiative.
// These are self-directed POCs built to explore Odoo business workflows,
// AI, analytics and enterprise automation. They are NOT client implementations.
// Every metric/example here is synthetic demo data unless explicitly stated otherwise.
export const odooProjects: Project[] = [
  {
    slug: "ai-sales-intelligence",
    title: "AI-Powered Sales Intelligence",
    category: "Odoo Lab — Internal Learning & POC",
    status: "INDEPENDENT PROJECT",
    summary:
      "Analyzes Odoo CRM opportunities to help sales teams prioritize active deals, decide the next action and understand patterns in lost opportunities.",
    problem:
      "A sales team may have many active opportunities at different stages. Reviewing engagement, quotation activity and contact history manually makes it difficult to quickly identify which deals deserve attention and why previous opportunities were lost.",
    solution:
      "A Python service extracts opportunity data from Odoo CRM and computes a deterministic engagement score using factors such as activity and quotation status. An LLM then explains the result in plain language, recommends a next action and summarizes lost-opportunity patterns. The business score remains deterministic while AI is used for reasoning and communication.",
    architecture: [
      { label: "Odoo CRM", detail: "Sales opportunity data" },
      { label: "Sales data extraction" },
      { label: "Python scoring model", detail: "Deterministic engagement score" },
      { label: "AI analysis", detail: "Natural-language explanation" },
      { label: "Priority & next-best-action" },
      { label: "Sales dashboard" },
    ],
    technologies: ["Python", "Odoo ORM", "Odoo XML-RPC API", "LLM API"],
    aiCapabilities: [
      "Opportunity summaries",
      "Next-action recommendations",
      "Lost-opportunity pattern analysis",
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
      "Working prototype against a local Odoo CRM instance with synthetic opportunity data. Demonstrates how AI can support sales prioritization without replacing deterministic business scoring.",
  },
  {
    slug: "odoo-ai-support-agent",
    title: "Odoo AI Support Agent",
    category: "Odoo Lab — Internal Learning & POC",
    status: "INDEPENDENT PROJECT",
    summary:
      "Helps support teams triage Odoo Helpdesk tickets, retrieve relevant knowledge and prepare suggested responses for human approval.",
    problem:
      "Support teams receive many customer issues that must be categorized, prioritized and researched before someone can respond. For common problems, repeatedly searching knowledge-base content and writing the first response is time-consuming.",
    solution:
      "Tickets flow from Odoo Helpdesk into classification and priority detection. RAG retrieves relevant knowledge-base content, and an AI agent uses that context to draft a suggested response. A human reviews and approves the response before anything is sent to the customer.",
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
      "Working prototype demonstrating AI-assisted support triage and response drafting with a human-in-the-loop approval step. AI never sends a reply automatically.",
  },
  {
    slug: "odoo-inventory-intelligence",
    title: "Odoo Inventory Intelligence",
    category: "Odoo Lab — Internal Learning & POC",
    status: "INDEPENDENT PROJECT",
    summary:
      "Analyzes Odoo Inventory history to identify stock-out risk, overstock and unusual consumption before they become operational problems.",
    problem:
      "Current stock levels show what is available now, but managers also need to understand consumption trends. Identifying products that may run out, remain overstocked or suddenly change consumption can require manual analysis of historical stock movements.",
    solution:
      "A Python job extracts stock-move history from Odoo and applies deterministic statistical analysis such as moving averages and trends to estimate stock-out timing and detect unusual consumption. AI is used only to explain the findings and recommendations in manager-friendly language.",
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
    outcome: "Forecasting and anomaly-detection logic validated against synthetic stock-movement datasets; the POC demonstrates how inventory data can support proactive operational decisions.",
  },
  {
    slug: "odoo-integration-hub",
    title: "Odoo Enterprise Integration Hub",
    category: "Odoo Lab — Internal Learning & POC",
    status: "IN PROGRESS",
    summary:
      "A bidirectional integration hub that synchronizes Odoo with REST APIs, external databases and SharePoint while centralizing validation, transformation, retries and monitoring.",
    problem:
      "Organizations often run Odoo alongside other business systems. Data may need to move both into Odoo and back out to external APIs, databases or SharePoint. Multiple point-to-point integrations can become difficult to maintain, secure and monitor when failures occur.",
    solution:
      "A centralized Python integration hub sits between Odoo and external systems. It supports data flowing in both directions, validates and transforms payloads, handles authentication, retries failed operations, logs errors and exposes synchronization health through monitoring.",
    architecture: [
      { label: "Odoo" },
      { label: "API gateway / Integration hub", detail: "Central entry and routing layer" },
      { label: "Python integration layer", detail: "Validation, transformation and orchestration" },
      { label: "External systems", detail: "REST APIs / Database / SharePoint" },
      { label: "Bidirectional synchronization", detail: "Inbound and outbound data flows" },
      { label: "Monitoring & recovery", detail: "Logging, retries and sync health" },
    ],
    technologies: ["Python", "REST APIs", "SharePoint API", "SQL", "Webhooks"],
    automationCapabilities: [
      "Bidirectional API integrations",
      "Authentication",
      "Data transformation & validation",
      "Retry and recovery",
      "Error handling & logging",
      "Scheduled / event-driven synchronization",
    ],
    odooModules: ["Base / external API layer"],
    integrationPoints: ["REST", "Database", "SharePoint"],
    businessWorkflow: ["Receive / Extract", "Validate", "Transform", "Sync", "Monitor", "Retry / Recover"],
    exampleReadout: [
      { label: "Odoo → API", value: "SUCCESS" },
      { label: "Odoo → Database", value: "SUCCESS" },
      { label: "Odoo → SharePoint", value: "WARNING" },
      { label: "Records processed", value: "2,481 (demo data)" },
      { label: "Successful", value: "2,463 (demo data)" },
      { label: "Failed", value: "18 (demo data)" },
    ],
    isDemoData: true,
    outcome: "Core bidirectional gateway, validation, transformation and retry concepts prototyped; SharePoint synchronization is still being hardened.",
  },
  {
    slug: "manufacturing-procurement-assistant",
    title: "Intelligent Manufacturing & Procurement Assistant",
    category: "Odoo Lab — Internal Learning & POC",
    status: "EXPERIMENT",
    summary:
      "Connects Odoo sales demand, manufacturing requirements, inventory and supplier lead time to identify material shortages and recommend what procurement should review.",
    problem:
      "A manufacturing company must buy enough raw material to support upcoming production without creating unnecessary excess stock. Procurement decisions require combining sales demand, material requirements, current inventory, open purchase orders, consumption rate and supplier lead time.",
    solution:
      "Python combines demand, manufacturing material requirements, current stock, consumption and open purchase orders with supplier lead time to calculate a deterministic purchase recommendation and identify shortage risk. AI explains the recommendation and risk in plain language, while a human remains responsible for approving the purchase order in Odoo.",
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
      "Sales demand",
      "Manufacturing requirements",
      "Inventory check",
      "Existing purchase orders",
      "Supplier lead time",
      "Risk detection",
      "Purchase recommendation",
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
    outcome: "Early-stage experiment — deterministic calculation logic is prototyped. The concept is designed to connect sales, manufacturing, inventory and procurement decisions, but it is not yet integrated end-to-end.",
  },
];
