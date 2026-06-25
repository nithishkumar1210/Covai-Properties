import React from 'react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Choose Service',
      desc: 'Select from our range of construction, interior, or legal licensing options.'
    },
    {
      step: '02',
      title: 'Free Consultation',
      desc: 'Meet with our architecture and engineering leads to discuss blueprints and Vastu.'
    },
    {
      step: '03',
      title: 'Estimate Budget',
      desc: 'Receive a transparent, itemized quotation listing materials and schedules.'
    },
    {
      step: '04',
      title: 'Project Production',
      desc: 'Our modular fabrication starts, followed by swift, premium site construction.'
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Execution Roadmap</span>
          <h2 className="section-title">Our Simple Process</h2>
        </div>

        <div className="process-grid">
          {steps.map((st) => (
            <div className="process-card" key={st.step}>
              <div className="process-step-num">
                {st.step}
              </div>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
