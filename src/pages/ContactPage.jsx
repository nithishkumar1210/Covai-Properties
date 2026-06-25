import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Gated Layout Plots',
    budget: '',
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
      projectType: 'Gated Layout Plots',
      budget: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Header */}
      <div className="subpage-header" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h1>Get in Touch with Top Property Builders in Coimbatore</h1>
          <p style={{ color: 'var(--text-light)', opacity: 0.95, fontSize: '1.05rem', maxWidth: '800px', margin: '0.75rem auto 0 auto' }}>
            Looking for real estate builders in Coimbatore? Get in touch with our expert team for premium villas, gated community homes, residential plots, and property investment opportunities.
          </p>
        </div>
      </div>

      {/* Grid Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side: Contact Information & Socials */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Contact Details</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '45px', height: '45px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-hover)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Office Address</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      11/3, Thudiyalur Market Cut Rd, VSK Nagar East, Velamal Colony, Thudiyalur, Coimbatore, Tamil Nadu 641034
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '45px', height: '45px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-hover)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      <a href="tel:7200800066" style={{ color: 'inherit' }}>+91 72008 00066</a><br />
                      <a href="tel:7200800077" style={{ color: 'inherit' }}>+91 72008 00077</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '45px', height: '45px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-hover)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Email Address</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      <a href="mailto:info@covaiproperties.com" style={{ color: 'inherit' }}>info@covaiproperties.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Chat Redirect */}
              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>Direct WhatsApp Chat</h4>
                <a 
                  href="https://wa.me/917200800066" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn whatsapp-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
                >
                  <MessageSquare size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Follow Us social links */}
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-neutral)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)' }}><Facebook size={18} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-neutral)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)' }}><Instagram size={18} /></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-neutral)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)' }}><Youtube size={18} /></a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div style={{ backgroundColor: 'var(--bg-neutral)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Send Us a Message</h2>
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-type">Project Type</label>
                    <select
                      id="contact-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Gated Layout Plots">Gated Layout Plots</option>
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Interior Designing">Interior Designing</option>
                      <option value="Legal & Approval Help">Legal & Approval Help</option>
                      <option value="Finance & Home Loan">Finance & Home Loan</option>
                      <option value="NRI Consultation">NRI Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-budget">Target Budget</label>
                    <input
                      type="text"
                      id="contact-budget"
                      name="budget"
                      placeholder="e.g., 20 Lakhs, 80 Lakhs"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">How Can We Help You?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Provide details about your target location, required land area, structure dimensions, etc."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export { ContactPage };
