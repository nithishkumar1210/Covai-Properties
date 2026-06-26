import React, { useState } from 'react';
import { MapPin, Building, ArrowRight } from 'lucide-react';
import imgPlots from '../assets/hero_plots.png';
import imgVilla from '../assets/hero_villa.png';
import imgComm from '../assets/project_commercial.png';
import imgInd from '../assets/project_industrial.png';

export default function HomeProjectsSection({ onViewMoreProjects, onOpenQuote }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'ongoing' | 'completed'

  const premiumProjects = [
    {
      id: 1,
      name: 'Covai Green Meadows',
      category: 'Gated Layout Plots',
      location: 'Saravanampatti, Coimbatore',
      status: 'Completed',
      badge: 'Ready to Construct',
      desc: 'DTCP & RERA approved premium layouts with blacktop roads and municipal water lines.',
      image: imgPlots,
      size: '1200 - 2400 Sqft'
    },
    {
      id: 2,
      name: 'Covai Royal Enclave',
      category: 'Residential Luxury Villas',
      location: 'Kalapatti, Coimbatore',
      status: 'Ongoing',
      badge: 'Ongoing Construction',
      desc: 'Premium custom 3 & 4 BHK duplex villas built with Vastu layouts and solid finishes.',
      image: imgVilla,
      size: '2200 - 3600 Sqft'
    },
    {
      id: 3,
      name: 'Covai Techno Towers',
      category: 'Commercial Corporate Spaces',
      location: 'Avinashi Road, Coimbatore',
      status: 'Ongoing',
      badge: 'Under Construction',
      desc: 'Top-tier glass facade IT parks and offices with modern multi-level parking amenities.',
      image: imgComm,
      size: '5000+ Sqft units'
    },
    {
      id: 4,
      name: 'Covai Harmony Villas',
      category: 'Residential Luxury Villas',
      location: 'Kovaipudur, Coimbatore',
      status: 'Completed',
      badge: 'Completed',
      desc: 'Eco-friendly duplex villa township in Coimbatore with private terrace gardens and solar power.',
      image: imgVilla,
      size: '1800 - 2800 Sqft'
    },
    {
      id: 5,
      name: 'Covai Smart Oasis',
      category: 'Gated Layout Plots',
      location: 'Thudiyalur, Coimbatore',
      status: 'Ongoing',
      badge: 'Ongoing Layout',
      desc: 'Eco-designed layout plots featuring sewage treatment and underground utility layouts.',
      image: imgPlots,
      size: '1000 - 2000 Sqft'
    },
    {
      id: 6,
      name: 'Covai Industrial Park',
      category: 'Commercial Corporate Spaces',
      location: 'Eachanari, Coimbatore',
      status: 'Completed',
      badge: 'Ready for Occupancy',
      desc: 'Pre-engineered steel warehouses and industrial sheds built with heavy-gauge structural steel.',
      image: imgInd,
      size: '10,000+ Sqft sheds'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? premiumProjects 
    : premiumProjects.filter(p => p.status.toLowerCase() === filter);

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title" style={{ fontSize: '2.25rem' }}>Ongoing & Completed Projects</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Explore our premium real estate developments in Coimbatore</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'ongoing' ? 'active' : ''}`}
            onClick={() => setFilter('ongoing')}
          >
            Ongoing Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="services-grid">
          {filteredProjects.map((proj) => (
            <div className="service-card" key={proj.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="service-card-img" style={{ height: '240px' }}>
                <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div 
                  className="blog-date-badge" 
                  style={{ 
                    left: 'auto', 
                    right: '1rem', 
                    background: proj.status === 'Ongoing' ? 'var(--accent)' : 'var(--accent)', 
                    color: proj.status === 'Ongoing' ? 'var(--text-white)' : 'var(--text-white)',
                    fontWeight: 700,
                    fontSize: '0.8rem', 
                    padding: '0.35rem 0.75rem' 
                  }}
                >
                  {proj.badge}
                </div>
              </div>
              <div className="service-card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 600, fontSize: '0.825rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  <Building size={14} />
                  <span>{proj.category}</span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                  {proj.name}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                  <MapPin size={14} style={{ color: 'var(--accent)' }} />
                  <span>{proj.location}</span>
                </div>

                <p className="service-card-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.55' }}>
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>
                    <span>Size: {proj.size}</span>
                  </div>
                  <button 
                    className="btn btn-primary" 
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', color: 'var(--text-white)' }} 
                    onClick={onOpenQuote}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Footer Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-secondary" onClick={onViewMoreProjects}>
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
export { HomeProjectsSection };
