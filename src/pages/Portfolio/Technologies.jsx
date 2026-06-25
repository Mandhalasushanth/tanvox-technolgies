import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsRedesign.css';
import projectsHeroBg from '../../assets/portfolio_hero.png';

gsap.registerPlugin(ScrollTrigger);

// ─── Technology Stack Data ──────────────────────────────────────────────────
const techCategories = [
  {
    title: "Frontend",
    accent: "#3b82f6",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <line x1="2" y1="8.5" x2="12" y2="12" />
        <line x1="22" y1="8.5" x2="12" y2="12" />
      </svg>
    ),
    items: ["React", "Angular", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    accent: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    items: [".NET", "Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    accent: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis", "InfluxDB"]
  },
  {
    title: "Cloud",
    accent: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Vercel", "Cloudflare"]
  },
  {
    title: "DevOps",
    accent: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Prometheus"]
  },
  {
    title: "AI & Data",
    accent: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    items: ["OpenAI API", "LangChain", "TensorFlow", "Apache Spark", "Machine Learning", "Generative AI"]
  },
  {
    title: "Security",
    accent: "#ef4444",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    items: ["OAuth 2.0", "JWT", "AWS KMS", "Identity Management", "Encryption", "HIPAA"]
  },
  {
    title: "Testing",
    accent: "#14b8a6",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    items: ["Jest", "Cypress", "Playwright", "Selenium", "JUnit", "Postman"]
  }
];

// Flat list for the scrolling marquee (all items from all categories)
const allTechItems = techCategories.flatMap(cat =>
  cat.items.map(item => ({ name: item, accent: cat.accent, category: cat.title }))
);
// Duplicate for seamless loop
const marqueeItems = [...allTechItems, ...allTechItems];

// ─── Engineering Approach Steps ────────────────────────────────────────────
const approaches = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We begin with deep stakeholder alignment — understanding your tech landscape, business constraints, and target outcomes to produce a precise architectural blueprint.",
    accent: "#3b82f6",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Cloud Native Architecture",
    desc: "We design stateless containerized services, microservice backbones, and serverless logic structures ready to scale under variable workloads.",
    accent: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    )
  },
  {
    step: "03",
    title: "API First Development",
    desc: "All resources expose standardized REST or GraphQL endpoints — enabling easy integration with CRM, ERP, HRMS, and third-party systems out of the box.",
    accent: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    )
  },
  {
    step: "04",
    title: "Secure By Design",
    desc: "Rigorous authorization flows, encryption at rest and in transit, compliance schedules, and automated dependency vulnerability scans baked into every layer.",
    accent: "#ef4444",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    step: "05",
    title: "DevOps Driven Delivery",
    desc: "Immutable GitOps build setups, automated CI/CD security gate testing, zero-downtime canary rollouts, and real-time telemetry dashboards.",
    accent: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    step: "06",
    title: "Continuous Innovation",
    desc: "Adopting LLM fine-tuning, automated code intelligence, infrastructure telemetry, and AI-powered anomaly detection to keep your product ahead of the curve.",
    accent: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  }
];

// ─── Component ──────────────────────────────────────────────────────────────
export default function Technologies() {
  const marqueeRef = useRef(null);
  const approachRef = useRef(null);

  useEffect(() => {
    // Animate each approach step on scroll (stagger + slide-in from alternating sides)
    const ctx = gsap.context(() => {
      gsap.fromTo('.approach-step-card',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.approach-flow-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Connector lines animate after cards
      gsap.fromTo('.approach-connector',
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1, opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: '.approach-flow-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Tech category cards
      gsap.fromTo('.tech-cat-card',
        { opacity: 0, y: 40, scale: 0.93 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.tech-categories-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, approachRef);

    return () => ctx.revert();
  }, []);

  const scrollToStack = () => {
    const el = document.getElementById('tech-stack-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
    <div className="saas-bg-canvas no-padding-top" ref={approachRef}>

      {/* =================== FULL 90VH HERO =================== */}
      <section
        className="projects-hero-container v-height-90"
        style={{ backgroundImage: `url(${projectsHeroBg})` }}
      >
        <div className="projects-hero-light-overlay"></div>
        <div className="projects-hero-mesh-overlay"></div>

        <div className="hero-ambient-glows">
          <div className="ambient-glow glow-blue"></div>
          <div className="ambient-glow glow-purple"></div>
          <div className="ambient-glow glow-pink"></div>
        </div>

        <div className="hero-light-streaks">
          <div className="light-streak streak-1"></div>
          <div className="light-streak streak-2"></div>
        </div>

        <div className="hero-particles-overlay">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="saas-container">
          <div className="projects-hero-grid">

            {/* LEFT — Text & stats */}
            <div className="projects-hero-text-side">
              <div className="projects-hero-content spacing-large">

                <motion.div
                  className="projects-hero-badge-glow dark-badge-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="badge-bullet-pink"></span>
                  Our Expertise
                </motion.div>

                <motion.h1
                  className="projects-hero-main-title dark-text-main text-shadow-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Technologies &amp;
                </motion.h1>

                <motion.h3
                  className="projects-hero-subtitle-gradient font-bold-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  Engineering Excellence
                </motion.h3>

                <motion.p
                  className="projects-hero-paragraph dark-para-text text-medium-weight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We leverage industry-leading frameworks, cloud platforms, and battle-tested engineering
                  practices to deliver scalable, secure, and high-performance software solutions.
                </motion.p>

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

                {/* Stats */}
                <motion.div
                  className="hero-stats-row"
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number rennto-theme-color">8+</div>
                    <div className="stats-label">Tech Domains</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">40+</div>
                    <div className="stats-label">Technologies</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number glow-text-purple">AI</div>
                    <div className="stats-label">Powered Stack</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">6</div>
                    <div className="stats-label">Cloud Partners</div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* RIGHT — Floating tech tags */}
            <div className="projects-hero-graphic-side">
              <div className="floating-tags-container">
                <div className="floating-tag-item tag-ai">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">React / Next.js</span>
                </div>
                <div className="floating-tag-item tag-cloud">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">AWS / Azure</span>
                </div>
                <div className="floating-tag-item tag-automation">
                  <span className="tag-glow-dot purple"></span>
                  <span className="tag-text">AI / LLMs</span>
                </div>
                <div className="floating-tag-item tag-analytics">
                  <span className="tag-glow-dot blue"></span>
                  <span className="tag-text">Kubernetes</span>
                </div>
                <div className="floating-tag-item tag-saas">
                  <span className="tag-glow-dot pink"></span>
                  <span className="tag-text">PostgreSQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================== SIDE-SCROLLING MARQUEE =================== */}
      <div className="tech-marquee-section" id="tech-stack-section">
        <motion.div
          className="saas-section-header-centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="saas-section-title-showcase">Technology Stack</h2>
          <p className="saas-section-subtitle-showcase">
            Our curated, battle-tested set of technologies spanning every layer of modern software architecture.
          </p>
        </motion.div>


        {/* Category Cards */}
        <div className="saas-container" style={{ marginTop: '24px' }}>
          <div className="tech-categories-grid">
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                className="saas-glass-card tech-cat-card"
                style={{ '--cat-accent': cat.accent }}
              >
                <div className="tech-cat-header">
                  <div className="tech-cat-icon" style={{ color: cat.accent, background: cat.accent + '12', border: `1px solid ${cat.accent}25` }}>
                    {cat.icon}
                  </div>
                  <h4 className="tech-cat-title">{cat.title}</h4>
                </div>
                <div className="tech-cat-pills">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="tech-item-pill"
                      style={{ '--item-accent': cat.accent }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================== ENGINEERING APPROACH FLOW =================== */}
      <div className="saas-container" style={{ marginTop: '32px', marginBottom: '32px' }}>
        <motion.div
          className="saas-section-header-centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="saas-section-title-showcase">Our Engineering Approach</h2>
          <p className="saas-section-subtitle-showcase">
            A proven, methodical delivery pipeline — from discovery to continuous innovation — ensuring every build is robust, scalable, and future-ready.
          </p>
        </motion.div>

        <div className="approach-flow-container">
          {approaches.map((app, idx) => (
            <div key={idx} className="approach-step-row">
              {/* Connector line (between steps) */}
              {idx < approaches.length - 1 && (
                <div className="approach-connector-wrapper">
                  <div
                    className="approach-connector"
                    style={{ background: `linear-gradient(180deg, ${app.accent}, ${approaches[idx + 1].accent})` }}
                  ></div>
                </div>
              )}

              {/* Card */}
              <div
                className={`approach-step-card saas-glass-card ${idx % 2 === 0 ? 'step-left' : 'step-right'}`}
                style={{ '--step-accent': app.accent, '--step-accent-glow': app.accent + '18' }}
              >
                {/* Step number */}
                <div className="step-number-badge" style={{ color: app.accent, border: `1.5px solid ${app.accent}40`, background: app.accent + '0d' }}>
                  {app.step}
                </div>

                {/* Icon */}
                <div className="step-icon-ring" style={{ color: app.accent, background: app.accent + '12', border: `1.5px solid ${app.accent}30` }}>
                  {app.icon}
                </div>

                <div className="step-content">
                  <h3 className="step-title">{app.title}</h3>
                  <p className="step-desc">{app.desc}</p>
                </div>

                {/* Glow border on hover */}
                <div className="step-hover-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${app.accent}18 0%, transparent 70%)` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================== CTA =================== */}
      <div className="saas-container" style={{ marginBottom: '24px' }}>
        <motion.div
          className="saas-glass-card tech-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="tech-cta-glow-orb"></div>
          <h2 className="tech-cta-title">Need Technology Experts?</h2>
          <p className="tech-cta-subtitle">We align technical architecture with your corporate goals and deliver production-grade systems that scale.</p>
          <button
            className="saas-btn-primary hero-btn-gradient"
            onClick={() => { window.location.hash = '#contact'; }}
          >
            Schedule a Consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Background orbs */}
      <div className="saas-mesh-orb orb-pink"></div>
      <div className="saas-mesh-orb orb-blue"></div>
      <div className="saas-mesh-orb orb-purple"></div>
      <div className="saas-particles-overlay"></div>
    </div>
  );
}