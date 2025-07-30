import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>© 2025 JP Corwyn | Official page</p>
      <p>
        Connect: 
      </p>

       <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      
        <div className="Footer-contact">
          <a href="/bio#contact" className="footer-link">Contact</a>
          <a href="/Publisher" className="footer-link">Publisher</a>
        </div>
        

    </footer>
  );
}

export default Footer;