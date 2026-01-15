import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Indian Oil</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#">Tenders</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Locate Fuel Station</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Corporate</h3>
          <ul>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">CSR Initiatives</a></li>
            <li><a href="#">Media Center</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Indian Oil Corporation Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
