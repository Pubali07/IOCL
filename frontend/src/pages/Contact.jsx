import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactCards = [
    { icon: '📞', title: 'Customer Care', content: 'Toll-Free: 1800-2333-555', sub: 'Available 24/7' },
    { icon: '📧', title: 'Email Us', content: 'customercare@iocl.co.in', sub: "We'll respond within 24 hours" },
    { icon: '📍', title: 'Head Office', content: 'Indian Oil Bhavan, G-9, Ali Yavar Jung Marg', sub: 'Bandra (East), Mumbai - 400051' }
  ];

  const regionalOffices = [
    { region: 'Northern Region', city: 'New Delhi', address: 'Core-2, Scope Complex, 7 Lodhi Road', pin: 'New Delhi - 110003', phone: '011-24360520' },
    { region: 'Southern Region', city: 'Chennai', address: '97, Haddows Road', pin: 'Chennai - 600006', phone: '044-28272535' },
    { region: 'Eastern Region', city: 'Kolkata', address: 'Infinity Benchmark, 10th Floor', pin: 'Kolkata - 700156', phone: '033-23372496' },
    { region: 'Western Region', city: 'Mumbai', address: 'IndianOil Bhavan', pin: 'Mumbai - 400051', phone: '022-26443636' }
  ];

  return (
    <>
      <section className="hero">
        <h2>Contact Us</h2>
        <p>We're here to help you with any queries or concerns</p>
      </section>

      <section className="content-section">
        <div className="contact-info">
          {contactCards.map((contact, idx) => (
            <div key={idx} className="contact-card">
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p><strong>{contact.content}</strong></p>
              <p>{contact.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ background: '#f5f5f5', padding: '60px 20px' }}>
        <h2>Send Us a Message</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a subject</option>
                <option value="product">Product Inquiry</option>
                <option value="service">Service Request</option>
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Please provide details about your inquiry..."></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      <section className="content-section">
        <h2>Regional Offices</h2>
        <div className="service-grid">
          {regionalOffices.map((office, idx) => (
            <div key={idx} className="service-card">
              <h3>{office.region}</h3>
              <p><strong>{office.city}</strong></p>
              <p>{office.address}</p>
              <p>{office.pin}</p>
              <p>📞 {office.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
