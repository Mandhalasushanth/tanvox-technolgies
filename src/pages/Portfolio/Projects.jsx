import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsRedesign.css';

// Brand Assets
import renntoLogo from '../../assets/rennto.png';
import txhubLogo from '../../assets/TXhublogo.png';
import renntoMarketingIll from '../../assets/rennto_marketing_ill.png';
import txhubMarketingIll from '../../assets/txhub_marketing_ill.png';
import projectsHeroBg from '../../assets/portfolio_hero.png';

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

// Categories Data
const categories = [
  {
    name: "SaaS Products",
    desc: "Multi-tenant, cloud-native software-as-a-service solutions designed for rapid deployment and seamless updates.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    )
  },
  {
    name: "AI Products",
    desc: "Intelligent systems incorporating fine-tuned Large Language Models, contextual RAG databases, and predictive modeling.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  },
  {
    name: "Healthcare Products",
    desc: "HIPAA-ready analytics portals, patient records managers, and regulatory compliance validation tools.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    name: "Cloud Management Products",
    desc: "Multi-cloud resource monitors, governance enforcers, and cost optimization engines for modern platform engineering.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    )
  },
  {
    name: "DevOps Products",
    desc: "Immutable GitOps CI/CD delivery suites, telemetry dashboards, and automated failover rollback mechanisms.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    name: "Business Management Platforms",
    desc: "Operations command centers for workflows tracking, secure versioned document vaults, and granular RBAC controls.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  }
];

// Benefits Data
const benefits = [
  {
    title: "Enterprise Ready",
    desc: "Built for scalability, availability and performance.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    )
  },
  {
    title: "Secure By Design",
    desc: "Authentication, authorization, encryption and compliance.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Cloud Native",
    desc: "Modern cloud-first architecture.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    )
  },
  {
    title: "API First",
    desc: "Easy integration with ERP, CRM, HRMS and third-party systems.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    )
  },
  {
    title: "Customizable",
    desc: "Flexible architecture for business-specific requirements.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    )
  },
  {
    title: "Continuous Innovation",
    desc: "Regular updates and product enhancements.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  }
];

// Custom Product Services List
const customServices = [
  "Product Strategy & Consulting",
  "Product Discovery & Validation",
  "MVP Development",
  "SaaS Product Development",
  "Enterprise Product Engineering",
  "Cloud Architecture Design",
  "DevOps Enablement",
  "AI Integration & Automation",
  "Product Scaling & Optimization",
  "Product Maintenance & Support"
];

const serviceBenefits = [
  "Faster Product Launch",
  "Reduced Development Risk",
  "Scalable Architecture",
  "Future-Ready Technology Stack"
];

export default function Projects() {
  // Activate 3D tilt interaction on elements
  use3DTilt('.js-3d-tilt');

  useEffect(() => {
    // Register scroll trigger
    gsap.registerPlugin(ScrollTrigger);

    // Categories animation (staggered 3D flip-up)
    const catAnim = gsap.fromTo('.category-card-gsap', 
      { 
        opacity: 0, 
        y: 60, 
        rotationX: -15, 
        scale: 0.9,
        transformPerspective: 1200
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.category-grid-gsap',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Benefits animation (staggered slide-in from right)
    const benAnim = gsap.fromTo('.benefit-card-gsap', 
      { 
        opacity: 0, 
        x: 40, 
        scale: 0.95 
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefit-grid-gsap',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    return () => {
      if (catAnim.scrollTrigger) catAnim.scrollTrigger.kill();
      if (benAnim.scrollTrigger) benAnim.scrollTrigger.kill();
    };
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('our-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: 20, 
      scale: 0.92,
      transformPerspective: 1000 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 16
      }
    }
  };

  const servicesLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const checkmarkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const servicesRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        staggerChildren: 0.06,
        delayChildren: 0.3
      }
    }
  };

  const bulletTagVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  };

  const ctaCardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 14
      }
    }
  };

  const containerVariants = cardContainerVariants;
  const itemVariants = cardItemVariants;

  return (
    <div className="saas-bg-canvas no-padding-top">
      {/* ================= 1. VIBRANT 90VH HERO SECTION ================= */}
      <section className="projects-hero-container v-height-90" style={{ backgroundImage: `url(${projectsHeroBg})` }}>
        {/* Lighter, modern overlay for high asset visibility */}
        <div className="projects-hero-light-overlay"></div>
        <div className="projects-hero-mesh-overlay"></div>
        
        {/* Soft radial ambient glows behind text */}
        <div className="hero-ambient-glows">
          <div className="ambient-glow glow-blue"></div>
          <div className="ambient-glow glow-purple"></div>
          <div className="ambient-glow glow-pink"></div>
        </div>

        {/* Diagonal light streaks */}
        <div className="hero-light-streaks">
          <div className="light-streak streak-1"></div>
          <div className="light-streak streak-2"></div>
        </div>

        {/* Floating particle overlays */}
        <div className="hero-particles-overlay">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="saas-container">
          <div className="projects-hero-grid">
            
            {/* Left Column: Text Content & Stats cards */}
            <div className="projects-hero-text-side">
              <div className="projects-hero-content spacing-large">
                
                {/* Header Badge */}
                <motion.div 
                  className="projects-hero-badge-glow dark-badge-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="badge-bullet-pink"></span>
                  Our Products & Platforms
                </motion.div>
                
                {/* Main Title with Mask Glow */}
                <motion.h1 
                  className="projects-hero-main-title dark-text-main text-shadow-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Our Products & Platforms
                </motion.h1>
                
                {/* Subtitle with Bright Gradient */}
                <motion.h3 
                  className="projects-hero-subtitle-gradient font-bold-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  Transforming Businesses Through Innovative Digital Products
                </motion.h3>
                
                {/* Readable Description */}
                <motion.p 
                  className="projects-hero-paragraph dark-para-text text-medium-weight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  At Tanvox Technologies, we develop scalable, secure, and intelligent
                  software products that help organizations accelerate digital transformation,
                  improve operational efficiency, and drive sustainable business growth.
                </motion.p>

                {/* CTA Buttons Group */}
                <motion.div 
                  className="hero-cta-buttons-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <button className="btn-contact-us" onClick={() => { window.location.hash = '#contact'; }}>
                    Schedule a Consultation
                  </button>
                </motion.div>

                {/* Business Statistics Row */}
                <motion.div 
                  className="hero-stats-row"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="stats-glass-card js-3d-tilt" variants={itemVariants}>
                    <div className="stats-number rennto-theme-color">2+</div>
                    <div className="stats-label">Products Developed</div>
                  </motion.div>
                  <motion.div className="stats-glass-card js-3d-tilt" variants={itemVariants}>
                    <div className="stats-number txhub-theme-color">100%</div>
                    <div className="stats-label">Scalable Solutions</div>
                  </motion.div>
                  <motion.div className="stats-glass-card js-3d-tilt" variants={itemVariants}>
                    <div className="stats-number glow-text-purple">AI</div>
                    <div className="stats-label">Powered Innovation</div>
                  </motion.div>
                  <motion.div className="stats-glass-card js-3d-tilt" variants={itemVariants}>
                    <div className="stats-number txhub-theme-color">24/7</div>
                    <div className="stats-label">Support</div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* Right Column: Orbited Floating tags relative to sphere */}
            <div className="projects-hero-graphic-side">
              <div className="floating-tags-container">
                <div className="floating-tag-item tag-ai js-3d-tilt">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">AI</span>
                </div>
                <div className="floating-tag-item tag-cloud js-3d-tilt">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">Cloud</span>
                </div>
                <div className="floating-tag-item tag-automation js-3d-tilt">
                  <span className="tag-glow-dot purple"></span>
                  <span className="tag-text">Automation</span>
                </div>
                <div className="floating-tag-item tag-analytics js-3d-tilt">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">Analytics</span>
                </div>
                <div className="floating-tag-item tag-saas js-3d-tilt">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">SaaS</span>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

      {/* Main Container for the sections below Hero */}
      <div className="saas-container" style={{ marginTop: '32px' }}>
        
        {/* ================= SECTION 2: OUR PRODUCTS SECTION ================= */}
        <section id="our-products" className="saas-products-section scroll-margin-top">
          <div className="saas-section-header-centered">
            <h2 className="saas-section-title-showcase">Our Products</h2>
            <p className="saas-section-subtitle-showcase">
              Discover the innovative digital platforms developed by Tanvox Technologies to solve real-world business challenges.
            </p>
          </div>

          {/* alternating / side-by-side showcase list */}
          <div className="saas-showcase-flow">
            
            {/* PRODUCT 1: RENNTO REDESIGN (Premium Marketing Illustration) */}
            <motion.div 
              className="saas-showcase-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Column: Premium Marketing Illustration Banner */}
              <div className="saas-showcase-image-col">
                <div className="saas-showcase-marketing-frame js-3d-tilt rennto-glow-border floating-animation-card">
                  <img src={renntoMarketingIll} alt="Rennto Smart Property Rentals" className="marketing-illustration-img" />
                  <div className="marketing-overlay-accent rennto-overlay"></div>
                </div>
              </div>

              {/* Right Column: Product details */}
              <div className="saas-showcase-text-col">
                <div className="saas-showcase-brand-header">
                  <div className="showcase-brand-icon-circle rennto-theme">
                    <img src={renntoLogo} alt="Rennto Logo" />
                  </div>
                  <h3 className="showcase-brand-name">Rennto</h3>
                </div>
                
                <p className="showcase-brand-desc">
                  A smart rental management platform that connects property owners and tenants through a seamless digital experience. Rennto simplifies property discovery, rental management, and tenant communication.
                </p>

                <div className="showcase-features-bullets">
                  <div className="bullet-item">
                    <span className="bullet-label">Verified Property Listings</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Smart Property Search</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Tenant Management</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Rental Tracking</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Secure User Experience</span>
                  </div>
                </div>

                <button 
                  className="saas-btn-primary rennto-gradient-btn"
                  onClick={() => {
                    window.location.hash = '#portfolio/projects/rennto';
                  }}
                >
                  Explore Rennto
                  <svg className="btn-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* PRODUCT 2: TX HUB REDESIGN (Premium Marketing Illustration) */}
            <motion.div 
              className="saas-showcase-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Column: Product details */}
              <div className="saas-showcase-text-col">
                <div className="saas-showcase-brand-header">
                  <div className="showcase-brand-icon-circle txhub-theme">
                    <img src={txhubLogo} alt="TX Hub Logo" />
                  </div>
                  <h3 className="showcase-brand-name">TX Hub</h3>
                </div>
                
                <p className="showcase-brand-desc">
                  An enterprise-grade business platform designed to streamline operations, improve collaboration, automate workflows, and provide actionable business insights.
                </p>

                <div className="showcase-features-bullets">
                  <div className="bullet-item">
                    <span className="bullet-label">Workflow Automation</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Team Collaboration</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Business Analytics</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Task Management</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-label">Enterprise Security</span>
                  </div>
                </div>

                <button 
                  className="saas-btn-primary txhub-gradient-btn"
                  onClick={() => {
                    window.location.hash = '#portfolio/projects/txhub';
                  }}
                >
                  Explore TX Hub
                  <svg className="btn-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {/* Right Column: Premium Marketing Illustration Banner */}
              <div className="saas-showcase-image-col">
                <div className="saas-showcase-marketing-frame js-3d-tilt txhub-glow-border floating-animation-card txhub-delay-anim">
                  <img src={txhubMarketingIll} alt="TX Hub Enterprise Software" className="marketing-illustration-img" />
                  <div className="marketing-overlay-accent txhub-overlay"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        <div className="saas-divider"></div>

        {/* ================= SECTION 3: PRODUCT CATEGORIES ================= */}
        <div className="saas-products-section">
          <h2 className="saas-section-title">Product Categories</h2>

          <div
            className="saas-grid-three-col category-grid-gsap"
            style={{ marginBottom: '60px', perspective: 1200 }}
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="saas-glass-card js-3d-tilt category-card-gsap"
                style={{ 
                  padding: '28px 24px', 
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  opacity: 0,
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
              >
                <div className="category-card-icon-wrapper">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="category-card-title">
                    {cat.name}
                  </h4>
                  <p className="category-card-desc">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="saas-divider"></div>

        {/* ================= SECTION 4: WHY CHOOSE TANVOX PRODUCTS ================= */}
        <div className="saas-products-section">
          <h2 className="saas-section-title">Why Choose Tanvox Products?</h2>

          <div
            className="saas-grid-three-col benefit-grid-gsap"
            style={{ marginBottom: '60px', perspective: 1200 }}
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="saas-glass-card js-3d-tilt benefit-card-gsap"
                style={{ 
                  padding: '30px 24px', 
                  borderRadius: '16px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  opacity: 0,
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
              >
                <div className="benefit-card-icon-wrapper">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="benefit-card-title">
                    {benefit.title}
                  </h4>
                  <p className="benefit-card-desc">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="saas-divider"></div>

        {/* ================= SECTION 5: PRODUCT DEVELOPMENT SERVICES ================= */}
        <div className="saas-products-section">
          <motion.div 
            className="saas-services-double-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{ perspective: 1200 }}
          >
            {/* Left Side: Copy and lists */}
            <motion.div className="services-copy-left" variants={servicesLeftVariants}>
              <span className="services-small-badge">
                Development Partnerships
              </span>
              <h2 className="services-heading">
                Need a Custom Product?
              </h2>
              <p className="services-paragraph">
                Tanvox Technologies helps organizations design, build, launch, and scale innovative
                digital products from concept to deployment. Our product consultants collaborate with your
                business leads to translate workflows into scalable software architectures.
              </p>

              {/* Benefits list */}
              <div className="services-checkmarks-list">
                {serviceBenefits.map((b, idx) => (
                  <motion.div key={idx} className="checkmark-item-row" variants={checkmarkVariants}>
                    <div className="checkmark-circle-icon">
                      ✓
                    </div>
                    <span className="checkmark-text">
                      {b}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Services Grid */}
            <motion.div className="saas-glass-card services-list-card js-3d-tilt" style={{ padding: '36px' }} variants={servicesRightVariants}>
              <h4 className="services-list-title">
                Our Core Services Include:
              </h4>

              <div className="services-grid-sub">
                {customServices.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    className="service-bullet-tag" 
                    variants={bulletTagVariants}
                    style={{ animationDelay: `${idx * 0.25}s` }}
                  >
                    <span className="bullet-symbol">•</span>
                    <span className="bullet-text">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="saas-divider"></div>

        {/* ================= SECTION 6: CALL TO ACTION ================= */}
        <motion.div
          className="saas-glass-card projects-demo-cta-card js-3d-tilt"
          variants={ctaCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Subtle background radial glows */}
          <div className="cta-radial-glow glow-1"></div>
          <div className="cta-radial-glow glow-2"></div>

          <h2 className="cta-title">
            Request a Product Demo
          </h2>
          <p className="cta-subtitle">
            Let's Show You What Our Products Can Do
          </p>
          <p className="cta-desc">
            Schedule an interactive product tour with our specialists to review features, integration hooks,
            security standards, and capacity customizations for your brand.
          </p>

          <div className="cta-buttons-container">
            <button
              className="saas-btn-primary cta-btn-blue-glow"
              onClick={() => { window.location.hash = '#contact'; }}
            >
              Schedule a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}