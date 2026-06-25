import React, { useEffect } from 'react';
import { Check, Eye, Target, Compass, BookOpen, Leaf, Heart } from 'lucide-react';
import mdImg from '../assets/senthil_kumar.png';
import imgInterior from '../assets/hero_interior.png';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      id: 'vision',
      icon: <Eye size={24} />,
      title: 'Our Vision',
      desc: 'To be a trusted leader in real estate development in Coimbatore, creating premium residential communities, investment-driven properties, and sustainable living spaces that enrich lives and deliver lasting value for future generations.'
    },
    {
      id: 'mission',
      icon: <Target size={24} />,
      title: 'Our Mission',
      desc: 'To develop high-quality residential plots, luxury villas, and thoughtfully planned projects through innovation, transparency, and customer-focused service while helping families achieve their dream of property ownership with confidence.'
    },
    {
      id: 'values',
      icon: <Compass size={24} />,
      title: 'Our Values',
      desc: 'Built on trust, transparency, and excellence, we uphold the highest standards of professionalism while creating communities that inspire confidence, comfort, and lasting prosperity.'
    }
  ];

  const benefits = [
    { title: 'Verified Property Documentation', desc: 'Covai Properties ensures legally verified titles and transparent documentation for secure property ownership.' },
    { title: 'Quality-Driven Development', desc: 'Every project by Covai Properties is built with superior planning, approved layouts, and lasting quality standards.' },
    { title: 'Flexible Investment Solutions', desc: 'Smart payment plans and financing options designed to make property ownership convenient, secure, and stress-free.' },
    { title: 'Prime Growth Locations', desc: 'Strategically developed communities in high-demand areas with strong appreciation potential and excellent connectivity.' },
    { title: 'Customer-First Transparency', desc: 'Clear communication, honest practices, and complete disclosure ensure confidence at every stage of the buying journey.' },
    { title: 'Trusted After-Sales Support', desc: 'Dedicated assistance beyond handover, helping homeowners enjoy a seamless and rewarding ownership experience.' }
  ];

  const milestones = [
    { year: '1980', title: 'Brick Factory', desc: 'The foundation of our journey began with quality brick manufacturing, building trust one brick at a time.' },
    { year: '1990', title: 'Construction', desc: 'Expanded into construction services, delivering durable structures backed by craftsmanship and commitment.' },
    { year: '2000', title: 'Raw Material Distribution', desc: 'Strengthened the construction ecosystem through reliable distribution of premium building materials across the region.' },
    { year: '2005', title: 'Landmark Projects', desc: 'Successfully executed large-scale residential and commercial developments, marking a new era of growth.' },
    { year: '2010', title: 'School & Institution Development', desc: 'Contributed to community development through the construction of educational institutions and learning spaces.' },
    { year: '2015', title: 'Civil Trade Expansion', desc: 'Broadened our expertise across civil trade services, supporting diverse infrastructure and development projects.' },
    { year: '2020', title: 'IT & ITES Infrastructure', desc: 'Entered the IT & ITES sector, creating future-ready spaces designed for innovation, business, and technology.' },
    { year: '2025', title: 'Digital Networking', desc: 'Embraced digital transformation by connecting businesses, communities, and opportunities through advanced networking solutions.' }
  ];

  return (
    <div>
      {/* Pushkar Style Hero & Legacy Banner */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-wrapper">
            {/* Yellow offset background block */}
            <div className="about-hero-bg-block"></div>

            {/* Banner card with image and overlays */}
            <div className="about-hero-card">
              <div className="about-hero-image-wrapper">
                <img src={imgInterior} alt="Covai Properties Premium Living" />
                
                {/* Left Overlay Stat */}
                <div className="about-hero-stat-left">
                  <span className="about-hero-stat-num">30+</span>
                  <span className="about-hero-stat-text">Years of Excellence<br />Earned Trust</span>
                </div>

                {/* Right Overlay Stat */}
                <div className="about-hero-stat-right">
                  <span className="about-hero-stat-num">500+</span>
                  <span className="about-hero-stat-text">Projects & Plots<br />Delivered with Trust</span>
                </div>

                {/* Bottom Overlay Title Badge */}
                <div className="about-hero-title-overlay">
                  <span className="about-hero-title-outline">Premium</span>
                  <span className="about-hero-title-solid">Living</span>
                </div>
              </div>

              {/* Center aligned introduction text block */}
              <div className="about-hero-desc-box">
                <p>
                  Founded in the 1990s, Covai Properties has grown into a trusted name in real estate development in Coimbatore, delivering premium residential plots, luxury villas, and high-value investment opportunities. Guided by complete transparency, Vastu compliance, and quality construction, we build addresses of security, comfort, and enduring value. With a commitment to strategic planning and customer-first service, we create communities that blend modern living with long-term appreciation for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section-neutral">
        <div className="container">
          <div className="features-grid">
            {values.map((val) => (
              <div className="feature-card" key={val.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}>
                  {val.icon}
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Covai Properties */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Differentiators</span>
            <h2 className="section-title">Why Covai Properties</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Delivering premium real estate developments with complete transparency</p>
          </div>

          <div className="services-grid">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit-card">
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.25rem', display: 'flex', width: '24px', height: '24px', backgroundColor: 'var(--accent-light)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{b.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.5' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senthil Kumar Managing Director Spotlight */}
      <section className="md-spotlight-section">
        {/* Background Watermark Header */}
        <div className="md-spotlight-watermark-bar">
          <span className="md-spotlight-watermark">TRUST & LEGACY</span>
        </div>

        <div className="container md-spotlight-container">
          {/* MD details */}
          <div className="md-spotlight-info">
            <h2 className="md-spotlight-name">SENTHIL KUMAR</h2>
            <div className="md-spotlight-badge">MANAGING DIRECTOR</div>
            
            <div className="md-spotlight-bio">
              <p>
                With a vision rooted in trust and a passion for creating lasting value, Senthil Kumar has been instrumental in shaping the growth and success of Covai Properties. He has dedicated himself to developing premium residential communities, helping families turn their dreams of property ownership into reality.
              </p>
              <p>
                Under his leadership, Covai Properties has earned a reputation for transparency, quality, and customer-first values. His deep understanding of real estate development, combined with a commitment to ethical business practices, has enabled the company to build strong relationships that span generations.
              </p>
              <p>
                Known for his hands-on approach and unwavering dedication, Senthil Kumar believes that every property is more than an investment—it is the foundation of a family's future. His vision continues to guide Covai Properties in creating trusted developments, vibrant communities, and lasting legacies for generations to come.
              </p>
            </div>
          </div>

          {/* MD portrait visual with decorative shape background */}
          <div className="md-spotlight-visual">
            <div className="md-spotlight-shape"></div>
            <img src={mdImg} alt="Senthil Kumar - Managing Director" className="md-spotlight-image" />
          </div>
        </div>
      </section>

      {/* Vertical Milestones timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>

          <div className="timeline">
            {milestones.map((m, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{m.title}</h3>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SBA Foundation Works */}
      <section className="section section-neutral">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Social Responsibility</span>
            <h2 className="section-title">Foundation & Honored of Excellence</h2>
          </div>

          <div className="owner-card" style={{ marginBottom: '4rem', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '1rem' }}>OUR FOUNDATION</h3>
            <p style={{ color: 'var(--accent-hover)', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>Building Communities Beyond Business</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.98rem' }}>
              At Covai Properties, our legacy is built not only through real estate development but also through meaningful contributions to society. We believe true success is measured by the lives we uplift and the communities we strengthen. Through education support, environmental initiatives, and child welfare programs, we remain committed to creating a positive impact for future generations.
            </p>
          </div>

          <div className="features-grid foundation-features-grid">
            <div className="feature-card" style={{ display: 'flex', gap: '1.25rem', padding: '2rem' }}>
              <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}>
                <BookOpen size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Education for Every Dream</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>We support underprivileged students by providing access to educational opportunities, helping young minds build a brighter and more independent future.</p>
              </div>
            </div>

            <div className="feature-card" style={{ display: 'flex', gap: '1.25rem', padding: '2rem' }}>
              <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}>
                <Leaf size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Greener Tomorrow Initiatives</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>Through plantation drives and environmental awareness campaigns, we actively contribute to creating healthier, greener, and more sustainable communities.</p>
              </div>
            </div>

            <div className="feature-card" style={{ display: 'flex', gap: '1.25rem', padding: '2rem' }}>
              <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}>
                <Heart size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Single Parent Child Care Support</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>We extend care and assistance to children from single-parent families, helping them access essential support, education, and opportunities for growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export { AboutUsPage };
