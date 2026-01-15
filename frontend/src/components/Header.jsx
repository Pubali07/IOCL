import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';

export default function Header() {
  return (
    <header>
      <div className="header-main">
        <Link to="/" className="logo">
          <img src={logo} alt="Indian Oil Logo" />
          
        </Link>
        
      </div>
    </header>
  );
}
