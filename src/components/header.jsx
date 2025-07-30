import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      
      {/* Logo Centered in Flex */}
      <div className="header-space">
        <img
          src={logo}
          className="logoheader"
          loading="lazy"
          alt="The Author"
          width="180"
        />
      </div>

      {/* Navigation - Left */}
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Writing</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/support">Latest News</Link></li>
          <li><Link to="/bio">About</Link></li>
          <li><Link to="/buy">Buy Now</Link></li>
        </ul>
      </nav>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
  



      {/* Spotify and Social - Right */}
      <div className="headerCTA">
        <div className="cta-button">
          <a href="/support" className="join-cadre-btn">
            ⚔️ Join Corwyn's Cadre
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;