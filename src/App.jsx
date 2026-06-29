import { useState, useEffect, useRef } from 'react';
import saasHeroIllustration from './assets/heroGlobe.png';
import Header from './components/common/Header';
import Home from './pages/Home/Home';
import Footer from './components/common/Footer';
import Cursor from './components/common/Cursor';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Page Imports
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import Portfolio from './pages/Portfolio/Portfolio';
import Collaboration from './pages/Collaboration/Collaboration';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import SupportPage from './pages/Menu/Support/SupportPage';
import Careers from './pages/Menu/Career/careers';
import JobDetails from './pages/Menu/Career/JobDetails';

// Service Card Image Imports
import softwareDevImg from './assets/software_dev.png';
import cloudServicesImg from './assets/cloud_services.png';
import devopsAutomationImg from './assets/devops_automation.png';
import aiAutomationImg from './assets/ai_automation.png';
import cybersecurityImg from './assets/cybersecurity.png';
import itInfrastructureImg from './assets/it_infrastructure.png';
import managedItImg from './assets/managedITHome.png';
import supportMaintenanceImg from './assets/supportmaintainhome.png';

// Rennto Product Image Imports
import renntoLogo from './assets/rennto.png';
import rennto1 from './assets/rennto1.png';
import rennto2 from './assets/rennto2.png';
import rennto3 from './assets/rennto3.png';
import rennto4 from './assets/rennto4.png';

// TX-Hub Product Image Imports
import txhubLogo from './assets/TXhublogo.png';
import txhub1 from './assets/txhub1.png';
import txhub2 from './assets/txhub2.png';
import txhub3 from './assets/txhub3.png';
import txhub4 from './assets/txhub4.png';

// Brand Logo Imports
import transcriptsLogo from './assets/transcripts_logo.png';
import chatawayLogo from './assets/chataway_logo.png';
import animationHomeVideo from './assets/annimationhome.mp4';
import aiAnimationVideo from './assets/AIannimation.mp4';

// Helper Icons for Certifications & Compliance
const Iso9001Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="11" r="3"/>
    <path d="m9 11 2 2 4-4"/>
  </svg>
);

const Iso27001Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <path d="M12 15v3"/>
  </svg>
);

const Soc2Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const Iso20000Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="5" rx="1"/>
    <rect x="2" y="11" width="20" height="5" rx="1"/>
    <rect x="2" y="19" width="20" height="5" rx="1"/>
    <circle cx="6" cy="5.5" r="1"/>
    <circle cx="6" cy="13.5" r="1"/>
    <circle cx="6" cy="21.5" r="1"/>
  </svg>
);

const Iso22301Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
  </svg>
);

const PciIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
    <circle cx="6" cy="15" r="1.5"/>
    <circle cx="11" cy="15" r="1.5"/>
    <circle cx="16" cy="15" r="1.5"/>
  </svg>
);

const GdprIcon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="12" cy="16" r="1.5"/>
  </svg>
);

const Iso27701Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
    <path d="M6 18c0-2.5 3-4.5 6-4.5s6 2 6 4.5"/>
  </svg>
);

const Iso42001Icon = () => (
  <svg className="compliance-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>
  </svg>
);

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [renntoActiveIndex, setRenntoActiveIndex] = useState(0);
  const [renntoLightboxImg, setRenntoLightboxImg] = useState(null);
  const renntoScreens = [rennto1, rennto2, rennto3, rennto4];

  const [txhubActiveIndex, setTxhubActiveIndex] = useState(0);
  const txhubScreens = [txhub1, txhub2, txhub3, txhub4];

  const scrollXRef = useRef(0);
  const isPausedRef = useRef(false);
  const animationFrameIdRef = useRef(null);
  const illustrationRef = useRef(null);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubscribing) return;
    setIsSubscribing(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzskhfzFNd8cwZMS4jZxngO14X6AlgneLhbGAa50xIfs_m4CqriqGFGnL6bV4EEg-uo/exec",
        {
          method: "POST",
          body: JSON.stringify({
            email: subscriberEmail,
          }),
        }
      );

      const text = await response.text();
      console.log(text);

      alert("Subscribed Successfully!");
      setSubscriberEmail("");

    } catch (error) {
      console.log(error);
      alert("Subscription Failed");
    } finally {
      setIsSubscribing(false);
    }
  };

  const isHomePage = ['#home', '', '#consultation', '#proposal', '#get-started', '#journey'].includes(currentHash) || !currentHash.startsWith('#');

  // JavaScript requestAnimationFrame loop for continuous services scroll
  useEffect(() => {
    // Only run scroll animation on home page where the carousel resides
    if (!isHomePage || window.innerWidth < 768) return;

    const track = document.querySelector('.services-carousel-track');
    if (!track) return;

    const animate = () => {
      if (!isPausedRef.current) {
        scrollXRef.current -= 0.6; // Speed offset increment per frame
        if (scrollXRef.current <= -1920) {
          scrollXRef.current = 0;
        }
        track.style.transform = `translateX(${scrollXRef.current}px)`;
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [currentHash]);

  const buttonPauseRef = useRef(false);
  const buttonTimeoutRef = useRef(null);

  const handleServicesScroll = (direction) => {
    const track = document.querySelector('.services-carousel-track');
    if (!track) return;
    
    // Pause animation during slide transition
    isPausedRef.current = true;
    buttonPauseRef.current = true;

    if (buttonTimeoutRef.current) {
      clearTimeout(buttonTimeoutRef.current);
    }
    
    const step = 240; // width of card (220px) + gap (20px)
    let newX = direction === 'next' ? scrollXRef.current - step : scrollXRef.current + step;
    
    // Boundary wrap-around
    if (newX < -1920) {
      newX = newX + 1920;
    } else if (newX > 0) {
      newX = newX - 1920;
    }
    
    // Slide transition
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    track.style.transform = `translateX(${newX}px)`;
    scrollXRef.current = newX;
    
    // Clear transition and resume frame-loop
    buttonTimeoutRef.current = setTimeout(() => {
      track.style.transition = 'none';
      buttonPauseRef.current = false;
      isPausedRef.current = false;
    }, 500);
  };


  useEffect(() => {
    if (!isHomePage) return;

    const el = illustrationRef.current;
    if (!el) return;

    const img = el.querySelector('.hero-illustration-img');
    const platform = el.querySelector('.anti-gravity-platform');
    const glow = el.querySelector('.hero-ambient-glow');
    const particles = el.querySelectorAll('.hero-particle');

    // Floating animations array to pause/play
    const tweens = [];

    if (img) {
      tweens.push(
        gsap.fromTo(img, 
          { y: -6 }, 
          { y: 6, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' }
        )
      );
    }

    // Glow pulse animation
    if (glow) {
      tweens.push(
        gsap.fromTo(glow,
          { scale: 0.92, opacity: 0.75 },
          { scale: 1.08, opacity: 0.95, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' }
        )
      );
    }

    // Particles slow floating animations
    if (particles.length > 0) {
      particles.forEach((p, idx) => {
        const dirY = idx % 2 === 0 ? 15 : -15;
        const dirX = idx % 3 === 0 ? 10 : -10;
        tweens.push(
          gsap.fromTo(p,
            { y: -dirY, x: -dirX, opacity: 0.4 },
            { y: dirY, x: dirX, opacity: 0.9, duration: 4 + (idx * 0.8), repeat: -1, yoyo: true, ease: 'sine.inOut' }
          )
        );
      });
    }

    // Mouse parallax
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      if (img) {
        gsap.to(img, {
          x: x * 10,
          y: y * 10,
          rotateY: x * 6,
          rotateX: -y * 6,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      if (platform) {
        gsap.to(platform, {
          x: x * 5,
          y: y * 5,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    // Pause when tab is inactive, resume when active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        tweens.forEach(t => t.pause());
      } else {
        tweens.forEach(t => t.play());
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      tweens.forEach(tween => tween.kill());
      el.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentHash]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRenntoActiveIndex((prev) => (prev + 1) % renntoScreens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [renntoScreens.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTxhubActiveIndex((prev) => (prev + 1) % txhubScreens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [txhubScreens.length]);

  useEffect(() => {
    const handleHashChange = () => {
      // Clean up fallback hash routing
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      // Scroll to top on page navigate
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    // Track active GSAP tweens/scrolltriggers to clean them up properly
    const tweens = [];
    const scrollTriggers = [];

    // Swipe animation for Directory cards
    const cards = gsap.utils.toArray('.orbit-card');
    if (cards.length >= 3) {
      tweens.push(
        gsap.from(cards[0], { 
          x: -80, 
          opacity: 0, 
          duration: 1.2, 
          ease: 'power3.out'
        })
      );

      tweens.push(
        gsap.from(cards[1], { 
          y: 80, 
          opacity: 0, 
          duration: 1.2, 
          ease: 'power3.out'
        })
      );

      tweens.push(
        gsap.from(cards[2], { 
          x: 80, 
          opacity: 0, 
          duration: 1.2, 
          ease: 'power3.out'
        })
      );

      // Setup network-particle initial position and motionPath loop
      const particle = document.getElementById("network-particle");
      if (particle) {
        gsap.set(particle, {
          attr: {
            cx: 240,
            cy: 15
          }
        });
        const particleTween = gsap.to(particle, {
          duration: 12,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: "#networkPath",
            align: "#networkPath",
            autoRotate: false
          }
        });
        tweens.push(particleTween);

        // Hover triggers for speed timescale tweaks on hover
        const c1Enter = () => {
          gsap.to(particleTween, { timeScale: 2.2, duration: 0.4 });
          gsap.to('.orbit-1', { strokeWidth: 3.5, opacity: 0.55, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[0].querySelector('.view-all-link-modern .link-arrow'), { x: 4, duration: 0.3 });
        };
        const c1Leave = () => {
          gsap.to(particleTween, { timeScale: 1.0, duration: 0.4 });
          gsap.to('.orbit-1', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[0].querySelector('.view-all-link-modern .link-arrow'), { x: 0, duration: 0.3 });
        };

        const c2Enter = () => {
          gsap.to(particleTween, { timeScale: 2.2, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 3.5, opacity: 0.55, duration: 0.4 });
          gsap.to('.orbit-1, .orbit-3', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[1].querySelector('.view-all-link-modern .link-arrow'), { x: 4, duration: 0.3 });
        };
        const c2Leave = () => {
          gsap.to(particleTween, { timeScale: 1.0, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to('.orbit-1, .orbit-3', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[1].querySelector('.view-all-link-modern .link-arrow'), { x: 0, duration: 0.3 });
        };

        const c3Enter = () => {
          gsap.to(particleTween, { timeScale: 2.2, duration: 0.4 });
          gsap.to('.orbit-3', { strokeWidth: 3.5, opacity: 0.55, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[2].querySelector('.view-all-link-modern .link-arrow'), { x: 4, duration: 0.3 });
        };
        const c3Leave = () => {
          gsap.to(particleTween, { timeScale: 1.0, duration: 0.4 });
          gsap.to('.orbit-3', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to('.orbit-2', { strokeWidth: 2.5, opacity: 0.35, duration: 0.4 });
          gsap.to(cards[2].querySelector('.view-all-link-modern .link-arrow'), { x: 0, duration: 0.3 });
        };

        cards[0].addEventListener('mouseenter', c1Enter);
        cards[0].addEventListener('mouseleave', c1Leave);
        cards[1].addEventListener('mouseenter', c2Enter);
        cards[1].addEventListener('mouseleave', c2Leave);
        cards[2].addEventListener('mouseenter', c3Enter);
        cards[2].addEventListener('mouseleave', c3Leave);

        // Clean up event listeners on unmount
        tweens.push({
          kill: () => {
            if (cards[0]) {
              cards[0].removeEventListener('mouseenter', c1Enter);
              cards[0].removeEventListener('mouseleave', c1Leave);
            }
            if (cards[1]) {
              cards[1].removeEventListener('mouseenter', c2Enter);
              cards[1].removeEventListener('mouseleave', c2Leave);
            }
            if (cards[2]) {
              cards[2].removeEventListener('mouseenter', c3Enter);
              cards[2].removeEventListener('mouseleave', c3Leave);
            }
          }
        });
      }
    }

    // Parallax for Newsletter Orbs
    tweens.push(
      gsap.fromTo('.newsletter-bg-orb-1', 
        { y: -80, scale: 0.8 },
        {
          y: 80,
          scale: 1.15,
          scrollTrigger: {
            trigger: '.stay-ahead-newsletter-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      )
    );
    tweens.push(
      gsap.fromTo('.newsletter-bg-orb-2', 
        { y: 80, scale: 0.95 },
        {
          y: -80,
          scale: 1.25,
          scrollTrigger: {
            trigger: '.stay-ahead-newsletter-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      )
    );

    // Parallax for Accelerate Shapes
    tweens.push(
      gsap.fromTo('.accelerate-bg-shape-1', 
        { y: -70, x: -20, rotate: 0 },
        {
          y: 70,
          x: 20,
          rotate: 45,
          scrollTrigger: {
            trigger: '.accelerate-banner-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      )
    );
    tweens.push(
      gsap.fromTo('.accelerate-bg-shape-2', 
        { y: 70, x: 20, rotate: 0 },
        {
          y: -70,
          x: -20,
          rotate: -45,
          scrollTrigger: {
            trigger: '.accelerate-banner-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      )
    );

    // Scroll reveal animation for home page sections
    const revealElements = gsap.utils.toArray('.services-section, .products-platforms-section, .directory-showcase-section, .accelerate-banner-section');
    revealElements.forEach((el) => {
      tweens.push(
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        )
      );
    });

    return () => {
      tweens.forEach(t => t.kill());
    };
  }, [currentHash]);

  const renderContent = () => {
    if (currentHash && currentHash.startsWith('#case-study/')) {
      return <Portfolio currentHash={currentHash} />;
    }
    switch (currentHash) {
      case '#about':
        return <About />;
      case '#services':
        return <Services />;
      case '#solutions':
        return <Solutions />;
      case '#industries':
        return <Industries />;
      case '#portfolio':
      case '#portfolio-projects':
      case '#portfolio-cases':
      case '#portfolio-tech':
      case '#portfolio-testimonials':
      case '#portfolio/projects/rennto':
      case '#portfolio/projects/txhub':
        return <Portfolio currentHash={currentHash} />;
      case '#collaboration':
      case '#collab-tech':
      case '#collab-business':
      case '#collab-strategic':
      case '#collab-join':
        return <Collaboration />;
      case '#menu':
        return <Menu />;
      case '#menu-careers':
      case '#careers':
        return <Careers />;
      case '#menu-support':
      case '#support':
        return <SupportPage />;
      case '#contact':
        return <Contact />;
      case '#home':
      default:
        if (currentHash.startsWith('#careers/') || currentHash.startsWith('#menu-careers/')) {
          return <JobDetails currentHash={currentHash} />;
        }
        return (
          <>
            {/* Futuristic Technology Theme Hero Section */}
            <main className="verification-hero">
              <div className="hero-network-overlay"></div>
              
              {/* Cybernetic nodes/dots */}
              <div className="hero-glow-dot-1"></div>
              <div className="hero-glow-dot-2"></div>

              {/* Two-Column Layout Container */}
              <div className="hero-container">
                {/* Left Column: Copywriting and CTA Actions */}
                <div className="hero-left-col">
                  <div className="hero-badge-ref">
                    <span className="hero-badge-line"></span>
                    EMPOWERING BUSINESSES
                  </div>
                  
                  <h1 className="hero-title">
                    Empowering Businesses<br />
                    Through <span className="text-gradient-purple-pink">Digital Innovation,<br />
                    AI & Enterprise Technology</span>
                  </h1>
                  
                  <p className="hero-desc">
                    We help organizations accelerate growth, optimize operations, and create competitive advantage 
                    through AI, Cloud, DevOps, Cybersecurity, and Emerging Technologies.
                  </p>
                  
                  <div className="hero-actions hero-actions-left">
                    {/* Schedule Consultation Button */}
                    <a href="#contact" className="btn-consultation" style={{ gap: '0.75rem' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Schedule a Consultation
                    </a>
                  </div>

                  {/* Integrated Trust & Partners Row */}
                  <div className="hero-trust-row">
                    <div className="hero-trust-item">
                      <span className="hero-trust-label">Trusted by:</span>
                      <div className="hero-trust-logos">
                        <a href="https://100transcripts.com/#" target="_blank" rel="noopener noreferrer" className="hero-trust-logo-card" title="100 Transcripts">
                          <img src={transcriptsLogo} alt="100 Transcripts Logo" className="hero-trust-logo-img transcripts-logo" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.chatawayplus.app&hl=en_IN" target="_blank" rel="noopener noreferrer" className="hero-trust-logo-card" title="chatAway">
                          <img src={chatawayLogo} alt="Chataway Logo" className="hero-trust-logo-img chataway-logo" style={{ height: '16px', objectFit: 'contain' }} />
                          <span className="hero-trust-logo-text">chatAway</span>
                        </a>
                      </div>
                    </div>
                    <div className="hero-trust-item partner-item">
                      <span className="hero-trust-label">Partner:</span>
                      <div className="hero-trust-logos">
                        <div className="hero-trust-logo-card" title="NextGen Technologies">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#F87171', marginRight: '4px' }}>
                            <polyline points="13 17 18 12 13 7"/>
                            <polyline points="6 17 11 12 6 7"/>
                          </svg>
                          <span className="hero-trust-logo-text-nextgen">NextGen Technologies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Premium SaaS Illustration Image */}
                <div className="hero-right-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Large Ambient Glow behind wrapper */}
                  <div className="hero-ambient-glow"></div>
                  
                  <div className="hero-illustration-wrapper" ref={illustrationRef}>
                    <img src={saasHeroIllustration} alt="Tanvox SaaS Technology Solution Dashboard" className="hero-illustration-img" />
                    
                    {/* Subtle Glowing Particles (Capped for performance) */}
                    <div className="hero-particle hp-1"></div>
                    <div className="hero-particle hp-2"></div>
                    <div className="hero-particle hp-3"></div>
                    <div className="hero-particle hp-4"></div>
                    <div className="hero-particle hp-5"></div>
                    <div className="hero-particle hp-6"></div>
                  </div>

                  {/* Smaller scrolling certifications marquee under image */}
                  <div className="hero-cert-marquee-section">
                    <span className="hero-cert-label">Certifications & Compliance:</span>
                    <div className="hero-cert-marquee-container">
                      <div className="hero-cert-marquee-track">
                        <div className="hero-cert-pill"><Iso9001Icon /><span className="hero-cert-text">ISO 9001</span></div>
                        <div className="hero-cert-pill"><Iso27001Icon /><span className="hero-cert-text">ISO 27001</span></div>
                        <div className="hero-cert-pill"><Soc2Icon /><span className="hero-cert-text">SOC 2 II</span></div>
                        <div className="hero-cert-pill"><Iso20000Icon /><span className="hero-cert-text">ISO 20000</span></div>
                        <div className="hero-cert-pill"><Iso22301Icon /><span className="hero-cert-text">ISO 22301</span></div>
                        <div className="hero-cert-pill"><PciIcon /><span className="hero-cert-text">PCI DSS</span></div>
                        <div className="hero-cert-pill"><GdprIcon /><span className="hero-cert-text">GDPR</span></div>
                        <div className="hero-cert-pill"><Iso27701Icon /><span className="hero-cert-text">ISO 27701</span></div>
                        <div className="hero-cert-pill"><Iso42001Icon /><span className="hero-cert-text">ISO 42001</span></div>
                        
                        {/* Duplicate for seamless infinite loop */}
                        <div className="hero-cert-pill"><Iso9001Icon /><span className="hero-cert-text">ISO 9001</span></div>
                        <div className="hero-cert-pill"><Iso27001Icon /><span className="hero-cert-text">ISO 27001</span></div>
                        <div className="hero-cert-pill"><Soc2Icon /><span className="hero-cert-text">SOC 2 II</span></div>
                        <div className="hero-cert-pill"><Iso20000Icon /><span className="hero-cert-text">ISO 20000</span></div>
                        <div className="hero-cert-pill"><Iso22301Icon /><span className="hero-cert-text">ISO 22301</span></div>
                        <div className="hero-cert-pill"><PciIcon /><span className="hero-cert-text">PCI DSS</span></div>
                        <div className="hero-cert-pill"><GdprIcon /><span className="hero-cert-text">GDPR</span></div>
                        <div className="hero-cert-pill"><Iso27701Icon /><span className="hero-cert-text">ISO 27701</span></div>
                        <div className="hero-cert-pill"><Iso42001Icon /><span className="hero-cert-text">ISO 42001</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
 
            {/* Our Key Services Section */}
            <section className="services-section">
              <div className="section-container">
                <div className="section-header">
                  <span className="section-subtitle">What We Do</span>
                  <h2 className="section-title">Our Key Services</h2>
                  <p className="section-desc">We deliver end-to-end digital transformation through specialized technology capabilities tailored to your business goals.</p>
                </div>
                <div className="services-carousel-container">
                  <div className="services-carousel-track">
                    {/* --- Group 1 --- */}
                    {/* Card 1: Software Development */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={softwareDevImg} alt="Software Development Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${softwareDevImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        </div>
                        <h3>Software Development</h3>
                        <p>Custom software engineering, legacy modernization, enterprise web apps, and API integrations.</p>
                      </div>
                    </div>
   
                    {/* Card 2: Cloud Services */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={cloudServicesImg} alt="Cloud Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${cloudServicesImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                        </div>
                        <h3>Cloud Services</h3>
                        <p>Public, private, and hybrid cloud migration, serverless computing, architectures, and operations.</p>
                      </div>
                    </div>
   
                    {/* Card 3: DevOps & Automation */}
                    <div className="service-card service-card-red">
                      <div className="service-card-image-wrapper">
                        <img src={devopsAutomationImg} alt="DevOps & Automation" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${devopsAutomationImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box red-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/></svg>
                        </div>
                        <h3>DevOps & Automation</h3>
                        <p>CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, and continuous monitoring.</p>
                      </div>
                    </div>
   
                    {/* Card 4: AI & Intelligent Automation */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={aiAutomationImg} alt="AI & Intelligent Automation" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${aiAutomationImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/></svg>
                        </div>
                        <h3>AI & Automation</h3>
                        <p>Machine learning workflows, natural language processing, predictive modeling, and intelligent agents.</p>
                      </div>
                    </div>
   
                    {/* Card 5: Cybersecurity Services */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={cybersecurityImg} alt="Cybersecurity Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${cybersecurityImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h3>Cybersecurity</h3>
                        <p>Threat detection, vulnerability assessments, compliance alignment, and zero-trust framework execution.</p>
                      </div>
                    </div>
   
                    {/* Card 6: IT Infrastructure Services */}
                    <div className="service-card service-card-red">
                      <div className="service-card-image-wrapper">
                        <img src={itInfrastructureImg} alt="IT Infrastructure Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${itInfrastructureImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box red-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                        </div>
                        <h3>IT Infrastructure</h3>
                        <p>Network engineering, modern datacenter design, virtualization, and hybrid work setups.</p>
                      </div>
                    </div>
   
                    {/* Card 7: Managed IT Services */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={managedItImg} alt="Managed IT Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${managedItImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <h3>Managed IT Services</h3>
                        <p>24/7 helpdesk monitoring, asset governance, backup systems, and routine infrastructure health updates.</p>
                      </div>
                    </div>
   
                    {/* Card 8: Support & Maintenance */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={supportMaintenanceImg} alt="Support & Maintenance" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${supportMaintenanceImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        </div>
                        <h3>Support & Maintenance</h3>
                        <p>SLA-backed systems troubleshooting, emergency hotfixes, package updates, and routine checks.</p>
                      </div>
                    </div>

                    {/* --- Group 2 (Duplicate for loop) --- */}
                    {/* Card 1: Software Development */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={softwareDevImg} alt="Software Development Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${softwareDevImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        </div>
                        <h3>Software Development</h3>
                        <p>Custom software engineering, legacy modernization, enterprise web apps, and API integrations.</p>
                      </div>
                    </div>
   
                    {/* Card 2: Cloud Services */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={cloudServicesImg} alt="Cloud Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${cloudServicesImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                        </div>
                        <h3>Cloud Services</h3>
                        <p>Public, private, and hybrid cloud migration, serverless computing, architectures, and operations.</p>
                      </div>
                    </div>
   
                    {/* Card 3: DevOps & Automation */}
                    <div className="service-card service-card-red">
                      <div className="service-card-image-wrapper">
                        <img src={devopsAutomationImg} alt="DevOps & Automation" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${devopsAutomationImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box red-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/></svg>
                        </div>
                        <h3>DevOps & Automation</h3>
                        <p>CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, and continuous monitoring.</p>
                      </div>
                    </div>
   
                    {/* Card 4: AI & Intelligent Automation */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={aiAutomationImg} alt="AI & Intelligent Automation" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${aiAutomationImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/></svg>
                        </div>
                        <h3>AI & Automation</h3>
                        <p>Machine learning workflows, natural language processing, predictive modeling, and intelligent agents.</p>
                      </div>
                    </div>
   
                    {/* Card 5: Cybersecurity Services */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={cybersecurityImg} alt="Cybersecurity Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${cybersecurityImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h3>Cybersecurity</h3>
                        <p>Threat detection, vulnerability assessments, compliance alignment, and zero-trust framework execution.</p>
                      </div>
                    </div>
   
                    {/* Card 6: IT Infrastructure Services */}
                    <div className="service-card service-card-red">
                      <div className="service-card-image-wrapper">
                        <img src={itInfrastructureImg} alt="IT Infrastructure Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${itInfrastructureImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box red-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                        </div>
                        <h3>IT Infrastructure</h3>
                        <p>Network engineering, modern datacenter design, virtualization, and hybrid work setups.</p>
                      </div>
                    </div>
   
                    {/* Card 7: Managed IT Services */}
                    <div className="service-card service-card-blue">
                      <div className="service-card-image-wrapper">
                        <img src={managedItImg} alt="Managed IT Services" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${managedItImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box blue-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <h3>Managed IT Services</h3>
                        <p>24/7 helpdesk monitoring, asset governance, backup systems, and routine infrastructure health updates.</p>
                      </div>
                    </div>
   
                    {/* Card 8: Support & Maintenance */}
                    <div className="service-card service-card-purple">
                      <div className="service-card-image-wrapper">
                        <img src={supportMaintenanceImg} alt="Support & Maintenance" className="service-card-img" />
                      </div>
                      <div className="service-card-hover-bg" style={{ backgroundImage: `url(${supportMaintenanceImg})` }}></div>
                      <div className="service-card-overlay"></div>
                      <div className="service-card-content">
                        <div className="service-icon-box purple-glow">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        </div>
                        <h3>Support & Maintenance</h3>
                        <p>SLA-backed systems troubleshooting, emergency hotfixes, package updates, and routine checks.</p>
                      </div>
                    </div>

                  </div>
                  
                  {/* Lighter Left/Right Nav Buttons placed down the cards */}
                  <div className="services-carousel-controls">
                    <button className="services-nav-btn prev" aria-label="Previous Services" onClick={() => handleServicesScroll('prev')}>&#8592;</button>
                    <button className="services-nav-btn next" aria-label="Next Services" onClick={() => handleServicesScroll('next')}>&#8594;</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Products & Platforms Section */}
            <section className="products-platforms-section">
              <div className="section-container">
                <div className="unified-products-card">
                  {/* Dynamic background animation glows */}
                  <div className="unified-card-glow-bg"></div>
                  
                  {/* Left Column: Heading and description */}
                  <div className="unified-card-left">
                    <span className="products-subtitle">Accelerate Time-To-Market</span>
                    <h2 className="products-title-gradient">Our Products & Platforms</h2>
                    <p className="products-desc-modern">
                      Ready-to-deploy enterprise platforms configured to accelerate development timelines, 
                      optimize workflows, and slash architectural overhead.
                    </p>
                    <a href="#products" className="view-all-products-link" style={{ color: "black" }}>
                      View All Products & Platforms &rarr;
                    </a>
                  </div>

                  {/* Right Column: Two products list */}
                  <div className="unified-card-right-grid">
                    
                    {/* Product 1: Rennto */}
                    <div className="product-item-inner item-blue rennto-product-card">
                      <div className="product-item-header">
                        <div className="product-item-logo-wrapper">
                          <img src={renntoLogo} alt="Rennto Logo" className="rennto-logo-img" />
                        </div>
                        <div className="product-item-title-desc">
                          <h3>Rennto</h3>
                          <span className="product-tag">Hostel, PG & Space Management</span>
                        </div>
                      </div>
                      <div className="product-item-info">
                        <p>Comprehensive operations platform designed to streamline hostel, PG, and commercial space management. Efficiently handle bookings, automate rent collections, manage room allocations, and simplify operations.</p>
                        
                        {/* Interactive Screenshot Showcase */}
                        <div className="rennto-screenshot-showcase">
                          <div className="rennto-screenshot-viewer">
                            <img 
                              src={renntoScreens[renntoActiveIndex]} 
                              alt={`Rennto Screen ${renntoActiveIndex + 1}`} 
                              className="rennto-active-screen" 
                              onClick={() => setRenntoLightboxImg(renntoScreens[renntoActiveIndex])}
                              style={{ cursor: 'zoom-in' }}
                            />
                            <div className="rennto-nav-overlay">
                              <button 
                                className="rennto-nav-btn prev" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRenntoActiveIndex((prev) => (prev === 0 ? renntoScreens.length - 1 : prev - 1));
                                }}
                              >
                                &#8592;
                              </button>
                              <button 
                                className="rennto-nav-btn next" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRenntoActiveIndex((prev) => (prev === renntoScreens.length - 1 ? 0 : prev + 1));
                                }}
                              >
                                &#8594;
                              </button>
                            </div>
                          </div>
                        </div>
                        

                        <a href="#products" className="view-demo-link text-blue">View App &rarr;</a>
                      </div>
                    </div>

                    {/* Product 2: TX-Hub */}
                    <div className="product-item-inner item-red txhub-product-card">
                      <div className="product-item-header">
                        <div className="product-item-logo-wrapper">
                          <a href="https://txhub.in/" target="_blank" rel="noopener noreferrer">
                            <img src={txhubLogo} alt="TX-Hub Logo" className="rennto-logo-img" />
                          </a>
                        </div>
                        <div className="product-item-title-desc">
                          <h3>
                            <a href="https://txhub.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                              TX-Hub
                            </a>
                          </h3>
                          <span className="product-tag">Training & Internships</span>
                        </div>
                      </div>
                      <div className="product-item-info">
                        <p>Advanced training and internship platform providing structured online courses, industrial placement programs, student-to-mentor allocation, and real-time career tracking tools.</p>
                        
                        {/* Interactive Screenshot Showcase */}
                        <div className="rennto-screenshot-showcase">
                          <div className="txhub-screenshot-viewer">
                            <img 
                              src={txhubScreens[txhubActiveIndex]} 
                              alt={`TX-Hub Screen ${txhubActiveIndex + 1}`} 
                              className="txhub-active-screen" 
                              onClick={() => setRenntoLightboxImg(txhubScreens[txhubActiveIndex])}
                              style={{ cursor: 'zoom-in' }}
                            />
                            <div className="rennto-nav-overlay">
                              <button 
                                className="rennto-nav-btn prev" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setTxhubActiveIndex((prev) => (prev === 0 ? txhubScreens.length - 1 : prev - 1));
                                }}
                              >
                                &#8592;
                              </button>
                              <button 
                                className="rennto-nav-btn next" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setTxhubActiveIndex((prev) => (prev === txhubScreens.length - 1 ? 0 : prev + 1));
                                }}
                              >
                                &#8594;
                              </button>
                            </div>
                          </div>
                          <div className="rennto-thumbnails">
                            {txhubScreens.map((screen, idx) => (
                              <button
                                key={idx}
                                className={`rennto-thumb-btn ${txhubActiveIndex === idx ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setTxhubActiveIndex(idx);
                                }}
                              >
                                <img src={screen} alt={`Thumbnail ${idx + 1}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                        

                        <a href="https://txhub.in/" target="_blank" rel="noopener noreferrer" className="view-demo-link text-red" style={{ color: "black" }}>Visit Website &rarr;</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Directory Solutions & Technology Expertise Showcase */}
            <section className="directory-showcase-section">
              <div className="directory-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                
                {/* Column 1: Solutions We Provide */}
                <motion.div 
                  className="directory-column-card card-blue-theme"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.location.hash = '#solutions'}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.12)' }}
                >
                  <div className="directory-card-glow-bg"></div>
                  <div className="directory-card-header">
                    <div className="directory-card-icon-box blue-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="3" x2="9" y2="21"/>
                      </svg>
                    </div>
                    <h3>Solutions We Provide</h3>
                  </div>
                  <ul className="directory-list">
                    <li><span className="bullet-arrow">&#9656;</span> Digital Transformation</li>
                    <li><span className="bullet-arrow">&#9656;</span> Enterprise Business Solutions</li>
                    <li><span className="bullet-arrow">&#9656;</span> Cloud & Infrastructure</li>
                    <li><span className="bullet-arrow">&#9656;</span> DevOps & Platform Solutions</li>
                    <li><span className="bullet-arrow">&#9656;</span> AI & Data Solutions</li>
                    <li><span className="bullet-arrow">&#9656;</span> Cybersecurity Solutions</li>
                    <li><span className="bullet-arrow">&#9656;</span> Startup & SME Solutions</li>
                  </ul>
                  <a href="#solutions" className="view-all-link-gradient btn-blue-arrow">
                    View All Solutions &rarr;
                  </a>
                </motion.div>

                {/* Column 2: Industries Served */}
                <motion.div 
                  className="directory-column-card card-red-theme"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.location.hash = '#industries'}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.12)' }}
                >
                  <div className="directory-card-glow-bg"></div>
                  <div className="directory-card-header">
                    <div className="directory-card-icon-box red-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h3>Industries Served</h3>
                  </div>
                  <ul className="directory-list">
                    <li><span className="bullet-arrow">&#9656;</span> Banking, BFSI & Insurance</li>
                    <li><span className="bullet-arrow">&#9656;</span> Healthcare & Life Sciences</li>
                    <li><span className="bullet-arrow">&#9656;</span> Retail & E-Commerce</li>
                    <li><span className="bullet-arrow">&#9656;</span> Manufacturing & Industry 4.0</li>
                    <li><span className="bullet-arrow">&#9656;</span> Logistics & Supply Chain</li>
                    <li><span className="bullet-arrow">&#9656;</span> Education & EdTech</li>
                    <li><span className="bullet-arrow">&#9656;</span> Startups & Small Business</li>
                  </ul>
                  <a href="#industries" className="view-all-link-gradient btn-red-arrow">
                    View All Industries &rarr;
                  </a>
                </motion.div>

                {/* Column 3: Technology Expertise */}
                <motion.div 
                  className="directory-column-card card-purple-theme"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.location.hash = '#portfolio-tech'}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.12)' }}
                >
                  <div className="directory-card-glow-bg"></div>
                  <div className="directory-card-header">
                    <div className="directory-card-icon-box purple-grad">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                      </svg>
                    </div>
                    <h3>Technology Expertise</h3>
                  </div>
                  <ul className="directory-list">
                    <li><span className="bullet-arrow">&#9656;</span> Cloud Platforms</li>
                    <li><span className="bullet-arrow">&#9656;</span> Mobile Development</li>
                    <li><span className="bullet-arrow">&#9656;</span> Web Application</li>
                    <li><span className="bullet-arrow">&#9656;</span> Databases</li>
                    <li><span className="bullet-arrow">&#9656;</span> DevOps & Automation</li>
                    <li><span className="bullet-arrow">&#9656;</span> Security</li>
                    <li><span className="bullet-arrow">&#9656;</span> Data Engineering & Analytics</li>
                  </ul>
                  <a href="#portfolio-tech" className="view-all-link-gradient btn-purple-arrow">
                    View All Technologies &rarr;
                  </a>
                </motion.div>
              </div>
            </section>


            {/* Ready to Accelerate Banner & Why Partner With Us Section */}
            <section className="accelerate-banner-section">
              <div className="accelerate-container">
                <div className="accelerate-bg-shape-1"></div>
                <div className="accelerate-bg-shape-2"></div>
                
                {/* Left Side: Copy and Actions */}
                <div className="accelerate-left">
                  <h2>Ready to Accelerate Your<br />Digital Transformation?</h2>
                  <h3 className="accelerate-sub">Let's Build the Future of Your Business Together</h3>
                  
                  <p className="accelerate-p">
                    Whether you're launching a new product, modernizing legacy systems, adopting AI, 
                    migrating to the cloud, or scaling enterprise operations, our experts are ready to 
                    help you achieve your goals with confidence.
                  </p>
                  
                  <p className="accelerate-p">
                    Partner with Tanvox Technologies to unlock innovation, improve efficiency, 
                    strengthen security, and create sustainable business growth through technology.
                  </p>

                  <div className="accelerate-actions">
                    <a href="#contact" className="acc-btn acc-btn-solid">Schedule a Consultation</a>
                    <a href="#proposal" className="acc-btn acc-btn-outline">Request a Proposal</a>
                    <a href="#experts" className="acc-btn acc-btn-outline">Speak With Our Experts</a>
                    <a href="#journey" className="acc-btn acc-btn-outline">Start Your Digital Journey</a>
                  </div>
                </div>

                {/* Right Side: Partnership details (White Card) */}
                <div className="accelerate-right">
                  <h3>Why Partner With Us?</h3>
                  
                  <ul className="partner-list-modern">
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Strategic Technology Consulting</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Enterprise Software Development</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>AI & Automation Solutions</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Cloud & DevOps Excellence</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Cybersecurity & Compliance</span>
                    </li>
                    <li>
                      <span className="check-circle-blue">&#10003;</span>
                      <span>Dedicated Support & Managed Services</span>
                    </li>
                  </ul>

                  <div className="partner-detail-card">
                    <div className="partner-card-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="partner-card-info">
                      <h4>Trusted by Businesses Seeking Innovation and Growth</h4>
                      <p>From startups to large enterprises, organizations rely on Tanvox Technologies to deliver scalable, secure, and future-ready digital solutions.</p>
                    </div>
                  </div>

                  <div className="partner-detail-card">
                    <div className="partner-card-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="partner-card-info">
                      <h4>Free Initial Consultation</h4>
                      <p>Discuss your business challenges, technology goals, and transformation roadmap with our specialists. No obligation. Just expert guidance.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Stay Ahead of Technology Trends Newsletter Section */}
            <section className="stay-ahead-newsletter-section">
              <div className="newsletter-bg-orb-1"></div>
              <div className="newsletter-bg-orb-2"></div>
              <div className="stay-ahead-container">
                
                {/* Left Side: Copy & Info */}
                <div className="stay-ahead-left">
                  <h2>Stay Ahead of Technology Trends</h2>
                  <h3>Subscribe to Our Insights & Innovation Newsletter</h3>
                  <p>
                    Receive exclusive updates, industry insights, technology trends, AI innovations, 
                    cybersecurity advisories, cloud best practices, and digital transformation strategies 
                    directly in your inbox.
                  </p>

                  <div className="newsletter-features">
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                      <span>Technology Insights</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                      </svg>
                      <span>AI & Emerging Updates</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <span>Reports & Whitepapers</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                      <span>Product Announcements</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Expert Webinars & Events</span>
                    </div>
                    <div className="newsletter-feature-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span>Cybersecurity Alerts</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form Block */}
                <div className="stay-ahead-right">
                  <div className="form-card-modern">
                    <form className="modern-newsletter-form" onSubmit={handleSubscribe}>
                      <div className="input-group-plane">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          required
                          className="modern-newsletter-input"
                          value={subscriberEmail}
                          onChange={(e) => setSubscriberEmail(e.target.value)}
                          disabled={isSubscribing}
                        />
                        
                        {/* Paper plane icon */}
                        <svg className="plane-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#2563EB" strokeWidth="1.5">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="acc-btn acc-btn-solid subscribe-btn-modern"
                        disabled={isSubscribing}
                      >
                        {isSubscribing ? "Subscribing..." : "Subscribe Now"}
                      </button>
                    </form>
                    <p className="form-caption">
                      Join thousands of business leaders, innovators, and technology professionals 
                      staying informed about the future of digital transformation.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Custom Cursor */}
     {window.innerWidth > 768 && <Cursor />}

      {/* Premium Navigation Header */}
      <Header />

      {/* Dynamic Content Routing */}
      {renderContent()}

      {/* Global Footer */}
      <Footer />

      {/* Rennto Screenshot Lightbox Modal */}
      {renntoLightboxImg && (
        <div className="rennto-lightbox-overlay" onClick={() => setRenntoLightboxImg(null)}>
          <div className="rennto-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="rennto-lightbox-close" onClick={() => setRenntoLightboxImg(null)}>&times;</button>
            <img src={renntoLightboxImg} alt="Enlarged Rennto Screenshot" className="rennto-lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
