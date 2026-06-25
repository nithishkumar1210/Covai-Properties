import React from 'react';
import { Shield, ClipboardCheck, Award, Activity } from 'lucide-react';

export default function SafetyStandards() {
  const standards = [
    {
      id: 1,
      icon: <Shield size={28} />,
      title: 'Zero Accident Commitment',
      desc: 'We implement strict site protocols, hazard identification matrices, and emergency response drills to ensure a zero-harm workspace.'
    },
    {
      id: 2,
      icon: <ClipboardCheck size={28} />,
      title: '100% PPE Gear Compliance',
      desc: 'Mandatory high-visibility helmets, safety harnesses, protective eyewear, and steel-toed footwear are enforced across all site activities.'
    },
    {
      id: 3,
      icon: <Award size={28} />,
      title: 'ISO & Government Auditing',
      desc: 'Adherence to international structural durability standards and local regulatory building clearances to guarantee enduring project quality.'
    },
    {
      id: 4,
      icon: <Activity size={28} />,
      title: 'Regular Structural Testing',
      desc: 'Soil load testing, concrete core compression tests, and steel tensile strength logs are maintained by certified independent labs.'
    }
  ];

  return (
    <section className="section section-neutral" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Safety First</span>
          <h2 className="section-title" style={{ fontSize: '2.25rem', color: 'var(--primary)' }}>Our Safety Standards & Quality Codes</h2>
        </div>

        <div className="services-grid">
          {standards.map((std) => (
            <div key={std.id} style={{ backgroundColor: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s' }} className="feature-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {std.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '700' }}>{std.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{std.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { SafetyStandards };
