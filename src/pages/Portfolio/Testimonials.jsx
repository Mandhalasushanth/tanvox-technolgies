import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsRedesign.css';
import projectsHeroBg from '../../assets/portfolio_hero.png';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "HealthSync Systems",
    designation: "Chief Technology Officer",
    initials: "SJ",
    text: "Tanvox Technologies delivered a highly scalable healthcare analytics platform that significantly improved our operational compliance and auditing automation. Their engineering standard is top-tier.",
    rating: 5,
    colorAccent: "#10b981",
    industry: "Healthcare"
  },
  {
    name: "Marcus Vance",
    company: "CloudOps Global",
    designation: "Director of Platform Engineering",
    initials: "MV",
    text: "The DevOps automation suite designed by Tanvox accelerated our software deployment pipeline speed by 12x while maintaining absolute release uptime. Highly recommended partner.",
    rating: 5,
    colorAccent: "#f59e0b",
    industry: "Technology"
  },
  {
    name: "Elena Rostova",
    company: "EdLearn Interactive",
    designation: "Head of Digital Experience",
    initials: "ER",
    text: "TX-Hub transformed our corporate learning and certification ecosystems overnight. The platform governance audits and user tracking workflows exceeded our original specifications.",
    rating: 5,
    colorAccent: "#3b82f6",
    industry: "Education"
  },
  {
    name: "David Chen",
    company: "Prime Rentals Ltd",
    designation: "Vice President of Operations",
    initials: "DC",
    text: "Rennto automated our real estate lease management, compliance tracking, and automated billing cycles cleanly. Their team's API-first approach made CRM integrations effortless.",
    rating: 5,
    colorAccent: "#ff4d6d",
    industry: "Real Estate"
  },
  {
    name: "Sophia Martinez",
    company: "Intelligent Core AI",
    designation: "Director of AI Products",
    initials: "SM",
    text: "Their conversational AI Assistant RAG pipeline deflected 60% of our tier-1 support ticket volume within three weeks of launch. The citation and audit capabilities are outstanding.",
    rating: 5,
    colorAccent: "#8b5cf6",
    industry: "Artificial Intelligence"
  }
];

const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered", desc: "Across diverse enterprise tech sectors", color: "#3b82f6" },
  { value: 20, suffix: "+", label: "Enterprise Clients", desc: "Leading global brands and scaleups", color: "#10b981" },
  { value: 99.9, suffix: "%", label: "Platform Availability", desc: "Ensured by cloud-native design patterns", color: "#8b5cf6" },
  { value: 95, suffix: "%", label: "Client Satisfaction", desc: "Based on recurring NPS audits", color: "#f59e0b" }
];

const industries = [
  { name: "Healthcare", color: "#10b981", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>) },
  { name: "Education", color: "#3b82f6", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V5A2.5 2.5 0 0 1 6.5 2.5H20v14H6.5" /></svg>) },
  { name: "Real Estate", color: "#ff4d6d", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) },
  { name: "Retail", color: "#f59e0b", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>) },
  { name: "Finance", color: "#06b6d4", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
  { name: "Technology", color: "#8b5cf6", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>) },
  { name: "Government", color: "#ef4444", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 22H2M12 2v7M12 2L4 6v4a8 8 0 0 0 16 0V6L12 2z" /></svg>) }
];

const valueProps = [
  {
    title: "Technical Excellence",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#3b82f6",
    desc: "Our engineering leads maintain rigorous code quality auditing, continuous refactoring, and high-performance design standards across every project."
  },
  {
    title: "On-Time Delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#10b981",
    desc: "Through lean GitOps build gates and sprint planning cycles, we ensure roadmap commitments are released on schedule, every time."
  },
  {
    title: "Scalable Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    color: "#8b5cf6",
    desc: "Platforms modeled using stateless containers, decoupled data layers, and microservices — ready to scale vertically or horizontally on demand."
  },
  {
    title: "Enterprise Security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: "#ef4444",
    desc: "AES-256 encryption, OAuth/JWT identity gateways, compliance frameworks, and pen-tested deployments baked in from day one."
  },
  {
    title: "Dedicated Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#f59e0b",
    desc: "Around-the-clock cluster telemetry monitoring, SLA-backed response systems, and dedicated accounts engineers for every client."
  },
  {
    title: "Innovation Driven",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    color: "#ec4899",
    desc: "Continuous research into LLMs, RAG systems, AI agent automation, and emerging cloud-native paradigms keeps you ahead of the curve."
  }
];

// ─── Animated Counter Hook ────────────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Metric Card with count-up ────────────────────────────────────────────────
function MetricCard({ metric, index }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(metric.value, 1800, inView);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="testi-metric-card saas-glass-card"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ '--metric-color': metric.color }}
    >
      <div className="metric-glow-top" style={{ background: `radial-gradient(ellipse at top, ${metric.color}20 0%, transparent 70%)` }}></div>
      <div className="metric-value" style={{ color: metric.color }}>
        {count}{metric.suffix}
      </div>
      <div className="metric-label">{metric.label}</div>
      <div className="metric-desc">{metric.desc}</div>
      <div className="metric-bottom-bar" style={{ background: metric.color }}></div>
    </motion.div>
  );
}

// ─── 3D Tilt Card Wrapper ──────────────────────────────────────────────────────
function TiltCard({ children, className, style }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      className={className}
      style={{ ...style, rotateX: springRotX, rotateY: springRotY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Value props stagger
      gsap.fromTo('.value-prop-card',
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.value-props-grid', start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
      // Industry cards fan-in
      gsap.fromTo('.industry-orb-card',
        { opacity: 0, scale: 0.7, rotation: -8 },
        {
          opacity: 1, scale: 1, rotation: 0,
          duration: 0.6, stagger: 0.06, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.industries-orbit-grid', start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToCTA = () => {
    const el = document.getElementById('testi-cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goTo = (idx) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120, scale: 0.94, rotateY: dir > 0 ? 12 : -12 }),
    center: { opacity: 1, x: 0, scale: 1, rotateY: 0, transition: { type: 'spring', stiffness: 85, damping: 18 } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -120 : 120, scale: 0.94, rotateY: dir > 0 ? -12 : 12, transition: { duration: 0.35 } })
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
    <div className="saas-bg-canvas no-padding-top" ref={sectionRef}>

      {/* =================== FULL 90VH HERO =================== */}
      <section className="projects-hero-container v-height-90" style={{ backgroundImage: `url(${projectsHeroBg})` }}>
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

                <motion.div className="projects-hero-badge-glow dark-badge-border"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                  <span className="badge-bullet-pink"></span>
                  Client Reviews
                </motion.div>

                <motion.h1 className="projects-hero-main-title dark-text-main text-shadow-glow"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
                  What Our Clients
                </motion.h1>

                <motion.h3 className="projects-hero-subtitle-gradient font-bold-gradient"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
                  Say About Us
                </motion.h3>

                <motion.p className="projects-hero-paragraph dark-para-text text-medium-weight"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                  Trusted by organizations across healthcare, finance, education, and technology — delivering scalable, 
                  secure, and innovative digital solutions that drive real business results.
                </motion.p>

                <motion.div className="hero-cta-buttons-group"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}>
                  <button className="btn-contact-us" onClick={() => { window.location.hash = '#contact'; }}>
                    Schedule a Consultation
                  </button>
                </motion.div>

                <motion.div className="hero-stats-row" variants={statsVariants} initial="hidden" animate="visible">
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number rennto-theme-color">50+</div>
                    <div className="stats-label">Projects Done</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">20+</div>
                    <div className="stats-label">Clients Served</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number glow-text-purple">95%</div>
                    <div className="stats-label">Satisfaction</div>
                  </motion.div>
                  <motion.div className="stats-glass-card" variants={statItemVariants}>
                    <div className="stats-number txhub-theme-color">5★</div>
                    <div className="stats-label">Average Rating</div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* RIGHT — Floating client bubbles */}
            <div className="projects-hero-graphic-side">
              <div className="floating-tags-container">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`floating-tag-item testi-hero-tag tag-${['ai','cloud','automation','analytics','saas'][i]}`}
                    style={{ '--tag-accent': t.colorAccent }}
                  >
                    <span className="testi-avatar-dot" style={{ background: t.colorAccent, boxShadow: `0 0 10px ${t.colorAccent}` }}>
                      {t.initials}
                    </span>
                    <span className="tag-text">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================== TESTIMONIAL CAROUSEL (Original Slider) =================== */}
      <div className="saas-container" style={{ marginTop: '32px' }} id="testi-cta">
        <div className="saas-products-section" style={{ width: '100%' }}>
          <motion.h2 
            className="saas-section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            Client Success Stories
          </motion.h2>

          <div style={{ maxWidth: '800px', margin: '0 auto 60px auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="saas-glass-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onMouseMove={handleMouseMove}
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  border: `1px solid ${testimonials[activeIndex].colorAccent}25`,
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, ${testimonials[activeIndex].colorAccent}03 100%)`
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: '#f59e0b' }}>
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: '1.6', 
                  color: '#1e293b', 
                  marginBottom: '28px', 
                  fontStyle: 'italic',
                  fontWeight: '500',
                  fontFamily: 'inherit'
                }}>
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Client info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                      {testimonials[activeIndex].name}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '4px 0 0 0' }}>
                      {testimonials[activeIndex].designation}, <span style={{ fontWeight: '600', color: testimonials[activeIndex].colorAccent }}>{testimonials[activeIndex].company}</span>
                    </p>
                  </div>

                  {/* Indicators / Slider dots */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: activeIndex === idx ? testimonials[idx].colorAccent : '#cbd5e1',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.3s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* =================== ANIMATED METRICS =================== */}
      <div className="saas-container" style={{ marginTop: '32px' }}>
        <motion.div className="saas-section-header-centered"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="saas-section-title-showcase">Our Track Record</h2>
          <p className="saas-section-subtitle-showcase">Numbers that reflect the trust, scale, and consistency of what we deliver.</p>
        </motion.div>

        <div className="testi-metrics-grid">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} index={idx} />
          ))}
        </div>
      </div>

      {/* =================== INDUSTRIES =================== */}
      <div className="saas-container" style={{ marginTop: '32px' }}>
        <motion.div className="saas-section-header-centered"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="saas-section-title-showcase">Industries Served</h2>
          <p className="saas-section-subtitle-showcase">We build specialized solutions for the sectors that matter most.</p>
        </motion.div>

        <div className="industries-orbit-grid">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="industry-orb-card saas-glass-card"
              style={{ '--ind-color': ind.color }}
            >
              <div className="ind-icon-outer-ring" style={{ border: `1.5px solid ${ind.color}30` }}>
                <div className="ind-icon-inner" style={{ background: ind.color + '12', color: ind.color }}>
                  {ind.icon}
                </div>
              </div>
              <span className="ind-name">{ind.name}</span>
              <div className="ind-bottom-glow" style={{ background: ind.color }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* =================== WHY CHOOSE TANVOX =================== */}
      <div className="saas-container" style={{ marginTop: '32px' }}>
        <motion.div className="saas-section-header-centered"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="saas-section-title-showcase">Why Clients Choose Tanvox</h2>
          <p className="saas-section-subtitle-showcase">Six reasons why global enterprises partner with us for their most critical digital initiatives.</p>
        </motion.div>

        <div className="value-props-grid">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="value-prop-card saas-glass-card"
              style={{ '--prop-color': prop.color }}
            >
              <div className="prop-icon-wrapper-border">{prop.icon}</div>
              <div className="prop-color-dot" style={{ background: prop.color }}></div>
              <h3 className="prop-title">{prop.title}</h3>
              <p className="prop-desc">{prop.desc}</p>
              <div className="prop-hover-line" style={{ background: prop.color }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* =================== CTA SECTION =================== */}
      <div className="saas-container" style={{ marginTop: '32px', marginBottom: '24px' }}>
        <motion.div
          className="saas-glass-card testi-cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 60 }}
        >
          <div className="testi-cta-glow-ring ring-1"></div>
          <div className="testi-cta-glow-ring ring-2"></div>

          <motion.div className="testi-cta-star-row"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" fill="#f59e0b" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </motion.div>

          <h2 className="testi-cta-title">Ready to Work With Tanvox?</h2>
          <p className="testi-cta-subtitle">Join 20+ enterprise organizations who trust us to deliver scalable, secure, and innovative digital solutions.</p>

          <div className="testi-cta-buttons">
            <button className="saas-btn-primary hero-btn-gradient" onClick={() => { window.location.hash = '#contact'; }}>
              Schedule a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
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