export default function Home() {
  const services = [
    { icon: '⛽', title: 'Fuel Retail', desc: 'With over 35,000 fuel stations across India, we ensure energy reaches every corner of the nation with quality and reliability.' },
    { icon: '🏭', title: 'Refineries', desc: 'Operating 11 refineries with a combined refining capacity of 80.7 MMTPA, producing a wide range of petroleum products.' },
    { icon: '🔋', title: 'LPG Distribution', desc: 'Providing clean cooking fuel to millions of households through our extensive LPG distribution network.' },
    { icon: '⚙️', title: 'Lubricants', desc: 'Market leader in lubricants with a comprehensive range for automotive, industrial, and marine applications.' },
    { icon: '🌱', title: 'Petrochemicals', desc: 'Producing essential petrochemicals that serve as building blocks for various industries.' },
    { icon: '⚡', title: 'Alternative Energy', desc: 'Leading India\'s transition to sustainable energy with investments in solar, wind, and biofuels.' }
  ];

  const stats = [
    { value: '35,000+', label: 'Fuel Stations' },
    { value: '11', label: 'Refineries' },
    { value: '80.7', label: 'MMTPA Capacity' },
    { value: '33,000+', label: 'Employees' }
  ];

  return (
    <>
      <section className="hero">
        <h2>Fueling India's Growth</h2>
        <p>India's largest commercial enterprise, Indian Oil has been serving the nation for over six decades with world-class products and services in the energy sector.</p>
      </section>

      <section className="content-section">
        <h2>Our Services</h2>
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

      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
