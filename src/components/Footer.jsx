import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>©2025 JP Corwyn, LLC | Official website</p>
      <p>
        Connect: 
      </p>

       <div className="social-icons">
        <a href="https://www.facebook.com/JPCorwynOfficial" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://x.com/JPCorwyn" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/jpcorwyn/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.twitch.tv/jp_corwyn" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
      </div>

      
        <div className="Footer-contact">
          <a href="/bio#contact" className="footer-link">Contact</a>
          <a href="/Publisher" className="footer-link">Privacy Policy</a>
          <a href="https://4horsemenpublications.com/" target="_blank" rel="noopener noreferrer" className="footer-link">4 Horsemen Publications</a>
        </div>
        

    </footer>
  );
}

export default Footer;
