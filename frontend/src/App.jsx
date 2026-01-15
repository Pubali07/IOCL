import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
