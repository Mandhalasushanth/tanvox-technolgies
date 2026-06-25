// src/pages/CaseStudies/caseStudiesData.js
import rennto1 from '../../assets/rennto1.png';
import rennto2 from '../../assets/rennto2.png';
import rennto3 from '../../assets/rennto3.png';
import rennto4 from '../../assets/rennto4.png';

import txhub1 from '../../assets/txhub1.png';
import txhub2 from '../../assets/txhub2.png';
import txhub3 from '../../assets/txhub3.png';
import txhub4 from '../../assets/txhub4.png';

export const caseStudiesData = [
  {
    id: "tx-pms",
    title: "TX-PMS",
    subtitle: "Unified Business Operations Platform",
    badge: "Operations",
    outcome: "Productivity Improvement",
    colorAccent: "#ff4d6d",
    description: "An intelligent, unified business management platform engineered to automate day-to-day operations, task tracking, and cross-team collaboration.",
    about: "TX-PMS serves as a central operational command center for modern enterprises. It integrates complex business process workflows, document version tracking, and granular role clearances into a single source of truth. By eliminating scattered spreadsheets and siloed apps, it provides leadership with real-time operational metrics.",
    challenge: "Enterprise operations were fragmented across multiple disconnected tracking sheets and legacy database instances, causing communication bottlenecks, double-handling of client data, and lack of clarity on project delays.",
    solution: "We deployed TX-PMS as a secure cloud platform connecting front-office dispatching with back-office execution, complete with workflow triggers and live Gantt-charts.",
    features: [
      { title: "Operations Hub", desc: "A unified command board offering real-time visibility into overall operational throughput and work backlogs." },
      { title: "Workflow Automation", desc: "Automate task assignments, follow-up alerts, and status changes based on customizable business policies." },
      { title: "Secure Document Vault", desc: "Granular document management with version history tracking, access permissions, and audit logging." },
      { title: "Capacity Planner", desc: "Visual workload heatmaps to easily assign tasks to employees with available capacity." }
    ],
    idealFor: [
      "Mid-to-large enterprises with multiple operating divisions",
      "Consulting firms managing multi-track client engagements",
      "Logistics companies requiring automated task handoffs",
      "Operational managers seeking to eliminate manual status reporting"
    ],
    benefits: [
      "35% reduction in administrative operational overhead",
      "140% return on investment within the first 12 months",
      "40% increase in team project delivery speed",
      "Full digital traceability of all business task changes"
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Redis"],
    impact: {
      kpi: "35% Decrease",
      kpiLabel: "Operational Overhead",
      roi: "140% ROI",
      roiLabel: "In First 12 Months",
      productivity: "40% Increase",
      productivityLabel: "Team Productivity"
    },
    screens: [rennto1, rennto2, rennto3, rennto4]
  },
  {
    id: "tx-health",
    title: "TX-Health",
    subtitle: "Healthcare Analytics Platform",
    badge: "Healthcare",
    outcome: "Compliance Management",
    colorAccent: "#10b981",
    description: "A secure, enterprise-grade healthcare analytics platform designed for automated audit reporting, medical records visibility, and compliance tracking.",
    about: "TX-Health provides a high-security framework to ingest, analyze, and report on medical records and institutional metrics. It enables healthcare administrators to monitor operational compliance in real-time, generate auditable HIPAA compliance dossiers with one click, and isolate anomalies before they impact patient care quality.",
    challenge: "A network of medical facilities struggled with fragmented patient metrics and slow compliance auditing, leading to manual consolidation timelines of over three weeks and elevated risks of regulatory non-compliance.",
    solution: "We implemented TX-Health to centralize telemetry logs and clinical throughput indicators under end-to-end encryption with real-time audit triggers.",
    features: [
      { title: "Compliance Monitor", desc: "Real-time auditing of medical operations against HIPAA, ISO 27001, and local healthcare guidelines." },
      { title: "Automated Audit Reports", desc: "One-click generation of certified compliance dossiers for inspectors and internal auditors." },
      { title: "Records Gateway", desc: "Secure records database backed by multi-key encryption and access logs for absolute security." },
      { title: "Anomaly Alert System", desc: "Instant alert notifications sent to admins when compliance thresholds are breached or records are accessed out of policy." }
    ],
    idealFor: [
      "Hospitals and medical clinic groups with distributed branches",
      "Clinical research organizations handling sensitive trials data",
      "Healthcare insurance providers requiring secure data gateways",
      "Compliance officers seeking automated HIPAA/GDPR readiness"
    ],
    benefits: [
      "100% audit rating with zero compliance violations",
      "85% reduction in compliance audit preparation timelines",
      "2.4x faster analytical reporting speeds",
      "Absolute audit trail transparency for all record reads"
    ],
    techStack: ["React", "Python", "Django", "PostgreSQL", "AWS KMS", "Apache Spark"],
    impact: {
      kpi: "Zero Faults",
      kpiLabel: "Audit Compliance Rating",
      roi: "85% Reduction",
      roiLabel: "Audit Prep Timeline",
      productivity: "2.4x Faster",
      productivityLabel: "Report Generation Rate"
    },
    screens: [txhub1, txhub2, txhub3, txhub4]
  },
  {
    id: "tx-ai-assist",
    title: "TX-AI Assist",
    subtitle: "AI-Powered Customer Assistant",
    badge: "Artificial Intelligence",
    outcome: "Productivity Improvement",
    colorAccent: "#8b5cf6",
    description: "An advanced conversational agent that automates customer inquiries, routing, and ticket resolution using custom LLMs.",
    about: "TX-AI Assist leverages fine-tuned Large Language Models connected to corporate knowledge repositories to answer user queries with expert citation. It integrates directly with existing ticketing systems, automating simple tier-1 troubleshooting while orchestrating intelligent routing to human staff for complex workflows.",
    challenge: "Support teams were overwhelmed by repetitive customer queries, leading to slow ticket resolution times, degraded customer experiences, and team fatigue.",
    solution: "We deployed TX-AI Assist, configuring contextual retrieval-augmented generation (RAG) pipelines and sentiment routers to instantly resolve over 60% of common queries.",
    features: [
      { title: "Conversational Agent", desc: "Multi-lingual conversational interface responding with natural language and corporate context." },
      { title: "Smart Ticket Routing", desc: "Intelligent ticket classification and sentiment-aware escalation to live agents." },
      { title: "Knowledge Base RAG", desc: "Leverage documentation, whitepapers, and guides to resolve customer questions with citations." },
      { title: "Supervisor Cockpit", desc: "Real-time analytics monitor measuring bot deflection rates, sentiment index, and handoff times." }
    ],
    idealFor: [
      "High-volume customer support operations",
      "E-commerce platforms seeking 24/7 automated assistance",
      "SaaS providers aiming to improve self-service documentation outcomes",
      "Internal IT helpdesks seeking to streamline employee support tickets"
    ],
    benefits: [
      "60% customer tickets automated and resolved without humans",
      "Average customer response time dropped to under 10 seconds",
      "50% reduction in customer service agent workloads",
      "Over 92% positive customer satisfaction score on automated chats"
    ],
    techStack: ["React", "FastAPI", "Python", "MongoDB", "OpenAI API", "LangChain"],
    impact: {
      kpi: "60% Auto-Solved",
      kpiLabel: "Common Customer Tickets",
      roi: "10s Average",
      roiLabel: "Customer Response Time",
      productivity: "50% Reduction",
      productivityLabel: "Agent Workload"
    },
    screens: [rennto1, rennto3, txhub2, txhub4]
  },
  {
    id: "tx-cloud-manager",
    title: "TX-Cloud Manager",
    subtitle: "Cloud Governance & Operations Platform",
    badge: "Cloud Computing",
    outcome: "Cost Optimization",
    colorAccent: "#3b82f6",
    description: "A centralized cloud monitoring console built to automate cost optimization, access policies, and compliance dashboards.",
    about: "TX-Cloud Manager provides organizations with complete transparency over multi-cloud resource footprints. It helps platform engineers monitor spending trends, enforce identity governance controls, and automate the provisioning and teardown of developer infrastructure environments safely.",
    challenge: "Rapid infrastructure scaling across AWS and Azure led to 'cloud sprawl'—unchecked instance proliferation, orphaned databases, and lack of structural spending visibility.",
    solution: "We introduced TX-Cloud Manager to automatically detect idle cloud environments, enforce auto-sleep schedules, and monitor server configuration compliance.",
    features: [
      { title: "Cost Guard Engine", desc: "Automated cost projections, billing anomaly alerts, and rightsizing suggestions for VMs." },
      { title: "Interactive Resource Map", desc: "Visualize and query cloud assets, subnets, and security groups across AWS and Azure." },
      { title: "Governance Enforcer", desc: "Automatic policy guardrails to restrict insecure configuration changes or unauthorized regions." },
      { title: "Ephemeral Environments", desc: "On-demand development environment provisioning with built-in auto-expiration timers." }
    ],
    idealFor: [
      "Scale-ups running large microservices footprints",
      "IT departments managing multi-cloud (AWS/Azure) integrations",
      "Finance teams seeking to allocate precise cloud costs to business units",
      "DevOps teams wanting self-service infrastructure without manual approval delays"
    ],
    benefits: [
      "30% average reduction in monthly cloud infrastructure costs",
      "3.2x ROI in tooling costs within the first quarter",
      "100% real-time asset visibility across all cloud endpoints",
      "Zero unmapped or orphaned cloud database instances"
    ],
    techStack: ["React", "Go", "Docker", "Kubernetes", "InfluxDB", "Terraform"],
    impact: {
      kpi: "30% Saved",
      kpiLabel: "Monthly Cloud Costs",
      roi: "3.2x ROI",
      roiLabel: "On Software Licensing",
      productivity: "100% Visibility",
      productivityLabel: "Across All Cloud Providers"
    },
    screens: [txhub1, txhub3, rennto2, rennto4]
  },
  {
    id: "tx-devops-suite",
    title: "TX-DevOps Suite",
    subtitle: "End-to-End DevOps Automation Platform",
    badge: "DevOps",
    outcome: "Deployment Speed",
    colorAccent: "#f59e0b",
    description: "A unified platform built to automate continuous delivery pipelines, monitor server health, and enforce release gates.",
    about: "TX-DevOps Suite unifies building, testing, securing, and deploying software projects. It integrates release governance directly into code pipelines, requiring automated security scans to pass before deployment, while providing SRE teams with real-time server cluster status panels.",
    challenge: "Software developers suffered from slow, manual code deployment setups, leading to frequent configuration drift, deployment failures, and lengthy recovery timelines.",
    solution: "We automated the complete CI/CD workflow using TX-DevOps Suite, containerizing codebases and enforcing immutable GitOps delivery pipelines.",
    features: [
      { title: "Pipeline Automation", desc: "Visual CI/CD automation pipelines with automated security screening and build checks." },
      { title: "GitOps Infrastructure", desc: "Declarative infrastructure-as-code deployment models driven directly by Git repository commits." },
      { title: "Telemetry Dashboards", desc: "Real-time metrics tracking server response rates, CPU limits, and error occurrences." },
      { title: "Automated Rollbacks", desc: "Deployment health check triggers that revert failures automatically within seconds." }
    ],
    idealFor: [
      "Software development agencies releasing updates frequently",
      "Platform engineering teams seeking GitOps standardization",
      "System operators wanting to automate server cluster monitoring",
      "Security-conscious organizations wanting automated release gate scanning"
    ],
    benefits: [
      "12x faster deployment cycles from commit to production",
      "99.99% uptime during release and rolling deployment loops",
      "90% reduction in pipeline build failures and manual hotfixes",
      "Complete auditable history of all code updates and approvals"
    ],
    techStack: ["React", "Node.js", "Docker", "GitLab CI", "Prometheus", "Grafana"],
    impact: {
      kpi: "12x Faster",
      kpiLabel: "Software Release Speed",
      roi: "99.99% Uptime",
      roiLabel: "During Deployment Loops",
      productivity: "90% Reduction",
      productivityLabel: "Pipeline Build Failures"
    },
    screens: [txhub2, txhub4, rennto1, rennto3]
  }
];