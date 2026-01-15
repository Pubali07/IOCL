export default function Services() {
  const services = [
    { icon: '⛽', title: 'Retail Fueling', desc: 'Over 35,000 fuel stations across India providing quality fuels and automotive services with IndianOil One loyalty program.' },
    { icon: '🏢', title: 'Commercial & Industrial Supply', desc: 'Bulk fuel supply, lubricants, and LPG solutions for businesses, industries, and institutions.' },
    { icon: '🚛', title: 'Fleet Management', desc: 'Comprehensive fleet fueling solutions with fuel cards, online tracking, and invoice management.' },
    { icon: '✈️', title: 'Aviation Services', desc: 'Into-plane fueling services at major airports across India for commercial and defense aviation.' },
    { icon: '🏠', title: 'LPG Distribution', desc: 'Indane LPG home delivery service with online booking, subscription, and customer support.' },
    { icon: '⚡', title: 'EV Charging', desc: 'Electric vehicle charging infrastructure at select fuel stations under the brand name \'Indian Oil ONE\'.' },
    { icon: '🛢️', title: 'Lubricant Services', desc: 'Expert lubrication advisory, oil analysis, and maintenance support for automotive and industrial customers.' },
    { icon: '🌐', title: 'Online Services', desc: 'Digital platforms for LPG booking, fuel station locator, payments, and customer service.' },
    { icon: '🔧', title: 'Swagat Service Stations', desc: 'Premium service stations offering fuel, convenience store, food court, and vehicle care services.' }
  ];

  return (
    <>
      <section className="hero">
        <h2>Our Services</h2>
        <p>Comprehensive energy solutions for every sector</p>
      </section>

      <section className="content-section">
        <h2>Business Services</h2>
        <div className="service-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ background: '#f5f5f5', padding: '60px 20px' }}>
        <h2>Customer Services</h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>IndianOil One Loyalty Program</h3>
          <p>Earn reward points on every fuel purchase and redeem them for fuel, lubricants, or merchandise at our retail outlets.</p>

          <h3>24/7 Customer Care</h3>
          <p>Our dedicated customer care team is available round the clock to assist you with queries, complaints, and service requests. Call 1800-2333-555.</p>

          <h3>Digital Services</h3>
          <p>Access our mobile app for LPG booking, payment tracking, service requests, and to locate the nearest fuel station or LPG distributor.</p>

          <h3>SERVO Care Program</h3>
          <p>Free lubrication advisory services and oil analysis for industrial customers to optimize equipment performance and reduce downtime.</p>
        </div>
      </section>
    </>
  );
}
