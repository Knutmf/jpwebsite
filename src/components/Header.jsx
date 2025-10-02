import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Hamburger button */}
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Logo Centered */}
      <div className="header-space">
        <Link to="/">
          <img src={logo} className="logoheader" loading="lazy" alt="JP Corwyn logo" width="180" />
        </Link>
      </div>

      {/* Navigation - toggled with menuOpen */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Writing</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/latest">Latest News</Link></li>
          <li><Link to="/bio">About</Link></li>
          <li><Link to="/buy">Read Now</Link></li>
          <li><a href="https://jp-corwyn.creator-spring.com/" target="_blank" rel="noopener noreferrer">Merch</a></li>
        </ul>
      </nav>

      {/* Social + CTA */}
      <div className="social-icons">
        <a href="https://www.facebook.com/JPCorwynOfficial" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://x.com/JPCorwyn" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/jpcorwyn/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.twitch.tv/jp_corwyn" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
      </div>

      <div className="headerCTA">
        <div className="cta-button">
          <Link to="/support" className="join-cadre-btn">
            ⚔️ Join Corwyn's Cadre
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
