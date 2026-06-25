import React from "react";

// Common icon properties
const iconProps = {
  viewBox: "0 0 24 24",
  width: "32",
  height: "32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const smallIconProps = {
  ...iconProps,
  width: "24",
  height: "24",
};

// 1. Overview Simple Icons
export const overviewIcons = [
  {
    title: "Healthcare",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        <line x1="12" y1="8" x2="12" y2="14"></line>
        <line x1="9" y1="11" x2="15" y2="11"></line>
      </svg>
    ),
  },
  {
    title: "Banking &\nFinancial Services",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Education",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        <path d="M12 12h.01"></path>
      </svg>
    ),
  },
  {
    title: "Retail &\nE-Commerce",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M2 20h20"></path>
        <path d="M4 20V8l4-4 4 4v12"></path>
        <path d="M16 20V4l4-4 4 4v16"></path>
      </svg>
    ),
  },
  {
    title: "Logistics &\nTransportation",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    title: "Real Estate",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M3 21h18"></path>
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
      </svg>
    ),
  },
  {
    title: "Government &\nPublic Sector",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
      </svg>
    ),
  },
  {
    title: "Startups &\nSMEs",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
];

// 2. Detailed Industries Cards Data
export const detailedIndustries = [
  {
    id: "healthcare",
    title: "HEALTHCARE",
    subtitle: "Transforming Patient Care Through Technology",
    desc: "Healthcare organizations require secure, compliant, and patient-centric digital solutions that improve care delivery and operational efficiency.",
    color: "#ff1e3c",
    icon: (
      <svg {...iconProps} stroke="#ff1e3c">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        <line x1="12" y1="8" x2="12" y2="14"></line>
        <line x1="9" y1="11" x2="15" y2="11"></line>
      </svg>
    ),
    bullets: [
      "Hospital Management Systems",
      "Electronic Medical Records (EMR)",
      "Telemedicine Platforms",
      "Patient Portals",
      "Appointment Management Systems",
      "Healthcare Analytics",
      "Medical Billing Systems",
      "Laboratory Information Systems (LIS)",
      "Clinical Reporting Platforms",
    ],
    benefits: [
      "Improved Patient Experience",
      "Enhanced Clinical Outcomes",
      "Operational Efficiency",
      "Regulatory Compliance",
      "Secure Healthcare Data Management",
    ],
  },
  {
    id: "banking",
    title: "BANKING & FINANCIAL SERVICES",
    subtitle: "Enabling Secure & Digital Financial Services",
    desc: "We help financial institutions modernize operations, improve customer experiences, and maintain regulatory compliance through secure digital platforms.",
    color: "currentColor",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    bullets: [
      "Digital Banking Platforms",
      "Mobile Banking Applications",
      "Payment Gateway Solutions",
      "Loan Management Systems",
      "Fraud Detection Systems",
      "Investment Management Platforms",
      "Customer Analytics",
      "Compliance Management Solutions",
    ],
    benefits: [
      "Secure Transactions",
      "Faster Processing",
      "Improved Customer Trust",
      "Risk Reduction",
      "Regulatory Compliance",
    ],
  },
  {
    id: "education",
    title: "EDUCATION",
    subtitle: "Empowering Digital Learning & Academic Excellence",
    desc: "Supporting educational institutions, universities, and training organizations with innovative learning technologies.",
    color: "#7c3aed",
    icon: (
      <svg {...iconProps} stroke="#7c3aed">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    bullets: [
      "Learning Management Systems (LMS)",
      "Student Information Systems",
      "Online Examination Platforms",
      "Virtual Classrooms",
      "School ERP Systems",
      "Academic Analytics",
      "E-Learning Portals",
      "Mobile Learning Applications",
    ],
    benefits: [
      "Enhanced Learning Experience",
      "Improved Student Engagement",
      "Efficient Administration",
      "Digital Accessibility",
      "Better Academic Performance Tracking",
    ],
  },
  {
    id: "retail",
    title: "RETAIL & E-COMMERCE",
    subtitle: "Delivering Seamless Customer Experiences",
    desc: "Helping retailers optimize operations, increase sales, and improve customer engagement through digital commerce solutions.",
    color: "#10b981",
    icon: (
      <svg {...iconProps} stroke="#10b981">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    bullets: [
      "E-Commerce Platforms",
      "Retail ERP Systems",
      "Inventory Management Systems",
      "Point of Sale (POS) Systems",
      "Customer Loyalty Programs",
      "Order Management Systems",
      "Omnichannel Retail Solutions",
      "Retail Analytics Platforms",
    ],
    benefits: [
      "Increased Revenue",
      "Better Customer Experience",
      "Inventory Optimization",
      "Real-Time Business Insights",
      "Enhanced Customer Loyalty",
    ],
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING",
    subtitle: "Smart Manufacturing for Industry 4.0",
    desc: "Modernizing production and operations through automation, IoT, and intelligent manufacturing technologies.",
    color: "#f59e0b",
    icon: (
      <svg {...iconProps} stroke="#f59e0b">
        <path d="M2 20h20"></path>
        <path d="M4 20V8l4-4 4 4v12"></path>
        <path d="M16 20V4l4-4 4 4v16"></path>
      </svg>
    ),
    bullets: [
      "Manufacturing ERP",
      "Manufacturing Execution Systems (MES)",
      "Production Monitoring Platforms",
      "Predictive Maintenance Solutions",
      "Quality Management Systems",
      "Industrial IoT Solutions",
      "Supply Chain Management",
      "Warehouse Automation",
    ],
    benefits: [
      "Increased Productivity",
      "Reduced Downtime",
      "Improved Quality Control",
      "Operational Visibility",
      "Better Resource Utilization",
    ],
  },
  {
    id: "logistics",
    title: "LOGISTICS & TRANSPORTATION",
    subtitle: "Optimizing Supply Chain Operations",
    desc: "Improving logistics performance through automation, analytics, and real-time operational visibility.",
    color: "#059669",
    icon: (
      <svg {...iconProps} stroke="#059669">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    bullets: [
      "Fleet Management Systems",
      "Warehouse Management Systems",
      "Route Optimization Platforms",
      "Shipment Tracking Systems",
      "Transportation Management Systems (TMS)",
      "Asset Tracking Solutions",
      "Supply Chain Analytics",
      "Logistics Automation",
    ],
    benefits: [
      "Faster Deliveries",
      "Reduced Operational Costs",
      "Improved Asset Utilization",
      "Real-Time Visibility",
      "Enhanced Supply Chain Performance",
    ],
  },
  {
    id: "realestate",
    title: "REAL ESTATE",
    subtitle: "Digitally Transforming Property Management",
    desc: "Supporting real estate developers, agencies, and property management firms with intelligent technology solutions.",
    color: "#3b82f6",
    icon: (
      <svg {...iconProps} stroke="#3b82f6">
        <path d="M3 21h18"></path>
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
      </svg>
    ),
    bullets: [
      "Property Management Systems",
      "Real Estate CRM",
      "Property Listing Portals",
      "Tenant Management Systems",
      "Facility Management Platforms",
      "Virtual Property Tours",
      "Lease Management Systems",
      "Property Analytics",
    ],
    benefits: [
      "Improved Property Operations",
      "Better Tenant Experience",
      "Enhanced Sales Management",
      "Increased Operational Efficiency",
      "Real-Time Property Insights",
    ],
  },
  {
    id: "government",
    title: "GOVERNMENT & PUBLIC SECTOR",
    subtitle: "Enabling Smart Governance",
    desc: "Helping government organizations improve public services, operational efficiency, and citizen engagement.",
    color: "#0f766e",
    icon: (
      <svg {...iconProps} stroke="#0f766e">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
      </svg>
    ),
    bullets: [
      "E-Governance Platforms",
      "Citizen Service Portals",
      "Document Management Systems",
      "Smart City Solutions",
      "Public Information Systems",
      "Workflow Automation Platforms",
      "Digital Identity Management",
      "Government Analytics",
    ],
    benefits: [
      "Improved Citizen Services",
      "Increased Transparency",
      "Operational Efficiency",
      "Better Data Management",
      "Faster Service Delivery",
    ],
  },
];

// 3. Cross-Industry Capabilities
export const crossIndustryCapabilities = [
  {
    title: "Artificial Intelligence",
    icon: (
      <svg {...smallIconProps} stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="2" x2="12" y2="9"></line>
        <line x1="12" y1="15" x2="12" y2="22"></line>
      </svg>
    ),
    bullets: [
      "AI Assistants",
      "Predictive Analytics",
      "Intelligent Automation",
      "Machine Learning Solutions",
    ],
  },
  {
    title: "Cloud Solutions",
    icon: (
      <svg {...smallIconProps} stroke="currentColor">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
    bullets: [
      "Cloud Migration",
      "Managed Cloud Services",
      "Hybrid Infrastructure",
      "Multi-Cloud Architecture",
    ],
  },
  {
    title: "DevOps & Automation",
    icon: (
      <svg {...smallIconProps} stroke="currentColor">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"></path>
      </svg>
    ),
    bullets: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Containerization",
      "Platform Engineering",
    ],
  },
  {
    title: "Cybersecurity",
    icon: (
      <svg {...smallIconProps} stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    ),
    bullets: [
      "Security Assessments",
      "Compliance Management",
      "Threat Monitoring",
      "Security Operations",
    ],
  },
  {
    title: "Data Analytics",
    icon: (
      <svg {...smallIconProps} stroke="currentColor">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    bullets: [
      "Business Intelligence",
      "Reporting Dashboards",
      "Predictive Insights",
      "Data Warehousing",
    ],
  },
];

// 4. Why Choose Us Data
export const whyChooseUsData = [
  {
    title: "Industry Expertise",
    desc: "Deep understanding of sector-specific requirements, regulations, and business challenges.",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Tailored Solutions",
    desc: "Customized technology solutions aligned with your business objectives and operational goals.",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "Compliance & Security",
    desc: "Solutions designed to meet industry regulations, governance requirements, and security standards.",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    title: "Innovation-Driven Approach",
    desc: "Leveraging Artificial Intelligence, Cloud Computing, Automation, Analytics, and Emerging Technologies.",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="2" x2="12" y2="5"></line>
        <line x1="12" y1="19" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="5" y2="12"></line>
        <line x1="19" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"></line>
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07"></line>
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95"></line>
        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93"></line>
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    desc: "From consulting and implementation to optimization and ongoing support.",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
      </svg>
    ),
  },
  {
    title: "Proven Delivery Excellence",
    desc: "Successful execution of projects across multiple industries and technology domains.",
    icon: (
      <svg {...iconProps} stroke="#eab308">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
];

// 5. Engagement Process
export const engagementProcess = [
  {
    title: "Industry Assessment",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    title: "Business Analysis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    title: "Solution Strategy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Technology Design",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Development & Implementation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <polyline points="9 15 11 17 15 13"></polyline>
      </svg>
    ),
  },
  {
    title: "Testing & Validation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    title: "Deployment",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    title: "Training & User Adoption",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Continuous Support & Optimization",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
      </svg>
    ),
  },
];

// 6. Success Metrics
export const successMetrics = [
  {
    value: "100+",
    label: "Projects\nDelivered",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        <path d="M12 12v9"></path>
        <path d="m8 17 4 4 4-4"></path>
      </svg>
    ),
  },
  {
    value: "Multiple",
    label: "Industry Verticals\nServed",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    value: "Enterprise-Grade",
    label: "Technology\nSolutions",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    value: "Long-Term",
    label: "Client\nRelationships",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
        <path d="m21 3 1 11h-2"></path>
        <path d="M3 3 2 14l6.5 6.5a2 2 0 0 0 2.83 0L14 17l-3-3"></path>
      </svg>
    ),
  },
  {
    value: "High",
    label: "Customer\nSatisfaction",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    value: "Global Delivery",
    label: "Capability",
    icon: (
      <svg {...iconProps} stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
];

export const heroHexagons = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    pos: "top-left",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    pos: "top-right",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    pos: "center-right",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    pos: "center-left",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      </svg>
    ),
    pos: "bottom-left",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
      </svg>
    ),
    pos: "bottom-center",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      </svg>
    ),
    pos: "bottom-right",
  },
];
