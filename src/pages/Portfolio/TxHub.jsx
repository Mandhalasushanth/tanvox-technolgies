import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './ProductsRedesign.css';

// Brand Assets
import txhubLogo from '../../assets/TXhublogo.png';
import txhub1 from '../../assets/txhub1.png';
import txhub2 from '../../assets/txhub2.png';
import txhub3 from '../../assets/txhub3.png';
import txhub4 from '../../assets/txhub4.png';

// 3D Tilt Hook for smooth interactive cards
function use3DTilt(selector) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    const cleanupFns = [];

    cards.forEach((card) => {
      const onMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        // Tilt calculation (max 8 degrees tilt)
        const rotateX = ((yc - y) / yc) * 8;
        const rotateY = ((x - xc) / xc) * 8;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.015,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);

      cleanupFns.push(() => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, [selector]);
}

export default function TxHub() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const screens = [txhub1, txhub2, txhub3, txhub4];

  // Activate 3D tilt interaction on feature cards
  use3DTilt('.js-3d-tilt');

  // Auto-cycle screenshots every 4.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [screens.length]);

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev + 1) % screens.length);
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
  };

  const features = [
    {
      title: "Workflow Automation",
      desc: "Model complex business processes with drag-and-drop pipelines, automated approval routing, and trigger hooks.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: "Team Collaboration",
      desc: "Integrated chat channels, co-editing workpads, versioned document sharing, and calendar tasks keep cross-functional teams aligned.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Business Analytics",
      desc: "Compile custom dashboard charts, telemetry summaries, performance metrics, and compliance audit reports instantly.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Task Management",
      desc: "Manage projects via interactive Kanban boards, Gantt timelines, workload trackers, and milestone alerts.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="9" x2="15" y2="9"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="15" y2="17"/>
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      desc: "Granular Role-Based Access Controls (RBAC), multi-factor logins, data logs encryption, and regular automated compliance scans.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Integrations & API Hub",
      desc: "Connect seamlessly with third-party CRM, ERP, HRMS systems and proprietary corporate tools via a rich open REST API library.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      desc: "Decouple workers from routine manual coordination, increasing team execution throughput by 32%.",
      icon: "📈"
    },
    {
      title: "Better Collaboration",
      desc: "Break down operational silos by unifying documentation and communications in a single space.",
      icon: "🤝"
    },
    {
      title: "Automated Processes",
      desc: "Reduce human error and listing lags by automating multi-step triggers, invoices, and alerts.",
      icon: "⚙️"
    },
    {
      title: "Data-driven Decision Making",
      desc: "Leverage real-time business telemetry and custom audits to make informed strategic adjustments.",
      icon: "📊"
    }
  ];

  const technologies = [
    ".NET Core", "C#", "React", "Redux Toolkit", "SQL Server", "Docker", "Kubernetes", "Redis", "GSAP", "Azure Devops"
  ];

  return (
    <div className="saas-bg-canvas no-padding-top tx-theme">
      {/* Background Orbs */}
      <div className="saas-mesh-orb orb-blue"></div>
      <div className="saas-mesh-orb orb-purple"></div>
      <div className="saas-particles-overlay"></div>

      {/* Navigation & Breadcrumbs Bar */}
      <div className="saas-container detail-page-breadcrumbs-wrapper">
        <div className="detail-back-bar">
          <button className="saas-btn-back" onClick={() => (window.location.hash = '#portfolio/projects')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Products
          </button>

          <div className="saas-breadcrumbs">
            <a href="#home">Home</a>
            <span className="separator">/</span>
            <a href="#portfolio/projects">Products</a>
            <span className="separator">/</span>
            <span className="active">TX Hub</span>
          </div>
        </div>
      </div>

      {/* ================= 1. HERO BANNER ================= */}
      <section className="detail-hero-banner txhub-banner-theme">
        <div className="detail-hero-banner-gradient-overlay"></div>
        <div className="saas-container">
          <motion.div 
            className="detail-hero-banner-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="detail-hero-icon-wrapper txhub-theme">
              <img src={txhubLogo} alt="TX Hub Logo" />
            </div>
            <h1 className="detail-hero-title">TX Hub</h1>
            <p className="detail-hero-tagline">Enterprise Operations & Workflow Automation Platform</p>
          </motion.div>
        </div>
      </section>

      <div className="saas-container">
        
        {/* ================= 2. PRODUCT OVERVIEW ================= */}
        <motion.section 
          className="detail-product-overview-section"
          variants={pageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="overview-card-glass" variants={itemVariants}>
            <div className="overview-header-badge txhub-badge-color">PRODUCT OVERVIEW</div>
            <p className="overview-main-text">
              TX Hub is an enterprise-grade business platform designed to streamline operations, improve collaboration, automate workflows, and provide actionable business insights.
            </p>
            <p className="overview-sub-text">
              Engineered for scalable corporate telemetry, TX Hub unifies department communications, pipeline statuses, compliance audits, and third-party systems integrations. It allows companies to secure databases, automate notifications, and build custom dashboards.
            </p>
          </motion.div>
        </motion.section>

        {/* ================= 3. KEY FEATURES ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Key Features</h2>
            <p className="detail-section-subtitle">Discover the integrated tools built for enterprise coordination.</p>
          </div>

          <div className="saas-grid-three-col">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="saas-feature-card tx-feat-card js-3d-tilt"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="saas-feature-icon txhub-icon-theme">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= 4. SCREENSHOTS GALLERY ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Screenshots Gallery</h2>
            <p className="detail-section-subtitle">Take an interactive tour of the TX Hub dashboard screens.</p>
          </div>

          <div className="saas-gallery-two-col-layout">
            {/* Large Active Screenshot Viewer */}
            <div className="saas-gallery-viewer-panel">
              <div className="saas-showcase-frame spec-frame-border-blue">
                <div className="saas-frame-chrome">
                  <div className="chrome-window-dots">
                    <span className="window-dot dot-red"></span>
                    <span className="window-dot dot-yellow"></span>
                    <span className="window-dot dot-green"></span>
                  </div>
                  <div className="chrome-address-bar">txhub.tanvox.com/showcase/{activeScreenIndex + 1}</div>
                </div>

                <div 
                  className="saas-showcase-viewer" 
                  style={{ cursor: 'zoom-in' }}
                  onClick={() => setLightboxImg(screens[activeScreenIndex])}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeScreenIndex}
                      src={screens[activeScreenIndex]}
                      alt={`TX Hub Screen Showcase ${activeScreenIndex + 1}`}
                      className="saas-viewer-img"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>

                  <div className="saas-slider-overlay"></div>

                  <button className="saas-viewer-nav nav-prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>&#8249;</button>
                  <button className="saas-viewer-nav nav-next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>&#8250;</button>
                </div>
              </div>
            </div>

            {/* Gallery Screenshots Grid */}
            <div className="saas-gallery-grid-panel">
              {screens.map((screen, idx) => (
                <div
                  key={idx}
                  className={`saas-gallery-grid-item-card ${activeScreenIndex === idx ? 'active-grid-card-blue' : ''}`}
                  onClick={() => setActiveScreenIndex(idx)}
                >
                  <img src={screen} alt={`TX Hub Screen ${idx + 1}`} />
                  <div className="grid-item-overlay-glow-blue"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. BENEFITS SECTION ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Benefits</h2>
            <p className="detail-section-subtitle">How TX Hub drives operations quality and decision speeds.</p>
          </div>

          <div className="saas-grid-two-col">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                className="benefit-modern-card-glass js-3d-tilt"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <div className="benefit-icon-circle-glow txhub-theme-color">
                  {benefit.icon}
                </div>
                <div className="benefit-content-block">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= 6. TECHNOLOGY STACK ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Technology Stack</h2>
            <p className="detail-section-subtitle">Displaying technologies configured to run our business workflows.</p>
          </div>

          <div className="detail-tech-badges-flow">
            {technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                className="tech-modern-badge-tag txhub-tech-theme"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: idx * 0.04 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        <div className="saas-divider"></div>

        {/* ================= 7. CTA SECTION ================= */}
        <motion.section 
          className="saas-glass-card detail-cta-card-wrapper txhub-theme-glow-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="detail-cta-circle-glow glow-blue"></div>
          
          <h2 className="detail-cta-title">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="detail-cta-desc">
            Partner with Tanvox Technologies. Request a customized demonstration of TX Hub with our product consultants.
          </p>

          <button 
            className="saas-btn-primary txhub-gradient-btn"
            onClick={() => { window.location.hash = '#contact'; }}
          >
            Contact Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.section>
      </div>

      {/* Fullscreen Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            className="saas-fullscreen-lightbox" 
            onClick={() => setLightboxImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="saas-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="saas-lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
              <img src={lightboxImg} alt="Enlarged Platform Screen" className="saas-lightbox-img" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}