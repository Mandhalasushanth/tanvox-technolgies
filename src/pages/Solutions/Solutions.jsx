// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Solutions.css";

// // Industry Images Imports
// import healthcareImg from "./assets/healthcare.jpg";
// import bankingFinancialImg from "./assets/banking_financial.jpg";
// import educationImg from "./assets/education.jpg";
// import retailEcommerceImg from "./assets/retail_ecommerce.jpg";
// import manufacturingImg from "./assets/manufacturing.jpg";
// import logisticsTransportationImg from "./assets/logistics_transportation.jpg";
// import realEstateImg from "./assets/real_estate.jpg";
// import governmentPublicImg from "./assets/government_public.jpg";
// import telecommunicationsImg from "./assets/telecommunications.jpg";
// import energyUtilitiesImg from "./assets/energy_utilities.jpg";
// import startupsSmeImg from "./assets/startups_sme.jpg";

// // --- CUSTOM SVG GRAPHICS & ICONS ---

// // Hero isometric tech city visual
// function IsometricCityGraphic() {
//   return (
//     <svg
//       viewBox="0 0 500 500"
//       className="solutions-hero-city-svg"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         {/* Glow & Gradient Defs */}
//         <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
//           <stop offset="100%" stopColor="#EC008C" stopOpacity="0.05" />
//         </linearGradient>
//         <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
//           <stop offset="100%" stopColor="#0B1F5F" stopOpacity="0.9" />
//         </linearGradient>
//         <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#EC008C" stopOpacity="0.8" />
//           <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.9" />
//         </linearGradient>
//         <linearGradient id="buildingGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
//           <stop offset="100%" stopColor="#065F46" stopOpacity="0.9" />
//         </linearGradient>
//         <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="8" result="blur" />
//           <feComposite in="SourceGraphic" in2="blur" operator="over" />
//         </filter>
//       </defs>

//       {/* Grid Floor Isometric */}
//       <g transform="translate(250, 420)">
//         <polygon
//           points="0,-220 240,-100 0,20 -240,-100"
//           fill="rgba(11, 31, 95, 0.4)"
//           stroke="url(#gridGrad)"
//           strokeWidth="1.5"
//         />
//         {/* Grid lines inside floor */}
//         <line x1="-120" y1="-160" x2="120" y2="-40" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//         <line x1="-60" y1="-130" x2="180" y2="-10" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//         <line x1="60" y1="-190" x2="-180" y2="-70" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//         <line x1="120" y1="-160" x2="-120" y2="-40" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//         <line x1="180" y1="-130" x2="-60" y2="-10" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//         <line x1="-60" y1="-190" x2="180" y2="-70" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
//       </g>

//       {/* Main Server Tower (Center) */}
//       <g transform="translate(250, 310)">
//         {/* Left Side */}
//         <polygon points="0,0 -45,-22 -45,-120 0,-98" fill="url(#buildingGrad1)" />
//         {/* Right Side */}
//         <polygon points="0,0 45,-22 45,-120 0,-98" fill="#06123D" />
//         {/* Top Diamond */}
//         <polygon points="0,-98 -45,-120 0,-142 45,-120" fill="#3B82F6" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
//         {/* Glowing Core */}
//         <line x1="0" y1="-20" x2="0" y2="-90" stroke="#60A5FA" strokeWidth="3" filter="url(#glow)" />
//         {/* Server Slots Indicators */}
//         <line x1="-25" y1="-45" x2="-5" y2="-35" stroke="#60A5FA" strokeWidth="2" />
//         <line x1="-25" y1="-65" x2="-5" y2="-55" stroke="#60A5FA" strokeWidth="2" />
//         <line x1="-25" y1="-85" x2="-5" y2="-75" stroke="#60A5FA" strokeWidth="2" />
//         <line x1="25" y1="-45" x2="5" y2="-35" stroke="#EC008C" strokeWidth="2" />
//         <line x1="25" y1="-65" x2="5" y2="-55" stroke="#EC008C" strokeWidth="2" />
//         <line x1="25" y1="-85" x2="5" y2="-75" stroke="#EC008C" strokeWidth="2" />
//       </g>

//       {/* AI Block (Left) */}
//       <g transform="translate(140, 270)">
//         <polygon points="0,0 -35,-17 -35,-80 0,-63" fill="url(#buildingGrad2)" />
//         <polygon points="0,0 35,-17 35,-80 0,-63" fill="#2E0854" />
//         <polygon points="0,-63 -35,-80 0,-97 35,-80" fill="#EC008C" />
//         {/* Glowing Ring */}
//         <ellipse cx="0" cy="-63" rx="20" ry="10" stroke="#F472B6" strokeWidth="1.5" fill="none" filter="url(#glow)" />
//       </g>

//       {/* Data Core Platform (Right) */}
//       <g transform="translate(360, 330)">
//         <polygon points="0,0 -35,-17 -35,-70 0,-53" fill="url(#buildingGrad3)" />
//         <polygon points="0,0 35,-17 35,-70 0,-53" fill="#042F2C" />
//         <polygon points="0,-53 -35,-70 0,-87 35,-70" fill="#10B981" />
//         {/* Data Stream Line */}
//         <path d="M0, -20 L-40, -100" stroke="#34D399" strokeWidth="2" strokeDasharray="4,4" filter="url(#glow)" />
//       </g>

//       {/* Network Rings and Data Particles */}
//       <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" fill="none">
//         <ellipse cx="250" cy="210" rx="150" ry="75" />
//         <ellipse cx="250" cy="210" rx="100" ry="50" />
//       </g>

//       {/* Floating Sparkles */}
//       <circle cx="200" cy="180" r="3" fill="#60A5FA" filter="url(#glow)" />
//       <circle cx="290" cy="230" r="4" fill="#F472B6" filter="url(#glow)" />
//       <circle cx="160" cy="320" r="3.5" fill="#34D399" filter="url(#glow)" />
//       <circle cx="330" cy="150" r="3" fill="#A78BFA" filter="url(#glow)" />
//     </svg>
//   );
// }

// // Icons
// const ArrowRightIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="5" y1="12" x2="19" y2="12" />
//     <polyline points="12 5 19 12 12 19" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// );

// // Section specific icons mapping
// const iconMap = {
//   ai: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//       <circle cx="12" cy="12" r="4" />
//     </svg>
//   ),
//   cloud: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
//     </svg>
//   ),
//   security: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   ),
//   data: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="18" y1="20" x2="18" y2="10" />
//       <line x1="12" y1="20" x2="12" y2="4" />
//       <line x1="6" y1="20" x2="6" y2="14" />
//     </svg>
//   ),
//   dx: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//       <polyline points="17 6 23 6 23 12" />
//     </svg>
//   ),
//   industry: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//       <line x1="2" y1="10" x2="22" y2="10" />
//       <path d="M8 21h8M12 17v4" />
//     </svg>
//   ),
//   erp: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//     </svg>
//   ),
//   crm: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   ),
//   hrms: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//       <circle cx="8.5" cy="7" r="4" />
//       <polyline points="17 11 19 13 23 9" />
//     </svg>
//   ),
//   platforms: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//       <line x1="9" y1="3" x2="9" y2="21" />
//       <line x1="15" y1="3" x2="15" y2="21" />
//       <line x1="3" y1="9" x2="21" y2="9" />
//       <line x1="3" y1="15" x2="21" y2="15" />
//     </svg>
//   )
// };

// export default function Solutions() {
//   const scrollRef = useRef(null);
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [activeDetailIndex, setActiveDetailIndex] = useState(null); // No card expanded by default

//   const cardsData = [
//     {
//       id: 0,
//       title: "Healthcare",
//       subtitle: "DEDICATED HEALTHCARE PLATFORMS",
//       img: healthcareImg,
//       details: "Transforming patient care delivery with secure, compliant digital architectures and advanced telemedicine capabilities.",
//       features: ["Hospital Management Systems", "Electronic Medical Records", "Telemedicine Platforms", "Patient Portals", "Appointment Scheduling", "Healthcare Analytics"],
//       benefits: ["Better Patient Experience", "Improved Clinical Outcomes", "Faster Access To Records", "Regulatory Compliance", "Operational Efficiency"],
//       themeColor: "#3b82f6",
//       themeColorSecondary: "#1d4ed8",
//       glowColor: "rgba(59, 130, 246, 0.04)",
//       ctaText: "Discuss Your Healthcare Project"
//     },
//     {
//       id: 1,
//       title: "Banking & FinTech",
//       subtitle: "FINANCIAL SERVICES & SYSTEM SECURITY",
//       img: bankingFinancialImg,
//       details: "Engineering high-security transactional backends, mobile banking interfaces, fraud detection algorithms, and decentralized systems.",
//       features: ["Payment Gateways", "Mobile Banking Apps", "Fraud Detection Systems", "Robo-Advisors", "Blockchain Solutions", "Core Banking Integration"],
//       benefits: ["Secure Transactions", "High-Velocity Systems", "Regulatory Compliance (KYC/AML)", "Enhanced User Engagement", "Reduced Operational Risk"],
//       themeColor: "#00f2fe",
//       themeColorSecondary: "#4facfe",
//       glowColor: "rgba(79, 172, 254, 0.04)",
//       ctaText: "Discuss Your FinTech Project"
//     },
//     {
//       id: 2,
//       title: "Education",
//       subtitle: "SCALABLE VIRTUAL LEARNING TOOLS",
//       img: educationImg,
//       details: "Building robust Learning Management Systems (LMS), interactive virtual classroom portals, and student data storage infrastructures.",
//       features: ["Learning Management (LMS)", "Virtual Classrooms", "Student Information Systems", "E-Learning Content Management", "Online Proctoring Tools", "Analytics & Reporting"],
//       benefits: ["Scalable Remote Learning", "Interactive Virtual Spaces", "Streamlined Administration", "Personalized Learning Paths", "Secure Examination Delivery"],
//       themeColor: "#f43f5e",
//       themeColorSecondary: "#be123c",
//       glowColor: "rgba(244, 63, 94, 0.04)",
//       ctaText: "Discuss Your Education Project"
//     },
//     {
//       id: 3,
//       title: "Retail & E-Commerce",
//       subtitle: "OMNICHANNEL COMMERCE PLATFORMS",
//       img: retailEcommerceImg,
//       details: "Creating scalable storefront architectures, POS integrations, smart inventory management systems, and automated loyalty programs.",
//       features: ["Headless Commerce Storefronts", "Smart Commerce Dashboards", "POS System Integrations", "Inventory Optimization Engines", "Automated Loyalty Platforms", "Omnichannel Analytics"],
//       benefits: ["Seamless Storefront Speed", "Real-Time Stock Insights", "Enhanced Customer Loyalty", "Unified Omnichannel Journey", "Data-Driven Marketing Insights"],
//       themeColor: "#10b981",
//       themeColorSecondary: "#047857",
//       glowColor: "rgba(16, 185, 129, 0.04)",
//       ctaText: "Discuss Your Retail Project"
//     },
//     {
//       id: 4,
//       title: "Manufacturing",
//       subtitle: "SMART PRODUCTION PLANNING & QA",
//       img: manufacturingImg,
//       details: "Integrating IoT monitoring, smart production planning dashboards, supply chain automation tools, and predictive maintenance logs.",
//       features: ["IoT Equipment Monitoring", "Production Planning Dashboards", "Supply Chain Automation", "Predictive Maintenance Logs", "Quality Assurance Analytics", "Warehouse Integration Tools"],
//       benefits: ["Minimized Equipment Downtime", "Optimized Production Flows", "End-to-End Asset Visibility", "Data-Backed QA Checks", "Reduced Inventory Wastage"],
//       themeColor: "#f59e0b",
//       themeColorSecondary: "#d97706",
//       glowColor: "rgba(245, 158, 11, 0.04)",
//       ctaText: "Discuss Your Manufacturing Project"
//     },
//     {
//       id: 5,
//       title: "Logistics & Cargo",
//       subtitle: "AI-DRIVEN FLEET & ROUTE OPTIMIZATION",
//       img: logisticsTransportationImg,
//       details: "Deploying real-time cargo trackers, automated dispatching algorithms, route optimization scripts, and warehouse management systems.",
//       features: ["Real-Time Cargo Trackers", "Automated Fleet Dispatch", "AI Route Optimization", "Warehouse Management Systems", "Client Delivery Portals", "Customs Compliance Integrations"],
//       benefits: ["Optimal Route Delivery Times", "Reduced Fuel & Operations Cost", "Accurate Package Tracking", "Maximum Warehouse Throughput", "Simplified Customs Paperwork"],
//       themeColor: "#6366f1",
//       themeColorSecondary: "#4338ca",
//       glowColor: "rgba(99, 102, 241, 0.04)",
//       ctaText: "Discuss Your Logistics Project"
//     },
//     {
//       id: 6,
//       title: "Real Estate",
//       subtitle: "VIRTUAL SHOWINGS & LEASE AUTOMATION",
//       img: realEstateImg,
//       details: "Engineering 3D virtual tour databases, listing management portals, CRM applications, and property management systems.",
//       features: ["3D Virtual Property Tours", "Listing Management Databases", "Agent CRM Applications", "Property Management Systems", "Lease & Contract Automation", "Market Analytics Engines"],
//       benefits: ["Engaging Remote Showings", "Centralized Lead Tracking", "Automated Billing & Maintenance", "Instant Contract Execution", "Accurate Valuation Estimates"],
//       themeColor: "#ec4899",
//       themeColorSecondary: "#be185d",
//       glowColor: "rgba(236, 72, 153, 0.04)",
//       ctaText: "Discuss Your Real Estate Project"
//     },
//     {
//       id: 7,
//       title: "Government",
//       subtitle: "SECURE PUBLIC SERVICE DIGITALIZATION",
//       img: governmentPublicImg,
//       details: "Deploying secure municipal portal apps, digitized archives, public service interfaces, and high-availability administration backends.",
//       features: ["Secure Citizen Portals", "Digitized Document Archives", "Public Service Request Trackers", "Administrative Admin Panels", "Government-Grade Encryption", "High-Availability Databases"],
//       benefits: ["Accessible Public Services", "Secure Digital Records", "Efficient Request Processing", "High System Reliability", "Paperless Bureaucracy"],
//       themeColor: "#0f172a",
//       themeColorSecondary: "#334155",
//       glowColor: "rgba(15, 23, 42, 0.04)",
//       ctaText: "Discuss Your Public Sector Project"
//     },
//     {
//       id: 8,
//       title: "Telecom & 5G",
//       subtitle: "NETWORK RELIABILITY & BILLING ENGINES",
//       img: telecommunicationsImg,
//       details: "Building network performance monitors, high-frequency signal mapping systems, billing engines, and carrier administration panels.",
//       features: ["Network Performance Monitors", "Signal Mapping Engines", "Automated Billing APIs", "Carrier Administration Panels", "Bandwidth Allocators", "IoT Device Gateways"],
//       benefits: ["Optimized Signal Reliability", "Zero-Failure Billing Runs", "Simplified Carrier Control", "Smart Bandwidth Utilization", "Scalable IoT Management"],
//       themeColor: "#06b6d4",
//       themeColorSecondary: "#0891b2",
//       glowColor: "rgba(6, 182, 212, 0.04)",
//       ctaText: "Discuss Your Telecom Project"
//     },
//     {
//       id: 9,
//       title: "Energy & Utilities",
//       subtitle: "SMART GRID LOGS & LOAD MANAGEMENT",
//       img: energyUtilitiesImg,
//       details: "Engineering smart grid monitors, billing automation APIs, environment analytics dashboards, and consumption logs.",
//       features: ["Smart Grid Monitors", "Automated Customer Billing", "Environmental Impact Analytics", "Energy Consumption Logs", "Grid Load Balancers", "Utility Outage Trackers"],
//       benefits: ["Stable Grid Infrastructure", "Accurate Utility Invoicing", "Real-Time Outage Alerts", "Eco-Friendly Load Management", "Detailed Consumption Audits"],
//       themeColor: "#84cc16",
//       themeColorSecondary: "#65a30d",
//       glowColor: "rgba(132, 204, 22, 0.04)",
//       ctaText: "Discuss Your Utilities Project"
//     },
//     {
//       id: 10,
//       title: "Startups & SMEs",
//       subtitle: "AGILE SaaS MVP & SOFTWARE DEVELOPMENT",
//       img: startupsSmeImg,
//       details: "Delivering agile software development prototypes, SaaS architectures, cloud scaling integrations, and cost-efficient operation systems.",
//       features: ["Agile Prototype Builders", "SaaS Core Architectures", "Cloud Scaling Integrations", "Cost-Efficient Infrastructure", "Product MVP Integrations", "Analytics Setup & Dashboards"],
//       benefits: ["Rapid Time-To-Market", "Scalable Software Foundation", "Low Operational Overhead", "Iterative MVP Enhancements", "Accurate Growth Analytics"],
//       themeColor: "#8b5cf6",
//       themeColorSecondary: "#6d28d9",
//       glowColor: "rgba(139, 92, 246, 0.04)",
//       ctaText: "Discuss Your Startup Project"
//     }
//   ];

//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeftState, setScrollLeftState] = useState(0);
//   const [dragMoved, setDragMoved] = useState(false);

//   const onMouseDown = (e) => {
//     const track = scrollRef.current;
//     if (!track) return;
//     setIsDragging(true);
//     setDragMoved(false);
//     setStartX(e.pageX - track.offsetLeft);
//     setScrollLeftState(track.scrollLeft);
//   };

//   const onMouseLeave = () => {
//     setIsDragging(false);
//   };

//   const onMouseUp = () => {
//     setIsDragging(false);
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const track = scrollRef.current;
//     if (!track) return;
//     const x = e.pageX - track.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     if (Math.abs(x - startX) > 6) {
//       setDragMoved(true);
//     }
//     track.scrollLeft = scrollLeftState - walk;
//   };

//   const handleCardClick = (cardId) => {
//     setActiveDetailIndex((prev) => {
//       const next = prev === cardId ? null : cardId;
//       if (next !== null) {
//         setTimeout(() => {
//           const track = scrollRef.current;
//           if (!track) return;
//           const cardElement = track.querySelector(`[data-card-id="${next}"]`);
//           if (cardElement) {
//             const trackWidth = track.clientWidth;
//             const cardOffset = cardElement.offsetLeft;
//             const cardWidth = cardElement.clientWidth;
//             const targetScroll = cardOffset - (trackWidth / 2) + (cardWidth / 2);
//             track.scrollTo({
//               left: targetScroll,
//               behavior: "smooth"
//             });
//           }
//         }, 150);
//       }
//       return next;
//     });
//   };

//   const onCardClick = (e, cardId) => {
//     if (dragMoved) {
//       e.preventDefault();
//       return;
//     }
//     handleCardClick(cardId);
//   };

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;
//     if (activeDetailIndex !== null) return; // Pause auto-scroll when a card is expanded

//     let autoScrollId;
//     const step = 0.4; // Elegant slower scroll
//     const intervalTime = 16;

//     const startAutoScroll = () => {
//       autoScrollId = setInterval(() => {
//         if (!container) return;
//         // Pause if user is hovering or dragging
//         if (container.matches(":hover") || isDragging) return;

//         container.scrollLeft += step;

//         const maxScroll = container.scrollWidth - container.clientWidth;
//         if (container.scrollLeft >= maxScroll - 1) {
//           container.scrollLeft = 0;
//         }
//       }, intervalTime);
//     };

//     startAutoScroll();

//     return () => {
//       if (autoScrollId) clearInterval(autoScrollId);
//     };
//   }, [activeDetailIndex, isDragging]);

//   // Animation utility props
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const panelContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.05
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.3 }
//     }
//   };

//   const panelItemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   return (
//     <div className="solutions-page">

//       {/* 1. HERO SECTION */}
//       <section className="solutions-hero">
//         <div className="solutions-container">
//           <div className="solutions-hero-grid">

//             {/* Left Column Copy */}
//             <motion.div
//               className="solutions-hero-content"
//               initial="hidden"
//               animate="visible"
//               variants={staggerContainer}
//             >
//               <motion.h1 className="solutions-hero-title" variants={fadeUp}>Business-Focused Solutions for Digital Transformation</motion.h1>
//               <motion.h2 className="solutions-hero-subtitle" variants={fadeUp}>
//                 Innovative Solutions Designed to Solve Real Business Challenges
//               </motion.h2>
//               <motion.p className="solutions-hero-desc" variants={fadeUp}>
//                 At Tanvox Technologies, we provide industry-specific and enterprise-grade solutions that help organizations improve efficiency, streamline operations, enhance customer experiences, and accelerate business growth.
//                 <br /><br />
//                 Our solutions combine business expertise, modern technologies, cloud-native architectures, artificial intelligence, automation, cybersecurity, and data intelligence to help organizations achieve sustainable growth and competitive advantage.
//               </motion.p>

//               <motion.div className="solutions-hero-actions" variants={fadeUp}>
//                 <a href="#contact" className="sol-btn sol-btn-primary">
//                   Request a Consultation
//                   <ArrowRightIcon />
//                 </a>
//                 <a href="#solutions-overview" className="sol-btn sol-btn-outline">
//                   Explore Solutions
//                 </a>
//               </motion.div>
//             </motion.div>

//             {/* Right Column Illustration */}
//             <div className="solutions-hero-graphic">
//               <IsometricCityGraphic />

//               {/* Floating Solution Icons */}
//               <div className="solutions-floating-icon-node node-ai" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.ai}
//                 <span>AI & Automation</span>
//               </div>
//               <div className="solutions-floating-icon-node node-cloud" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.cloud}
//                 <span>Cloud Solutions</span>
//               </div>
//               <div className="solutions-floating-icon-node node-security" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.security}
//                 <span>Zero-Trust Security</span>
//               </div>
//               <div className="solutions-floating-icon-node node-data" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.data}
//                 <span>Data & Analytics</span>
//               </div>
//               <div className="solutions-floating-icon-node node-dx" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.dx}
//                 <span>Digital Transformation</span>
//               </div>
//               <div className="solutions-floating-icon-node node-industry" style={{ transform: "translateY(0px)" }}>
//                 {iconMap.industry}
//                 <span>Industry Solutions</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 2. SOLUTIONS OVERVIEW SECTION */}
//       <section id="solutions-overview" className="solutions-section-light">
//         <div className="solutions-container">
//           <div className="solutions-overview-grid">

//             {/* Left Block */}
//             <motion.div
//               className="solutions-overview-left"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//             >
//               <span className="solutions-section-subtitle">Overview</span>
//               <h2>We Understand. We Solve. We Deliver.</h2>
//               <p>
//                 At Tanvox Technologies, we analyze your organizational bottlenecks to architect robust technology blueprints. From legacy system migration to AI agent implementation, we build systems that scale with business expansion.
//               </p>
//               <a href="#contact" className="sol-btn sol-btn-secondary-outline">
//                 Speak to a Specialist
//               </a>
//             </motion.div>

//             {/* Right Grid of Areas */}
//             <motion.div
//               className="solutions-overview-cards-grid"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={staggerContainer}
//             >
//               <motion.div className="solution-area-card enterprise-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.erp}</div>
//                 <h3>Enterprise Solutions</h3>
//                 <p>Streamline corporate structures, automate key operations, and centralize databases across all departments.</p>
//                 <a href="#enterprise-solutions" className="sol-link-learn">
//                   Explore ERP, CRM & HRMS <ArrowRightIcon />
//                 </a>
//               </motion.div>

//               <motion.div className="solution-area-card industry-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.industry}</div>
//                 <h3>Industry-Specific Solutions</h3>
//                 <p>Tailored digital frameworks resolving core compliance, automation, and operational problems across sectors.</p>
//                 <a href="#industry-solutions" className="sol-link-learn">
//                   View Sector Offerings <ArrowRightIcon />
//                 </a>
//               </motion.div>

//               <motion.div className="solution-area-card dx-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.dx}</div>
//                 <h3>Digital Transformation</h3>
//                 <p>Modernize legacy frameworks, restructure architectures, and integrate APIs for next-gen productivity.</p>
//                 <a href="#contact" className="sol-link-learn">
//                   Transform Business <ArrowRightIcon />
//                 </a>
//               </motion.div>

//               <motion.div className="solution-area-card ai-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.ai}</div>
//                 <h3>AI & Automation Solutions</h3>
//                 <p>Deploy intelligent machine learning pipelines, predictive dashboards, and robotic workflows.</p>
//                 <a href="#contact" className="sol-link-learn">
//                   See AI Capabilities <ArrowRightIcon />
//                 </a>
//               </motion.div>

//               <motion.div className="solution-area-card cloud-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.cloud}</div>
//                 <h3>Cloud-Based Solutions</h3>
//                 <p>Scale environments on secure AWS, Azure, and Google Cloud hybrid or multi-tenant configurations.</p>
//                 <a href="#contact" className="sol-link-learn">
//                   Configure Cloud <ArrowRightIcon />
//                 </a>
//               </motion.div>

//               <motion.div className="solution-area-card data-sol-theme" variants={fadeUp}>
//                 <div className="solution-area-card-icon">{iconMap.data}</div>
//                 <h3>Data & Analytics Solutions</h3>
//                 <p>Harness organizational datasets through pipelines, pipelines engineering, and BI reporting tools.</p>
//                 <a href="#contact" className="sol-link-learn">
//                   Extract Insights <ArrowRightIcon />
//                 </a>
//               </motion.div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* 3. ENTERPRISE SOLUTIONS SECTION */}
//       <section id="enterprise-solutions" className="solutions-section-dark">
//         <div className="solutions-container">

//           <div className="solutions-section-header">
//             <span className="solutions-section-subtitle">Operations Hub</span>
//             <h2 className="solutions-section-title">Enterprise Solutions</h2>
//             <p className="solutions-section-desc">
//               Integrated business solutions to streamline operations, enhance collaboration, and drive organizational efficiency.
//             </p>
//           </div>

//           <motion.div
//             className="enterprise-solutions-grid"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             {/* ERP Card */}
//             <motion.div className="enterprise-card erp-theme" variants={fadeUp}>
//               <div className="enterprise-card-icon">{iconMap.erp}</div>
//               <h3>ERP Solutions</h3>

//               <div className="enterprise-list-section">
//                 <span className="enterprise-list-title">Core Modules</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Finance & Accounting</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Human Resources</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Procurement</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Inventory Management</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Project Management</li>
//                 </ul>
//               </div>

//               <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
//                 <span className="enterprise-list-title">Key Benefits</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Process Standardization</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Improved Operational Efficiency</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Real-Time Business Insights</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Better Resource Utilization</li>
//                 </ul>
//               </div>

//               <a href="#contact" className="sol-link-learn">
//                 Learn More <ArrowRightIcon />
//               </a>
//             </motion.div>

//             {/* CRM Card */}
//             <motion.div className="enterprise-card crm-theme" variants={fadeUp}>
//               <div className="enterprise-card-icon">{iconMap.crm}</div>
//               <h3>CRM Solutions</h3>

//               <div className="enterprise-list-section">
//                 <span className="enterprise-list-title">Core Features</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Lead Management</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Sales Pipeline Management</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Customer Service</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Marketing Automation</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Customer Analytics</li>
//                 </ul>
//               </div>

//               <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
//                 <span className="enterprise-list-title">Key Benefits</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Increased Customer Retention</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Better Customer Experience</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Higher Revenue Growth</li>
//                 </ul>
//               </div>

//               <a href="#contact" className="sol-link-learn">
//                 Learn More <ArrowRightIcon />
//               </a>
//             </motion.div>

//             {/* HRMS Card */}
//             <motion.div className="enterprise-card hrms-theme" variants={fadeUp}>
//               <div className="enterprise-card-icon">{iconMap.hrms}</div>
//               <h3>HRMS Solutions</h3>

//               <div className="enterprise-list-section">
//                 <span className="enterprise-list-title">Core Modules</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Employee Information</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Attendance & Leave</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Payroll Processing</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Recruitment Management</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Performance Evaluation</li>
//                 </ul>
//               </div>

//               <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
//                 <span className="enterprise-list-title">Key Benefits</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Reduced Administrative Work</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Improved Employee Engagement</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Compliance Management</li>
//                 </ul>
//               </div>

//               <a href="#contact" className="sol-link-learn">
//                 Learn More <ArrowRightIcon />
//               </a>
//             </motion.div>

//             {/* Enterprise Platforms Card */}
//             <motion.div className="enterprise-card platforms-theme" variants={fadeUp}>
//               <div className="enterprise-card-icon">{iconMap.platforms}</div>
//               <h3>Enterprise Platforms</h3>

//               <div className="enterprise-list-section">
//                 <span className="enterprise-list-title">Key Features</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Process Automation</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Centralized Data Management</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Workflow Optimization</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Real-Time Reporting</li>
//                 </ul>
//               </div>

//               <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
//                 <span className="enterprise-list-title">Key Benefits</span>
//                 <ul className="enterprise-list">
//                   <li className="enterprise-list-item"><CheckIcon /> Improved Productivity</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Better Decision Making</li>
//                   <li className="enterprise-list-item"><CheckIcon /> Enhanced Business Agility</li>
//                 </ul>
//               </div>

//               <a href="#contact" className="sol-link-learn">
//                 Learn More <ArrowRightIcon />
//               </a>
//             </motion.div>

//           </motion.div>
//         </div>
//       </section>

//       {/* 4. INDUSTRY SOLUTIONS GRID */}
//       <section id="industry-solutions" className="solutions-section-light">
//         <div className="solutions-container">

//           <div className="solutions-section-header">
//             <span className="solutions-section-subtitle">Dedicated Expertise</span>
//             <h2 className="solutions-section-title">Solutions We Provide</h2>
//             <p className="solutions-section-desc">
//               Customized strategies engineered to address unique compliance, scaling, and processing challenges.
//             </p>
//           </div>

//           <motion.div
//             ref={scrollRef}
//             className="industry-solutions-grid"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//             onMouseDown={onMouseDown}
//             onMouseLeave={onMouseLeave}
//             onMouseUp={onMouseUp}
//             onMouseMove={onMouseMove}
//           >
//             {cardsData.map((card) => {
//               const isSelected = activeDetailIndex === card.id;
//               return (
//                 <motion.div
//                   key={card.id}
//                   data-card-id={card.id}
//                   layout
//                   className={`industry-image-card ${isSelected ? 'expanded' : 'collapsed'}`}
//                   onClick={(e) => onCardClick(e, card.id)}
//                   style={{
//                     border: isSelected ? `2px solid ${card.themeColor}` : 'none',
//                     boxShadow: isSelected
//                       ? `0 20px 40px ${card.themeColor}22, 0 8px 16px ${card.themeColor}15`
//                       : '0 6px 20px rgba(0, 0, 0, 0.08)',
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: [0.22, 1, 0.36, 1]
//                   }}
//                 >
//                   {isSelected ? (
//                     <div className="expanded-card-inner">
//                       {/* Left Side: Image & Title */}
//                       <div className="expanded-card-left">
//                         <motion.img
//                           layoutId={`card-img-${card.id}`}
//                           src={card.img}
//                           alt={card.title}
//                           className="expanded-card-img"
//                         />
//                         <div className="expanded-card-img-overlay">
//                           <h3>{card.title}</h3>
//                         </div>
//                       </div>

//                       {/* Right Side: Detailed Info */}
//                       <div className="expanded-card-right">
//                         <motion.div
//                           variants={panelContainerVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                           className="expanded-card-content"
//                         >
//                           {/* 1. Subtitle Badge */}
//                           <motion.div variants={panelItemVariants} className="expanded-badge-row">
//                             <span
//                               className="expanded-card-badge"
//                               style={{
//                                 color: card.themeColor,
//                                 borderColor: `${card.themeColor}33`,
//                                 background: `${card.themeColor}11`
//                               }}
//                             >
//                               {card.subtitle}
//                             </span>
//                           </motion.div>

//                           {/* 2. Title */}
//                           <motion.h3 variants={panelItemVariants} className="expanded-card-title">
//                             {card.title} Solutions
//                           </motion.h3>

//                           {/* 3. Description */}
//                           <motion.p variants={panelItemVariants} className="expanded-card-desc">
//                             {card.details}
//                           </motion.p>

//                           {/* 4. Capabilities */}
//                           <motion.h4 variants={panelItemVariants} className="expanded-card-section-title">
//                             Capabilities
//                           </motion.h4>
//                           <motion.div variants={panelItemVariants} className="expanded-card-features">
//                             {card.features.map((feature, fIdx) => (
//                               <span key={fIdx} className="expanded-feature-pill">
//                                 {feature}
//                               </span>
//                             ))}
//                           </motion.div>

//                           {/* 5. Business Benefits */}
//                           <motion.h4 variants={panelItemVariants} className="expanded-card-section-title">
//                             Business Benefits
//                           </motion.h4>
//                           <motion.div variants={panelItemVariants} className="expanded-card-benefits">
//                             {card.benefits.map((benefit, bIdx) => (
//                               <div key={bIdx} className="expanded-benefit-item">
//                                 <span className="benefit-check-icon" style={{ color: card.themeColor }}>✓</span>
//                                 <span className="benefit-text">{benefit}</span>
//                               </div>
//                             ))}
//                           </motion.div>

//                           {/* 6. CTA Button */}
//                           <motion.div variants={panelItemVariants} className="expanded-card-cta-wrapper">
//                             <a
//                               href="#contact"
//                               className="expanded-card-cta-btn"
//                               style={{ background: `linear-gradient(135deg, ${card.themeColor}, ${card.themeColorSecondary})` }}
//                             >
//                               {card.ctaText} &rarr;
//                             </a>
//                           </motion.div>
//                         </motion.div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="collapsed-card-inner">
//                       <motion.img
//                         layoutId={`card-img-${card.id}`}
//                         src={card.img}
//                         alt={card.title}
//                         className="collapsed-card-img"
//                       />
//                       <div className="collapsed-card-overlay">
//                         <h3>{card.title}</h3>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}

//           </motion.div>
//         </div>
//       </section>

//       {/* 5. FOUR INFORMATION BLOCKS SECTION */}
//       <section className="solutions-section-dark">
//         <div className="solutions-container">
//           <div className="solutions-info-grid">

//             {/* Block 1: Delivery Process */}
//             <div className="solutions-info-block">
//               <h3 className="solutions-info-block-title">
//                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
//                 Our Delivery Process
//               </h3>
//               <div className="solutions-process-list">
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">1</div>
//                   <span className="solutions-process-name">Business Discovery</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">2</div>
//                   <span className="solutions-process-name">Requirement Analysis</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">3</div>
//                   <span className="solutions-process-name">Solution Design</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">4</div>
//                   <span className="solutions-process-name">Development & Integration</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">5</div>
//                   <span className="solutions-process-name">Testing & QA</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">6</div>
//                   <span className="solutions-process-name">Deployment</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">7</div>
//                   <span className="solutions-process-name">Training & Adoption</span>
//                 </div>
//                 <div className="solutions-process-item">
//                   <div className="solutions-process-num">8</div>
//                   <span className="solutions-process-name">Support & Continuous Improvement</span>
//                 </div>
//               </div>
//             </div>

//             {/* Block 2: Why Choose Us */}
//             <div className="solutions-info-block">
//               <h3 className="solutions-info-block-title">
//                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
//                 Why Choose Tanvox
//               </h3>
//               <div className="solutions-why-cards">
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.dx}</div>
//                   <span className="solutions-why-title">Business-Focused</span>
//                 </div>
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.industry}</div>
//                   <span className="solutions-why-title">Industry Expertise</span>
//                 </div>
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.cloud}</div>
//                   <span className="solutions-why-title">Scalable Architecture</span>
//                 </div>
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.security}</div>
//                   <span className="solutions-why-title">Security & Compliance</span>
//                 </div>
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.ai}</div>
//                   <span className="solutions-why-title">Innovation Driven</span>
//                 </div>
//                 <div className="solutions-why-card">
//                   <div className="solutions-why-icon">{iconMap.erp}</div>
//                   <span className="solutions-why-title">End-to-End Delivery</span>
//                 </div>
//               </div>
//             </div>

//             {/* Block 4: Technologies We Leverage */}
//             <div className="solutions-info-block">
//               <h3 className="solutions-info-block-title">
//                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
//                 Technologies Leverage
//               </h3>
//               <div className="solutions-tech-list">

//                 <div>
//                   <div className="solutions-tech-cat-title">Cloud Platforms</div>
//                   <div className="solutions-tech-pills">
//                     <span className="solutions-tech-pill">AWS</span>
//                     <span className="solutions-tech-pill">Azure</span>
//                     <span className="solutions-tech-pill">Google Cloud</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="solutions-tech-cat-title">AI / Machine Learning</div>
//                   <div className="solutions-tech-pills">
//                     <span className="solutions-tech-pill">TensorFlow</span>
//                     <span className="solutions-tech-pill">PyTorch</span>
//                     <span className="solutions-tech-pill">OpenAI APIs</span>
//                     <span className="solutions-tech-pill">LLMs</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="solutions-tech-cat-title">Data & Analytics</div>
//                   <div className="solutions-tech-pills">
//                     <span className="solutions-tech-pill">Snowflake</span>
//                     <span className="solutions-tech-pill">Databricks</span>
//                     <span className="solutions-tech-pill">Power BI</span>
//                     <span className="solutions-tech-pill">Apache Spark</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="solutions-tech-cat-title">DevOps & Platforms</div>
//                   <div className="solutions-tech-pills">
//                     <span className="solutions-tech-pill">Docker</span>
//                     <span className="solutions-tech-pill">Kubernetes</span>
//                     <span className="solutions-tech-pill">Terraform</span>
//                     <span className="solutions-tech-pill">GitHub Actions</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="solutions-tech-cat-title">Security Frameworks</div>
//                   <div className="solutions-tech-pills">
//                     <span className="solutions-tech-pill">IAM</span>
//                     <span className="solutions-tech-pill">Vault</span>
//                     <span className="solutions-tech-pill">SIEM</span>
//                     <span className="solutions-tech-pill">Cloudflare WAF</span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 6. FINAL CTA SECTION */}
//       <section className="solutions-section-light" style={{ padding: "4rem 0" }}>
//         <div className="solutions-container">
//           <div className="solutions-cta">
//             <div className="solutions-cta-glow-1"></div>
//             <div className="solutions-cta-glow-2"></div>
//             <div className="solutions-cta-content">
//               <h2 className="solutions-cta-title">Ready to Transform Your Business?</h2>
//               <p className="solutions-cta-desc">
//                 Partner with Tanvox Technologies to implement innovative enterprise solutions that drive efficiency, business growth, and long-term competitive advantage.
//               </p>
//               <div className="solutions-cta-actions">
//                 <a href="#contact" className="sol-btn sol-btn-primary">
//                   Schedule a Consultation
//                 </a>
//                 <a href="#contact" className="sol-btn sol-btn-outline">
//                   Request a Demo
//                 </a>
//                 <a href="#contact" className="sol-btn sol-btn-outline">
//                   Talk to a Solution Expert
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Solutions.css";
import SolutionsHeroInteractive from "./SolutionsHeroInteractive";

// Industry Images Imports
import healthcareImg from "./assets/healthcare.jpg";
import bankingFinancialImg from "./assets/banking_financial.png";
import educationImg from "./assets/education.png";
import retailEcommerceImg from "./assets/retail_ecommerce.png";
import manufacturingImg from "./assets/manufacturing.jpg";
import logisticsTransportationImg from "./assets/logistics_transportation.jpg";
import realEstateImg from "./assets/real_estate.jpg";
import governmentPublicImg from "./assets/government_public.jpg";
import telecommunicationsImg from "./assets/telecommunications.jpg";
import energyUtilitiesImg from "./assets/energy_utilities.jpg";
import startupsSmeImg from "./assets/startups_sme.jpg";

// --- CUSTOM SVG GRAPHICS & ICONS ---

// Hero isometric tech city visual
function IsometricCityGraphic() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="solutions-hero-city-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow & Gradient Defs */}
        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EC008C" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0B1F5F" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC008C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="buildingGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid Floor Isometric */}
      <g transform="translate(250, 420)">
        <polygon
          points="0,-220 240,-100 0,20 -240,-100"
          fill="rgba(11, 31, 95, 0.4)"
          stroke="url(#gridGrad)"
          strokeWidth="1.5"
        />
        {/* Grid lines inside floor */}
        <line
          x1="-120"
          y1="-160"
          x2="120"
          y2="-40"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="-60"
          y1="-130"
          x2="180"
          y2="-10"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="-190"
          x2="-180"
          y2="-70"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="120"
          y1="-160"
          x2="-120"
          y2="-40"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="-130"
          x2="-60"
          y2="-10"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="-60"
          y1="-190"
          x2="180"
          y2="-70"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="1"
        />
      </g>

      {/* Main Server Tower (Center) */}
      <g transform="translate(250, 310)">
        {/* Left Side */}
        <polygon
          points="0,0 -45,-22 -45,-120 0,-98"
          fill="url(#buildingGrad1)"
        />
        {/* Right Side */}
        <polygon points="0,0 45,-22 45,-120 0,-98" fill="#06123D" />
        {/* Top Diamond */}
        <polygon
          points="0,-98 -45,-120 0,-142 45,-120"
          fill="#3B82F6"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        {/* Glowing Core */}
        <line
          x1="0"
          y1="-20"
          x2="0"
          y2="-90"
          stroke="#60A5FA"
          strokeWidth="3"
          filter="url(#glow)"
        />
        {/* Server Slots Indicators */}
        <line
          x1="-25"
          y1="-45"
          x2="-5"
          y2="-35"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        <line
          x1="-25"
          y1="-65"
          x2="-5"
          y2="-55"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        <line
          x1="-25"
          y1="-85"
          x2="-5"
          y2="-75"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="-45"
          x2="5"
          y2="-35"
          stroke="#EC008C"
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="-65"
          x2="5"
          y2="-55"
          stroke="#EC008C"
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="-85"
          x2="5"
          y2="-75"
          stroke="#EC008C"
          strokeWidth="2"
        />
      </g>

      {/* AI Block (Left) */}
      <g transform="translate(140, 270)">
        <polygon
          points="0,0 -35,-17 -35,-80 0,-63"
          fill="url(#buildingGrad2)"
        />
        <polygon points="0,0 35,-17 35,-80 0,-63" fill="#2E0854" />
        <polygon points="0,-63 -35,-80 0,-97 35,-80" fill="#EC008C" />
        {/* Glowing Ring */}
        <ellipse
          cx="0"
          cy="-63"
          rx="20"
          ry="10"
          stroke="#F472B6"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />
      </g>

      {/* Data Core Platform (Right) */}
      <g transform="translate(360, 330)">
        <polygon
          points="0,0 -35,-17 -35,-70 0,-53"
          fill="url(#buildingGrad3)"
        />
        <polygon points="0,0 35,-17 35,-70 0,-53" fill="#042F2C" />
        <polygon points="0,-53 -35,-70 0,-87 35,-70" fill="#10B981" />
        {/* Data Stream Line */}
        <path
          d="M0, -20 L-40, -100"
          stroke="#34D399"
          strokeWidth="2"
          strokeDasharray="4,4"
          filter="url(#glow)"
        />
      </g>

      {/* Network Rings and Data Particles */}
      <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" fill="none">
        <ellipse cx="250" cy="210" rx="150" ry="75" />
        <ellipse cx="250" cy="210" rx="100" ry="50" />
      </g>

      {/* Floating Sparkles */}
      <circle cx="200" cy="180" r="3" fill="#60A5FA" filter="url(#glow)" />
      <circle cx="290" cy="230" r="4" fill="#F472B6" filter="url(#glow)" />
      <circle cx="160" cy="320" r="3.5" fill="#34D399" filter="url(#glow)" />
      <circle cx="330" cy="150" r="3" fill="#A78BFA" filter="url(#glow)" />
    </svg>
  );
}

// Icons
const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Section specific icons mapping
const iconMap = {
  ai: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  cloud: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  security: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  data: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  dx: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  industry: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  erp: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  crm: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  hrms: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  platforms: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  ),
};

export default function Solutions() {
  const scrollRef = useRef(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [activeDetailIndex, setActiveDetailIndex] = useState(null); // No card expanded by default
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const cardsData = [
    {
      id: 0,
      title: "Healthcare",
      subtitle: "DEDICATED HEALTHCARE PLATFORMS",
      img: healthcareImg,
      details:
        "Transforming patient care delivery with secure, compliant digital architectures and advanced telemedicine capabilities.",
      features: [
        "Hospital Management Systems",
        "Electronic Medical Records",
        "Telemedicine Platforms",
        "Patient Portals",
        "Appointment Scheduling",
        "Healthcare Analytics",
      ],
      benefits: [
        "Better Patient Experience",
        "Improved Clinical Outcomes",
        "Faster Access To Records",
        "Regulatory Compliance",
        "Operational Efficiency",
      ],
      themeColor: "#2563eb",
      themeColorSecondary: "#1d4ed8",
      glowColor: "rgba(37, 99, 235, 0.04)",
      ctaText: "Discuss Your Healthcare Project",
    },
    {
      id: 1,
      title: "Banking & FinTech",
      subtitle: "FINANCIAL SERVICES & SYSTEM SECURITY",
      img: bankingFinancialImg,
      details:
        "Engineering high-security transactional backends, mobile banking interfaces, fraud detection algorithms, and decentralized systems.",
      features: [
        "Payment Gateways",
        "Mobile Banking Apps",
        "Fraud Detection Systems",
        "Robo-Advisors",
        "Blockchain Solutions",
        "Core Banking Integration",
      ],
      benefits: [
        "Secure Transactions",
        "High-Velocity Systems",
        "Regulatory Compliance (KYC/AML)",
        "Enhanced User Engagement",
        "Reduced Operational Risk",
      ],
      themeColor: "#0b1f5f",
      themeColorSecondary: "#1e3a8a",
      glowColor: "rgba(11, 31, 95, 0.04)",
      ctaText: "Discuss Your FinTech Project",
    },
    {
      id: 2,
      title: "Education",
      subtitle: "SCALABLE VIRTUAL LEARNING TOOLS",
      img: educationImg,
      details:
        "Building robust Learning Management Systems (LMS), interactive virtual classroom portals, and student data storage infrastructures.",
      features: [
        "Learning Management (LMS)",
        "Virtual Classrooms",
        "Student Information Systems",
        "E-Learning Content Management",
        "Online Proctoring Tools",
        "Analytics & Reporting",
      ],
      benefits: [
        "Scalable Remote Learning",
        "Interactive Virtual Spaces",
        "Streamlined Administration",
        "Personalized Learning Paths",
        "Secure Examination Delivery",
      ],
      themeColor: "#ec008c",
      themeColorSecondary: "#be185d",
      glowColor: "rgba(236, 0, 140, 0.04)",
      ctaText: "Discuss Your Education Project",
    },
    {
      id: 3,
      title: "Retail & E-Commerce",
      subtitle: "OMNICHANNEL COMMERCE PLATFORMS",
      img: retailEcommerceImg,
      details:
        "Creating scalable storefront architectures, POS integrations, smart inventory management systems, and automated loyalty programs.",
      features: [
        "Headless Commerce Storefronts",
        "Smart Commerce Dashboards",
        "POS System Integrations",
        "Inventory Optimization Engines",
        "Automated Loyalty Platforms",
        "Omnichannel Analytics",
      ],
      benefits: [
        "Seamless Storefront Speed",
        "Real-Time Stock Insights",
        "Enhanced Customer Loyalty",
        "Unified Omnichannel Journey",
        "Data-Driven Marketing Insights",
      ],
      themeColor: "#7b2cbf",
      themeColorSecondary: "#6d28d9",
      glowColor: "rgba(123, 44, 191, 0.04)",
      ctaText: "Discuss Your Retail Project",
    },
    {
      id: 4,
      title: "Manufacturing",
      subtitle: "SMART PRODUCTION PLANNING & QA",
      img: manufacturingImg,
      details:
        "Integrating IoT monitoring, smart production planning dashboards, supply chain automation tools, and predictive maintenance logs.",
      features: [
        "IoT Equipment Monitoring",
        "Production Planning Dashboards",
        "Supply Chain Automation",
        "Predictive Maintenance Logs",
        "Quality Assurance Analytics",
        "Warehouse Integration Tools",
      ],
      benefits: [
        "Minimized Equipment Downtime",
        "Optimized Production Flows",
        "End-to-End Asset Visibility",
        "Data-Backed QA Checks",
        "Reduced Inventory Wastage",
      ],
      themeColor: "#2563eb",
      themeColorSecondary: "#1d4ed8",
      glowColor: "rgba(37, 99, 235, 0.04)",
      ctaText: "Discuss Your Manufacturing Project",
    },
    {
      id: 5,
      title: "Logistics & Cargo",
      subtitle: "AI-DRIVEN FLEET & ROUTE OPTIMIZATION",
      img: logisticsTransportationImg,
      details:
        "Deploying real-time cargo trackers, automated dispatching algorithms, route optimization scripts, and warehouse management systems.",
      features: [
        "Real-Time Cargo Trackers",
        "Automated Fleet Dispatch",
        "AI Route Optimization",
        "Warehouse Management Systems",
        "Client Delivery Portals",
        "Customs Compliance Integrations",
      ],
      benefits: [
        "Optimal Route Delivery Times",
        "Reduced Fuel & Operations Cost",
        "Accurate Package Tracking",
        "Maximum Warehouse Throughput",
        "Simplified Customs Paperwork",
      ],
      themeColor: "#0b1f5f",
      themeColorSecondary: "#1e3a8a",
      glowColor: "rgba(11, 31, 95, 0.04)",
      ctaText: "Discuss Your Logistics Project",
    },
    {
      id: 6,
      title: "Real Estate",
      subtitle: "VIRTUAL SHOWINGS & LEASE AUTOMATION",
      img: realEstateImg,
      details:
        "Engineering 3D virtual tour databases, listing management portals, CRM applications, and property management systems.",
      features: [
        "3D Virtual Property Tours",
        "Listing Management Databases",
        "Agent CRM Applications",
        "Property Management Systems",
        "Lease & Contract Automation",
        "Market Analytics Engines",
      ],
      benefits: [
        "Engaging Remote Showings",
        "Centralized Lead Tracking",
        "Automated Billing & Maintenance",
        "Instant Contract Execution",
        "Accurate Valuation Estimates",
      ],
      themeColor: "#ec008c",
      themeColorSecondary: "#be185d",
      glowColor: "rgba(236, 0, 140, 0.04)",
      ctaText: "Discuss Your Real Estate Project",
    },
    {
      id: 7,
      title: "Government",
      subtitle: "SECURE PUBLIC SERVICE DIGITALIZATION",
      img: governmentPublicImg,
      details:
        "Deploying secure municipal portal apps, digitized archives, public service interfaces, and high-availability administration backends.",
      features: [
        "Secure Citizen Portals",
        "Digitized Document Archives",
        "Public Service Request Trackers",
        "Administrative Admin Panels",
        "Government-Grade Encryption",
        "High-Availability Databases",
      ],
      benefits: [
        "Accessible Public Services",
        "Secure Digital Records",
        "Efficient Request Processing",
        "High System Reliability",
        "Paperless Bureaucracy",
      ],
      themeColor: "#7b2cbf",
      themeColorSecondary: "#6d28d9",
      glowColor: "rgba(123, 44, 191, 0.04)",
      ctaText: "Discuss Your Public Sector Project",
    },
    {
      id: 10,
      title: "Startups & SMEs",
      subtitle: "AGILE SaaS MVP & SOFTWARE DEVELOPMENT",
      img: startupsSmeImg,
      details:
        "Delivering agile software development prototypes, SaaS architectures, cloud scaling integrations, and cost-efficient operation systems.",
      features: [
        "Agile Prototype Builders",
        "SaaS Core Architectures",
        "Cloud Scaling Integrations",
        "Cost-Efficient Infrastructure",
        "Product MVP Integrations",
        "Analytics Setup & Dashboards",
      ],
      benefits: [
        "Rapid Time-To-Market",
        "Scalable Software Foundation",
        "Low Operational Overhead",
        "Iterative MVP Enhancements",
        "Accurate Growth Analytics",
      ],
      themeColor: "#2563eb",
      themeColorSecondary: "#1d4ed8",
      glowColor: "rgba(37, 99, 235, 0.04)",
      ctaText: "Discuss Your Startup Project",
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);

  const onMouseDown = (e) => {
    const track = scrollRef.current;
    if (!track) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - track.offsetLeft);
    setScrollLeftState(track.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = scrollRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(x - startX) > 6) {
      setDragMoved(true);
    }
    track.scrollLeft = scrollLeftState - walk;
  };

  const handleCardClick = (cardId) => {
    setActiveDetailIndex((prev) => {
      const next = prev === cardId ? null : cardId;
      if (next !== null) {
        setTimeout(() => {
          const track = scrollRef.current;
          if (!track) return;
          const cardElement = track.querySelector(`[data-card-id="${next}"]`);
          if (cardElement) {
            const trackWidth = track.clientWidth;
            const cardOffset = cardElement.offsetLeft;
            const cardWidth = cardElement.clientWidth;
            const targetScroll = cardOffset - trackWidth / 2 + cardWidth / 2;
            track.scrollTo({
              left: targetScroll,
              behavior: "smooth",
            });
          }
        }, 150);
      }
      return next;
    });
  };

  const onCardClick = (e, cardId) => {
    if (dragMoved) {
      e.preventDefault();
      return;
    }
    handleCardClick(cardId);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    if (activeDetailIndex !== null) return; // Pause auto-scroll when a card is expanded

    let autoScrollId;
    const step = 0.4; // Elegant slower scroll
    const intervalTime = 16;

    const startAutoScroll = () => {
      autoScrollId = setInterval(() => {
        if (!container) return;
        // Pause if user is hovering or dragging
        if (container.matches(":hover") || isDragging) return;

        container.scrollLeft += step;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
      }, intervalTime);
    };

    startAutoScroll();

    return () => {
      if (autoScrollId) clearInterval(autoScrollId);
    };
  }, [activeDetailIndex, isDragging]);

  // Animation utility props
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const panelContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const panelItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="solutions-page">
      {/* 1. HERO SECTION */}
      <section className="solutions-hero">
        <div className="solutions-container">
          <div className="solutions-hero-grid">
            {/* Left Column Copy */}
            <motion.div
              className="solutions-hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className="solutions-hero-title" variants={fadeUp}>
                Business-Focused Solutions for Digital Transformation
              </motion.h1>
              <motion.h2 className="solutions-hero-subtitle" variants={fadeUp}>
                Innovative Solutions Designed to Solve Real Business Challenges
              </motion.h2>
              <motion.p className="solutions-hero-desc" variants={fadeUp}>
                At Tanvox Technologies, we provide industry-specific and
                enterprise-grade solutions that help organizations improve
                efficiency, streamline operations, enhance customer experiences,
                and accelerate business growth.
                <br />
                <br />
                Our solutions combine business expertise, modern technologies,
                cloud-native architectures, artificial intelligence, automation,
                cybersecurity, and data intelligence to help organizations
                achieve sustainable growth and competitive advantage.
              </motion.p>

              <motion.div className="solutions-hero-actions" variants={fadeUp}>
                <a href="#contact" className="btn-consultation">
                  Request a Consultation
                  <ArrowRightIcon />
                </a>
                <a
                  href="#industry-solutions"
                  className="btn-contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('industry-solutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Solutions
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column Illustration */}
            <div className="solutions-hero-graphic">
              <SolutionsHeroInteractive />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS OVERVIEW SECTION */}
      <section id="solutions-overview" className="solutions-section-light">
        <div className="solutions-container">
          <div className="solutions-overview-grid">
            {/* Left Block */}
            <motion.div
              className="solutions-overview-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="solutions-section-subtitle">
                Solutions Overview
              </span>
              <h2>We Understand. We Solve. We Deliver.</h2>
              <p>
                We understand that every business has unique challenges. Our
                solutions are designed to address operational inefficiencies,
                improve decision-making, automate workflows, and enable
                sustainable growth across industries.
              </p>
            </motion.div>

            {/* Vertical Divider */}
            <div className="solutions-overview-divider"></div>

            {/* Right List of Areas */}
            <motion.div
              className="solutions-overview-right-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="solutions-overview-title-right">
                Our Solution Areas
              </span>
              <div className="solutions-overview-list">
                <a
                  href="#enterprise-solutions"
                  className="solutions-overview-item enterprise-item"
                >
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.erp}
                  </div>
                  <span className="solutions-overview-item-text">
                    Enterprise Solutions
                  </span>
                </a>

                <a href="#contact" className="solutions-overview-item ai-item">
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.ai}
                  </div>
                  <span className="solutions-overview-item-text">
                    AI & Automation Solutions
                  </span>
                </a>

                <a
                  href="#industry-solutions"
                  className="solutions-overview-item industry-item"
                >
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.industry}
                  </div>
                  <span className="solutions-overview-item-text">
                    Industry-Specific Solutions
                  </span>
                </a>

                <a
                  href="#contact"
                  className="solutions-overview-item cloud-item"
                >
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.cloud}
                  </div>
                  <span className="solutions-overview-item-text">
                    Cloud-Based Solutions
                  </span>
                </a>

                <a href="#contact" className="solutions-overview-item dx-item">
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.dx}
                  </div>
                  <span className="solutions-overview-item-text">
                    Digital Transformation Solutions
                  </span>
                </a>

                <a
                  href="#contact"
                  className="solutions-overview-item data-item"
                >
                  <div className="solutions-overview-icon-wrapper">
                    {iconMap.data}
                  </div>
                  <span className="solutions-overview-item-text">
                    Data & Analytics Solutions
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE SOLUTIONS SECTION */}
      <section
        id="enterprise-solutions"
        className="solutions-section-light enterprise-section-white"
      >
        <div className="solutions-container">
          <div className="solutions-section-header">
            <span className="solutions-section-subtitle">Operations Hub</span>
            <h2 className="solutions-section-title">Enterprise Solutions</h2>
            <p className="solutions-section-desc">
              Integrated business solutions to streamline operations, enhance
              collaboration, and drive organizational efficiency.
            </p>
          </div>

          <motion.div
            className="enterprise-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* ERP Card */}
            <motion.div className="enterprise-flip-card" variants={fadeUp}>
              <div className="enterprise-flip-card-inner">
                {/* Front */}
                <div className="enterprise-flip-card-front">
                  <div className="enterprise-card-icon">{iconMap.erp}</div>
                  <h3>ERP Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Key Benefits</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Process Standardization
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Improved Operational Efficiency
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Real-Time Business Insights
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Better Resource Utilization
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Back */}
                <div className="enterprise-flip-card-back">
                  <h3>ERP Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Core Modules</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Finance & Accounting
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Human Resources
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Procurement
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Inventory Management
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Project Management
                      </li>
                    </ul>
                  </div>
                  <a href="#contact" className="sol-link-learn">
                    Learn More <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CRM Card */}
            <motion.div className="enterprise-flip-card" variants={fadeUp}>
              <div className="enterprise-flip-card-inner">
                {/* Front */}
                <div className="enterprise-flip-card-front">
                  <div className="enterprise-card-icon">{iconMap.crm}</div>
                  <h3>CRM Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Key Benefits</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Increased Customer Retention
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Better Customer Experience
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Higher Revenue Growth
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Back */}
                <div className="enterprise-flip-card-back">
                  <h3>CRM Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Core Features</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Lead Management
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Sales Pipeline Management
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Customer Service
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Marketing Automation
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Customer Analytics
                      </li>
                    </ul>
                  </div>
                  <a href="#contact" className="sol-link-learn">
                    Learn More <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* HRMS Card */}
            <motion.div className="enterprise-flip-card" variants={fadeUp}>
              <div className="enterprise-flip-card-inner">
                {/* Front */}
                <div className="enterprise-flip-card-front">
                  <div className="enterprise-card-icon">{iconMap.hrms}</div>
                  <h3>HRMS Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Key Benefits</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Reduced Administrative Work
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Improved Employee Engagement
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Compliance Management
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Back */}
                <div className="enterprise-flip-card-back">
                  <h3>HRMS Solutions</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Core Modules</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Employee Information
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Attendance & Leave
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Payroll Processing
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Recruitment Management
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Performance Evaluation
                      </li>
                    </ul>
                  </div>
                  <a href="#contact" className="sol-link-learn">
                    Learn More <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Platforms Card */}
            <motion.div className="enterprise-flip-card" variants={fadeUp}>
              <div className="enterprise-flip-card-inner">
                {/* Front */}
                <div className="enterprise-flip-card-front">
                  <div className="enterprise-card-icon">
                    {iconMap.platforms}
                  </div>
                  <h3>Enterprise Platforms</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Key Benefits</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Improved Productivity
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Better Decision Making
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Enhanced Business Agility
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Back */}
                <div className="enterprise-flip-card-back">
                  <h3>Enterprise Platforms</h3>
                  <div className="enterprise-list-section">
                    <span className="enterprise-list-title">Key Features</span>
                    <ul className="enterprise-list">
                      <li className="enterprise-list-item">
                        <CheckIcon /> Process Automation
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Centralized Data Management
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Workflow Optimization
                      </li>
                      <li className="enterprise-list-item">
                        <CheckIcon /> Real-Time Reporting
                      </li>
                    </ul>
                  </div>
                  <a href="#contact" className="sol-link-learn">
                    Learn More <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS SECTION */}
      <section id="industry-solutions" className="solutions-section-dark">
        <div className="solutions-container">
          {activeDetailIndex !== null && (
            <div 
              className="solutions-modal-backdrop" 
              onClick={() => setActiveDetailIndex(null)}
            />
          )}
          <div className="solutions-section-header">
            <h2 className="solutions-section-title">Solutions We Provide</h2>
            <p className="solutions-section-desc">
              Customized strategies engineered to address unique compliance,
              scaling, and processing challenges.
            </p>
          </div>

          <motion.div
            ref={scrollRef}
            className="industry-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {cardsData.map((card) => {
              const isSelected = activeDetailIndex === card.id;
              return (
                <motion.div
                  key={card.id}
                  data-card-id={card.id}
                  layout
                  className={`industry-image-card ${isSelected ? "expanded" : "collapsed"}`}
                  onClick={(e) => onCardClick(e, card.id)}
                  style={{
                    boxShadow: isSelected
                      ? "0 20px 40px rgba(123, 44, 191, 0.18), 0 8px 16px rgba(37, 99, 235, 0.12)"
                      : "0 6px 20px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {isSelected ? (
                    <div className="expanded-card-inner" onClick={(e) => e.stopPropagation()}>
                      {/* Close Button pinned to top right */}
                      <button 
                        className="expanded-card-close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(card.id);
                        }}
                        aria-label="Close details"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>

                      {/* Left Side: Image & Title */}
                      <div className="expanded-card-left">
                        <motion.img
                          layoutId={`card-img-${card.id}`}
                          src={card.img}
                          alt={card.title}
                          className="expanded-card-img"
                        />
                        <div className="expanded-card-img-overlay">
                          <h3>{card.title}</h3>
                        </div>
                      </div>

                      {/* Right Side: Detailed Info */}
                      <div className="expanded-card-right">
                        <motion.div
                          variants={panelContainerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="expanded-card-content"
                        >
                          {/* 1. Subtitle Badge */}
                          <motion.div
                            variants={panelItemVariants}
                            className="expanded-badge-row"
                          >
                            <span
                              className="expanded-card-badge"
                            >
                              {card.subtitle}
                            </span>
                          </motion.div>

                          {/* 2. Title */}
                          <motion.h3
                            variants={panelItemVariants}
                            className="expanded-card-title"
                          >
                            {card.title} Solutions
                          </motion.h3>

                          {/* 3. Description */}
                          <motion.p
                            variants={panelItemVariants}
                            className="expanded-card-desc"
                          >
                            {card.details}
                          </motion.p>

                          {/* 4. Capabilities */}
                          <motion.h4
                            variants={panelItemVariants}
                            className="expanded-card-section-title"
                          >
                            Capabilities
                          </motion.h4>
                          <motion.div
                            variants={panelItemVariants}
                            className="expanded-card-features"
                          >
                            {card.features.map((feature, fIdx) => (
                              <span
                                key={fIdx}
                                className="expanded-feature-pill"
                              >
                                {feature}
                              </span>
                            ))}
                          </motion.div>

                          {/* 5. Business Benefits */}
                          <motion.h4
                            variants={panelItemVariants}
                            className="expanded-card-section-title"
                          >
                            Business Benefits
                          </motion.h4>
                          <motion.div
                            variants={panelItemVariants}
                            className="expanded-card-benefits"
                          >
                            {card.benefits.map((benefit, bIdx) => (
                              <div key={bIdx} className="expanded-benefit-item">
                                <span
                                  className="benefit-check-icon"
                                >
                                  ✓
                                </span>
                                <span className="benefit-text">{benefit}</span>
                              </div>
                            ))}
                          </motion.div>

                          {/* 6. CTA Button */}
                          <motion.div
                            variants={panelItemVariants}
                            className="expanded-card-cta-wrapper"
                          >
                            <a
                              href="#contact"
                              className="expanded-card-cta-btn"
                            >
                              {card.ctaText} &rarr;
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <div className="collapsed-card-inner">
                      <motion.img
                        layoutId={`card-img-${card.id}`}
                        src={card.img}
                        alt={card.title}
                        className="collapsed-card-img"
                      />
                      <div className="collapsed-card-overlay">
                        <h3>{card.title}</h3>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. INFORMATION BLOCKS SECTION */}
      <section className="solutions-section-light solutions-info-section-light">
        <div className="solutions-container">
          <div className="solutions-info-vertical-stack">
            {/* Card 1: Our Delivery Process */}
            <div className="solutions-info-card-full">
              <div className="solutions-info-card-header">
                <div className="solutions-info-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div className="solutions-info-card-title-area">
                  <h3 className="solutions-info-card-title">
                    Our Delivery Process
                  </h3>
                  <div className="solutions-info-card-underline"></div>
                </div>
              </div>

              <div className="solutions-timeline-container">
                <div className="solutions-timeline-line"></div>
                <div className="solutions-timeline-steps">
                  <div className={`solutions-timeline-step ${activeStep === 0 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 0 ? "✓" : "01"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Business Discovery
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 1 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 1 ? "✓" : "02"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Requirement Analysis
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 2 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 2 ? "✓" : "03"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Solution Design
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 3 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 3 ? "✓" : "04"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Development & Integration
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 4 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 4 ? "✓" : "05"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Testing & QA
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 5 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 5 ? "✓" : "06"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">Deployment</span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 6 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 6 ? "✓" : "07"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Training & Adoption
                    </span>
                  </div>

                  <div className={`solutions-timeline-step ${activeStep === 7 ? "active-step" : ""}`}>
                    <div className="solutions-timeline-number">{activeStep > 7 ? "✓" : "08"}</div>
                    <div className="solutions-timeline-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <span className="solutions-timeline-name">
                      Support & Continuous Improvement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="solutions-info-bottom-row">
              {/* Card 2: Why Choose Tanvox */}
              <div className="solutions-info-card">
                <div className="solutions-info-card-header">
                  <div className="solutions-info-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="solutions-info-card-title-area">
                    <h3 className="solutions-info-card-title">
                      Why Choose Tanvox
                    </h3>
                    <div className="solutions-info-card-underline"></div>
                  </div>
                </div>

                <div className="solutions-why-horizontal">
                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <h4>Business-Focused</h4>
                    <p>
                      Solutions aligned with your goals that drive measurable
                      impact.
                    </p>
                  </div>

                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="2" y1="10" x2="22" y2="10" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    </div>
                    <h4>Industry Expertise</h4>
                    <p>
                      Deep domain knowledge to solve complex business
                      challenges.
                    </p>
                  </div>

                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                      </svg>
                    </div>
                    <h4>Scalable Architecture</h4>
                    <p>
                      Built to scale with performance, reliability, and
                      flexibility.
                    </p>
                  </div>

                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h4>Security & Compliance</h4>
                    <p>Enterprise-grade security with compliance built-in.</p>
                  </div>

                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    </div>
                    <h4>Innovation Driven</h4>
                    <p>
                      Leverage the latest technologies to stay ahead of the
                      curve.
                    </p>
                  </div>

                  <div className="solutions-why-item">
                    <div className="solutions-why-item-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <h4>End-to-End Delivery</h4>
                    <p>From strategy to support, we own the entire journey.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Technologies Leverage */}
              <div className="solutions-info-card">
                <div className="solutions-info-card-header">
                  <div className="solutions-info-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="solutions-info-card-title-area">
                    <h3 className="solutions-info-card-title">
                      Technologies Leverage
                    </h3>
                    <div className="solutions-info-card-underline"></div>
                  </div>
                </div>

                <div className="solutions-tech-rows">
                  <div className="solutions-tech-row">
                    <div className="solutions-tech-label">
                      <div className="solutions-tech-label-icon">
                        {iconMap.cloud}
                      </div>
                      <span className="solutions-tech-label-text">
                        Cloud Platforms
                      </span>
                    </div>
                    <div className="solutions-tech-pills-list">
                      <span className="solutions-tech-pill-light">AWS</span>
                      <span className="solutions-tech-pill-light">Azure</span>
                      <span className="solutions-tech-pill-light">
                        Google Cloud
                      </span>
                    </div>
                  </div>

                  <div className="solutions-tech-row">
                    <div className="solutions-tech-label">
                      <div className="solutions-tech-label-icon">
                        {iconMap.ai}
                      </div>
                      <span className="solutions-tech-label-text">
                        AI / Machine Learning
                      </span>
                    </div>
                    <div className="solutions-tech-pills-list">
                      <span className="solutions-tech-pill-light">
                        TensorFlow
                      </span>
                      <span className="solutions-tech-pill-light">PyTorch</span>
                      <span className="solutions-tech-pill-light">
                        OpenAI APIs
                      </span>
                      <span className="solutions-tech-pill-light">LLMs</span>
                    </div>
                  </div>

                  <div className="solutions-tech-row">
                    <div className="solutions-tech-label">
                      <div className="solutions-tech-label-icon">
                        {iconMap.data}
                      </div>
                      <span className="solutions-tech-label-text">
                        Data & Analytics
                      </span>
                    </div>
                    <div className="solutions-tech-pills-list">
                      <span className="solutions-tech-pill-light">
                        Snowflake
                      </span>
                      <span className="solutions-tech-pill-light">
                        Databricks
                      </span>
                      <span className="solutions-tech-pill-light">
                        Power BI
                      </span>
                      <span className="solutions-tech-pill-light">
                        Apache Spark
                      </span>
                    </div>
                  </div>

                  <div className="solutions-tech-row">
                    <div className="solutions-tech-label">
                      <div className="solutions-tech-label-icon">
                        {iconMap.platforms}
                      </div>
                      <span className="solutions-tech-label-text">
                        DevOps & Platforms
                      </span>
                    </div>
                    <div className="solutions-tech-pills-list">
                      <span className="solutions-tech-pill-light">Docker</span>
                      <span className="solutions-tech-pill-light">
                        Kubernetes
                      </span>
                      <span className="solutions-tech-pill-light">
                        Terraform
                      </span>
                      <span className="solutions-tech-pill-light">
                        GitHub Actions
                      </span>
                    </div>
                  </div>

                  <div className="solutions-tech-row">
                    <div className="solutions-tech-label">
                      <div className="solutions-tech-label-icon">
                        {iconMap.security}
                      </div>
                      <span className="solutions-tech-label-text">
                        Security Frameworks
                      </span>
                    </div>
                    <div className="solutions-tech-pills-list">
                      <span className="solutions-tech-pill-light">IAM</span>
                      <span className="solutions-tech-pill-light">Vault</span>
                      <span className="solutions-tech-pill-light">SIEM</span>
                      <span className="solutions-tech-pill-light">
                        Cloudflare WAF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section
        className="solutions-section-light"
        style={{ padding: "4rem 0" }}
      >
        <div className="solutions-container">
          <div className="solutions-cta">
            <div className="solutions-cta-glow-1"></div>
            <div className="solutions-cta-glow-2"></div>
            <div className="solutions-cta-content">
              <h2 className="solutions-cta-title">
                Ready to Transform Your Business?
              </h2>
              <p className="solutions-cta-desc">
                Partner with Tanvox Technologies to implement innovative
                enterprise solutions that drive efficiency, business growth, and
                long-term competitive advantage.
              </p>
              <div className="solutions-cta-actions">
                <a href="#contact" className="sol-btn-cta-white">
                  Schedule a Consultation
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
