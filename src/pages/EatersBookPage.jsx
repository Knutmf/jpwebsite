import '../styles.css'; // Adjust if needed
import bookCover from '../assets/images/bookslide1.png'; 
import bookCover2 from '../assets/images/bookslide2.png';
import bookCover3 from '../assets/images/bookslide3.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer'; 
import BackToTopButton from '../components/BackToTopButton';

export default function EatersBookPage() {
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main className="book-page">
        {/* Book Details Section */}
        <section className="book-detail-section">
          <div className="book-cover-container">
            <img src={bookCover3} alt="Eaters of Time book cover" className="book-cover" />
            <div className="book-links">
              <a href="https://www.amazon.com/dummy-link" target="_blank" rel="noopener noreferrer" className="buy-link primary-buy">📘 Buy it now!</a>
              <a href="https://www.amazon.com/dummy-link" target="_blank" rel="noopener noreferrer" className="buy-link secondary-buy">📘 Buy on Amazon</a>
              <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">🎧 Listen on Spotify</a>
              <a href="https://goodreads.com/yourprofile" target="_blank" rel="noopener noreferrer">
                View my Goodreads reviews
              </a>
            </div>
          </div>

          <div className="book-info">
            <h2 className="book-title">Cycle of Bones – Eaters of Time</h2>
            <p className="book-description">
              In the north<br />
              When an unknown enemy army appears as if by magic near the count’s encampment, Lady Kastan must outthink, outrun, and outfight their vanguard. After witnessing strange sorcery that hints at a monstrous secret, she knows death is on the wind. Can she warn the nearby encampment in time?
              To rescue her kidnapped son, Lashjuk sneaks behind enemy lines. New to the way of the spear, and wielding a power she’s just beginning to understand, she’ll be forced to play a deadly game of cat and mouse if she has any hope of bringing her boy home.<br />
              In the south<br />
              As cradle-tale monsters attack northern Thorion, the newly minted Sir Kaith’s courage and skill as a leader will be pushed to the limit. Can the young knight ward off the attackers, counter their cunning, and save the settlement before it’s too late?
              Meanwhile, alone and unsupported, Sir Jastar begins the delicate and dangerous work of infiltrating the once-haunted lands north of Thorion. Unprepared for both who and what he finds, the enormity of his task begins to overwhelm him. Can Jast unearth the secrets of this land’s power in time to save the Thorion Throne?

            </p>

            <section className="book-reviews">
              <h3>What Readers Are Saying</h3>
              <div className="review-card">
                <p>“A gripping start to a series that promises epic scope and emotional depth.”</p>
                <span>– Fantasy Book Blog</span>
              </div>
              <div className="review-card">
                <p>“Characters you’ll love and a world you won’t want to leave. Can’t wait for the next!”</p>
                <span>– Verified Reader</span>
              </div>
            </section>
          </div>
        </section>

        {/* Explore More Books Section */}
        <section className="more-books">
          <h2>Explore Other Books</h2>
          <div className="book-grid">
            <div className="book-card-read">
              <img src={bookCover} alt="Book 1" />
              <h3>Dawn of Unions</h3>
              <h4>Cycle of Bones Book 1</h4>
              <Link to="/Buy">Learn More</Link>
            </div>
            <div className="book-card-read">
              <img src={bookCover2} alt="Book 2" />
              <h3>Drums of Unrest</h3>
              <h4>Cycle of Bones Book 2</h4>
              <Link to="/Drums">Learn More</Link>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
