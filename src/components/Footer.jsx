import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer({ onNavigate, onOpenQuote }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const handleLinkClick = (e, viewName) => {
    e.preventDefault();
    onNavigate(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About & Newsletter */}
          <div className="footer-col">
            <div className="footer-logo">
              COVAI <span>PROPERTIES</span>
            </div>
            <p className="footer-summary" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
              Covai Properties is one of the trusted real estate developers in Coimbatore with over 30+ years of industry experience. We offer premium plot development, construction services, legal documentation support, finance assistance, and NRI investment solutions. Our focus on quality, transparency, and strategic locations has made us a preferred choice for property buyers and investors across Tamil Nadu and beyond.
            </p>
            <form className="footer-newsletter" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
              <a href="#about" className="footer-link" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a>
              <a href="#services" className="footer-link" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
              <a href="#projects" className="footer-link" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
              <a href="#companies" className="footer-link" onClick={(e) => handleLinkClick(e, 'companies')}>Group of Companies</a>
              <a href="#contact" className="footer-link" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="footer-col">
            <h3>Head Office</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <p>11/3, Thudiyalur Market Cut Rd, VSK Nagar East, Velamal Colony, Thudiyalur, Coimbatore, Tamil Nadu 641034</p>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <p>+91 72008 00066<br />+91 72008 00077</p>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <p>info@covaiproperties.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Locations */}
          <div className="footer-col">
            <h3>Branches</h3>
            <div className="footer-locations">
              <div className="footer-location-item">
                <h4>Saravanampatti Branch</h4>
                <p>Saravanampatti Road, Coimbatore - 641035</p>
              </div>
              <div className="footer-location-item">
                <h4>Vadavalli Branch</h4>
                <p>Vadavalli Main Road, Coimbatore - 641041</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="footer-bottom">
          <p>© 2026 Covai Properties. All Rights Reserved. Rebuilt in React.</p>
          <div className="footer-bottom-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
