import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Collaboration.css';
import collaborationHero from '../../assets/collabhero.png';

// --- Animated Counter Component ---
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      // If not a number (e.g. "Global"), just set the value directly
      setCount(value);
      return;
    }

    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);

    const runCounter = () => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runCounter();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

// --- Magnetic Button Wrapper ---
function MagneticButton({ children, className, onClick, href }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Only pull if cursor is close enough (within 100px)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < 120) {
      setPosition({ x: distanceX * 0.35, y: distanceY * 0.35 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      <Tag href={href} className={className} onClick={onClick}>
        {children}
      </Tag>
    </motion.div>
  );
}

export default function Collaboration() {
  // Page Global State & Refs
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedCard, setClickedCard] = useState(null);
  const [iconRotations, setIconRotations] = useState({});

  const handleCardClick = (idx) => {
    setClickedCard(clickedCard === idx ? null : idx);
  };

  const handleBenefitClick = (idx) => {
    setIconRotations(prev => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 360
    }));
  };

  // Framer Motion variants for stagger entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    companyWebsite: '',
    partnershipType: '',
    companySize: '',
    areasExpertise: '',
    partnershipGoals: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form focus states for floating labels
  const [focusedField, setFocusedField] = useState(null);

  // Collapsible form toggle
  const [formOpen, setFormOpen] = useState(false);

  // Custom select dropdown state & refs
  const [partnershipTypeOpen, setPartnershipTypeOpen] = useState(false);
  const [companySizeOpen, setCompanySizeOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const partnershipTypeRef = useRef(null);
  const companySizeRef = useRef(null);
  const countryRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (partnershipTypeRef.current && !partnershipTypeRef.current.contains(e.target)) {
        setPartnershipTypeOpen(false);
      }
      if (companySizeRef.current && !companySizeRef.current.contains(e.target)) {
        setCompanySizeOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Global mouse move tracker for spotlight cursor-glow
  const handleGlobalMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Individual Card mouse spotlight tracking
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Form Submission
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";

  if (!formData.email.trim()) {
    newErrors.email = "Business email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
  if (!formData.country.trim()) newErrors.country = "Country is required";
  if (!formData.partnershipType) newErrors.partnershipType = "Partnership type is required";
  if (!formData.companySize) newErrors.companySize = "Company size is required";
  if (!formData.message.trim()) newErrors.message = "Message is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxOMFGMyBkj10Ag1G3OxZnIE4obvQTyslzwMg6E2bhqaG64YX4bGXtfFYMWc6gOqWg/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          companyWebsite: formData.companyWebsite,
          partnershipType: formData.partnershipType,
          companySize: formData.companySize,
          areasExpertise: formData.areasExpertise,
          partnershipGoals: formData.partnershipGoals,
          message: formData.message
        })
      }
    );

    setFormSubmitted(true);

    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      companyWebsite: "",
      partnershipType: "",
      companySize: "",
      areasExpertise: "",
      partnershipGoals: "",
      message: ""
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error(error);
    alert("Submission Failed");
  }
};

  const scrollToForm = () => {
    const el = document.getElementById('become-partner-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Data Definitions
  const partnerBenefits = [
    {
      title: "Increased Revenue Opportunities",
      desc: "Access new markets, customers, and business opportunities through joint sales and collaborative engagements.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <polyline points="18 10 12 4 6 10" />
        </svg>
      )
    },
    {
      title: "Expanded Service Portfolio",
      desc: "Enhance your offerings with our expertise in software development, cloud solutions, DevOps, AI, cybersecurity, and digital transformation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      )
    },
    {
      title: "Faster Time-to-Market",
      desc: "Leverage proven frameworks, methodologies, and technology solutions to accelerate project delivery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Joint Go-to-Market Initiatives",
      desc: "Participate in co-marketing campaigns, events, webinars, and business development programs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )
    },
    {
      title: "Technical Expertise",
      desc: "Gain access to experienced professionals, solution architects, and technology specialists.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Innovation & Growth",
      desc: "Collaborate on emerging technologies and next-generation digital solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
          <path d="M15 14c.2-.2.4-.4.6-.7C16.8 11.7 17 10 15.8 8.3c-1.3-1.8-4.3-1.8-5.6 0-1.2 1.7-1 3.4.2 5 .2.3.4.5.6.7v3h4v-3zM9 18h6" />
        </svg>
      )
    }
  ];

  const partnerCategories = [
    {
      title: "Technology Companies",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "Software Vendors",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="2" y="2" width="20" height="20" rx="2.5" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="6" y1="2" x2="6" y2="8" />
        </svg>
      )
    },
    {
      title: "Cloud Providers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: "Consulting Firms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: "System Integrators",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      title: "Managed Service Providers (MSPs)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    },
    {
      title: "Startups",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M22 2l-11.5 11.5" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      )
    },
    {
      title: "Educational Institutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    {
      title: "Government Organizations",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M3 22v-6h18v6M12 2L2 7h20zM5 7v9M21 7v9M10 7v9M14 7v9" />
        </svg>
      )
    },
    {
      title: "Enterprise Solution Providers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: "Cybersecurity Firms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "AI and Data Analytics Companies",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    }
  ];



  const partnerResources = [
    {
      title: "Sales Enablement Materials",
      desc: "Pitch decks, battlecards, and co-branded collateral to accelerate pipelines.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      title: "Product Documentation",
      desc: "Deep-dive API references, sandbox credentials, and platform integration guides to streamline developer workflows.",
      sizeClass: "bento-w2",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      )
    },
    {
      title: "Technical Training Programs",
      desc: "Instructor-led courses, sandbox code labs, and developer certifications.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Solution Architecture Support",
      desc: "1-on-1 consultations with senior systems architects to design, review, and validate complex integration plans.",
      sizeClass: "bento-h2",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: "Marketing Resources",
      desc: "Campaign playbooks, brand assets, and co-marketing guidelines.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
        </svg>
      )
    },
    {
      title: "Business Development Assistance",
      desc: "Lead sharing pipelines, target accounts mapping, and warm intro programs.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="12" y1="12" x2="22" y2="8.5" />
          <line x1="12" y1="12" x2="2" y2="8.5" />
        </svg>
      )
    },
    {
      title: "Joint Webinar Opportunities",
      desc: "Co-host thought leadership sessions and webinar product demos to generate qualified pipeline.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z" />
        </svg>
      )
    },
    {
      title: "Case Studies & Success Stories",
      desc: "Leverage published impact reports and reference architectures to accelerate client sales bids.",
      sizeClass: "bento-w2",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Dedicated Partner Support",
      desc: "Direct 24/7 Slack workspace channel integration and dedicated partner relationship desks.",
      sizeClass: "bento-normal",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      desc: "Deep experience across multiple industries and technology domains.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: "End-to-End Capabilities",
      desc: "Comprehensive services from strategy and development to deployment and support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      title: "Innovation-Driven Approach",
      desc: "Focus on emerging technologies and future-ready solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M15 14c.2-.2.4-.4.6-.7C16.8 11.7 17 10 15.8 8.3c-1.3-1.8-4.3-1.8-5.6 0-1.2 1.7-1 3.4.2 5 .2.3.4.5.6.7v3h4v-3zM9 18h6" />
        </svg>
      )
    },
    {
      title: "Global Delivery Model",
      desc: "Scalable engagement models supporting businesses worldwide.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Customer-Centric Mindset",
      desc: "Commitment to delivering measurable value and exceptional customer experiences.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];







  return (
    <div 
      className="tech-partners-page-container" 
      ref={containerRef}
      onMouseMove={handleGlobalMouseMove}
    >
      {/* 0. Ambient Effects */}
      <div className="collab-bg-grid"></div>
      <div className="collab-ambient-orb orb-blue"></div>
      <div className="collab-ambient-orb orb-pink"></div>
      <div className="collab-ambient-orb orb-purple"></div>
      <div className="light-beam beam-1"></div>
      <div className="light-beam beam-2"></div>
      
      {/* Cursor Follow Glow Effect */}
      <div 
        className="cursor-follow-glow" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* 1. Hero Section */}
      <section className="tech-partners-hero">
        <div className="hero-bg-image-wrapper"></div>
        <div className="hero-bg-blur-overlay"></div>
        <div className="hero-bg-fade-overlay"></div>
        <div className="collab-container">
          <div className="tech-hero-grid">
            <motion.div 
              className="tech-hero-text-side"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="partners-subtitle">
                <span className="badge-glow-dot pink"></span>
                Become a Partner
              </span>
              <h1 className="partners-title">
                Grow Together Through <span className="grad-text">Innovation, Collaboration, and Shared Success</span>
              </h1>
              <p className="partners-desc">
                Join our global partner ecosystem and unlock new opportunities to expand your business, deliver greater value to your customers, and accelerate digital transformation initiatives. Whether you are a technology provider, consulting firm, system integrator, reseller, cloud provider, startup, or enterprise partner, we believe that strong partnerships drive innovation and long-term success.
              </p>
              
              <div className="partners-hero-actions">
                <button className="btn-consultation" onClick={scrollToForm}>
                  Apply to Become a Partner
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <a className="btn-contact-us" href="#contact">
                  Talk to Our Partnership Team
                </a>
              </div>
            </motion.div>

            {/* Right Side Spacer so background image displays clearly */}
            <div className="tech-hero-visual-side empty-spacer"></div>
          </div>
        </div>
      </section>

      {/* 2. Why Partner With Us Section */}
      <section className="collab-section">
        <div className="collab-container">
          <div className="collab-section-header">
            <span className="section-subtitle">WHY PARTNER WITH US</span>
            <h2>Build Stronger Businesses Through Strategic Collaboration</h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--collab-text-muted)', lineHeight: '1.6' }}>
              We work closely with our partners to create mutually beneficial relationships that deliver measurable business outcomes.
            </p>
          </div>

          <motion.div 
            className="benefits-unified-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="unified-card-grid">
              {partnerBenefits.map((item, idx) => (
                <motion.div 
                  className="unified-card-item" 
                  key={idx} 
                  variants={itemVariants}
                  onClick={() => handleBenefitClick(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <motion.div 
                    className="benefit-circle-icon-wrapper"
                    animate={{ rotate: iconRotations[idx] || 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="benefit-text-wrapper">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5 Who We Partner With Section */}
      <section className="collab-section bg-dark-accent">
        <div className="collab-container">
          <div className="collab-section-header">
            <span className="section-subtitle">Target Verticals</span>
            <h2>Who We Partner With</h2>
            <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--collab-text-muted)', lineHeight: '1.6' }}>
              We welcome partnerships from organizations across diverse technology, cloud, and consulting frameworks:
            </p>
          </div>

          <div className="partner-marquee-container">
            <div className="partner-marquee-wrapper">
              <div className="partner-marquee-fade-left"></div>
              <div className="partner-marquee-fade-right"></div>
              
              <div className="partner-marquee-track">
                {partnerCategories.slice(0, 6).concat(partnerCategories.slice(0, 6)).map((cat, idx) => (
                  <div className="partner-pill-badge" key={idx}>
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="partner-marquee-wrapper" style={{ marginTop: '16px' }}>
              <div className="partner-marquee-fade-left"></div>
              <div className="partner-marquee-fade-right"></div>
              
              <div className="partner-marquee-track" style={{ animationDirection: 'reverse' }}>
                {partnerCategories.slice(6, 12).concat(partnerCategories.slice(6, 12)).map((cat, idx) => (
                  <div className="partner-pill-badge" key={idx}>
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



         {/* 4. Partner Resources Section */}
         <section className="collab-section">
           <div className="collab-container">
            <div className="collab-section-header">
               <span className="section-subtitle">PARTNER RESOURCES</span>
               <h2>Tools and Support for Partner Success</h2>
               <p className="collab-section-subdesc">
                 Unlock growth pipelines using our comprehensive partner resource bento hub (click to highlight).
               </p>
             </div>
  
             <motion.div 
               className="bento-grid-container"
               variants={containerVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.05 }}
             >
               {partnerResources.map((res, idx) => (
                 <motion.div 
                   className={`bento-card ${res.sizeClass} ${clickedCard === idx ? 'bento-active' : ''}`}
                   key={idx}
                   variants={itemVariants}
                   onMouseMove={handleCardMouseMove}
                   onClick={() => handleCardClick(idx)}
                   whileTap={{ scale: 0.96 }}
                   style={{ cursor: 'pointer' }}
                 >
                   <motion.div 
                     className="bento-card-bg-image" 
                     style={{ backgroundImage: `url(${res.image})` }}
                     animate={{ scale: clickedCard === idx ? 1.25 : 1 }}
                     transition={{ type: "spring", stiffness: 100, damping: 15 }}
                   />
                   <div className="bento-card-overlay"></div>
                   
                   <div className="bento-icon-wrapper">
                     {res.icon}
                   </div>
                   <div className="bento-content">
                     <h4>{res.title}</h4>
                     <p>{res.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
           </div>
         </section>

      {/* 4.5 Why Organizations Choose Us Section */}
      <section className="collab-section">
        <div className="collab-container">
          <motion.div 
            className="choose-us-unified-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="choose-us-header">
              <span className="choose-us-subtitle">WHY ORGANIZATIONS CHOOSE US</span>
              <h2>Strategic Advantages & Execution Depth</h2>
            </div>
            
            <div className="choose-us-grid">
              {whyChooseUs.map((item, idx) => (
                <div className="choose-us-item" key={idx}>
                  <div className="choose-us-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="choose-us-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>







      {/* 8. Become a Partner Form */}
      <section className="collab-section bg-dark-accent" id="become-partner-form">
        <div className="collab-container">
          
          {/* Static Centered Section Header */}
          <div className="collab-section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">Get Started</span>
            <h2>Partner Inquiry Form</h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0 auto', maxWidth: '680px' }}>Complete the form below to submit your partnership inquiry. Our alliances team will review your application and respond shortly.</p>
          </div>

          <div className="form-glass-card">
            
            {/* Form Title & Description Inside the Card */}
            <div className="form-card-title-group" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, background: 'var(--grad-primary, linear-gradient(135deg, #ff1e3c 0%, #001a72 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block', margin: '0 0 4px 0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Let's Collaborate</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>Fill in the details below and let's build something amazing together.</p>
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div 
                  className="success-alert-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>Submission Successful!</h3>
                  <p>Our alliances manager will review your submission and contact you within 2 business days.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  {/* First row: Always visible, contains 2 fields */}
                  <div className="form-grid-row">
                    <div className="form-input-group">
                      <label htmlFor="fullName" className="static-label">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFormOpen(true)}
                        className={errors.fullName ? 'error-border' : ''}
                        placeholder="Enter your full name" 
                      />
                      {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="email" className="static-label">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFormOpen(true)}
                        className={errors.email ? 'error-border' : ''}
                        placeholder="Enter your business email" 
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Rest of the form, animated dropdown */}
                  <motion.div
                    initial={false}
                    animate={{ height: formOpen ? 'auto' : 0, opacity: formOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: formOpen ? 'visible' : 'hidden' }}
                  >
                    <div className="form-grid-row" style={{ marginTop: '12px' }}>
                      <div className="form-input-group">
                        <label htmlFor="companyName" className="static-label">
                          Company Name *
                        </label>
                        <input 
                          type="text" 
                          id="companyName" 
                          name="companyName" 
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={errors.companyName ? 'error-border' : ''}
                          placeholder="Enter your company name" 
                        />
                        {errors.companyName && <span className="field-error-msg">{errors.companyName}</span>}
                      </div>

                      <div className="form-input-group">
                        <label htmlFor="phone" className="static-label">
                          Phone Number *
                        </label>
                        <input 
                          type="text" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={errors.phone ? 'error-border' : ''}
                          placeholder="Enter your phone number" 
                        />
                        {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="form-grid-row">
                      {/* Country Dropdown Select */}
                      <div className="form-input-group" ref={countryRef} style={{ position: 'relative' }}>
                        <label className="static-label">Country *</label>
                        <div 
                          className={`custom-select-trigger ${countryOpen ? 'active' : ''}`}
                          onClick={() => setCountryOpen(!countryOpen)}
                        >
                          <span style={{ color: formData.country ? '#0f172a' : '#94a3b8' }}>
                            {formData.country || "Select your country"}
                          </span>
                          <svg className={`select-arrow ${countryOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                        
                        <AnimatePresence>
                          {countryOpen && (
                            <motion.div 
                              className="custom-select-dropdown"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {[
                                "United States", "United Kingdom", "Canada", "India", "Germany", 
                                "Australia", "Singapore", "France", "United Arab Emirates", 
                                "Saudi Arabia", "South Africa", "Netherlands", "Japan"
                              ].map((option) => (
                                <div 
                                  key={option}
                                  className={`custom-select-option ${formData.country === option ? 'selected' : ''}`}
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, country: option }));
                                    setCountryOpen(false);
                                    if (errors.country) setErrors(prev => ({ ...prev, country: '' }));
                                  }}
                                >
                                  {option}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {errors.country && <span className="field-error-msg">{errors.country}</span>}
                      </div>

                      <div className="form-input-group">
                        <label htmlFor="companyWebsite" className="static-label">
                          Company Website
                        </label>
                        <input 
                          type="url" 
                          id="companyWebsite" 
                          name="companyWebsite" 
                          value={formData.companyWebsite}
                          onChange={handleInputChange}
                          placeholder="Enter your website URL" 
                        />
                      </div>
                    </div>

                    <div className="form-grid-row">
                      {/* Partnership Type Dropdown Select */}
                      <div className="form-input-group" ref={partnershipTypeRef} style={{ position: 'relative' }}>
                        <label className="static-label">Partnership Type *</label>
                        <div 
                          className={`custom-select-trigger ${partnershipTypeOpen ? 'active' : ''}`}
                          onClick={() => setPartnershipTypeOpen(!partnershipTypeOpen)}
                        >
                          <span style={{ color: formData.partnershipType ? '#0f172a' : '#94a3b8' }}>
                            {formData.partnershipType || "Select partnership type"}
                          </span>
                          <svg className={`select-arrow ${partnershipTypeOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                        
                        <AnimatePresence>
                          {partnershipTypeOpen && (
                            <motion.div 
                              className="custom-select-dropdown"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {[
                                "Technology Partner", "Software Vendor", "Cloud Provider", 
                                "Consulting Partner", "System Integration Partner", 
                                "Managed Service Provider (MSP)", "Startup Alliance", 
                                "Educational Partner", "Government Partner", 
                                "Enterprise Solution Partner", "Cybersecurity Partner", 
                                "AI / Analytics Partner"
                              ].map((option) => (
                                <div 
                                  key={option}
                                  className={`custom-select-option ${formData.partnershipType === option ? 'selected' : ''}`}
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, partnershipType: option }));
                                    setPartnershipTypeOpen(false);
                                    if (errors.partnershipType) setErrors(prev => ({ ...prev, partnershipType: '' }));
                                  }}
                                >
                                  {option}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {errors.partnershipType && <span className="field-error-msg">{errors.partnershipType}</span>}
                      </div>

                      {/* Company Size Dropdown Select */}
                      <div className="form-input-group" ref={companySizeRef} style={{ position: 'relative' }}>
                        <label className="static-label">Company Size *</label>
                        <div 
                          className={`custom-select-trigger ${companySizeOpen ? 'active' : ''}`}
                          onClick={() => setCompanySizeOpen(!companySizeOpen)}
                        >
                          <span style={{ color: formData.companySize ? '#0f172a' : '#94a3b8' }}>
                            {formData.companySize || "Select company size"}
                          </span>
                          <svg className={`select-arrow ${companySizeOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                        
                        <AnimatePresence>
                          {companySizeOpen && (
                            <motion.div 
                              className="custom-select-dropdown"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {[
                                "1-10 Employees", "11-50 Employees", "51-200 Employees", 
                                "201-500 Employees", "500+ Employees"
                              ].map((option) => (
                                <div 
                                  key={option}
                                  className={`custom-select-option ${formData.companySize === option ? 'selected' : ''}`}
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, companySize: option }));
                                    setCompanySizeOpen(false);
                                    if (errors.companySize) setErrors(prev => ({ ...prev, companySize: '' }));
                                  }}
                                >
                                  {option}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {errors.companySize && <span className="field-error-msg">{errors.companySize}</span>}
                      </div>
                    </div>

                    <div className="form-input-group" style={{ marginTop: '12px' }}>
                      <label htmlFor="areasExpertise" className="static-label">
                        Areas of Expertise
                      </label>
                      <textarea 
                        id="areasExpertise" 
                        name="areasExpertise" 
                        rows="2"
                        value={formData.areasExpertise}
                        onChange={handleInputChange}
                        placeholder="Tell us about your areas of expertise"
                      ></textarea>
                    </div>

                    <div className="form-input-group" style={{ marginTop: '12px' }}>
                      <label htmlFor="partnershipGoals" className="static-label">
                        Partnership Goals
                      </label>
                      <textarea 
                        id="partnershipGoals" 
                        name="partnershipGoals" 
                        rows="2"
                        value={formData.partnershipGoals}
                        onChange={handleInputChange}
                        placeholder="What are your partnership goals?"
                      ></textarea>
                    </div>

                    <div className="form-input-group" style={{ marginTop: '12px' }}>
                      <label htmlFor="message" className="static-label">
                        Message *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? 'error-border' : ''}
                        placeholder="Write your message here..."
                      ></textarea>
                      {errors.message && <span className="field-error-msg">{errors.message}</span>}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '24px' }}>
                      <button 
                        className="btn-collab-submit" 
                        style={{ 
                          width: '100%', 
                          padding: '16px', 
                          borderRadius: '100px', 
                          background: 'linear-gradient(90deg, #d81b60 0%, #1e2285 100%)', 
                          color: '#ffffff', 
                          border: 'none', 
                          fontWeight: 750, 
                          fontSize: '0.98rem',
                          cursor: 'pointer',
                          boxShadow: '0 8px 25px rgba(30, 34, 133, 0.25)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                      >
                        Submit Application
                      </button>
                    </div>
                  </motion.div>

                  {/* Click trigger at bottom when collapsed */}
                  {!formOpen && (
                    <div 
                      onClick={() => setFormOpen(true)}
                      style={{ 
                        textAlign: 'center', 
                        paddingTop: '20px', 
                        fontWeight: 800, 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontSize: '0.92rem',
                        borderTop: '1px solid rgba(15, 23, 42, 0.05)',
                        marginTop: '15px'
                      }}
                    >
                      <span style={{
                        background: 'var(--grad-primary, linear-gradient(135deg, #ff1e3c 0%, #001a72 100%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'inline-block'
                      }}>Show additional fields</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff1e3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>


    </div>
  );
}
