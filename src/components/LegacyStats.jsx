import React from 'react';

export default function LegacyStats() {
  const stats = [
    { number: '3+ Decades', label: 'Of Experience' },
    { number: '150+', label: 'Projects Developed' },
    { number: '500+', label: 'Happy Families' }
  ];

  return (
    <section className="section-dark" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left legacy text content */}
        <div>
          <span className="section-subtitle">Our Heritage</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: '1.2', color: '#fff' }}>
            A legacy built through generations of relationships, not just transactions.
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            We have been privileged to be part of countless family journeys, helping turn aspirations into addresses and dreams into lasting homes. Our greatest achievement is not the properties we have developed, but the trust that continues to be passed from one generation to the next.
          </p>
        </div>

        {/* Right metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '2rem 1.5rem' }}>
              <span className="stat-number" style={{ fontSize: '3rem', color: 'var(--accent)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                {stat.number}
              </span>
              <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { LegacyStats };
