import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Covai Properties built our dream villa in Kovaipudur. From Vastu layout planning to civil framing and modular woodwork, their quality control was absolutely flawless.",
      author: "Rajesh Kumar",
      title: "Home Owner, Kovaipudur"
    },
    {
      id: 2,
      text: "We purchased a DTCP approved gated layout plot in Saravanampatti. The legal documentation check and patta transfer were handled by their team with zero stress.",
      author: "Sneha Sundaram",
      title: "Plot Owner, Saravanampatti"
    },
    {
      id: 3,
      text: "Their NRI investment assistance was outstanding. Being based in Singapore, they sent us weekly drone construction updates and helped us manage banking approvals smoothly.",
      author: "Anand Viswanathan",
      title: "NRI Investor, Singapore"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section section-neutral">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Customer Feedback</span>
          <h2 className="section-title">What Our Happy Families Say</h2>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <Quote size={48} style={{ display: 'inline-block' }} />
            </div>
            <p className="testimonial-text">
              "{current.text}"
            </p>
            <div className="testimonial-author">
              <h4>{current.author}</h4>
              <span>{current.title}</span>
            </div>
          </div>

          <div className="testimonials-nav">
            <button 
              className="testimonials-nav-btn" 
              onClick={handlePrev}
              aria-label="Previous feedback"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="testimonials-nav-btn" 
              onClick={handleNext}
              aria-label="Next feedback"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
