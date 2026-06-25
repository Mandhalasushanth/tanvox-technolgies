import React, { useEffect, useState, useMemo } from "react";
import "./industries.css";
import FallingText from "../../components/common/FallingText/FallingText";
import IndustryHeroInteractive from "./IndustryHeroInteractive";

import {
  overviewIcons,
  detailedIndustries,
  crossIndustryCapabilities,
  whyChooseUsData,
  engagementProcess,
  successMetrics,
} from "./industriesData";

export default function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndustry, setActiveIndustry] = useState(null);
  const [closingFlip, setClosingFlip] = useState(false);
  const trackDuration = useMemo(() => {
    const CARD_WIDTH = 270; // 250 card + 20 gap
    const SPEED_PX_PER_SEC = 55;

    return (detailedIndustries.length * CARD_WIDTH) / SPEED_PX_PER_SEC;
  }, []);

  const handleCloseFlip = () => {
    setClosingFlip(true);
    setTimeout(() => {
      setActiveIndustry(null);
      setClosingFlip(false);
    }, 500); // matches CSS close animation duration
  };

  return (
    <div className="industries-page-wrapper">
      {/* 1. HERO SECTION */}
<section className="ind-hero" id="ind-hero">
  <div className="ind-container ind-hero-grid">

    <div className="ind-hero-content">

      <span className="ind-section-tag">
        INDUSTRIES WE SERVE
      </span>

      <h1 className="ind-section-title">
        Industry-Specific Solutions
        <br />
        That <span className="highlighted-gradient">
          Drive Business Success
        </span>
      </h1>

      <div className="hero-line"></div>

      <p className="ind-section-desc">
        Empowering organizations across diverse industries with innovative
        technology solutions, digital transformation strategies, and
        intelligent automation that drive measurable growth and
        operational excellence.
      </p>

      <p className="ind-section-desc">
        At Tanvox Technologies, we understand that every industry has
        unique challenges, compliance requirements, operational
        complexities, and customer expectations. Our tailored solutions
        combine industry expertise, cloud technologies, AI-driven
        innovation, cybersecurity, and business process optimization to
        help organizations modernize operations, enhance efficiency, and
        achieve sustainable success.
      </p>

      <div className="ind-hero-buttons">
        <a href="#expertise" onClick={(e) => { e.preventDefault(); document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-gradient">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="16"></line><line x1="15" y1="22" x2="15" y2="16"></line><line x1="9" y1="16" x2="15" y2="16"></line><path d="M9 6h6M9 10h6"></path></svg>
          Explore Industries
        </a>

        <a href="#contact" className="btn-white">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle', stroke: '#ec008c'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Schedule a Consultation
        </a>
      </div>

    </div>

    <div className="ind-hero-image">
      <IndustryHeroInteractive />
    </div>

  </div>
</section>

      {/* 2. OVERVIEW SECTION */}
      <section className="ind-section ind-overview">
        <div className="ind-container ind-overview-grid">
          <div className="ind-overview-text">
            <span className="ind-section-tag">
              INDUSTRIES OVERVIEW
            </span>
            <h2
              className="ind-section-title"
              style={{ fontSize: "1.8rem", marginBottom: "1rem" }}
            >
              Delivering Technology Solutions Across Diverse Industries
            </h2>
            <p className="ind-section-desc">
              Our team collaborates closely with organizations across multiple
              sectors to develop customized solutions that address
              industry-specific challenges and unlock new growth opportunities.
            </p>
          </div>
          <div className="ind-simple-icons-grid">
            {overviewIcons.map((item, index) => (
              <div key={index} className="ind-simple-icon">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED CARDS SECTION */}
      <section className="ind-detailed-cards" id="solutions">
        <div className="ind-container">
          <div className="ind-cards-grid">
            <div
              className={`ind-cards-track ${
                activeIndustry ? "ind-cards-track-paused" : ""
              }`}
              style={{ animationDuration: `${trackDuration}s` }}
            >
              {[...detailedIndustries, ...detailedIndustries].map(
                (ind, idx) => (
                  <div
                    key={`${ind.id}-${idx}`}
                    className="ind-card"
                    onClick={() => setActiveIndustry(ind)}
                  >
                    <div className="ind-card-icon" style={{ color: ind.color }}>
                      {ind.icon}
                    </div>

                    <h3 className="ind-card-title">{ind.title}</h3>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CROSS-INDUSTRY CAPABILITIES */}
      <section className="ind-cross-capabilities" id="expertise">
        <div className="ind-container">
          <span className="ind-section-tag">
            CROSS-INDUSTRY CAPABILITIES
          </span>
          <h2
            className="ind-section-title"
            style={{ fontSize: "1.8rem", marginBottom: "2rem" }}
          >
            Technology Expertise Across All Industries
          </h2>
          <div className="ind-cross-grid">
            {crossIndustryCapabilities.map((cap, index) => (
              <div key={index} className="ind-cross-card">
                <div className="ind-cross-header">
                  <div className="ind-card-icon-wrapper">
                    {cap.icon}
                  </div>
                  <h3>{cap.title}</h3>
                </div>
                <ul className="ind-card-bullets">
                  {cap.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="ind-why-choose">
        <div className="ind-container">
          <h2 className="ind-section-title" style={{ marginBottom: "2rem", textAlign: "center", width: "100%" }}>
            Why Industry Leaders Choose Tanvox Technologies
          </h2>
          <div className="ind-why-grid">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="ind-why-card">
                <div className="ind-card-icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT PROCESS */}
      <section className="ind-process">
        <div className="ind-container">
          <h2 className="ind-section-title" style={{ marginBottom: "2rem", textAlign: "center", width: "100%" }}>
            Our Industry Engagement Process
          </h2>
          <div className="ind-process-flow">
            {engagementProcess.map((step, index) => (
              <React.Fragment key={index}>
                <div className="ind-process-step">
                  <div className="ind-process-icon-wrap">{step.icon}</div>
                  <span>{step.title}</span>
                </div>
                {index < engagementProcess.length - 1 && (
                  <div className="ind-process-arrow">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS METRICS */}
      <section className="ind-metrics">
        <div className="ind-container">
          <span className="ind-section-tag">
            SUCCESS METRICS
          </span>
          <h2
            className="ind-section-title"
            style={{ fontSize: "1.8rem", marginBottom: "2rem" }}
          >
            Delivering Measurable Business Outcomes
          </h2>
          <div className="ind-metrics-grid">
            {successMetrics.map((metric, index) => (
              <div key={index} className="ind-metric-item">
                {metric.icon}
                <div className="ind-metric-text">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="ind-bottom-cta">
        <div className="ind-container">
          <div
            className="ind-cta-container"
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <div
              className="ind-cta-text"
              style={{
                marginBottom: "2rem",
                maxWidth: "800px",
                margin: "0 auto 2rem auto",
              }}
            >
              <h2>READY TO TRANSFORM YOUR INDUSTRY OPERATIONS?</h2>
              <p style={{ marginBottom: "1rem" }}>
                Partner with Tanvox Technologies to implement innovative,
                industry-specific solutions that improve efficiency, accelerate
                growth, strengthen security, and drive digital transformation.
              </p>
              <p>
                Whether you're a startup, SME, enterprise, healthcare provider,
                financial institution, educational organization, manufacturer,
                or government agency, our experts are ready to help you achieve
                your business goals.
              </p>
            </div>
            <div
              className="ind-cta-buttons"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a href="#contact" className="ind-btn-solid-blue">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE-FLIP MODAL */}
      {activeIndustry && (
        <div
          className={`ind-flip-overlay ${closingFlip ? "ind-flip-overlay-closing" : ""}`}
          onClick={handleCloseFlip}
        >
          <div className="ind-flip-book" onClick={(e) => e.stopPropagation()}>
            {/* Back page (The Navy Cover) - Sits on top and flips open */}
            <div
              className={`ind-flip-page ind-flip-page-back ${closingFlip ? "ind-flip-closing" : ""}`}
            >
              <div className="ind-flip-page-content">
                <span className="ind-flip-tag">Industry Solution</span>
                <h2>{activeIndustry.title}</h2>
              </div>
            </div>

            {/* Front page (The White Content) - Sits underneath and is revealed */}
            <div className="ind-flip-page ind-flip-page-front">
              <button className="ind-flip-close" onClick={handleCloseFlip}>
                ✕
              </button>
              <div className="ind-flip-page-content">
                <span className="ind-flip-tag">{activeIndustry.title}</span>
                <h2>{activeIndustry.subtitle}</h2>
                <p>{activeIndustry.desc}</p>

                <h4>Solutions</h4>
                <ul className="ind-flip-list">
                  {activeIndustry.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <h4>Benefits</h4>
                <ul className="ind-flip-list ind-flip-benefits">
                  {activeIndustry.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <a href="#contact" className="ind-flip-cta">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
