import React from 'react';
import { Scale, Heart, ShieldCheck } from 'lucide-react';

export default function FeaturesList() {
  const features = [
    {
      id: 1,
      icon: <Scale size={28} />,
      title: 'Transparent Pricing',
      subtitle: 'No Hidden Costs, Only Honest Commitments',
      desc: 'Every investment is backed by complete transparency, fair pricing, and clear communication, giving you the confidence to move forward without surprises.'
    },
    {
      id: 2,
      icon: <ShieldCheck size={28} />,
      title: 'Trusted Guidance',
      subtitle: 'With You at Every Step of the Journey',
      desc: 'From your first inquiry to project completion, our team provides dedicated support, regular updates, and expert guidance you can always rely on.'
    },
    {
      id: 3,
      icon: <Heart size={28} />,
      title: 'Homes Designed Around Your Dreams',
      subtitle: 'Creating Spaces That Feel Truly Yours',
      desc: "Every home is thoughtfully planned to reflect your lifestyle, aspirations, and future needs, turning your vision into a place you'll cherish for generations."
    }
  ];

  return (
    <section className="section section-neutral" style={{ paddingBottom: '4rem' }}>
      <div className="container">
        <div className="features-grid">
          {features.map((feat) => (
            <div className="feature-card" key={feat.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-hover)' }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--primary)' }}>{feat.title}</h3>
              <p style={{ color: 'var(--accent-hover)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {feat.subtitle}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: 'auto' }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
