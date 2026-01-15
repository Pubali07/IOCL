export default function About() {
  const stats = [
    { value: '₹7.89 Lakh Cr', label: 'Annual Turnover' },
    { value: '48%', label: 'Market Share' },
    { value: '1959', label: 'Year Founded' },
    { value: 'Fortune 100', label: 'Global Ranking' }
  ];

  return (
    <>
      <section className="hero">
        <h2>About Indian Oil</h2>
        <p>Powering India's progress since 1959</p>
      </section>

      <section className="content-section">
        <div className="about-content">
          <p>Indian Oil Corporation Limited, or IndianOil, is India's largest commercial enterprise, with a sales turnover of ₹7,89,279 crore and profits of ₹39,312 crore for the year 2022-23. IndianOil's sales account for nearly 48% of India's petroleum products market share.</p>

          <h3>Our Vision</h3>
          <p>To be a globally admired company, pioneering energy transition and enabling a sustainable future.</p>

          <h3>Our Mission</h3>
          <p>To achieve international standards of excellence in all aspects of energy and diversified business with focus on customer delight through value-driven organization committed to social responsibility and environmental care.</p>

          <h3>Our Heritage</h3>
          <p>Indian Oil was founded in 1959 to reduce India's dependence on foreign oil companies. Over the decades, we have grown to become the country's flagship national oil company with a strong presence across the entire hydrocarbon value chain.</p>

          <h3>Our Network</h3>
          <p>We operate through a vast network of installations and marketing facilities across India and abroad. Our refineries process crude oil into various petroleum products, which are then distributed through our extensive network of pipelines, terminals, and retail outlets.</p>

          <h3>Corporate Social Responsibility</h3>
          <p>We are deeply committed to the welfare of society and sustainable development. Our CSR initiatives focus on education, healthcare, community development, environment conservation, and skill development across the country.</p>

          <h3>Innovation & Technology</h3>
          <p>Our R&D center works continuously on developing cleaner fuels, improving refinery processes, and creating sustainable energy solutions. We are at the forefront of India's transition to cleaner and greener energy alternatives.</p>
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
