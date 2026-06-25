import React, { useEffect } from 'react';
import { ArrowRight, LandPlot, Hammer, Paintbrush, FileText, CircleDollarSign, Globe } from 'lucide-react';
import imgPlots from '../assets/hero_plots.png';
import imgVilla from '../assets/hero_villa.png';
import imgInterior from '../assets/hero_interior.png';
import imgLegal from '../assets/hero_legal.png';
import imgFinance from '../assets/hero_finance.png';
import imgNri from '../assets/hero_nri.png';

export default function ServicesPage({ onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'plots',
      image: imgPlots,
      icon: <LandPlot size={28} />,
      title: 'Plot Development',
      desc: 'Invest with confidence through our DTCP & RERA-approved plots in Coimbatore, developed in high-growth locations with clear legal documentation and modern infrastructure. At Covai Properties, we create premium residential layouts designed for comfortable living, long-term value, and hassle-free ownership. Our focus on quality development, transparency, and strategic locations makes us a trusted choice for plot development in Coimbatore.'
    },
    {
      id: 'construction',
      image: imgVilla,
      icon: <Hammer size={28} />,
      title: 'Complete Construction Services',
      desc: 'Build your dream home with our Complete Construction Services in Coimbatore, designed to deliver quality, durability, and modern living. From architectural planning and approvals to construction and final handover, we manage every stage with precision and transparency. Our experienced team ensures timely delivery, premium materials, and superior workmanship, making us a trusted choice for residential construction in Coimbatore.'
    },
    {
      id: 'interiors',
      image: imgInterior,
      icon: <Paintbrush size={28} />,
      title: 'Interior Design',
      desc: 'Transform your living spaces with our Interior Design Services in Coimbatore, crafted to combine style, comfort, and functionality. We create customized interiors that reflect your personality while maximizing space and aesthetics. From modular kitchens and wardrobes to complete home interiors, our team delivers elegant designs with premium materials and flawless execution.'
    },
    {
      id: 'legal',
      image: imgLegal,
      icon: <FileText size={28} />,
      title: 'Legal Documentation',
      desc: 'Ensure a secure and hassle-free property transaction with our Legal Documentation Services in Coimbatore. We assist property buyers, sellers, and investors with document verification, title checks, registration support, and legal compliance. Our experienced team helps protect your investment by ensuring every document is accurate, verified, and legally valid.'
    },
    {
      id: 'finance',
      image: imgFinance,
      icon: <CircleDollarSign size={28} />,
      title: 'Finance',
      desc: 'Simplify your property purchase with our Finance Services in Coimbatore, designed to help homebuyers and investors secure the right funding solutions. We assist with home loans, plot loans, construction finance, and loan documentation through trusted banking partners. Our team ensures a smooth financing process with expert guidance, competitive interest rates, and faster approvals.'
    },
    {
      id: 'nri',
      image: imgNri,
      icon: <Globe size={28} />,
      title: 'NRI Services',
      desc: 'Our NRI Property Services in Coimbatore help Non-Resident Indians invest in Indian real estate with confidence and convenience. From virtual property tours and legal documentation to property registration and investment guidance, we provide complete support throughout the buying process. Our team ensures transparent transactions, secure investments, and seamless property management for NRIs across the globe.'
    }
  ];

  return (
    <div>
      {/* Subpage Header */}
      <div className="subpage-header" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h1>Professional Real Estate Services in Coimbatore</h1>
          <p style={{ color: 'var(--text-light)', opacity: 0.9, fontSize: '1.05rem', maxWidth: '800px', margin: '0.75rem auto 0 auto' }}>
            As a trusted provider of real estate services in Coimbatore, we help homeowners and investors build, develop, and manage properties with quality, transparency, and expert guidance.
          </p>
        </div>
      </div>

      {/* Services Grid Content */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">Core Expertise</span>
            <h2 className="section-title">Discover Our End-to-End Property Services For You</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {services.map((svc, idx) => (
              <div 
                key={svc.id} 
                className="about-grid" 
                style={{ 
                  direction: idx % 2 === 1 ? 'rtl' : 'ltr',
                  borderBottom: idx < services.length - 1 ? '1px solid var(--border-light)' : 'none',
                  paddingBottom: idx < services.length - 1 ? '4rem' : '0'
                }}
              >
                {/* Visual Column */}
                <div className="about-visual" style={{ direction: 'ltr' }}>
                  <div className="about-img-frame" style={{ height: '350px' }}>
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="about-content" style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-hover)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {svc.icon}
                    <span>Service 0{idx + 1}</span>
                  </div>
                  <h2 className="about-title" style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{svc.title}</h2>
                  <p className="about-desc" style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
                    {svc.desc}
                  </p>

                  <button className="btn btn-primary" onClick={onOpenQuote}>
                    Get Free Consultation <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export { ServicesPage };
