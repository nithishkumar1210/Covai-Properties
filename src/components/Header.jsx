import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Header({ currentPage, onNavigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, viewName) => {
    e.preventDefault();
    setIsMobileOpen(false);
    onNavigate(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Topbar Info Line */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-info">
            <div className="topbar-info-item">
              <Phone size={14} />
              <span>+91 72008 00066</span>
            </div>
            <div className="topbar-info-item">
              <Mail size={14} />
              <span>info@covaiproperties.com</span>
            </div>
            <div className="topbar-info-item">
              <Clock size={14} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="topbar-socials" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Follow us:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'home')}>
            <img src="/logo.svg" alt="Covai Properties" className="navbar-logo-img" />
            COVAI <span>PROPERTIES</span>
          </a>

          <nav className="navbar-links">
            <a
              href="#home"
              className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
            <a
              href="#about"
              className={`navbar-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`navbar-link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'services')}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`navbar-link ${currentPage === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#companies"
              className={`navbar-link ${currentPage === 'companies' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'companies')}
            >
              Group of Companies
            </a>
            <a
              href="#contact"
              className={`navbar-link contact-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact Us
            </a>
          </nav>

          <button
            className="navbar-menu-toggle"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Mobile Side Drawer */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close mobile menu"
        >
          <X size={28} />
        </button>

        <nav className="mobile-menu-links">
          <a
            href="#home"
            className={`mobile-menu-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`mobile-menu-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`mobile-menu-link ${currentPage === 'services' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#projects"
            className={`mobile-menu-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#companies"
            className={`mobile-menu-link ${currentPage === 'companies' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'companies')}
          >
            Group of Companies
          </a>
          <a
            href="#contact"
            className={`mobile-menu-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
}
