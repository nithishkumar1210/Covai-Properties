import React, { useEffect } from 'react';

export default function GroupPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companies = [
    {
      name: 'Covai Property Developers',
      desc: 'As a leading property development company in Coimbatore, Covai Property Developers specializes in DTCP-approved plots, gated community projects, villa plots, and premium residential layouts.'
    },
    {
      name: 'SBA Property Developers',
      desc: 'For years, SBA Property Developers has been helping families turn their dream of property ownership into reality. Through carefully planned residential layouts, premium plots, and secure real estate investments, we create spaces where trust, growth, and future generations can thrive together.'
    },
    {
      name: 'SBA Business Developers',
      desc: 'SBA Business Developers is a dynamic organization committed to driving growth through strategic investments, business development, infrastructure projects, and real estate ventures. Built on a foundation of trust, innovation, and long-term vision, we create opportunities that empower businesses, strengthen communities, and deliver sustainable value for future generations.'
    },
    {
      name: 'SBA Transport',
      desc: 'Built on a foundation of trust and reliability, SBA Transport has been serving businesses and communities with dependable transportation services. Through professional fleet management, experienced operations, and a customer-first approach, we ensure every journey is completed safely, efficiently, and on time.'
    },
    {
      name: 'SBA Farm Land',
      desc: 'At SBA Farm Land, we provide premium farm land and agricultural investment opportunities that support both financial growth and environmental sustainability. Our focus on strategic locations, transparent ownership, and long-term appreciation makes farm land a secure asset for future generations.'
    },
    {
      name: 'SBA Foundation',
      desc: 'SBA Foundation is committed to transforming lives through meaningful social initiatives focused on education, child welfare, and environmental sustainability. By supporting students in need, empowering single-parent families, and promoting plantation and community awareness programs, we work towards building a brighter, healthier, and more inclusive future for generations to come.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="subpage-header" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1>Our Group of Companies</h1>
          <p style={{ color: 'var(--text-light)', opacity: 0.95, fontSize: '1.05rem', maxWidth: '800px', margin: '0.75rem auto 0 auto' }}>
            Building Growth Across Industries, Creating Value Across Generations
          </p>
        </div>
      </div>

      {/* Intro Description */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            The Covai Group of Companies brings together expertise in real estate development, residential and commercial construction, infrastructure projects, property investment, and emerging business sectors. Backed by decades of experience and a commitment to excellence, we continue to shape communities, create opportunities, and build lasting value for customers, investors, and future generations.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="section" style={{ pt: 0 }}>
        <div className="container">
          <div className="company-grid">
            {companies.map((company, idx) => (
              <div className="company-card" key={idx}>
                <h3>{company.name}</h3>
                <p>{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Solutions Section */}
      <section className="section section-neutral">
        <div className="container">
          <div className="owner-card" style={{ borderLeft: '4px solid var(--accent)', padding: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Complete Solutions. One Trusted Group.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              We provide comprehensive real estate development, construction services, infrastructure solutions, transportation support, agricultural land investments, and social impact initiatives through a unified approach. By combining industry expertise with strategic planning, we ensure seamless execution, sustainable growth, and long-term value across every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export { GroupPage };
