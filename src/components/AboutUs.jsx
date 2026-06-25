import React from 'react';
import { Check } from 'lucide-react';
import aboutImg from '../assets/project_commercial.png';

export default function AboutUs({ onOpenQuote }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual">
            <div className="about-img-frame">
              <img src={aboutImg} alt="Commercial Office Building Project" />
            </div>
            <div className="about-experience-badge">
              <span className="about-experience-num">9+</span>
              <span className="about-experience-text">Years Of Experience</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content">
            <span className="section-subtitle">About Hunter Property</span>
            <h2 className="about-title">Leading Construction & Interior Development Partner in Chennai</h2>
            <p className="about-desc">
              Hunter Property has established a reputation for top-tier residential house constructions, modern commercial centers, and high-end interior solutions. We combine advanced design principles, structural steel options, and premium building materials to deliver structures that stand the test of time.
            </p>

            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-list-icon">
                  <Check size={16} />
                </span>
                <div>
                  <p>100% Structural Quality & Transparency</p>
                </div>
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">
                  <Check size={16} />
                </span>
                <div>
                  <p>Government Approved Plans & Clear Legal Clearances</p>
                </div>
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">
                  <Check size={16} />
                </span>
                <div>
                  <p>Certified Vastu-Compliant Architects & Engineers</p>
                </div>
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">
                  <Check size={16} />
                </span>
                <div>
                  <p>Comprehensive Turnkey Construction Management</p>
                </div>
              </li>
            </ul>

            <button className="btn btn-secondary" onClick={onOpenQuote}>
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
