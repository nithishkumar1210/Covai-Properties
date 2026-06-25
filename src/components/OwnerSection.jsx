import React from 'react';
import ownerImg from '../assets/owner_portrait.png';

export default function OwnerSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-neutral)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Leadership Spotlight</span>
          <h2 className="section-title">Message From Our Founder</h2>
        </div>

        <div className="owner-card">
          <p className="owner-quote">
            "At Covai Properties, our foundation is built on trust, transparency, and lifelong relationships. We don't just build structural spaces; we construct addresses of security, spaces of comfort, and generational milestones for families in Coimbatore. Over three decades, we have remained committed to complete transparency, Vastu alignment, and turnkey delivery."
          </p>
          <div className="owner-profile">
            <img src={ownerImg} alt="R. Krishnan - Founder & MD" className="owner-avatar" />
            <div className="owner-info">
              <h4>R. Krishnan</h4>
              <p>Founder & Managing Director, Covai Properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
