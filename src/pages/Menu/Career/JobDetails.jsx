import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { allJobsData } from "./JobData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./JobDetails.css";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Inline SVGs for Section Cards
const SummaryIcon = () => (
  <svg
    className="section-title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ResponsibilitiesIcon = () => (
  <svg
    className="section-title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const SkillsIcon = () => (
  <svg
    className="section-title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const PreferredIcon = () => (
  <svg
    className="section-title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BenefitsIcon = () => (
  <svg
    className="section-title-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Abstract SaaS Illustration in Hero
const HeroIllustration = () => (
  <svg
    className="hero-illustration-svg"
    viewBox="0 0 400 400"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="illustration-grad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="glow-circle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
      </linearGradient>
      <filter id="mesh-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="20" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <circle
      cx="200"
      cy="200"
      r="140"
      fill="url(#glow-circle)"
      filter="url(#mesh-glow)"
    />
    <circle
      cx="200"
      cy="200"
      r="170"
      stroke="url(#illustration-grad)"
      strokeWidth="1"
      strokeDasharray="6 12"
      className="rotating-ring-1"
    />
    <circle
      cx="200"
      cy="200"
      r="130"
      stroke="url(#illustration-grad)"
      strokeWidth="1.5"
      strokeDasharray="18 8"
      className="rotating-ring-2"
    />
    <circle
      cx="200"
      cy="200"
      r="90"
      stroke="url(#illustration-grad)"
      strokeWidth="2.5"
      className="rotating-ring-3"
    />

    <g className="illust-node inode-1">
      <rect
        x="65"
        y="65"
        width="44"
        height="44"
        rx="12"
        fill="#FFFFFF"
        stroke="#2563EB"
        strokeWidth="2.5"
      />
      <path
        d="M80 87h14M87 80v14"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>

    <g className="illust-node inode-2">
      <rect
        x="290"
        y="95"
        width="46"
        height="46"
        rx="14"
        fill="#FFFFFF"
        stroke="#7C3AED"
        strokeWidth="2.5"
      />
      <circle cx="313" cy="118" r="7" stroke="#7C3AED" strokeWidth="2.5" />
    </g>

    <g className="illust-node inode-3">
      <rect
        x="95"
        y="275"
        width="38"
        height="38"
        rx="10"
        fill="#FFFFFF"
        stroke="#EC4899"
        strokeWidth="2.5"
      />
      <path
        d="M109 294l5-5 5 5"
        stroke="#EC4899"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <g className="illust-node inode-4">
      <rect
        x="255"
        y="255"
        width="54"
        height="54"
        rx="16"
        fill="#FFFFFF"
        stroke="url(#illustration-grad)"
        strokeWidth="2.5"
      />
      <circle cx="272" cy="282" r="3" fill="#2563EB" />
      <circle cx="282" cy="282" r="3" fill="#7C3AED" />
      <circle cx="292" cy="282" r="3" fill="#EC4899" />
    </g>

    <line
      x1="87"
      y1="109"
      x2="114"
      y2="275"
      stroke="#E2E8F0"
      strokeWidth="1.2"
      strokeDasharray="4 4"
    />
    <line
      x1="313"
      y1="141"
      x2="282"
      y2="255"
      stroke="#E2E8F0"
      strokeWidth="1.2"
      strokeDasharray="4 4"
    />
    <line
      x1="109"
      y1="87"
      x2="290"
      y2="118"
      stroke="#E2E8F0"
      strokeWidth="1.2"
      strokeDasharray="4 4"
    />
  </svg>
);

const JobDetails = ({ currentHash }) => {
  const { jobId: routeJobId } = useParams();
  const hash = currentHash || window.location.hash || "";
  const hashJobId = hash.replace('#careers/', '').replace('#menu-careers/', '');
  const jobId = routeJobId || hashJobId;
  const job = allJobsData.find((j) => j.id.toString() === jobId);

  // Form states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    passedYear: "",
    resumeLink: "",
  });

  const fileInputRef = useRef(null);

  // DOM elements refs
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);
  const whyJoinRef = useRef(null);
  const processRef = useRef(null);
  const bottomCtaRef = useRef(null);

  // Scroll to application form helper
  const scrollToForm = () => {
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Trigger file selection via custom UI
  const handleUploadClick = () => {
    scrollToForm();
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }, 350);
  };

  // Copy job link functionality
  const handleShareJob = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Salary range lookup based on job ID
  const getSalaryRange = (id) => {
    const salaryRanges = {
      "fullstack-eng": "₹12,00,000 - " + "₹22,00,000 LPA",
      "mern-eng": "₹10,00,000 - " + "₹18,00,000 LPA",
      "cloud-eng": "₹15,00,000 - " + "₹26,00,000 LPA",
      "devops-eng": "₹10,00,000 - " + "₹18,00,000 LPA",
      "qa-eng": "₹6,00,000 - " + "₹12,00,000 LPA",
      "sec-spec": "₹11,00,000 - " + "₹20,00,000 LPA",
      "ai-ml-eng": "₹14,00,000 - " + "₹25,00,000 LPA",
      "data-analyst": "₹5,00,000 - " + "₹10,00,000 LPA",
      "product-designer": "₹10,00,000 - " + "₹18,00,000 LPA",
    };
    return salaryRanges[id] || "Competitive";
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

await fetch(
  "https://script.google.com/macros/s/AKfycbxGr1b6YPVeGXVJgDpDuPhtfmN8xpE4PPdSrV5HzB-uDHHQV7mLPCgFjgcc3DxkjzWK/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      passedYear: formData.passedYear,
      resumeLink: formData.resumeLink,
      position: job.title,
    }),
  }
);

alert("Application Submitted Successfully");


    setFormData({
      fullName: "",
      email: "",
      passedYear: "",
      resumeLink: "",
    });
  } catch (error) {
    console.error(error);
    alert("Submission Failed");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  if (!job) {
    return (
      <div className="jd-new-not-found">
        <div className="not-found-card-wrapper">
          <div className="not-found-icon">&#9888;</div>
          <h2>Job Opportunity Not Active</h2>
          <p>
            We're sorry, but the vacancy you requested is no longer accepting
            submissions or has been archived.
          </p>
          <Link to="/#menu-careers" className="jd-btn-back-home">
            Return to Career Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jd-new-page-wrapper">
      {/* Back Navigation Bar */}
      <div className="jd-new-back-bar">
        <div className="jd-new-container">
          <Link to="/#menu-careers" className="jd-new-back-link">
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
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="jd-new-hero-banner">
        <div className="jd-new-container jd-new-hero-grid">
          <div className="jd-new-hero-left">
            <h1 className="jd-new-job-title">{job.title}</h1>

            <div className="jd-new-meta-row">
              <span className="jd-new-meta-item">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {job.location}
              </span>
              <span className="jd-new-meta-item">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                {job.experience} Exp
              </span>
              <span className="jd-new-meta-item">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {job.employmentType}
              </span>
              <span className="jd-new-meta-item mode-chip">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {job.workMode}
              </span>
            </div>

            <div className="jd-new-hero-actions">
              <button className="jd-new-primary-btn" onClick={scrollToForm}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main 70/30 Grid Layout */}
      <main className="jd-new-main-content" ref={mainContentRef}>
        <div className="jd-new-container jd-new-body-grid">
          {/* Left Column: Job Details */}
          <div className="jd-new-content-column">
            {/* Job Summary Card */}
            <article className="jd-new-card jd-new-card-full">
              <h2 className="jd-new-card-title">
                <span>Job Summary</span>
              </h2>
              <div className="jd-new-card-body">
                <p>{job.summary || job.desc}</p>
              </div>
            </article>

            {/* Key Responsibilities Card */}
            <article className="jd-new-card jd-new-card-full">
              <h2 className="jd-new-card-title">
                <span>Key Responsibilities</span>
              </h2>
              <div className="jd-new-card-body">
                <ul className="jd-new-list">
                  {job.responsibilities?.map((item, idx) => (
                    <li key={idx}>
                      <span className="jd-new-list-check">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Required Skills Card */}
            <article className="jd-new-card jd-new-card-full">
              <h2 className="jd-new-card-title">
                <span>Required Skills & Qualification</span>
              </h2>
              <div className="jd-new-card-body">
                <div className="jd-new-chips-container">
                  {job.requiredSkills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="jd-new-skill-chip required-skill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Preferred Skills Card */}
            <article className="jd-new-card jd-new-card-full">
              <h2 className="jd-new-card-title">
                <span>Good to Have (Preferred Skills)</span>
              </h2>
              <div className="jd-new-card-body">
                <div className="jd-new-chips-container">
                  {job.preferredSkills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="jd-new-skill-chip preferred-skill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Soft Skill Card */}
            {job.softSkills && (
              <article className="jd-new-card">
                <h2 className="jd-new-card-title">
                  <span>Soft Skill</span>
                </h2>
                <div className="jd-new-card-body">
                  <div className="jd-new-chips-container">
                    {job.softSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="jd-new-skill-chip preferred-skill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )}

            {/* Benefits & Perks Card */}
            <article className="jd-new-card">
              <h2 className="jd-new-card-title">
                <span>What We Offer</span>
              </h2>
              <div className="jd-new-card-body">
                <div className="jd-new-benefits-wrapper">
                  <p>
                    {job.benefits ||
                      "Flexible hours, medical coverage, generous leaves, performance incentives, and direct equity options."}
                  </p>
                </div>
              </div>
            </article>

            {/* Interactive Application Form Card */}
            <section
              className="jd-new-card form-section-card"
              id="application-form"
            >
              <div className="form-card-header">
                <h2>Apply for this Position</h2>
                <p>
                  Complete the application details below to submit your profile
                  directly to our talent acquisition team.
                </p>
              </div>

              {isSubmitted ? (
                <div className="jd-new-form-success-wrapper">
                  <div className="success-icon-badge">&#10004;</div>
                  <h3>Application Submitted Successfully!</h3>
                  <p>
                    Thank you for your interest in joining Tanvox. Our
                    recruitment coordinators will review your application
                    details and resume shortly. Expect to hear back from us in
                    3-5 business days.
                  </p>
                  <button
                    className="jd-new-secondary-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form
                  className="jd-new-application-form"
                  onSubmit={handleFormSubmit}
                >
                  <div className="form-double-col">
                    <div className="jd-new-input-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="Nagaraju Kondru"
                        required
                      />
                    </div>

                    <div className="jd-new-input-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="nagaraju@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-double-col">
                    <div className="jd-new-input-group">
                      <label htmlFor="passedYear">Passed Year *</label>
                      <input
                        type="text"
                        id="passedYear"
                        name="passedYear"
                        value={formData.passedYear}
                        onChange={handleFormChange}
                        placeholder="e.g., 2023"
                        required
                      />
                    </div>

                    <div className="jd-new-input-group">
                      <label htmlFor="resumeLink">Resume Drive Link *</label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleFormChange}
                        placeholder="https://drive.google.com/..."
                        required
                      />
                    </div>
                  </div>

                  <div className="jd-new-input-group">
                    <label>Position Applied For</label>
                    <input
                      type="text"
                      value={job.title}
                      disabled
                      className="disabled-input"
                    />
                  </div>

                  {/* <button type="submit" className="jd-new-submit-btn">
                    Submit Application
                  </button> */}

                  {error && (
                    <p
                      style={{
                        color: "red",
                        marginBottom: "15px",
                      }}
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="jd-new-submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Our Hiring Process Section */}
      <section className="hiring-process-section" ref={processRef}>
        <div className="jd-new-container">
          <div className="section-intro">
            <h2 className="section-h2">Our Hiring Process</h2>
            <p className="section-p">
              Simple, transparent, and designed to evaluate your strengths while
              giving you a clear view of our operations.
            </p>
          </div>

          <div className="process-timeline-wrapper">
            <div className="process-line-connector"></div>

            <div className="process-timeline-steps">
              <div className="process-step-node">
                <div className="step-circle">1</div>
                <div className="step-content">
                  <h4>Apply</h4>
                  <p>
                    Submit your profile and portfolio through our careers
                    portal.
                  </p>
                </div>
              </div>

              <div className="process-step-node">
                <div className="step-circle">2</div>
                <div className="step-content">
                  <h4>Screening</h4>
                  <p>
                    A quick 20-minute discussion with a talent lead about mutual
                    alignment.
                  </p>
                </div>
              </div>

              <div className="process-step-node">
                <div className="step-circle">3</div>
                <div className="step-content">
                  <h4>Technical Round</h4>
                  <p>
                    A practical coding, architecture, or design review session.
                  </p>
                </div>
              </div>

              <div className="process-step-node">
                <div className="step-circle">4</div>
                <div className="step-content">
                  <h4>HR Round</h4>
                  <p>
                    Cultural fit conversation, background checks, and
                    compensation alignment.
                  </p>
                </div>
              </div>

              <div className="process-step-node">
                <div className="step-circle">5</div>
                <div className="step-content">
                  <h4>Offer</h4>
                  <p>
                    A formal discussion of terms, benefits package, and your
                    start dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className="bottom-cta-banner-wrapper jd-new-container">
        <div className="bottom-cta-card-gradient" ref={bottomCtaRef}>
          <div className="bottom-cta-blur-orb-1"></div>
          <div className="bottom-cta-blur-orb-2"></div>

          <div className="bottom-cta-content">
            <h2>Ready to Build Your Future With Tanvox?</h2>
            <p>
              Join an energetic, highly collaborative group of developers,
              designers, and systems architects shipping solutions worldwide.
            </p>

            <div className="bottom-cta-buttons">
              <button
                className="jd-new-primary-btn white-btn"
                onClick={scrollToForm}
              >
                Apply For This Role
              </button>
              <button
                className="jd-new-outline-btn transparent-btn"
                onClick={handleUploadClick}
              >
                Upload Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
