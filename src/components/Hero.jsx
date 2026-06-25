import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import imgPlots from '../assets/hero_plots.png';
import imgVilla from '../assets/hero_villa.png';
import imgInterior from '../assets/hero_interior.png';
import imgLegal from '../assets/hero_legal.png';
import imgFinance from '../assets/hero_finance.png';
import imgNri from '../assets/hero_nri.png';

export default function Hero({ onOpenQuote, onNavigateToServices }) {
  const slides = [
    {
      id: 1,
      image: imgPlots,
      title: 'Secure Your Future',
      keywords: 'DTCP & RERA Approved Plot Development in Coimbatore',
      desc: 'Purchase premium gated community layout plots in high-appreciation Coimbatore suburbs with clear title registrations.'
    },
    {
      id: 2,
      image: imgVilla,
      title: 'Build Your Dream',
      keywords: 'Premium Residential Construction Services in Coimbatore',
      desc: 'Turnkey architectural planning, custom civil framing, masonry, and luxury interior woodwork by certified Vastu engineers.'
    },
    {
      id: 3,
      image: imgInterior,
      title: 'Elevate Every Space',
      keywords: 'Interior Design Services that transform houses',
      desc: 'Ergonomic modular kitchen design, decorative false ceilings, custom storage solutions, and luxury floor finishings.'
    },
    {
      id: 4,
      image: imgLegal,
      title: 'Own With Confidence',
      keywords: 'Property Legal Documentation and Registration Assistance in Coimbatore',
      desc: 'Checking 30-year parent titles, obtaining local sanctions, and managing registration documentation at the sub-registrar.'
    },
    {
      id: 5,
      image: imgFinance,
      title: 'Finance Made Simple',
      keywords: 'Home Loan and Property Finance Assistance in Coimbatore',
      desc: 'Securing quick land plot and home construction loans with leading banks at the lowest interest rates.'
    },
    {
      id: 6,
      image: imgNri,
      title: 'Invest Beyond Borders',
      keywords: 'NRI Property Investment Services in Coimbatore',
      desc: 'Complete remote real estate investments, NRE accounts transaction management, drone progress updates, and tenancy services.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const legacySection = document.getElementById('about');
    if (legacySection) {
      window.scrollTo({
        top: legacySection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url(${activeSlide.image})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-container" style={{ minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Info overlay inside Hero */}
        <div style={{ animation: 'fadeIn 0.8s forwards' }}>
          <span className="hero-tagline" style={{ display: 'inline-block', backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
            {activeSlide.title}
          </span>
          <h1 className="hero-title" style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.25rem' }}>
            {activeSlide.keywords}
          </h1>
          <p className="hero-desc" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.95, textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            {activeSlide.desc}
          </p>
          <div className="hero-ctas">
            <a href="#about" className="btn btn-primary" onClick={handleScrollToAbout}>
              About More
            </a>
            <button 
              className="btn btn-outline" 
              onClick={onNavigateToServices}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button 
        onClick={handlePrev} 
        style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%', color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext} 
        style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%', color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Dots Indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.75rem', zIndex: 10 }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', backgroundColor: currentSlide === idx ? 'var(--accent)' : 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: 0 }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
