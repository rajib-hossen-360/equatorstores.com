'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Mail,
  Youtube,
} from 'lucide-react';

export function SiteFooter() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    touch: false,
    help: false,
    payment: false,
  });

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleSection = (section: 'touch' | 'help' | 'payment') => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="equator-footer" id="about-us">
      <div className="equator-footer-inner">
        {/* SECTION 1: GET IN TOUCH */}
        <div className={`footer-accordion-item ${openSections.touch ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('touch')}
            aria-expanded={openSections.touch}
          >
            <span className="footer-accordion-title">GET IN TOUCH</span>
            <span className="footer-accordion-chevron">
              {openSections.touch ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>

          <div className="footer-accordion-body">
            <div className="touch-details">
              <span className="touch-label">Send Email</span>
              <a href="mailto:customer@equatorstores.com" className="touch-email">
                customer@equatorstores.com
              </a>

              <p className="touch-info-line">
                Office: <a href="tel:04235454780">042-35454780</a>
              </p>

              <p className="touch-info-line">
                Phone <a href="tel:+923334919028">+92-333-4919028</a>
              </p>

              <p className="touch-info-line">
                Phone <a href="tel:+923351623167">+92-335-1623167</a>
              </p>

              <p className="touch-info-line touch-baadmay">
                Baadmay Customer Support UAN <a href="tel:03041113135">0304-1113135</a>
              </p>

              <div className="touch-social-row">
                <a
                  href="https://facebook.com/equatorstores"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com/equatorstores"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://youtube.com/@equatorstores"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://tiktok.com/@equatorstores"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: HELP */}
        <div className={`footer-accordion-item ${openSections.help ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('help')}
            aria-expanded={openSections.help}
          >
            <span className="footer-accordion-title">HELP</span>
            <span className="footer-accordion-chevron">
              {openSections.help ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>

          <div className="footer-accordion-body">
            <nav className="help-links-list" aria-label="Help and Policies">
              <Link href="/#about-us">About Us</Link>
              <Link href="/#contact">Contact Us</Link>
              <Link href="/#privacy">Privacy Policy</Link>
              <Link href="/#return-exchange">Return & Exchange Policy</Link>
              <Link href="/#shipping">Shipping Policy</Link>
              <Link href="/#terms">Terms and Conditions</Link>
              <Link href="/#stores">Store Locations</Link>
              <Link href="/#blog">Our Blog</Link>
            </nav>
          </div>
        </div>

        {/* SECTION 3: PAYMENT METHODS */}
        <div className={`footer-accordion-item ${openSections.payment ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('payment')}
            aria-expanded={openSections.payment}
          >
            <span className="footer-accordion-title">PAYMENT METHODS</span>
            <span className="footer-accordion-chevron">
              {openSections.payment ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>

          <div className="footer-accordion-body">
            {/* Payment Icons */}
            <div className="payment-badges-row">
              {/* Generic Card */}
              <span className="pay-badge pay-card" title="Credit / Debit Card">
                <svg width="28" height="18" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="3" fill="#E2E4E8" />
                  <rect y="4" width="32" height="4" fill="#888E99" />
                  <rect x="4" y="11" width="6" height="4" rx="1" fill="#B0B5BF" />
                  <rect x="13" y="12" width="14" height="2" fill="#B0B5BF" />
                </svg>
              </span>

              {/* Maestro */}
              <span className="pay-badge pay-maestro" title="Maestro">
                <svg width="28" height="18" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="3" fill="#FFFFFF" stroke="#E5E7EB" />
                  <circle cx="12" cy="10" r="6" fill="#EB001B" />
                  <circle cx="20" cy="10" r="6" fill="#0066CC" />
                  <path d="M16 6.3a6 6 0 0 0 0 7.4 6 6 0 0 0 0-7.4z" fill="#733887" />
                </svg>
              </span>

              {/* Mastercard */}
              <span className="pay-badge pay-mastercard" title="Mastercard">
                <svg width="28" height="18" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="3" fill="#141414" />
                  <circle cx="12" cy="10" r="6" fill="#EB001B" />
                  <circle cx="20" cy="10" r="6" fill="#F79E1B" />
                  <path d="M16 6.3a6 6 0 0 0 0 7.4 6 6 0 0 0 0-7.4z" fill="#FF5F00" />
                </svg>
              </span>

              {/* Shop Pay */}
              <span className="pay-badge pay-shoppay" title="Shop Pay">
                <svg width="28" height="18" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="3" fill="#5A31F4" />
                  <text x="16" y="13.5" fill="#FFFFFF" fontSize="9" fontWeight="700" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
                    shop
                  </text>
                </svg>
              </span>

              {/* Visa */}
              <span className="pay-badge pay-visa" title="Visa">
                <svg width="28" height="18" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="3" fill="#1A1F71" />
                  <text x="16" y="13.5" fill="#FFFFFF" fontSize="8" fontWeight="800" fontStyle="italic" textAnchor="middle" letterSpacing="0.08em" fontFamily="sans-serif">
                    VISA
                  </text>
                </svg>
              </span>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter-wrap">
              <h5 className="newsletter-heading">NEWSLETTER SIGNUP</h5>
              {subscribed ? (
                <p className="newsletter-success">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="footer-newsletter-box">
                  <Mail size={16} className="newsletter-mail-icon" />
                  <input
                    type="email"
                    aria-label="Your email address"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Branding & Copyright */}
      <div className="equator-footer-bottom">
        <p className="footer-copyright">
          © 2026 EQUATORSTORES POWERED BY CMC M-TECH
        </p>
      </div>

      {/* Floating WhatsApp Widget */}
      <div className="whatsapp-floating-widget">
        <a
          href="https://wa.me/923334919028?text=Hello%20Equator%20Stores"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
          aria-label="Need Help? Chat with us on WhatsApp"
        >
          <span className="whatsapp-tooltip">Need Help? Chat with us</span>
          <div className="whatsapp-circle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.6 4.72c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01z" />
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
}
