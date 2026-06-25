import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-logo-link">
            <img src={logo} alt="Tanvox Technologies Logo" className="footer-logo-img" />
          </a>
          <p className="footer-brand-desc">
            Empowering businesses through digital innovation, AI & enterprise technology solutions. 
            We build scalable, secure, and future-ready solutions that drive growth and create lasting impact.
          </p>
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/company/tanvox-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/17ghvu73QM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://x.com/tanvox202" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="social-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/tanvox_technologies/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div className="footer-links-col">
          <h3>Company</h3>
          <ul className="footer-links-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-links-col">
          <h3>Services</h3>
          <ul className="footer-links-list">
            <li><a href="#services-software">Software Development</a></li>
            <li><a href="#services-cloud">Cloud Services</a></li>
            <li><a href="#services-devops">DevOps & Automation</a></li>
            <li><a href="#services-ai">AI Solutions</a></li>
            <li><a href="#services-security">Cybersecurity</a></li>
            <li><a href="#services-managed">Managed IT Services</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-links-col">
          <h3>Resources</h3>
          <ul className="footer-links-list">
            <li><a href="#blog">Blog & Insights</a></li>
            <li><a href="#cases">Case Studies</a></li>
            <li><a href="#whitepapers">Whitepapers</a></li>
            <li><a href="#webinars">Webinars</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-links-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li className="contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:info@tanvox.com">info@tanvox.com</a>
            </li>
            <li className="contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919676507387">+91 96765 07387</a>
            </li>
            <li className="contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>3rd Floor JQ Chambers, 4-50/5, Gachibowli - Miyapur Rd, Hyderabad, Telangana</span>
            </li>
            <li className="contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <ul className="footer-legal-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
            <li><a href="#security">Security Policy</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
          </ul>
          <p className="footer-copyright">
            &copy; 2026 Tanvox Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
