import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Dream Home Construction',
    budget: '',
    message: ''
  });

  if (!isOpen) return null;

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
    // Simulate API request
    showToast(`Thank you, ${formData.name}! Your request for "${formData.projectType}" has been sent.`);
    onClose();
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Dream Home Construction',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2>Request a Free Quote</h2>
          <p>Get in Touch with our Construction Experts</p>
        </div>

        <div className="modal-body">
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="modal-name">Your Full Name *</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">Email Address</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modal-type">Project Typology</label>
                <select
                  id="modal-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="Dream Home Construction">Dream Home Construction</option>
                  <option value="Interior Design Solutions">Interior Design Solutions</option>
                  <option value="Property Legal Services">Property Legal Services</option>
                  <option value="Commercial Office Building">Commercial Office Building</option>
                  <option value="Other Project">Other Project</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-budget">Estimated Budget</label>
                <input
                  type="text"
                  id="modal-budget"
                  name="budget"
                  placeholder="e.g., 25 Lakhs, 1 Crore"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modal-message">Brief Project Description</label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                placeholder="Describe your site details, required area in sqft, etc."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
