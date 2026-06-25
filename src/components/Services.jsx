import React from 'react';
import { ArrowRight, LandPlot, Hammer, Paintbrush } from 'lucide-react';
import imgPlots from '../assets/hero_plots.png';
import imgVilla from '../assets/hero_villa.png';
import imgInterior from '../assets/hero_interior.png';

export default function Services({ onNavigateToServices }) {
  const services = [
    {
      id: 1,
      icon: <LandPlot size={24} />,
      image: imgPlots,
      title: 'Plot Development',
      tagline: 'Secure Your Future',
      desc: 'DTCP & RERA approved layout developments in strategic suburbs of Coimbatore. Excellent value appreciation and complete road/utility access.'
    },
    {
      id: 2,
      icon: <Hammer size={24} />,
      image: imgVilla,
      title: 'Residential Construction',
      tagline: 'Build Your Dream',
      desc: 'Turnkey architectural planning, custom civil framing, masonry, Vastu alignment, and solid finishes for premium Coimbatore duplex villas.'
    },
    {
      id: 3,
      icon: <Paintbrush size={24} />,
      image: imgInterior,
      title: 'Interior Design',
      tagline: 'Elevate Every Space',
      desc: 'Bespoke modular kitchens, sliding wardrobes, decorative false ceilings, and ambient spotlighting designed for modern families.'
    }
  ];

  return (
    <section id="services" className="section section-neutral">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Premium Services</h2>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.id}>
              <div className="service-card-img" style={{ height: '220px' }}>
                <img src={svc.image} alt={svc.title} />
              </div>
              <div className="service-card-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-hover)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {svc.icon}
                  <span>{svc.tagline}</span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{svc.title}</h3>
                <p className="service-card-desc" style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  {svc.desc}
                </p>
                <a 
                  href="#" 
                  className="service-card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToServices();
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary)', marginTop: 'auto' }}
                >
                  Know More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            className="btn btn-primary" 
            onClick={onNavigateToServices}
          >
            Know More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
export { Services };
