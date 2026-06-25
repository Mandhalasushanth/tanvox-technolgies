import { useState } from "react";
import "./Contact.css";
import heroImg from "../../assets/contact_support_hero.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePurposeClick = (serviceType) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceType,
    }));
    
    // Smooth scroll to form container
    const formElement = document.getElementById("contact-message-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  setFormStatus({
    submitting: true,
    success: false,
    error: null,
  });
try {
  await fetch(
    "https://script.google.com/macros/s/AKfycby3Ej9L0QidYUZAbjfOygL61GyMb0Hwr6KspVyb5q7COd3I8r5neSSFs7L2ardmhUg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    }
  );

  setFormStatus({
    submitting: false,
    success: true,
    error: null,
  });

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
  });

  setTimeout(() => {
    setFormStatus((prev) => ({
      ...prev,
      success: false,
    }));
  }, 5000);

} catch (error) {
  console.log(error);

  setFormStatus({
    submitting: false,
    success: false,
    error: "Failed to submit form",
  });
}
}
  return (
    <div className="contact-page-container">
      <div className="contact-grid-overlay"></div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-left">
          <div className="contact-hero-badge">
            <span className="contact-hero-badge-dot"></span>
            Contact Us
          </div>
          <h1 className="contact-hero-title">
            Let’s Build Something<br />
            <span className="contact-title-accent">Amazing Together</span>
          </h1>
          <p className="contact-hero-desc">
            We’re here to help you turn ideas into impactful digital solutions. Whether you 
            have a project inquiry, partnership opportunity, or support request, our team is 
            ready to assist you.
          </p>
          <div className="contact-hero-features">
            <div className="contact-feature-item quick-response">
              <div className="contact-feature-icon-box">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="contact-feature-text">
                <span className="contact-feature-title">Quick Response</span>
                <span className="contact-feature-desc">We respond within 24 hours</span>
              </div>
            </div>
            <div className="contact-feature-item confidential">
              <div className="contact-feature-icon-box">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="contact-feature-text">
                <span className="contact-feature-title">Confidential</span>
                <span className="contact-feature-desc">Your info is 100% secure</span>
              </div>
            </div>
            <div className="contact-feature-item support">
              <div className="contact-feature-icon-box">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="contact-feature-text">
                <span className="contact-feature-title">Expert Support</span>
                <span className="contact-feature-desc">Connect with solution experts</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-hero-right">
          <div className="contact-hero-image-container">
            <img src={heroImg} alt="Customer Support Services" className="contact-hero-support-img" />
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-card email">
            <div className="contact-info-card-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info-card-text">
              <span className="contact-info-card-title">Email Us</span>
              <a href="mailto:info@tanvox.in" className="contact-info-card-value">info@tanvox.in</a>
              <span className="contact-info-card-subtitle">We reply within 24 hours</span>
            </div>
          </div>

          <div className="contact-info-card phone">
            <div className="contact-info-card-icon-box">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info-card-text">
              <span className="contact-info-card-title">Call Us</span>
              <a href="tel:+919676507387" className="contact-info-card-value">+91 9676507387</a>
              <span className="contact-info-card-subtitle">Mon – Sat: 9:30 AM – 6:30 PM</span>
            </div>
          </div>

          <div className="contact-info-card website">
            <div className="contact-info-card-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="contact-info-card-text">
              <span className="contact-info-card-title">Visit Our Website</span>
              <a href="https://www.tanvox.in" target="_blank" rel="noopener noreferrer" className="contact-info-card-value">www.tanvox.in</a>
              <span className="contact-info-card-subtitle">Explore services & solutions</span>
            </div>
          </div>

          <div className="contact-info-card support">
            <div className="contact-info-card-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="contact-info-card-text">
              <span className="contact-info-card-title">Support</span>
              <a href="mailto:support@tanvox.com" className="contact-info-card-value">support@tanvox.com</a>
              <span className="contact-info-card-subtitle">Existing project help</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Sidebar Split Grid */}
      <section className="contact-split-section">
        <div className="contact-split-container">
          {/* Left: Message Form */}
          <div className="contact-form-card" id="contact-message-form">
            <h2 className="contact-section-title">Send Us a Message</h2>
            <p className="contact-section-desc">Fill out the form below and our team will get back to you shortly.</p>
            
            {formStatus.success ? (
              <div style={{
                background: "rgba(16, 185, 129, 0.05)",
                border: "1px solid #10B981",
                padding: "2.5rem 2rem",
                borderRadius: "16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center"
              }}>
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#10B981" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 800 }}>Message Sent Successfully!</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Thank you for reaching out. A Tanvox representative will contact you within 24 to 48 hours.
                </p>
                <button 
                  onClick={() => setFormStatus({ submitting: false, success: false, error: null })}
                  className="contact-cta-btn secondary"
                  style={{ marginTop: "1rem", fontSize: "0.85rem", padding: "0.6rem 1.2rem", color: "#334155", borderColor: "#cbd5e1" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-input-group">
                    <label className="contact-input-label">Full Name <span>*</span></label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Enter Your Full Name" 
                      required 
                      className="contact-input" 
                    />
                  </div>
                  <div className="contact-input-group">
                    <label className="contact-input-label">Company Name (optional)</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleInputChange} 
                      placeholder="Enter Company Name" 
                      className="contact-input" 
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-input-group">
                    <label className="contact-input-label">Email Address <span>*</span></label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="abc@example.com" 
                      required 
                      className="contact-input" 
                    />
                  </div>
                  <div className="contact-input-group">
                    <label className="contact-input-label">Phone Number <span>*</span></label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="Enter Your Number" 
                      required 
                      className="contact-input" 
                    />
                  </div>
                </div>

                <div className="contact-input-group">
                  <label className="contact-input-label">Service Interested In <span>*</span></label>
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleInputChange} 
                    required 
                    className="contact-select"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cloud & DevOps Solutions">Cloud & DevOps Solutions</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <label className="contact-input-label">Message <span>*</span></label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Tell us about your project requirements or how we can assist you..." 
                    required 
                    className="contact-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus.submitting}
                  className="contact-submit-btn"
                >
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                  <svg className="contact-submit-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>

                <div className="contact-form-footer">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '4px' }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Your information is secure and will never be shared.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-sidebar-block">
              <h3 className="contact-sidebar-title">How Can We Help You?</h3>
              <p className="contact-sidebar-desc">Select the purpose of your inquiry to auto-fill the form:</p>
              
              <div className="contact-purpose-list">
                <button 
                  onClick={() => handlePurposeClick("Other")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">General Inquiry</span>
                      <span className="contact-purpose-desc">Ask about services and solutions</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <button 
                  onClick={() => handlePurposeClick("API Integration")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">Sales & Partnership</span>
                      <span className="contact-purpose-desc">Discuss partnership or business opportunities</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <button 
                  onClick={() => handlePurposeClick("Software Development")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">Project Consultation</span>
                      <span className="contact-purpose-desc">Get expert advice for your project</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <button 
                  onClick={() => handlePurposeClick("Cloud & DevOps Solutions")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">Support Request</span>
                      <span className="contact-purpose-desc">Get help with technical issues or services</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <button 
                  onClick={() => handlePurposeClick("Other")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">Careers</span>
                      <span className="contact-purpose-desc">Explore job opportunities at Tanvox</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <button 
                  onClick={() => handlePurposeClick("Other")} 
                  className="contact-purpose-item"
                >
                  <div className="contact-purpose-left">
                    <svg className="contact-purpose-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div className="contact-purpose-info">
                      <span className="contact-purpose-name">Other</span>
                      <span className="contact-purpose-desc">Other inquiries and general requests</span>
                    </div>
                  </div>
                  <svg className="contact-purpose-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div className="contact-sidebar-block">
              <h3 className="contact-sidebar-title">Why Contact Us?</h3>
              <div className="contact-why-list">
                <div className="contact-why-item">
                  <div className="contact-why-check">✓</div>
                  <span className="contact-why-text">Quick response within 24–48 hours</span>
                </div>
                <div className="contact-why-item">
                  <div className="contact-why-check">✓</div>
                  <span className="contact-why-text">Expert consultation for your business needs</span>
                </div>
                <div className="contact-why-item">
                  <div className="contact-why-check">✓</div>
                  <span className="contact-why-text">Customized digital solutions</span>
                </div>
                <div className="contact-why-item">
                  <div className="contact-why-check">✓</div>
                  <span className="contact-why-text">End-to-end project support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="contact-office-section">
        <div className="contact-office-container">
          <div className="contact-office-layout">
            
            {/* Card on Left */}
            <div className="contact-office-card-premium">
              <h2 className="contact-office-title-new">
                Our <span className="office-title-accent">Office</span>
              </h2>
              
              <div className="contact-office-info-list">
                
                {/* Item 1: Address */}
                <div className="contact-office-info-item">
                  <a 
                    href="https://www.google.com/maps/place/Tanvox+Technologies+Pvt+Ltd/@17.4510292,78.3602856,17z/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-office-icon-wrapper"
                    style={{ textDecoration: 'none' }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </a>
                  <div className="contact-office-info-text">
                    <a 
                      href="https://www.google.com/maps/place/Tanvox+Technologies+Pvt+Ltd/@17.4510292,78.3602856,17z/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      3rd Floor JQ Chambers, 4-50/5, Miyapur - Gachibowli Rd, near Le Meridien Hotel, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032
                    </a>
                  </div>
                </div>

                {/* Item 2: Phone */}
                <div className="contact-office-info-item">
                  <div className="contact-office-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-office-info-text">
                    <a href="tel:+919676507387">+91 9676507387</a>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="contact-office-info-item">
                  <div className="contact-office-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-office-info-text">
                    <a href="mailto:info@tanvox.in">info@tanvox.in</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Map on Right */}
            <div className="contact-map-wrapper">
              <div className="contact-map-container">
                <iframe
                  title="Tanvox Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1814110729374!2d78.36028557488453!3d17.45102918344711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f6b6b9c38fa97e5%3A0x141b9e14f528a714!2sTanvox%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1782199908825!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <div className="contact-cta-card-red-navy">
            <h2 className="contact-cta-title-white">Let's Build the Future Together</h2>
            <p className="contact-cta-desc-white">
              Partner with Tanvox Technologies to accelerate your digital transformation, optimize operational efficiency, and build future-ready software solutions.
            </p>
            <div className="contact-cta-buttons-group">
              <a href="#contact" className="contact-cta-btn-white">
                Schedule a Meeting
              </a>
              <a href="#services" className="contact-cta-btn-white">
                Speak With Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
