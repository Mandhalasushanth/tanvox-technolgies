//

import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";

const portfolioItems = [
  {
    title: "Projects",
    desc: "Explore our successful projects across industries.",
    path: "#portfolio-projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: "#100f0f",
  },
  {
    title: "Case Studies",
    desc: "In-depth analyses of challenges and solutions.",
    path: "#portfolio-cases",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    color: "#EC4899",
  },
  {
    title: "Technologies",
    desc: "Advanced technologies we use to deliver excellence.",
    path: "#portfolio-tech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Testimonials",
    desc: "Trusted by businesses worldwide.",
    path: "#portfolio-testimonials",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#3B82F6",
  },
];

const collaborationItems = [
  {
    title: "Technology Partners",
    desc: "Partnering with leading technology providers.",
    path: "#collab-tech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    title: "Business Partners",
    desc: "Building strong relationships for mutual growth.",
    path: "#collab-business",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Strategic Alliances",
    desc: "Alliances that drive innovation and value.",
    path: "#collab-strategic",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#8B5CF6",
  },
  {
    title: "Become a Partner",
    desc: "Join our partner program and grow with us.",
    path: "#collab-join",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    color: "#EF4444",
  },
];

const menuItems = [
  {
    title: "Careers",
    desc: "Join our team of technology builders.",
    path: "#menu-careers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: "#8B5CF6",
  },
  {
    title: "Support",
    desc: "Get 24/7 technical assistance.",
    path: "#menu-support",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    title: "Resources",
    desc: "Access guides, tools, and documentation.",
    path: "#menu-resources",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Blog & Insights",
    desc: "Stay updated with technology trends.",
    path: "#menu-blog",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    title: "Whitepapers",
    desc: "In-depth research and technical briefs.",
    path: "#menu-whitepapers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "#EF4444",
  },
  {
    title: "Webinars",
    desc: "Watch technical panels and event recordings.",
    path: "#menu-webinars",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    color: "#EC4899",
  },
];

const moreItems = [
  {
    title: "Services",
    desc: "Explore our technology capabilities and offerings.",
    path: "#services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    title: "Solutions",
    desc: "Targeted tech solutions for enterprise problems.",
    path: "#solutions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Industries",
    desc: "Tailored technology across sectors.",
    path: "#industries",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#FF1E3C",
  },
];

const navigationData = [
  { id: "about", label: "About Us", path: "#about" },
  { id: "more", label: "Discover", path: "#more", hasSimpleDropdown: true },
  {
    id: "portfolio",
    label: "Portfolio",
    path: "#portfolio",
    hasMegaMenu: true,
  },
  {
    id: "collaboration",
    label: "Collaboration",
    path: "#collaboration",
    hasMegaMenu: true,
  },
  { id: "menu", label: "Explore", path: "#menu", hasSimpleDropdown: true },
  { id: "contact", label: "Contact Us", path: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [activeDropdown, setActiveDropdown] = useState(null); // 'portfolio', 'collaboration', 'menu'
  const [expandedMobileAccordions, setExpandedMobileAccordions] = useState({});

  const headerRef = useRef(null);
  const hoverTimeoutRef = useRef({});
  const dropdownRefs = useRef({});

  // 1. Throttled scroll listener using requestAnimationFrame
  useEffect(() => {
    let scrollScheduled = false;

    const handleScroll = () => {
      if (scrollScheduled) return;

      scrollScheduled = true;
      requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
        scrollScheduled = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Body scroll locking when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [mobileMenuOpen]);

  // 3. Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // 4. Desktop Hover Delay Handlers
  const handleMouseEnter = (id) => {
    if (hoverTimeoutRef.current[id]) {
      clearTimeout(hoverTimeoutRef.current[id]);
      delete hoverTimeoutRef.current[id];
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = (id) => {
    hoverTimeoutRef.current[id] = setTimeout(() => {
      setActiveDropdown((prev) => (prev === id ? null : prev));
      delete hoverTimeoutRef.current[id];
    }, 200);
  };

  // 5. Mobile Accordion Toggle
  const toggleMobileAccordion = (id) => {
    setExpandedMobileAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 6. Keyboard Accessibility Helpers
  const handleKeyDown = (e, item) => {
    switch (e.key) {
      case "Escape":
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        e.preventDefault();
        break;

      case "ArrowDown":
        if (item.hasMegaMenu || item.hasSimpleDropdown) {
          if (activeDropdown !== item.id) {
            setActiveDropdown(item.id);
          } else {
            // Focus first item
            const targetId = item.hasMegaMenu ? "portfolio-0" : "menu-0";
            const firstLink = dropdownRefs.current[targetId];
            if (firstLink) firstLink.focus();
          }
          e.preventDefault();
        }
        break;

      case "Space":
      case "Enter":
        if (item.hasMegaMenu || item.hasSimpleDropdown) {
          setActiveDropdown(activeDropdown === item.id ? null : item.id);
          e.preventDefault();
        } else {
          setActiveTab(item.id);
        }
        break;

      default:
        break;
    }
  };

  const handleDropdownItemKeyDown = (e, parentId, index, totalItems) => {
    switch (e.key) {
      case "Escape": {
        setActiveDropdown(null);
        const parentBtn = dropdownRefs.current[`trigger-${parentId}`];
        if (parentBtn) parentBtn.focus();
        e.preventDefault();
        break;
      }

      case "ArrowDown": {
        const nextIdx = (index + 1) % totalItems;
        const nextLink = dropdownRefs.current[`${parentId}-${nextIdx}`];
        if (nextLink) nextLink.focus();
        e.preventDefault();
        break;
      }

      case "ArrowUp": {
        const prevIdx = (index - 1 + totalItems) % totalItems;
        const prevLink = dropdownRefs.current[`${parentId}-${prevIdx}`];
        if (prevLink) prevLink.focus();
        e.preventDefault();
        break;
      }

      default:
        break;
    }
  };

  return (
    <header
      className={`header-wrapper ${scrolled ? "scrolled" : ""}`}
      ref={headerRef}
      role="banner"
    >
      <div className="header-container">
        {/* Compact Luxury Logo Lockup Wrapper */}
        <div className="logo-section">
          <a
            href="#home"
            className="logo-container"
            onClick={() => {
              setActiveTab("home");
              window.location.hash = "#home";
            }}
            aria-label="Tanvox Technologies Home"
          >
            {/* Crop the original logo.png to only display the custom mark */}
            <div className="logo-mark">
              <img src={logo} alt="Tanvox Mark" className="logo-mark-img" />
            </div>
            {/* The editable text branding */}
            <div className="logo-text-group">
              <span className="logo-text-main">Tanvox</span>
              <span className="logo-text-sub">TECHNOLOGIES</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Section */}
        <div className="nav-section">
          <nav
            className="desktop-nav"
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="nav-list">
              {navigationData.filter(item => item.id !== "contact").map((item) => {
                const isMega = item.hasMegaMenu;
                const isSimple = item.hasSimpleDropdown;
                const hasSub = isMega || isSimple;

                return (
                  <li
                    key={item.id}
                    className={`nav-item ${activeDropdown === item.id ? "is-active" : ""} nav-item-${item.id}`}
                    onMouseEnter={() =>
                      !hasSub ? null : handleMouseEnter(item.id)
                    }
                    onMouseLeave={() =>
                      !hasSub ? null : handleMouseLeave(item.id)
                    }
                  >
                    {hasSub ? (
                      <>
                        <button
                          ref={(el) =>
                            (dropdownRefs.current[`trigger-${item.id}`] = el)
                          }
                          className={`nav-link ${activeTab === item.id ? "active-link" : ""}`}
                          aria-haspopup="true"
                          aria-expanded={
                            activeDropdown === item.id ? "true" : "false"
                          }
                          onKeyDown={(e) => handleKeyDown(e, item)}
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.id ? null : item.id,
                            )
                          }
                        >
                          {item.label}
                          <svg className="nav-arrow-icon" viewBox="0 0 10 6">
                            <path d="M1 1L5 5L9 1" />
                          </svg>
                        </button>

                        {/* Mega Menu Dropdown */}
                        {isMega && (
                          <div
                            className="mega-menu-panel"
                            role="menu"
                            aria-label={`${item.label} mega menu`}
                          >
                            <div
                              className={`mega-menu-grid ${item.id === "portfolio" ? "portfolio-grid" : "collaboration-grid"}`}
                            >
                              {/* Left Column: Portfolio */}
                              {item.id === "portfolio" && (
                                <div className="mega-menu-column">
                                  <div className="mega-column-header">
                                    <svg
                                      className="mega-header-icon"
                                      viewBox="0 0 24 24"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                    >
                                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                      <polyline points="2 17 12 22 22 17" />
                                    </svg>
                                    <h3>PORTFOLIO</h3>
                                  </div>
                                  <div className="mega-links-list">
                                    {portfolioItems.map((sub, index) => (
                                      <a
                                        key={sub.title}
                                        href={sub.path}
                                        ref={(el) =>
                                          (dropdownRefs.current[
                                            `portfolio-${index}`
                                          ] = el)
                                        }
                                        className="mega-item-link"
                                        style={{
                                          "--item-color": sub.color,
                                          "--item-color-light": `${sub.color}15`,
                                        }}
                                        role="menuitem"
                                        onKeyDown={(e) =>
                                          handleDropdownItemKeyDown(
                                            e,
                                            "portfolio",
                                            index,
                                            portfolioItems.length,
                                          )
                                        }
                                        onClick={() => {
                                          setActiveTab("portfolio");
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        <div className="mega-item-icon-wrapper dynamic-theme">
                                          {sub.icon}
                                        </div>
                                        <div className="mega-item-text">
                                          <span className="mega-item-title">
                                            {sub.title}{" "}
                                            <span className="arrow-hover">
                                              →
                                            </span>
                                          </span>
                                          <span className="mega-item-desc">
                                            {sub.desc}
                                          </span>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Center Column: Collaboration */}
                              {item.id === "collaboration" && (
                                <div className="mega-menu-column">
                                  <div className="mega-column-header">
                                    <svg
                                      className="mega-header-icon"
                                      viewBox="0 0 24 24"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                    >
                                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <h3>COLLABORATION</h3>
                                  </div>
                                  <div className="mega-links-list">
                                    {collaborationItems.map((sub, index) => (
                                      <a
                                        key={sub.title}
                                        href={sub.path}
                                        ref={(el) =>
                                          (dropdownRefs.current[
                                            `collaboration-${index}`
                                          ] = el)
                                        }
                                        className="mega-item-link"
                                        style={{
                                          "--item-color": sub.color,
                                          "--item-color-light": `${sub.color}15`,
                                        }}
                                        role="menuitem"
                                        onKeyDown={(e) =>
                                          handleDropdownItemKeyDown(
                                            e,
                                            "collaboration",
                                            index,
                                            collaborationItems.length,
                                          )
                                        }
                                        onClick={() => {
                                          setActiveTab("collaboration");
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        <div className="mega-item-icon-wrapper dynamic-theme">
                                          {sub.icon}
                                        </div>
                                        <div className="mega-item-text">
                                          <span className="mega-item-title">
                                            {sub.title}{" "}
                                            <span className="arrow-hover">
                                              →
                                            </span>
                                          </span>
                                          <span className="mega-item-desc">
                                            {sub.desc}
                                          </span>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Right Column: Promotional Card */}
                              <div className="mega-promo-card">
                                <div className="promo-card-glow-1"></div>
                                <div className="promo-card-glow-2"></div>
                                <div className="promo-card-content">
                                  <div className="promo-sparkle-icon">
                                    <svg
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                      fill="currentColor"
                                    >
                                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                                    </svg>
                                  </div>
                                  <h4>
                                    Let's Build Something Great{" "}
                                    <span className="highlight-text">
                                      Together
                                    </span>
                                  </h4>
                                  <p>
                                    Partner with Tanvox Technologies and unlock
                                    new opportunities for your business.
                                  </p>
                                  <a
                                    href="#partner"
                                    className="promo-cta-btn"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    Partner With Us
                                    <svg
                                      className="btn-arrow"
                                      viewBox="0 0 16 16"
                                      width="14"
                                      height="14"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                    >
                                      <path d="M2 8H14M14 8L9 3M14 8L9 13" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Simple Dropdown */}
                        {isSimple && (
                          <div
                            className="simple-dropdown"
                            role="menu"
                            aria-label={`${item.label} dropdown`}
                          >
                            {(item.id === "more" ? moreItems : menuItems).map(
                              (sub, index) => (
                                <a
                                  key={sub.title}
                                  href={sub.path}
                                  ref={(el) =>
                                    (dropdownRefs.current[
                                      `${item.id}-${index}`
                                    ] = el)
                                  }
                                  className="simple-dropdown-link"
                                  role="menuitem"
                                  onKeyDown={(e) =>
                                    handleDropdownItemKeyDown(
                                      e,
                                      item.id,
                                      index,
                                      (item.id === "more"
                                        ? moreItems
                                        : menuItems
                                      ).length,
                                    )
                                  }
                                  onClick={() => {
                                    setActiveTab(
                                      item.id === "more"
                                        ? sub.title.toLowerCase()
                                        : "menu",
                                    );
                                    setActiveDropdown(null);
                                  }}
                                >
                                  <div
                                    className="mega-item-icon-wrapper"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      borderRadius: "10px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                      transition: "all 0.3s ease",
                                      backgroundColor: `${sub.color}15`,
                                      color: sub.color,
                                    }}
                                  >
                                    {sub.icon}
                                  </div>
                                  <div
                                    className="mega-item-text"
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      textAlign: "left",
                                    }}
                                  >
                                    <span
                                      className="mega-item-title"
                                      style={{
                                        fontSize: "0.88rem",
                                        fontWeight: 700,
                                        color: "var(--color-text-primary)",
                                      }}
                                    >
                                      {sub.title}{" "}
                                      <span className="arrow-hover">→</span>
                                    </span>
                                    <span
                                      className="mega-item-desc"
                                      style={{
                                        fontSize: "0.72rem",
                                        color: "var(--color-text-secondary)",
                                        marginTop: "2px",
                                        lineHeight: "1.3",
                                      }}
                                    >
                                      {sub.desc}
                                    </span>
                                  </div>
                                </a>
                              ),
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className={`nav-link ${activeTab === item.id ? "active-link" : ""}`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* CTA Contact Us Button Section */}
        <div className="cta-section">
          <a
            href="#contact"
            className="cta-button"
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
            <div className="cta-arrow-circle">
              <svg
                viewBox="0 0 16 16"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="btn-arrow"
              >
                <path d="M2 8H14M14 8L9 3M14 8L9 13" />
              </svg>
            </div>
          </a>

          {/* Hamburger toggle */}
          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <div className="hamburger-icon">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-nav-container">
          <ul className="mobile-nav-list">
            {navigationData.map((item) => {
              const isMega = item.hasMegaMenu;
              const isSimple = item.hasSimpleDropdown;
              const hasSub = isMega || isSimple;

              return (
                <li key={item.id} className="mobile-nav-item">
                  {hasSub ? (
                    <>
                      <button
                        className={`mobile-nav-link-btn ${activeTab === item.id ? "active-link" : ""} ${expandedMobileAccordions[item.id] ? "is-expanded" : ""}`}
                        onClick={() => toggleMobileAccordion(item.id)}
                        aria-expanded={
                          expandedMobileAccordions[item.id] ? "true" : "false"
                        }
                      >
                        {item.label}
                        <svg className="mobile-arrow-icon" viewBox="0 0 12 8">
                          <path d="M1 1L6 6L11 1" />
                        </svg>
                      </button>

                      {/* Accordion Lists */}
                      <div
                        className={`mobile-accordion-content ${expandedMobileAccordions[item.id] ? "is-expanded" : ""}`}
                      >
                        {isMega && (
                          <>
                            {item.id === "portfolio" && portfolioItems.map((sub) => (
                              <a
                                key={sub.title}
                                href={sub.path}
                                className="mobile-dropdown-link"
                                onClick={() => {
                                  setActiveTab("portfolio");
                                  setMobileMenuOpen(false);
                                }}
                              >
                                <div className="mobile-dropdown-title">
                                  {sub.title}
                                </div>
                              </a>
                            ))}
                            {item.id === "collaboration" && collaborationItems.map((sub) => (
                              <a
                                key={sub.title}
                                href={sub.path}
                                className="mobile-dropdown-link"
                                onClick={() => {
                                  setActiveTab("collaboration");
                                  setMobileMenuOpen(false);
                                }}
                              >
                                <div className="mobile-dropdown-title">
                                  {sub.title}
                                </div>
                              </a>
                            ))}
                          </>
                        )}
                        {isSimple &&
                          (item.id === "more" ? moreItems : menuItems).map(
                            (sub) => (
                              <a
                                key={sub.title}
                                href={sub.path}
                                className="mobile-dropdown-link"
                                onClick={() => {
                                  setActiveTab(
                                    item.id === "more"
                                      ? sub.title.toLowerCase()
                                      : "menu",
                                  );
                                  setMobileMenuOpen(false);
                                }}
                              >
                                <div className="mobile-dropdown-title">
                                  {sub.title}
                                </div>
                              </a>
                            ),
                          )}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className={`mobile-nav-link-btn ${activeTab === item.id ? "active-link" : ""}`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
