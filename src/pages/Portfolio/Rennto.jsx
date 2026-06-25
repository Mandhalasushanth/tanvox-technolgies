import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './ProductsRedesign.css';

// Brand Assets
import renntoLogo from '../../assets/rennto.png';
import rennto1 from '../../assets/rennto1.png';
import rennto2 from '../../assets/rennto2.png';
import rennto3 from '../../assets/rennto3.png';
import rennto4 from '../../assets/rennto4.png';

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

export default function Rennto() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const screens = [rennto1, rennto2, rennto3, rennto4];

  // Activate 3D tilt interaction on feature cards
  use3DTilt('.js-3d-tilt');

  // Auto-cycle showcase screenshots every 4.5 seconds unless interacted
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [screens.length]);

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev + 1) % screens.length);
  };

  // Stagger parameters for entrance animations
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
      title: "Property Dashboard",
      desc: "Get 360-degree visibility into occupancy rates, maintenance pipelines, and cashflow metrics via a unified cloud dashboard.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      )
    },
    {
      title: "Tenant Management",
      desc: "Simplify tenant onboarding, secure tenant portal communication, digitize document uploads, and streamline community support.",
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
      title: "Lease Automation",
      desc: "Draft lease contracts, track automatic renewal alerts, digital signature tracking, and enforce security deposit management rules.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      title: "Smart Rent Collection",
      desc: "Incorporate direct bank transfers and online cards with automated invoice dispatch, overdue alerts, and direct bank reconciliation.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      title: "Maintenance Coordination",
      desc: "Enable tenants to submit maintenance tickets with photos, dispatch technicians, track status loops, and manage service invoices.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Granular Financials",
      desc: "Instantly compile profit & loss balances, property tax logs, vendor payout schedules, and detailed compliance audit reports.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Faster Property Discovery",
      desc: "Intelligent match engines and geo-fenced listings reduce listing lifecycle vacancies by over 38%.",
      icon: "⚡"
    },
    {
      title: "Better Tenant Management",
      desc: "Consolidated portal messaging and automated tenant screening keep customer retention high.",
      icon: "🤝"
    },
    {
      title: "Improved Rental Tracking",
      desc: "Say goodbye to tracking balances in paper ledgers. Follow invoice states and payouts in real-time.",
      icon: "📈"
    },
    {
      title: "Enhanced Customer Experience",
      desc: "Direct digital maintenance dispatch and credit card settlement portals elevate tenant satisfaction scores.",
      icon: "✨"
    }
  ];

  const technologies = [
    "React", "Node.js", "Express", "MongoDB", "Mongoose", "AWS S3", "Stripe API", "GSAP", "Framer Motion", "Vite"
  ];

  return (
    <div className="saas-bg-canvas no-padding-top">
      {/* Background Orbs */}
      <div className="saas-mesh-orb orb-pink"></div>
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
            <span className="active">Rennto</span>
          </div>
        </div>
      </div>

      {/* ================= 1. HERO BANNER ================= */}
      <section className="detail-hero-banner rennto-banner-theme">
        <div className="detail-hero-banner-gradient-overlay"></div>
        <div className="saas-container">
          <motion.div 
            className="detail-hero-banner-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="detail-hero-icon-wrapper rennto-theme">
              <img src={renntoLogo} alt="Rennto Logo" />
            </div>
            <h1 className="detail-hero-title">Rennto</h1>
            <p className="detail-hero-tagline">Smart Property & Tenant Management Platform</p>
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
            <div className="overview-header-badge">PRODUCT OVERVIEW</div>
            <p className="overview-main-text">
              Rennto is an enterprise-grade SaaS platform engineered to modernize day-to-day real estate administration. 
              By connecting property managers, rental owners, and tenants through a unified digital interface, Rennto removes administrative friction.
            </p>
            <p className="overview-sub-text">
              A smart rental management platform that connects property owners and tenants through a seamless digital experience. Rennto simplifies property discovery, rental management, and tenant communication. It handles verified listings, rent tracking, and secure messaging all in one ecosystem.
            </p>
          </motion.div>
        </motion.section>

        {/* ================= 3. KEY FEATURES ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Key Features</h2>
            <p className="detail-section-subtitle">Discover the specialized modules built to automate property workflows.</p>
          </div>

          <div className="saas-grid-three-col">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="saas-feature-card js-3d-tilt"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="saas-feature-icon rennto-icon-theme">{feature.icon}</div>
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
            <p className="detail-section-subtitle">Take an interactive tour of the Rennto application interfaces.</p>
          </div>

          <div className="saas-gallery-two-col-layout">
            {/* Large Active Screenshot Viewer */}
            <div className="saas-gallery-viewer-panel">
              <div className="saas-showcase-frame spec-frame-border">
                <div className="saas-frame-chrome">
                  <div className="chrome-window-dots">
                    <span className="window-dot dot-red"></span>
                    <span className="window-dot dot-yellow"></span>
                    <span className="window-dot dot-green"></span>
                  </div>
                  <div className="chrome-address-bar">rennto.tanvox.com/showcase/{activeScreenIndex + 1}</div>
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
                      alt={`Rennto Screen Showcase ${activeScreenIndex + 1}`}
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
                  className={`saas-gallery-grid-item-card ${activeScreenIndex === idx ? 'active-grid-card' : ''}`}
                  onClick={() => setActiveScreenIndex(idx)}
                >
                  <img src={screen} alt={`Rennto Screen ${idx + 1}`} />
                  <div className="grid-item-overlay-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. BENEFITS SECTION ================= */}
        <section className="detail-section-wrapper">
          <div className="detail-section-header">
            <h2 className="detail-section-title">Benefits</h2>
            <p className="detail-section-subtitle">Why real estate managers choose Rennto to power their rentals.</p>
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
                <div className="benefit-icon-circle-glow rennto-theme-color">
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
            <p className="detail-section-subtitle">Engineered with modern, secure, and reliable backend frameworks.</p>
          </div>

          <div className="detail-tech-badges-flow">
            {technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                className="tech-modern-badge-tag rennto-tech-theme"
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
          className="saas-glass-card detail-cta-card-wrapper rennto-theme-glow-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="detail-cta-circle-glow glow-pink"></div>
          
          <h2 className="detail-cta-title">
            Ready to Transform Rental Management?
          </h2>
          <p className="detail-cta-desc">
            Get in touch with our product specialists today. We can configure Rennto's modules, custom ledgers, and database instances to match your rental portfolio scale.
          </p>

          <button 
            className="saas-btn-primary rennto-gradient-btn"
            onClick={() => { window.location.hash = '#contact'; }}
          >
            Schedule a Consultation
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