import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about" className={isActive('/about')}>About Us</Link>
        <Link to="/products" className={isActive('/products')}>Products</Link>
        <Link to="/services" className={isActive('/services')}>Services</Link>
        <Link to="/projects" className={isActive('/projects')}>Projects</Link>
        <Link to="/careers" className={isActive('/careers')}>Careers</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}
