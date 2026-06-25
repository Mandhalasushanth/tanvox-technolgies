// import React, { useEffect } from "react";
// import "./SupportPage.css";
// import supportHeroImg from "../../../assets/support_hero.png";

// export default function SupportPage() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="support-page-wrapper">
//       {/* SECTION 1 — HERO SECTION */}
//       <section className="sp-hero-section">
//         <div className="sp-hero-container">
//           <div className="sp-hero-content">
//             <div className="sp-hero-badge">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="sp-badge-icon"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//               </svg>
//               <span>Support Center – Tanvox Technologies</span>
//             </div>

//             <h1 className="sp-hero-title">
//               We’re Here to Help You <br />
//               <span className="sp-highlight-blue">24/7</span>
//             </h1>

//             <p className="sp-hero-desc">
//               At Tanvox Technologies, we are committed to providing reliable,
//               fast, and efficient support for all our clients. Whether you need
//               technical assistance, service guidance, or issue resolution, our
//               support team is always ready to assist you.
//             </p>

//             <p className="sp-hero-tagline">Your success is our priority.</p>
//           </div>

//           <div className="sp-hero-image-wrapper">
//             <div className="sp-hero-image-glow"></div>
//             <img
//               src={supportHeroImg}
//               alt="Tanvox Customer Support Representative"
//               className="sp-hero-img"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2 — HOW CAN WE HELP YOU */}
//       <section className="sp-help-section">
//         <div className="sp-help-container">
//           <div className="sp-help-header">
//             <h2>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 className="sp-help-header-gear"
//               >
//                 <circle cx="12" cy="12" r="3" />
//                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//               </svg>
//               How Can We Help You?
//             </h2>
//             <p>We provide support across all our service domains, including:</p>
//           </div>

//           <div className="sp-help-cards">
//             {/* Card 1: IT & Software Support */}
//             <div className="sp-domain-card card-it">
//               <div className="sp-card-bg-overlay"></div>
//               <div className="sp-card-hover-gradient"></div>
//               <div className="sp-card-header-group">
//                 <div className="sp-card-icon-wrap icon-blue">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//                     <line x1="8" y1="21" x2="16" y2="21" />
//                     <line x1="12" y1="17" x2="12" y2="21" />
//                   </svg>
//                 </div>
//                 <h3>IT & Software Support</h3>
//               </div>
//               <div className="sp-card-content-wrapper">
//                 <ul>
//                   <li>Application issues & bug fixes</li>
//                   <li>Software troubleshooting</li>
//                   <li>API & integration support</li>
//                   <li>Performance optimization assistance</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Card 2: Cloud & DevOps Support */}
//             <div className="sp-domain-card card-cloud">
//               <div className="sp-card-bg-overlay"></div>
//               <div className="sp-card-hover-gradient"></div>
//               <div className="sp-card-header-group">
//                 <div className="sp-card-icon-wrap icon-blue-alt">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
//                   </svg>
//                 </div>
//                 <h3>Cloud & DevOps Support</h3>
//               </div>
//               <div className="sp-card-content-wrapper">
//                 <ul>
//                   <li>Cloud infrastructure issues (AWS / Azure / GCP)</li>
//                   <li>CI/CD pipeline troubleshooting</li>
//                   <li>Kubernetes & container support</li>
//                   <li>Deployment assistance</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Card 3: Cybersecurity Support */}
//             <div className="sp-domain-card card-security">
//               <div className="sp-card-bg-overlay"></div>
//               <div className="sp-card-hover-gradient"></div>
//               <div className="sp-card-header-group">
//                 <div className="sp-card-icon-wrap icon-green">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                   </svg>
//                 </div>
//                 <h3>Cybersecurity Support</h3>
//               </div>
//               <div className="sp-card-content-wrapper">
//                 <ul>
//                   <li>Security incident response</li>
//                   <li>Vulnerability & threat assistance</li>
//                   <li>Access & identity management issues</li>
//                   <li>Compliance-related support</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Card 4: Data & Analytics Support */}
//             <div className="sp-domain-card card-data">
//               <div className="sp-card-bg-overlay"></div>
//               <div className="sp-card-hover-gradient"></div>
//               <div className="sp-card-header-group">
//                 <div className="sp-card-icon-wrap icon-purple">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <line x1="18" y1="20" x2="18" y2="10" />
//                     <line x1="12" y1="20" x2="12" y2="4" />
//                     <line x1="6" y1="20" x2="6" y2="14" />
//                   </svg>
//                 </div>
//                 <h3>Data & Analytics Support</h3>
//               </div>
//               <div className="sp-card-content-wrapper">
//                 <ul>
//                   <li>Dashboard and reporting issues</li>
//                   <li>Data pipeline troubleshooting</li>
//                   <li>BI tool support</li>
//                   <li>Data access & visualization help</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Card 5: Business & Operational Support */}
//             <div className="sp-domain-card card-business">
//               <div className="sp-card-bg-overlay"></div>
//               <div className="sp-card-hover-gradient"></div>
//               <div className="sp-card-header-group">
//                 <div className="sp-card-icon-wrap icon-orange">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                 </div>
//                 <h3>Business & Operational Support</h3>
//               </div>
//               <div className="sp-card-content-wrapper">
//                 <ul>
//                   <li>Project-related queries</li>
//                   <li>Service onboarding assistance</li>
//                   <li>Process guidance</li>
//                   <li>Documentation support</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3 — DETAILS SECTION (SLA, TICKET, REMOTE) */}
//       <section className="sp-details-section">
//         <div className="sp-details-container">
//           {/* Column 1: Priority Support */}
//           <div className="sp-detail-col col-sla">
//             <div className="sp-col-header">
//               <div className="sp-col-header-icon blue">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                 </svg>
//               </div>
//               <h3>Priority Support (SLA-Based)</h3>
//             </div>
//             <p className="sp-col-intro">
//               We offer structured support levels based on urgency:
//             </p>

//             <div className="sp-sla-list">
//               <div className="sp-sla-row border-red">
//                 <div className="sp-sla-badge badge-red">
//                   <span className="sp-sla-dot dot-red"></span>
//                   <strong>Critical Issues</strong>
//                 </div>
//                 <div className="sp-sla-text">
//                   Immediate response (system down, security incidents)
//                 </div>
//               </div>

//               <div className="sp-sla-row border-orange">
//                 <div className="sp-sla-badge badge-orange">
//                   <span className="sp-sla-dot dot-orange"></span>
//                   <strong>High Priority</strong>
//                 </div>
//                 <div className="sp-sla-text">Response within 2–4 hours</div>
//               </div>

//               <div className="sp-sla-row border-yellow">
//                 <div className="sp-sla-badge badge-yellow">
//                   <span className="sp-sla-dot dot-yellow"></span>
//                   <strong>Medium Priority</strong>
//                 </div>
//                 <div className="sp-sla-text">Response within 24 hours</div>
//               </div>

//               <div className="sp-sla-row border-green">
//                 <div className="sp-sla-badge badge-green">
//                   <span className="sp-sla-dot dot-green"></span>
//                   <strong>Low Priority</strong>
//                 </div>
//                 <div className="sp-sla-text">Response within 48 hours</div>
//               </div>
//             </div>
//           </div>

//           {/* Column 2: Raise a Ticket */}
//           <div className="sp-detail-col col-ticket">
//             <div className="sp-col-header">
//               <div className="sp-col-header-icon blue-alt">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <rect x="2" y="5" width="20" height="14" rx="2" />
//                   <line x1="2" y1="10" x2="22" y2="10" />
//                   <line x1="6" y1="14" x2="6.01" y2="14" />
//                   <line x1="18" y1="14" x2="18.01" y2="14" />
//                 </svg>
//               </div>
//               <h3>Raise a Support Ticket</h3>
//             </div>
//             <p className="sp-col-intro">
//               To get assistance, you can contact us through:
//             </p>

//             <div className="sp-ticket-channels">
//               <div className="sp-ticket-item">
//                 <span className="sp-ticket-label">Email:</span>
//                 <a href="mailto:support@Tanvox.in" className="sp-ticket-link">
//                   support@Tanvox.in
//                 </a>
//               </div>
//               <div className="sp-ticket-item">
//                 <span className="sp-ticket-label">Support Portal:</span>
//                 <a
//                   href="https://www.tanvox.in/support"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="sp-ticket-link"
//                 >
//                   www.tanvox.in/support
//                 </a>
//               </div>
//               <div className="sp-ticket-item">
//                 <span className="sp-ticket-label">Phone:</span>
//                 <span className="sp-ticket-val">+91-XXXXXXXXXX</span>
//               </div>
//             </div>

//             <div className="sp-include-box">
//               <h4>Please include:</h4>
//               <ul className="sp-checklist">
//                 <li>
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-check-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                   <span>Your name and company</span>
//                 </li>
//                 <li>
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-check-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                   <span>Service/module affected</span>
//                 </li>
//                 <li>
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-check-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                   <span>Detailed issue description</span>
//                 </li>
//                 <li>
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-check-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                   <span>Screenshots (if available)</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Column 3: Remote Assistance */}
//           <div className="sp-detail-col col-remote">
//             <div className="sp-col-header">
//               <div className="sp-col-header-icon blue">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//                   <line x1="8" y1="21" x2="16" y2="21" />
//                   <line x1="12" y1="17" x2="12" y2="21" />
//                 </svg>
//               </div>
//               <h3>Remote Assistance</h3>
//             </div>
//             <p className="sp-col-intro">Our technical team can also provide:</p>

//             <ul className="sp-remote-list">
//               <li>
//                 <span className="sp-blue-bullet"></span>
//                 <span>Remote troubleshooting sessions</span>
//               </li>
//               <li>
//                 <span className="sp-blue-bullet"></span>
//                 <span>Live debugging support</span>
//               </li>
//               <li>
//                 <span className="sp-blue-bullet"></span>
//                 <span>System monitoring and diagnostics</span>
//               </li>
//               <li>
//                 <span className="sp-blue-bullet"></span>
//                 <span>On-demand technical consultation</span>
//               </li>
//             </ul>

//             {/* Laptop Illustration */}
//             <div className="sp-remote-illustration">
//               <div className="sp-laptop-body">
//                 <div className="sp-laptop-screen">
//                   {/* Laptop screen elements */}
//                   <div className="sp-screen-headset-chat">
//                     <div className="sp-ill-headset">
//                       <div className="headset-band"></div>
//                       <div className="headset-earcup left"></div>
//                       <div className="headset-earcup right"></div>
//                       <div className="headset-mic"></div>
//                     </div>
//                     <div className="sp-ill-chat-bubble">
//                       <div className="chat-dot"></div>
//                       <div className="chat-dot"></div>
//                       <div className="chat-dot"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="sp-laptop-keyboard"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4 — RESOURCES & COMMITMENT */}
//       <section className="sp-resources-commitment-section">
//         <div className="sp-resources-commitment-container">
//           {/* Left Column: Self-Service Resources */}
//           <div className="sp-resources-col">
//             <div className="sp-res-header">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="sp-res-header-icon"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
//                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//               </svg>
//               <h3>Self-Service Resources</h3>
//             </div>
//             <p>We also encourage users to explore our knowledge resources:</p>

//             <div className="sp-res-grid">
//               <div className="sp-res-item">
//                 <div className="sp-res-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//                     <line x1="12" y1="17" x2="12.01" y2="17" />
//                   </svg>
//                 </div>
//                 <span>FAQs</span>
//               </div>

//               <div className="sp-res-item">
//                 <div className="sp-res-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                     <polyline points="14 2 14 8 20 8" />
//                     <line x1="16" y1="13" x2="8" y2="13" />
//                     <line x1="16" y1="17" x2="8" y2="17" />
//                   </svg>
//                 </div>
//                 <span>Documentation</span>
//               </div>

//               <div className="sp-res-item">
//                 <div className="sp-res-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//                   </svg>
//                 </div>
//                 <span>Setup Guides</span>
//               </div>

//               <div className="sp-res-item">
//                 <div className="sp-res-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//                   </svg>
//                 </div>
//                 <span>Best Practices</span>
//               </div>

//               <div className="sp-res-item">
//                 <div className="sp-res-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//                     <line x1="8" y1="21" x2="16" y2="21" />
//                     <line x1="12" y1="17" x2="12" y2="21" />
//                   </svg>
//                 </div>
//                 <span>
//                   Video Tutorials
//                   <br />
//                   <small>(Coming Soon)</small>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Our Commitment */}
//           <div className="sp-commitment-col">
//             <div className="sp-commit-header">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="sp-commit-header-icon"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//               </svg>
//               <h3>Our Commitment</h3>
//             </div>
//             <p>At Tanvox, we believe in:</p>

//             <div className="sp-commit-grid">
//               <div className="sp-commit-item">
//                 <div className="sp-commit-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16 14" />
//                   </svg>
//                 </div>
//                 <span>Fast response times</span>
//               </div>

//               <div className="sp-commit-item">
//                 <div className="sp-commit-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                     <polyline points="22 4 12 14.01 9 11.01" />
//                   </svg>
//                 </div>
//                 <span>Accurate issue resolution</span>
//               </div>

//               <div className="sp-commit-item">
//                 <div className="sp-commit-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//                   </svg>
//                 </div>
//                 <span>Transparent communication</span>
//               </div>

//               <div className="sp-commit-item">
//                 <div className="sp-commit-icon-circle">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                   </svg>
//                 </div>
//                 <span>Secure and reliable support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 5 — AVAILABILITY & IMMEDIATE HELP */}
//       <section className="sp-availability-contact-section">
//         <div className="sp-availability-intro">
//           <p>
//             We don’t just fix issues—we ensure your systems run smoothly and
//             efficiently.
//           </p>
//         </div>

//         <div className="sp-availability-contact-container">
//           {/* Left Card: Support Availability */}
//           <div className="sp-avail-card">
//             <div className="sp-avail-text-col">
//               <div className="sp-avail-header">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="sp-avail-icon"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <h3>Support Availability</h3>
//               </div>
//               <div className="sp-avail-info-list">
//                 <div className="sp-avail-info-item">
//                   <strong>Monday – Friday:</strong>
//                   <span>9:00 AM – 7:00 PM IST</span>
//                 </div>
//                 <div className="sp-avail-info-item">
//                   <strong>Emergency Support:</strong>
//                   <span>24/7 (Critical Systems Only)</span>
//                 </div>
//               </div>
//             </div>

//             {/* 24/7 Circular Progress dial */}
//             <div className="sp-avail-dial-col">
//               <div className="sp-dial-wrapper">
//                 <svg viewBox="0 0 100 100" className="sp-dial-svg">
//                   <circle cx="50" cy="50" r="40" className="sp-dial-track" />
//                   <circle cx="50" cy="50" r="40" className="sp-dial-path" />
//                 </svg>
//                 <div className="sp-dial-text">24/7</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Card: Need Immediate Help? */}
//           <div className="sp-immediate-help-card">
//             {/* Bubble background elements */}
//             <div className="sp-bubble-bg">
//               <span className="bubble b1"></span>
//               <span className="bubble b2"></span>
//               <span className="bubble b3"></span>
//               <span className="bubble b4"></span>
//               <span className="bubble b5"></span>
//             </div>

//             <div className="sp-immediate-content">
//               <div className="sp-immediate-left">
//                 <div className="sp-immediate-title-row">
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-rocket-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M22 2L11 13" />
//                     <path d="M22 2l-7 20-4-9-9-4 20-7z" />
//                   </svg>
//                   <h3>Need Immediate Help?</h3>
//                 </div>
//                 <p className="sp-immediate-sub">
//                   If your issue is urgent, don’t wait.
//                 </p>
//                 <p className="sp-immediate-desc">
//                   Contact our support team now and we’ll get back to you as
//                   quickly as possible.
//                 </p>
//               </div>

//               <div className="sp-immediate-right">
//                 <a href="#contact" className="sp-immediate-btn">
//                   Contact Support Now
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="sp-btn-arrow"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   >
//                     <line x1="5" y1="12" x2="19" y2="12" />
//                     <polyline points="12 5 19 12 12 19" />
//                   </svg>
//                 </a>

//                 <div className="sp-immediate-icons-row">
//                   <a
//                     href="mailto:support@tanvox.in"
//                     className="sp-circle-icon-btn"
//                     title="Email Us"
//                   >
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                       <polyline points="22,6 12,13 2,6" />
//                     </svg>
//                   </a>
//                   <a
//                     href="tel:+91XXXXXXXXXX"
//                     className="sp-circle-icon-btn"
//                     title="Call Us"
//                   >
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://www.tanvox.in/support"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="sp-circle-icon-btn"
//                     title="Web Portal"
//                   >
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <circle cx="12" cy="12" r="10" />
//                       <line x1="2" y1="12" x2="22" y2="12" />
//                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Support Footer line */}
//         <div className="sp-footer-line-container">
//           <div className="sp-footer-line-left">
//             <svg
//               viewBox="0 0 24 24"
//               className="sp-footer-shield-icon"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//             >
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//               <polyline points="9 11 11 13 15 9" />
//             </svg>
//             <span>
//               Thank you for choosing Tanvox Technologies.{" "}
//               <strong>We're always here to support your success.</strong>
//             </span>
//           </div>
//           <div className="sp-footer-line-right">
//             <a
//               href="https://www.tanvox.in"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               www.tanvox.in
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import "./SupportPage.css";
import supportHeroImg from "../../../assets/support.png";

export default function SupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="support-page-wrapper">
      {/* SECTION 1 — HERO SECTION */}
      <section className="sp-hero-section">
        {/* Animated Background Image */}
        <div
          className="sp-hero-bg-image"
          style={{
            backgroundImage: `url(${supportHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-hero-badge">
              <svg
                viewBox="0 0 24 24"
                className="sp-badge-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span>Support Center – Tanvox Technologies</span>
            </div>

            <h1 className="sp-hero-title">
              We’re Here to Help You <br />
              <span className="sp-highlight-blue">24/7</span>
            </h1>

            <p className="sp-hero-desc">
              At Tanvox Technologies, we are committed to providing reliable,
              fast, and efficient support for all our clients. Whether you need
              technical assistance, service guidance, or issue resolution, our
              support team is always ready to assist you.
            </p>

            <p className="sp-hero-tagline">Your success is our priority.</p>
          </div>

          {/* Empty div to keep the grid layout pushing text to the left */}
          <div className="sp-hero-empty-col"></div>
        </div>
      </section>

      {/* SECTION 2 — HOW CAN WE HELP YOU */}
      <section className="sp-help-section">
        <div className="sp-help-container">
          <div className="sp-help-header">
            <h2>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="sp-help-header-gear"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              How Can We Help You?
            </h2>
            <p>We provide support across all our service domains, including:</p>
          </div>

          <div className="sp-help-cards">
            {/* Card 1: IT & Software Support */}
            <div className="sp-domain-card card-it">
              <div className="sp-card-bg-overlay"></div>
              <div className="sp-card-hover-gradient"></div>
              <div className="sp-card-header-group">
                <div className="sp-card-icon-wrap icon-blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>IT & Software Support</h3>
              </div>
              <div className="sp-card-content-wrapper">
                <ul>
                  <li>Application issues & bug fixes</li>
                  <li>Software troubleshooting</li>
                  <li>API & integration support</li>
                  <li>Performance optimization assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Cloud & DevOps Support */}
            <div className="sp-domain-card card-cloud">
              <div className="sp-card-bg-overlay"></div>
              <div className="sp-card-hover-gradient"></div>
              <div className="sp-card-header-group">
                <div className="sp-card-icon-wrap icon-blue-alt">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <h3>Cloud & DevOps Support</h3>
              </div>
              <div className="sp-card-content-wrapper">
                <ul>
                  <li>Cloud infrastructure issues (AWS / Azure / GCP)</li>
                  <li>CI/CD pipeline troubleshooting</li>
                  <li>Kubernetes & container support</li>
                  <li>Deployment assistance</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Cybersecurity Support */}
            <div className="sp-domain-card card-security">
              <div className="sp-card-bg-overlay"></div>
              <div className="sp-card-hover-gradient"></div>
              <div className="sp-card-header-group">
                <div className="sp-card-icon-wrap icon-green">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Cybersecurity Support</h3>
              </div>
              <div className="sp-card-content-wrapper">
                <ul>
                  <li>Security incident response</li>
                  <li>Vulnerability & threat assistance</li>
                  <li>Access & identity management issues</li>
                  <li>Compliance-related support</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Data & Analytics Support */}
            <div className="sp-domain-card card-data">
              <div className="sp-card-bg-overlay"></div>
              <div className="sp-card-hover-gradient"></div>
              <div className="sp-card-header-group">
                <div className="sp-card-icon-wrap icon-purple">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h3>Data & Analytics Support</h3>
              </div>
              <div className="sp-card-content-wrapper">
                <ul>
                  <li>Dashboard and reporting issues</li>
                  <li>Data pipeline troubleshooting</li>
                  <li>BI tool support</li>
                  <li>Data access & visualization help</li>
                </ul>
              </div>
            </div>

            {/* Card 5: Business & Operational Support */}
            <div className="sp-domain-card card-business">
              <div className="sp-card-bg-overlay"></div>
              <div className="sp-card-hover-gradient"></div>
              <div className="sp-card-header-group">
                <div className="sp-card-icon-wrap icon-orange">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Business & Operational Support</h3>
              </div>
              <div className="sp-card-content-wrapper">
                <ul>
                  <li>Project-related queries</li>
                  <li>Service onboarding assistance</li>
                  <li>Process guidance</li>
                  <li>Documentation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DETAILS SECTION (SLA, TICKET, REMOTE) */}
      <section className="sp-details-section">
        <div className="sp-details-container">
          {/* Column 1: Priority Support */}
          <div className="sp-detail-col col-sla">
            <div className="sp-col-header">
              <div className="sp-col-header-icon blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Priority Support (SLA-Based)</h3>
            </div>
            <p className="sp-col-intro">
              We offer structured support levels based on urgency:
            </p>

            <div className="sp-sla-list">
              <div className="sp-sla-row border-red">
                <div className="sp-sla-badge badge-red">
                  <span className="sp-sla-dot dot-red"></span>
                  <strong>Critical Issues</strong>
                </div>
                <div className="sp-sla-text">
                  Immediate response (system down, security incidents)
                </div>
              </div>

              <div className="sp-sla-row border-orange">
                <div className="sp-sla-badge badge-orange">
                  <span className="sp-sla-dot dot-orange"></span>
                  <strong>High Priority</strong>
                </div>
                <div className="sp-sla-text">Response within 2–4 hours</div>
              </div>

              <div className="sp-sla-row border-yellow">
                <div className="sp-sla-badge badge-yellow">
                  <span className="sp-sla-dot dot-yellow"></span>
                  <strong>Medium Priority</strong>
                </div>
                <div className="sp-sla-text">Response within 24 hours</div>
              </div>

              <div className="sp-sla-row border-green">
                <div className="sp-sla-badge badge-green">
                  <span className="sp-sla-dot dot-green"></span>
                  <strong>Low Priority</strong>
                </div>
                <div className="sp-sla-text">Response within 48 hours</div>
              </div>
            </div>
          </div>

          {/* Column 2: Raise a Ticket */}
          <div className="sp-detail-col col-ticket">
            <div className="sp-col-header">
              <div className="sp-col-header-icon blue-alt">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                  <line x1="6" y1="14" x2="6.01" y2="14" />
                  <line x1="18" y1="14" x2="18.01" y2="14" />
                </svg>
              </div>
              <h3>Raise a Support Ticket</h3>
            </div>
            <p className="sp-col-intro">
              To get assistance, you can contact us through:
            </p>

            <div className="sp-ticket-channels">
              <div className="sp-ticket-item">
                <span className="sp-ticket-label">Email:</span>
                <a href="mailto:support@Tanvox.in" className="sp-ticket-link">
                  support@Tanvox.in
                </a>
              </div>
              <div className="sp-ticket-item">
                <span className="sp-ticket-label">Support Portal:</span>
                <a
                  href="https://www.tanvox.in/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-ticket-link"
                >
                  www.tanvox.in/support
                </a>
              </div>
              <div className="sp-ticket-item">
                <span className="sp-ticket-label">Phone:</span>
                <span className="sp-ticket-val">+91-XXXXXXXXXX</span>
              </div>
            </div>

            <div className="sp-include-box">
              <h4>Please include:</h4>
              <ul className="sp-checklist">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-check-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Your name and company</span>
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-check-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Service/module affected</span>
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-check-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Detailed issue description</span>
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-check-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Screenshots (if available)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Remote Assistance */}
          <div className="sp-detail-col col-remote">
            <div className="sp-col-header">
              <div className="sp-col-header-icon blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Remote Assistance</h3>
            </div>
            <p className="sp-col-intro">Our technical team can also provide:</p>

            <ul className="sp-remote-list">
              <li>
                <span className="sp-blue-bullet"></span>
                <span>Remote troubleshooting sessions</span>
              </li>
              <li>
                <span className="sp-blue-bullet"></span>
                <span>Live debugging support</span>
              </li>
              <li>
                <span className="sp-blue-bullet"></span>
                <span>System monitoring and diagnostics</span>
              </li>
              <li>
                <span className="sp-blue-bullet"></span>
                <span>On-demand technical consultation</span>
              </li>
            </ul>

            {/* Laptop Illustration */}
            <div className="sp-remote-illustration">
              <div className="sp-laptop-body">
                <div className="sp-laptop-screen">
                  {/* Laptop screen elements */}
                  <div className="sp-screen-headset-chat">
                    <div className="sp-ill-headset">
                      <div className="headset-band"></div>
                      <div className="headset-earcup left"></div>
                      <div className="headset-earcup right"></div>
                      <div className="headset-mic"></div>
                    </div>
                    <div className="sp-ill-chat-bubble">
                      <div className="chat-dot"></div>
                      <div className="chat-dot"></div>
                      <div className="chat-dot"></div>
                    </div>
                  </div>
                </div>
                <div className="sp-laptop-keyboard"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESOURCES & COMMITMENT */}
      <section className="sp-resources-commitment-section">
        <div className="sp-resources-commitment-container">
          {/* Left Column: Self-Service Resources */}
          <div className="sp-resources-col">
            <div className="sp-res-header">
              <svg
                viewBox="0 0 24 24"
                className="sp-res-header-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <h3>Self-Service Resources</h3>
            </div>
            <p>We also encourage users to explore our knowledge resources:</p>

            <div className="sp-res-grid">
              <div className="sp-res-item">
                <div className="sp-res-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <span>FAQs</span>
              </div>

              <div className="sp-res-item">
                <div className="sp-res-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span>Documentation</span>
              </div>

              <div className="sp-res-item">
                <div className="sp-res-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <span>Setup Guides</span>
              </div>

              <div className="sp-res-item">
                <div className="sp-res-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span>Best Practices</span>
              </div>

              <div className="sp-res-item">
                <div className="sp-res-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <span>
                  Video Tutorials
                  <br />
                  <small>(Coming Soon)</small>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Our Commitment */}
          <div className="sp-commitment-col">
            <div className="sp-commit-header">
              <svg
                viewBox="0 0 24 24"
                className="sp-commit-header-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3>Our Commitment</h3>
            </div>
            <p>At Tanvox, we believe in:</p>

            <div className="sp-commit-grid">
              <div className="sp-commit-item">
                <div className="sp-commit-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span>Fast response times</span>
              </div>

              <div className="sp-commit-item">
                <div className="sp-commit-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Accurate issue resolution</span>
              </div>

              <div className="sp-commit-item">
                <div className="sp-commit-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <span>Transparent communication</span>
              </div>

              <div className="sp-commit-item">
                <div className="sp-commit-icon-circle">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span>Secure and reliable support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AVAILABILITY & IMMEDIATE HELP */}
      <section className="sp-availability-contact-section">
        <div className="sp-availability-intro">
          <p>
            We don’t just fix issues—we ensure your systems run smoothly and
            efficiently.
          </p>
        </div>

        <div className="sp-availability-contact-container">
          {/* Left Card: Support Availability */}
          <div className="sp-avail-card">
            <div className="sp-avail-text-col">
              <div className="sp-avail-header">
                <svg
                  viewBox="0 0 24 24"
                  className="sp-avail-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <h3>Support Availability</h3>
              </div>
              <div className="sp-avail-info-list">
                <div className="sp-avail-info-item">
                  <strong>Monday – Friday:</strong>
                  <span>9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="sp-avail-info-item">
                  <strong>Emergency Support:</strong>
                  <span>24/7 (Critical Systems Only)</span>
                </div>
              </div>
            </div>

            {/* 24/7 Circular Progress dial */}
            <div className="sp-avail-dial-col">
              <div className="sp-dial-wrapper">
                <svg viewBox="0 0 100 100" className="sp-dial-svg">
                  <circle cx="50" cy="50" r="40" className="sp-dial-track" />
                  <circle cx="50" cy="50" r="40" className="sp-dial-path" />
                </svg>
                <div className="sp-dial-text">24/7</div>
              </div>
            </div>
          </div>

          {/* Right Card: Need Immediate Help? */}
          <div className="sp-immediate-help-card">
            <div className="sp-immediate-content">
              <div className="sp-immediate-left">
                <div className="sp-immediate-title-row">
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-rocket-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  <h3>Need Immediate Help?</h3>
                </div>
                <p className="sp-immediate-sub">
                  If your issue is urgent, don’t wait.
                </p>
                <p className="sp-immediate-desc">
                  Contact our support team now and we’ll get back to you as
                  quickly as possible.
                </p>
              </div>

              <div className="sp-immediate-right">
                <a href="#contact" className="sp-immediate-btn">
                  Contact Support Now
                  <svg
                    viewBox="0 0 24 24"
                    className="sp-btn-arrow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <div className="sp-immediate-icons-row">
                  <a
                    href="mailto:support@tanvox.in"
                    className="sp-circle-icon-btn"
                    title="Email Us"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="sp-circle-icon-btn"
                    title="Call Us"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tanvox.in/support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-circle-icon-btn"
                    title="Web Portal"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Footer line */}
        <div className="sp-footer-line-container">
          <div className="sp-footer-line-left">
            <svg
              viewBox="0 0 24 24"
              className="sp-footer-shield-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 11 11 13 15 9" />
            </svg>
            <span>
              Thank you for choosing Tanvox Technologies.{" "}
              <strong>We're always here to support your success.</strong>
            </span>
          </div>
          <div className="sp-footer-line-right">
            <a
              href="https://www.tanvox.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.tanvox.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
