export default function Products() {
  const products = [
    { icon: '⛽', title: 'Automotive Fuels', desc: 'Premium petrol (XP95, XP100), diesel, CNG, and other high-performance fuels for vehicles.' },
    { icon: '🔋', title: 'LPG', desc: 'Indane LPG for domestic and commercial use. Clean, efficient cooking gas for millions of households.' },
    { icon: '⚙️', title: 'Lubricants', desc: 'Servo brand lubricants for automotive, industrial, and marine applications. India\'s No. 1 lubricant brand.' },
    { icon: '✈️', title: 'Aviation Fuels', desc: 'Aviation turbine fuel (ATF) and aviation gasoline for commercial and defense aviation.' },
    { icon: '🏭', title: 'Industrial Fuels', desc: 'Furnace oil, bitumen, petroleum coke, and other industrial petroleum products.' },
    { icon: '🌱', title: 'Petrochemicals', desc: 'Paraxylene, purified terephthalic acid, linear alkyl benzene, and other petrochemical products.' },
    { icon: '🛢️', title: 'Greases', desc: 'Specialized greases for automotive, industrial, and specialty applications.' },
    { icon: '🚢', title: 'Marine Products', desc: 'Marine fuels and lubricants meeting international specifications for shipping industry.' },
    { icon: '⚡', title: 'Alternative Energy', desc: 'Biofuels, ethanol-blended petrol, biodiesel, and other renewable energy products.' }
  ];

  return (
    <>
      <section className="hero">
        <h2>Our Products</h2>
        <p>Comprehensive range of petroleum products for every need</p>
      </section>

      <section className="content-section">
        <h2>Product Categories</h2>
        <div className="service-grid">
          {products.map((product, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ background: '#f5f5f5', padding: '60px 20px' }}>
        <h2>Featured Products</h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>XP Premium Petrol Range</h3>
          <p>Our premium petrol variants - XP95 and XP100 - are specially formulated to provide superior engine performance, better mileage, and reduced emissions.</p>

          <h3>Servo Lubricants</h3>
          <p>India's largest selling lubricant brand, Servo offers a complete range of automotive and industrial lubricants backed by world-class R&D and quality assurance.</p>

          <h3>Indane LPG</h3>
          <p>Indane is India's most trusted LPG brand, serving over 90 million domestic customers and numerous commercial establishments across the country.</p>
        </div>
      </section>
    </>
  );
}
