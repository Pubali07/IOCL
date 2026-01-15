import { useState } from 'react';

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    qualification: '',
    experience: '',
    coverLetter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will review your application.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      qualification: '',
      experience: '',
      coverLetter: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const jobs = [
    {
      title: 'Graduate Engineer Trainee - Mechanical',
      meta: { location: 'Multiple Locations', type: 'Full Time', qual: 'B.E./B.Tech Mechanical' },
      desc: 'We are looking for bright engineering graduates to join our refinery operations across India. Fresh graduates with strong technical knowledge and passion for the energy sector are encouraged to apply.'
    },
    {
      title: 'Junior Engineer Assistant - Chemical',
      meta: { location: 'Gujarat, Maharashtra', type: 'Full Time', qual: 'B.Sc. Chemistry/B.Tech Chemical' },
      desc: 'Seeking qualified chemical engineers to support our refinery operations. Candidates should have knowledge of petrochemical processes and quality control procedures.'
    },
    {
      title: 'Management Trainee - Marketing',
      meta: { location: 'Pan India', type: 'Full Time', qual: 'MBA Marketing' },
      desc: 'Join our marketing team to drive brand strategy and customer engagement. Ideal for MBA graduates with strong analytical and communication skills.'
    },
    {
      title: 'Senior Manager - Supply Chain',
      meta: { location: 'New Delhi', type: 'Full Time', qual: 'MBA/B.Tech + 8-10 years exp' },
      desc: 'Lead supply chain optimization initiatives for our petroleum products distribution network. Experience in logistics and supply chain management essential.'
    },
    {
      title: 'Research Officer - R&D',
      meta: { location: 'Faridabad', type: 'Full Time', qual: 'M.Tech/M.Sc. Chemistry' },
      desc: 'Join our R&D center to work on innovative fuel formulations and clean energy technologies. Strong research background and publication record preferred.'
    }
  ];

  return (
    <>
      <section className="hero">
        <h2>Build Your Career With Us</h2>
        <p>Join India's largest energy company and power your future</p>
      </section>

      <section className="content-section">
        <h2>Current Openings</h2>
        <div className="job-listings">
          {jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <div className="job-meta">
                <span>📍 {job.meta.location}</span>
                <span>�� {job.meta.type}</span>
                <span>🎓 {job.meta.qual}</span>
              </div>
              <p>{job.desc}</p>
              <button className="btn" style={{ marginTop: '15px' }}>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ background: '#f5f5f5', padding: '60px 20px', marginTop: '60px' }}>
        <h2>Application Form</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select id="position" name="position" value={formData.position} onChange={handleChange} required>
                <option value="">Select Position</option>
                <option value="get-mechanical">Graduate Engineer Trainee - Mechanical</option>
                <option value="jea-chemical">Junior Engineer Assistant - Chemical</option>
                <option value="mt-marketing">Management Trainee - Marketing</option>
                <option value="sm-supply">Senior Manager - Supply Chain</option>
                <option value="ro-rd">Research Officer - R&D</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="qualification">Highest Qualification *</label>
              <input type="text" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">Years of Experience</label>
              <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} min="0" />
            </div>
            
            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Tell us why you want to join Indian Oil..."></textarea>
            </div>
            
            <button type="submit" className="btn">Submit Application</button>
          </form>
        </div>
      </section>

      <section className="content-section">
        <h2>Why Work With Us?</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Learning & Development</h3>
            <p>Comprehensive training programs and opportunities for professional growth throughout your career.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💰</div>
            <h3>Competitive Compensation</h3>
            <p>Industry-leading salary packages with performance bonuses and comprehensive benefits.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Health & Wellness</h3>
            <p>Excellent medical coverage for employees and families, plus wellness programs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌟</div>
            <h3>Work-Life Balance</h3>
            <p>Flexible work arrangements and supportive policies for employee well-being.</p>
          </div>
        </div>
      </section>
    </>
  );
}
