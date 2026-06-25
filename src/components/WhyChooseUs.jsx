import React, { useState } from 'react';
import { Percent, Users, ShieldCheck, Play, X } from 'lucide-react';
import videoBg from '../assets/project_industrial.png';

export default function WhyChooseUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: <Percent size={22} />,
      title: 'Affordable Cost',
      desc: 'Optimized procurement channels and direct manufacturer partnerships reduce construction expenses by 15%.'
    },
    {
      id: 2,
      icon: <Users size={22} />,
      title: 'Our Experienced Team',
      desc: 'Our staff includes registered structural architects, civil planners, and seasoned quality assurance checkers.'
    },
    {
      id: 3,
      icon: <ShieldCheck size={22} />,
      title: 'Reliable Company',
      desc: 'We are a fully licensed organization in Chennai with thousands of sqft delivered under strict deadlines.'
    }
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="wcu-grid">
          {/* Benefit Items Column */}
          <div className="wcu-left">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="wcu-title">Built on Trust, Standards, and Excellence</h2>
            <div className="wcu-features">
              {benefits.map((item) => (
                <div className="wcu-item" key={item.id}>
                  <div className="wcu-item-icon">
                    {item.icon}
                  </div>
                  <div className="wcu-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Overlay Preview Column */}
          <div className="wcu-right">
            <div className="wcu-video">
              <img src={videoBg} alt="Video Preview Background" className="wcu-video-img" />
              <button 
                className="wcu-video-play-btn" 
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play construction video"
              >
                <Play fill="currentColor" size={24} style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay Iframe Modal */}
      {isVideoOpen && (
        <div className="modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="modal-content" style={{ maxWidth: '800px', padding: 0 }} onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              style={{ color: '#fff', top: '-2.5rem', right: '0' }} 
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={28} />
            </button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Construction Showcase"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
