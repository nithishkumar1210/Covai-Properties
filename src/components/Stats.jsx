import React from 'react';

export default function Stats() {
  const statsData = [
    { number: '9+', label: 'Years of Experience' },
    { number: '134+', label: 'Completed Projects' },
    { number: '100+', label: 'Happy Clients' },
    { number: '120+', label: 'Staff Experts' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
