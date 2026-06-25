import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import '../Portfolio/ProductsRedesign.css';
import { caseStudiesData } from './caseStudiesData';
import projectsHeroBg from '../../assets/portfolio_hero.png';

// Thematic illustration images (using the newly added assets)
import csOperations from '../../assets/cs_operations_platforms.png';
import csHealthcare from '../../assets/cs_healthcare_analytics.png';
import csAiAssist from '../../assets/cs_ai_assistant.png';
import csCloud from '../../assets/cs_cloud_manager.png';
import csDevops from '../../assets/cs_develop_suite.png';

// Map case study id → thematic illustration
const thematicImages = {
  'tx-pms': csOperations,
  'tx-health': csHealthcare,
  'tx-ai-assist': csAiAssist,
  'tx-cloud-manager': csCloud,
  'tx-devops-suite': csDevops,
};

// 3D Tilt Hook (identical to Projects.jsx)
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
        const rotateX = ((yc - y) / yc) * 8;
        const rotateY = ((x - xc) / xc) * 8;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        gsap.to(card, {
          rotateX,
          rotateY,
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

    return () => cleanupFns.forEach((fn) => fn());
  }, [selector]);
}

// Colored SVG icons per case study
const getCaseStudyIcon = (id) => {
  switch (id) {
    case 'tx-pms':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case 'tx-health':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'tx-ai-assist':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        </svg>
      );
    case 'tx-cloud-manager':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'tx-devops-suite':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export default function CaseStudies() {
  use3DTilt('.cs-stats-tilt');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const scrollToCases = () => {
    const el = document.getElementById('case-studies-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 75, damping: 15 } }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };
  const statItemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 20, scale: 0.92, transformPerspective: 1000 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 16 } }
  };

  return (
    <div className="saas-bg-canvas no-padding-top">

      {/* ================= FULL 90VH HERO — PROJECTS STYLE ================= */}
      <section
        className="projects-hero-container v-height-90"
        style={{ backgroundImage: `url(${projectsHeroBg})` }}
      >
        {/* Overlays */}
        <div className="projects-hero-light-overlay"></div>
        <div className="projects-hero-mesh-overlay"></div>

        {/* Ambient glows */}
        <div className="hero-ambient-glows">
          <div className="ambient-glow glow-blue"></div>
          <div className="ambient-glow glow-purple"></div>
          <div className="ambient-glow glow-pink"></div>
        </div>

        {/* Light streaks */}
        <div className="hero-light-streaks">
          <div className="light-streak streak-1"></div>
          <div className="light-streak streak-2"></div>
        </div>

        {/* Particles */}
        <div className="hero-particles-overlay">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="saas-container">
          <div className="projects-hero-grid">

            {/* LEFT — Text, stats */}
            <div className="projects-hero-text-side">
              <div className="projects-hero-content spacing-large">

                {/* Badge */}
                <motion.div
                  className="projects-hero-badge-glow dark-badge-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="badge-bullet-pink"></span>
                  Case Studies
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  className="projects-hero-main-title dark-text-main text-shadow-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Real Business Challenges.
                </motion.h1>

                {/* Gradient subtitle */}
                <motion.h3
                  className="projects-hero-subtitle-gradient font-bold-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  Measurable, Proven Results.
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="projects-hero-paragraph dark-para-text text-medium-weight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Explore our enterprise technology implementation stories — detailing how we design,
                  integrate, and scale custom solutions that fuel operational excellence and sustainable growth.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="hero-cta-buttons-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <button className="btn-contact-us" onClick={() => { window.location.hash = '#contact'; }}>
                    Contact Us
                  </button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  className="hero-stats-row"
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="stats-glass-card cs-stats-tilt" variants={statItemVariants}>
                    <div className="stats-number rennto-theme-color">5+</div>
                    <div className="stats-label">Case Studies</div>
                  </motion.div>
                  <motion.div className="stats-glass-card cs-stats-tilt" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">140%</div>
                    <div className="stats-label">Average ROI</div>
                  </motion.div>
                  <motion.div className="stats-glass-card cs-stats-tilt" variants={statItemVariants}>
                    <div className="stats-number glow-text-purple">AI</div>
                    <div className="stats-label">Powered Solutions</div>
                  </motion.div>
                  <motion.div className="stats-glass-card cs-stats-tilt" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">99.9%</div>
                    <div className="stats-label">Uptime Delivered</div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* RIGHT — Floating tags */}
            <div className="projects-hero-graphic-side">
              <div className="floating-tags-container">
                <div className="floating-tag-item tag-ai cs-stats-tilt">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">Operations</span>
                </div>
                <div className="floating-tag-item tag-cloud cs-stats-tilt">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">Healthcare</span>
                </div>
                <div className="floating-tag-item tag-automation cs-stats-tilt">
                  <span className="tag-glow-dot purple"></span>
                  <span className="tag-text">AI / LLM</span>
                </div>
                <div className="floating-tag-item tag-analytics cs-stats-tilt">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">Cloud</span>
                </div>
                <div className="floating-tag-item tag-saas cs-stats-tilt">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">DevOps</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================== CASE STUDIES LIST ====================== */}
      <div className="saas-container" style={{ marginTop: '80px' }}>
        <div className="saas-products-section" id="case-studies-list">

          <motion.div
            className="saas-section-header-centered"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="saas-section-title-showcase">Our Case Studies</h2>
            <p className="saas-section-subtitle-showcase">
              Deep-dive implementation stories across industries — from concept to measurable impact.
            </p>
          </motion.div>

          <motion.div
            className="case-studies-list-flow"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {caseStudiesData.map((study) => (
              <motion.div
                key={study.id}
                className="saas-glass-card case-study-row-card"
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                onClick={() => { window.location.hash = `#case-study/${study.id}`; }}
                style={{
                  '--theme-accent': study.colorAccent,
                  '--theme-accent-glow': study.colorAccent + '20',
                  cursor: 'pointer',
                }}
              >
                {/* Left Side: Thematic illustration */}
                <div className="case-study-card-image-col">
                  <div className="cs-card-image-wrapper">
                    <img
                      src={thematicImages[study.id]}
                      alt={`${study.title} illustration`}
                      className="case-study-card-img"
                    />
                    <div
                      className="cs-card-img-overlay"
                      style={{ background: `linear-gradient(135deg, ${study.colorAccent}18 0%, transparent 60%)` }}
                    ></div>
                    {/* Accent corner tag */}
                    <div className="cs-card-corner-badge" style={{ background: study.colorAccent }}>
                      {study.badge}
                    </div>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="case-study-card-body" style={{ position: 'relative', zIndex: 1 }}>

                  {/* Icon + Industry */}
                  <div className="cs-card-meta-row">
                    <div className="cs-card-icon" style={{ color: study.colorAccent, borderColor: study.colorAccent + '30', background: study.colorAccent + '10' }}>
                      {getCaseStudyIcon(study.id)}
                    </div>
                    <div className="cs-card-kpi-chips">
                      <span className="cs-kpi-chip" style={{ color: study.colorAccent, background: study.colorAccent + '12', border: `1px solid ${study.colorAccent}25` }}>
                        🎯 {study.impact.kpi}
                      </span>
                      <span className="cs-kpi-chip" style={{ color: study.colorAccent, background: study.colorAccent + '12', border: `1px solid ${study.colorAccent}25` }}>
                        📈 {study.impact.roi}
                      </span>
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <div className="cs-card-title-block">
                    <h3 className="cs-card-title" style={{ color: '#0f172a' }}>{study.title}</h3>
                    <div className="cs-card-subtitle">{study.subtitle}</div>
                  </div>

                  {/* Description */}
                  <p className="compact-desc cs-card-desc">{study.description}</p>

                  {/* Tech stack pills */}
                  <div className="cs-tech-pills">
                    {study.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="cs-tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="card-cta-footer cs-card-cta" style={{ color: study.colorAccent, marginTop: '20px' }}>
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-icon">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background orbs */}
      <div className="saas-mesh-orb orb-pink"></div>
      <div className="saas-mesh-orb orb-blue"></div>
      <div className="saas-mesh-orb orb-purple"></div>
      <div className="saas-particles-overlay"></div>
    </div>
  );
}