import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Portfolio/ProductsRedesign.css';
import { caseStudiesData } from './caseStudiesData';

export default function CaseStudyDetail({ studyId }) {
  // Find case study by ID, fallback to the first one
  const study = caseStudiesData.find(s => s.id === studyId) || caseStudiesData[0];
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    // Reset image index when case study changes
    setActiveScreenIndex(0);
  }, [studyId]);

  // Auto-cycle slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % study.screens.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [study.screens.length, studyId]);

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev === 0 ? study.screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev + 1) % study.screens.length);
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 75, damping: 15 } },
  };

  return (
    <div className="saas-bg-canvas" style={{ '--theme-accent-color': study.colorAccent }}>
      {/* Background Lighting Effects */}
      <div className="saas-mesh-orb orb-pink" style={{ background: `radial-gradient(circle, ${study.colorAccent}18 0%, transparent 80%)` }}></div>
      <div className="saas-mesh-orb orb-blue"></div>
      <div className="saas-particles-overlay"></div>

      <div className="saas-container">
        {/* Navigation & Breadcrumbs */}
        <div className="detail-back-bar">
          <button className="saas-btn-back" onClick={() => (window.location.hash = '#case-studies')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Case Studies
          </button>

          <div className="saas-breadcrumbs">
            <a href="#home">Home</a>
            <span className="separator">/</span>
            <a href="#case-studies">Case Studies</a>
            <span className="separator">/</span>
            <span className="active">{study.title}</span>
          </div>
        </div>

        {/* Case Study Header / Hero */}
        <motion.div 
          className="saas-hero"
          style={{ marginBottom: '60px', textAlign: 'left', maxWidth: '100%' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span 
            className="saas-hero-badge" 
            style={{ 
              color: study.colorAccent, 
              background: `${study.colorAccent}10`,
              borderColor: `${study.colorAccent}25`
            }}
          >
            {study.badge} Case Study
          </span>
          <h1 className="saas-hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', marginBottom: '16px' }}>
            {study.title}
          </h1>
          <p className="saas-hero-desc" style={{ margin: 0, fontSize: '1.25rem', color: '#64748b', fontWeight: '500' }}>
            {study.subtitle}
          </p>
        </motion.div>

        {/* Dynamic Detail Content (Animated Stagger) */}
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}
        >
          {/* ================= SECTION 1: ABOUT PLATFORM | KEY FEATURES ================= */}
           <motion.div
  className="case-study-details-grid"
  variants={itemVariants}
>
            {/* Left: About Platform */}
            <div className="saas-glass-card" style={{ height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: study.colorAccent }}>ℹ️</span> About Platform
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#475569', marginBottom: '24px' }}>
                {study.about}
              </p>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Core Technology Stack
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        padding: '6px 12px',
                        borderRadius: '99px',
                        color: study.colorAccent,
                        background: `${study.colorAccent}0c`,
                        border: `1px solid ${study.colorAccent}15`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Features */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: study.colorAccent }}>⚡</span> Key Features
              </h3>
               <div className="case-study-features-grid">
                {study.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="saas-glass-card" 
                    style={{ 
                      padding: '24px', 
                      borderRadius: '16px',
                      transition: 'all 0.3s',
                      borderLeft: `3px solid ${study.colorAccent}`
                    }}
                  >
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: '1.5', color: '#475569' }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="saas-divider" style={{ margin: 0 }}></div>

          {/* ================= SECTION 2: IDEAL FOR | BENEFITS ================= */}
          <motion.div
  className="case-study-details-grid"
  variants={itemVariants}
>
            {/* Left: Ideal For */}
            <div className="saas-glass-card" style={{ height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: study.colorAccent }}>🎯</span> Ideal For
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0, listStyle: 'none' }}>
                {study.idealFor.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: `${study.colorAccent}15`, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                      color: study.colorAccent
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '0.98rem', color: '#475569', lineHeight: '1.5' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Benefits / business outcomes */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: study.colorAccent }}>📈</span> Measurable Outcomes & Benefits
              </h3>

              {/* KPI cards grid */}
 <div className="case-study-kpi-grid">
                <div className="saas-glass-card" style={{ padding: '20px 12px', textAlign: 'center', border: `1px solid rgba(16, 185, 129, 0.15)`, background: 'rgba(16, 185, 129, 0.02)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#10b981', fontFamily: 'var(--font-display)' }}>
                    {study.impact.kpi}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', fontWeight: '600' }}>
                    {study.impact.kpiLabel}
                  </div>
                </div>

                <div className="saas-glass-card" style={{ padding: '20px 12px', textAlign: 'center', border: `1px solid rgba(59, 130, 246, 0.15)`, background: 'rgba(59, 130, 246, 0.02)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#3b82f6', fontFamily: 'var(--font-display)' }}>
                    {study.impact.roi}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', fontWeight: '600' }}>
                    {study.impact.roiLabel}
                  </div>
                </div>

                <div className="saas-glass-card" style={{ padding: '20px 12px', textAlign: 'center', border: `1px solid rgba(139, 92, 246, 0.15)`, background: 'rgba(139, 92, 246, 0.02)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#8b5cf6', fontFamily: 'var(--font-display)' }}>
                    {study.impact.productivity}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', fontWeight: '600' }}>
                    {study.impact.productivityLabel}
                  </div>
                </div>
              </div>

              {/* Bullet list of outcome sentences */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0, listStyle: 'none' }}>
                {study.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                    <span style={{ fontSize: '0.98rem', color: '#475569' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="saas-divider" style={{ margin: 0 }}></div>

          {/* ================= SECTION 3: SCREENSHOTS GALLERY ================= */}
          <motion.div className="saas-gallery-section" variants={itemVariants}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: study.colorAccent }}>🖼️</span> Platform Screenshots & Features
            </h3>
            <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '0.95rem' }}>
              Click on any screenshot to view a high-resolution preview inside the interactive zoom gallery.
            </p>
             <div className="case-study-gallery-grid">
              {/* Chrome Mockup Carousel */}
              <div className="saas-showcase-frame" style={{ margin: 0, width: '100%' }}>
                <div className="saas-frame-chrome">
                  <div className="chrome-window-dots">
                    <span className="window-dot dot-red"></span>
                    <span className="window-dot dot-yellow"></span>
                    <span className="window-dot dot-green"></span>
                  </div>
                  <div className="chrome-address-bar">showcase.tanvox.com/case-study/{study.id}</div>
                  <div className="chrome-nav-icons">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                </div>

                <div 
                  className="saas-showcase-viewer" 
                  style={{ cursor: 'zoom-in' }}
                  onClick={() => setLightboxImg(study.screens[activeScreenIndex])}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeScreenIndex}
                      src={study.screens[activeScreenIndex]}
                      alt={`${study.title} Screen Showcase ${activeScreenIndex + 1}`}
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

                {/* Micro thumbnails panel */}
                <div className="saas-viewer-thumbs">
                  {study.screens.map((screen, idx) => (
                    <button
                      key={idx}
                      className={`saas-thumb-btn ${activeScreenIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveScreenIndex(idx)}
                      style={{ borderActiveColor: study.colorAccent }}
                    >
                      <img src={screen} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Platform Grid Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {study.screens.map((screen, idx) => (
                  <motion.div
                    key={idx}
                    className="saas-gallery-item"
                    style={{ cursor: 'zoom-in', overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#0f172a' }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => setLightboxImg(screen)}
                  >
                    <img 
                      src={screen} 
                      alt={`${study.title} Grid Screen ${idx + 1}`} 
                      style={{ width: '100%', height: '140px', objectFit: 'contain', transition: 'transform 0.3s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="saas-divider" style={{ margin: 0 }}></div>

          {/* ================= SECTION 4: REQUEST DEMO ================= */}
          <motion.div 
            className="saas-glass-card case-study-detail-cta-card" 
            variants={itemVariants}
            style={{ 
              textAlign: 'center', 
              padding: '60px 40px', 
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, ${study.colorAccent}08 100%)`,
              border: `1px solid ${study.colorAccent}25`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: `${study.colorAccent}05`, filter: 'blur(30px)' }}></div>
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: `${study.colorAccent}08`, filter: 'blur(40px)' }}></div>

            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Ready to Accelerate Your Enterprise Operations?
            </h3>
            <p style={{ color: '#475569', maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Schedule a technical demonstration of {study.title} with our engineering leads. See how we can customize this platform architecture to fit your security policies and workflow requirements.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="saas-btn-primary" 
                onClick={() => { window.location.hash = '#contact'; }}
                style={{ background: study.colorAccent, color: '#ffffff', border: 'none', padding: '14px 28px', fontSize: '1rem', fontWeight: '700', borderRadius: '99px', cursor: 'pointer', boxShadow: `0 10px 20px -5px ${study.colorAccent}35`, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Request Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button 
                className="saas-btn-secondary" 
                onClick={() => { window.location.hash = '#case-studies'; }}
                style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: '700', borderRadius: '99px', cursor: 'pointer' }}
              >
                See All Success Stories
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-view Lightbox Modal */}
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
              <img src={lightboxImg} alt="Enlarged Case Study Screen" className="saas-lightbox-img" style={{ maxHeight: '85vh', objectFit: 'contain' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}