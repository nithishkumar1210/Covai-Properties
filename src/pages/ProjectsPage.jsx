import React, { useState, useEffect } from 'react';
import { MapPin, Building, Activity } from 'lucide-react';
import imgPlots from '../assets/hero_plots.png';
import imgVilla from '../assets/hero_villa.png';
import imgComm from '../assets/project_commercial.png';
import imgInd from '../assets/project_industrial.png';

export default function ProjectsPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'Covai Green Meadows',
      category: 'plots',
      location: 'Saravanampatti, Coimbatore',
      desc: 'DTCP & RERA approved premium residential plots. Gated community with blacktop roads, municipal water connection, and round-the-clock security.',
      size: '1200 - 2400 Sqft',
      image: imgPlots,
      status: 'Ready to Construct'
    },
    {
      id: 2,
      name: 'Covai Royal Enclave',
      category: 'residential',
      location: 'Kalapatti, Coimbatore',
      desc: 'Luxury 3 & 4 BHK custom-built modern villas. Premium structure, Italian marble floorings, high-end woodwork, and individual landscaping.',
      size: '2200 - 3600 Sqft',
      image: imgVilla,
      status: 'Ongoing'
    },
    {
      id: 3,
      name: 'Covai Techno Towers',
      category: 'commercial',
      location: 'Avinashi Road, Coimbatore',
      desc: 'Premium glass-facade IT park and corporate commercial workspaces. Full power backup, ample multi-level car parking, and central HVAC.',
      size: '5000+ Sqft units',
      image: imgComm,
      status: 'Under Construction'
    },
    {
      id: 4,
      name: 'Covai Prime Meadows',
      category: 'plots',
      location: 'Vadavalli, Coimbatore',
      desc: 'Premium scenic plots at the foothills of Western Ghats. 100% Vastu-compliant layout, DTCP approved, ready for immediate registration.',
      size: '1500 - 3000 Sqft',
      image: imgPlots,
      status: 'Resale Available'
    },
    {
      id: 5,
      name: 'Covai Harmony Villas',
      category: 'residential',
      location: 'Kovaipudur, Coimbatore',
      desc: 'Eco-friendly duplex villa township in Coimbatore. Cool climate year-round, luxury features, solar power grids, and smart home fittings.',
      size: '1800 - 2800 Sqft',
      image: imgVilla,
      status: 'Completed'
    },
    {
      id: 6,
      name: 'Covai Industrial Park',
      category: 'commercial',
      location: 'Eachanari, Coimbatore',
      desc: 'Pre-engineered steel warehouses and industrial sheds. Built with heavy-gauge structural steel frames, high load capacity flooring, and modular offices.',
      size: '10,000+ Sqft sheds',
      image: imgInd,
      status: 'Ready for Occupancy'
    },
    {
      id: 7,
      name: 'Covai Smart Oasis',
      category: 'plots',
      location: 'Thudiyalur, Coimbatore',
      desc: 'Eco-designed layout plots featuring dedicated sewage treatment, smart underground lighting cables, and fully developed community parks.',
      size: '1000 - 2000 Sqft',
      image: imgPlots,
      status: 'Ongoing Layout'
    },
    {
      id: 8,
      name: 'Covai Elite Residency',
      category: 'residential',
      location: 'Singanallur, Coimbatore',
      desc: 'High-end duplex villas featuring private swimming pools, individual terrace gardens, luxury modular fittings, and automated keyless door controls.',
      size: '2500 - 4200 Sqft',
      image: imgVilla,
      status: 'New Launch'
    },
    {
      id: 9,
      name: 'Covai Retail Plaza',
      category: 'commercial',
      location: 'Peelamedu, Coimbatore',
      desc: 'Modern multi-story commercial retail plaza with modular glass storefront design, high footfall corridors, and dedicated elevators.',
      size: '1200 - 4500 Sqft units',
      image: imgComm,
      status: 'Completed'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="subpage-header" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h1>Discover our Premium Residential Projects in Coimbatore</h1>
          <p style={{ color: 'var(--text-light)', opacity: 0.9, fontSize: '1.05rem', maxWidth: '800px', margin: '0.75rem auto 0 auto' }}>
            Experience premium living through our real estate projects in Coimbatore, developed with a focus on quality, innovation, and long-term appreciation in high-growth locations.
          </p>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-subtitle">Portfolio Catalog</span>
            <h2 className="section-title">Our Projects</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Explore our Premium Property Developments Across Coimbatore</p>
          </div>

          {/* Filters */}
          <div className="filter-bar">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({projects.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'plots' ? 'active' : ''}`}
              onClick={() => setFilter('plots')}
            >
              Plots Development
            </button>
            <button 
              className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Residential Villas
            </button>
            <button 
              className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Commercial
            </button>
          </div>

          {/* 3x3 Project Grid (in 3,3,3 format) */}
          <div className="services-grid">
            {filteredProjects.map((proj) => (
              <div className="service-card" key={proj.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="service-card-img" style={{ height: '240px' }}>
                  <img src={proj.image} alt={proj.name} />
                  <div className="blog-date-badge" style={{ left: 'auto', right: '1rem', background: 'var(--primary)', color: '#fff', fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                    {proj.status}
                  </div>
                </div>
                <div className="service-card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="service-card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{proj.name}</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                    <MapPin size={14} style={{ color: 'var(--accent)' }} />
                    <span>{proj.location}</span>
                  </div>

                  <p className="service-card-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.55' }}>
                    {proj.desc}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>
                      <Building size={14} style={{ color: 'var(--text-muted)' }} />
                      <span>{proj.size}</span>
                    </div>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={onOpenQuote}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export { ProjectsPage };
