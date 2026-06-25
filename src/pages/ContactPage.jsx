import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';
import covaiRoyalEnclaveImg from '../assets/hero_villa.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out Name and Phone number.');
      return;
    }
    alert(`Thank you, ${formData.name}! Your contact message has been sent successfully.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section
        className="contact-page-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(7, 18, 34, 0.15), rgba(7, 18, 34, 0.85)), url(${covaiRoyalEnclaveImg})` }}
      >
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-left-panel">
              <div className="contact-branding">
                {/* <span>Covai Properties</span>
                <p>Web pages Contact us</p> */}
              </div>

              <div className="contact-hero-intro">
                <span className="contact-page-tagline">Your Search for a Coimbatore New House for Sale Ends Here</span>
                <h1>Get in Touch with Top Property Builders in Coimbatore</h1>
                <p className="contact-form-description">
                  Contact Covai Properties today and take the first step towards owning your dream home with premium villas, gated community homes, plots, and investment opportunities.
                </p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon"><MapPin size={18} /></div>
                  <div>
                    <p className="contact-info-label">Address</p>
                    <p>11/3, Thudiyalur Market Cut Rd, VSK Nagar East, Velamal Colony, Thudiyalur, Coimbatore, Tamil Nadu 641034</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"><Phone size={18} /></div>
                  <div>
                    <p className="contact-info-label">Contact Number</p>
                    <p><a href="tel:7200800066">7200800066</a><br /><a href="tel:7200800077">7200800077</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"><Mail size={18} /></div>
                  <div>
                    <p className="contact-info-label">Email Id</p>
                    <p><a href="mailto:info@covaiproperties.com">info@covaiproperties.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-social-block">
                <p className="contact-info-label">Follow us</p>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                </div>
              </div>

              <a
                href="https://wa.me/917200800066"
                target="_blank"
                rel="noreferrer"
                className="btn whatsapp-btn contact-whatsapp-btn"
              >
                <MessageSquare size={18} /> Direct WhatsApp Chat
              </a>
            </div>

            <div className="contact-right-panel">
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h2>Enquire Now</h2>
                  <p className="contact-card-subtitle">Hi, I am interested in this project</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export { ContactPage };
