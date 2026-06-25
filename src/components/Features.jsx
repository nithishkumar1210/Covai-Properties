import React from 'react';
import { CircleDollarSign, ClipboardCheck, DraftingCompass } from 'lucide-react';

export default function Features() {
  const featuresData = [
    {
      id: 1,
      icon: <CircleDollarSign />,
      title: 'The Best Price',
      desc: 'We provide competitive pricing schedules and fully itemized estimates with zero hidden overheads.'
    },
    {
      id: 2,
      icon: <ClipboardCheck />,
      title: 'Daily Consultant',
      desc: 'Receive constant updates, dedicated site supervisor logs, and progress reports at every step.'
    },
    {
      id: 3,
      icon: <DraftingCompass />,
      title: 'Custom Design',
      desc: 'Work closely with our certified Vastu architects to realize bespoke building layouts.'
    }
  ];

  return (
    <section className="section-neutral" style={{ paddingBottom: '3rem', pt: 0 }}>
      <div className="container">
        <div className="features-grid">
          {featuresData.map((feat) => (
            <div className="feature-card" key={feat.id}>
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
