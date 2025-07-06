import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1>JP Corwyn</h1>
      <p>Artist & Writer</p>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Cycle of Bones</a></li>
           <li><a href="#support">Support</a></li>
           <li><a href="#socialmedia">Social Media</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
    </header>
  );
}

export default Header;