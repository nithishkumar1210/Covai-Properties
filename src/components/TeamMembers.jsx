import React from 'react';
import imgFounder from '../assets/owner_portrait.png';
import imgMd from '../assets/senthil_kumar.png';
import imgArch from '../assets/team_architect.png';
import imgEng from '../assets/team_engineer.png';

export default function TeamMembers() {
  const team = [
    {
      id: 1,
      name: 'R. Krishnan',
      role: 'Founder & Chairman',
      image: imgFounder,
      desc: 'Over 30+ years of construction and land development experience in Tamil Nadu.'
    },
    {
      id: 2,
      name: 'Senthil Kumar',
      role: 'Managing Director',
      image: imgMd,
      desc: 'Spearheads strategic business operations and turnkey civil planning across Coimbatore.'
    },
    {
      id: 3,
      name: 'Anjali Nair',
      role: 'Chief Architect',
      image: imgArch,
      desc: 'Specialist in Vastu-compliant modern architectural concepts and 3D elevations.'
    },
    {
      id: 4,
      name: 'Vikram Sengupta',
      role: 'Lead Structural Engineer',
      image: imgEng,
      desc: 'Overlooks site civil structures, concrete load compliance, and safety standards.'
    }
  ];

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Our Team</span>
          <h2 className="section-title" style={{ fontSize: '2.25rem', color: 'var(--primary)' }}>Our Leadership & Professional Team</h2>
        </div>

        <div className="services-grid">
          {team.map((member) => (
            <div key={member.id} className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="service-card-img" style={{ height: '320px' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="service-card-content" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: '700' }}>{member.name}</h3>
                <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                  {member.role}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginTop: 'auto' }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { TeamMembers };
