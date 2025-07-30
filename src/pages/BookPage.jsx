import '../styles.css'; // Adjust if needed
import bookCover from '../assets/images/bookslide1.png'; 
import bookCover2 from '../assets/images/bookslide2.png';
import bookCover3 from '../assets/images/bookslide3.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header';  
import Footer from '../components/Footer'; 
import BackToTopButton from '../components/BackToTopButton';

export default function BookPage() {
  return (
    <>
    <Header />

    <main className="book-page">

      {/* Book Details Section */}
      <section className="book-detail-section">
        <div className="book-cover-container">
          <img src={bookCover} alt="Book Cover" className="book-cover" />
        </div>

        <div className="book-info">
          <h1 className="book-title">Cycle of Bones – Dawn of Unions</h1>
          <p className="book-description">
            Dive into the epic world of Skolf in "Cycle of Bones", the first installment in a high-fantasy series blending myth, music, and deep storytelling. Follow the journey of fated warriors and unravel secrets buried beneath ancient lands.
          </p>

          <div className="book-links">
            <a href="https://www.amazon.com/dummy-link" target="_blank" rel="noopener noreferrer" className="buy-link primary-buy">📘 Buy it now!</a>
            <a href="https://www.amazon.com/dummy-link" target="_blank" rel="noopener noreferrer" className="buy-link secondary-buy">📘 Buy on Amazon</a>
            <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">🎧 Listen on Spotify</a>
            <a href="https://goodreads.com/yourprofile" target="_blank" rel="noopener noreferrer">
              View my Goodreads reviews
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="book-reviews">
        <h2>What Readers Are Saying</h2>
        <div className="review-card">
          <p>“A gripping start to a series that promises epic scope and emotional depth.”</p>
          <span>– Fantasy Book Blog</span>
        </div>
        <div className="review-card">
          <p>“Characters you’ll love and a world you won’t want to leave. Can’t wait for the next!”</p>
          <span>– Verified Reader</span>
        </div>
      </section>

      {/* Explore More Books Section */}
      <section className="more-books">
        <h2>Explore Other Books</h2>
        <div className="book-grid">
          <div className="book-card">
            <img src={bookCover2} alt="Book 2" />
            <h3>Cycle of Bones – Drums of Unrest</h3>
            <Link to="/book2">Learn More</Link>
          </div>
          <div className="book-card">
            <img src={bookCover3} alt="Book 3" />
            <h3>Cycle of Bones – Eaters of Time</h3>
            <Link to="/book3">Learn More</Link>
          </div>
        </div>
      </section>

    </main>
    <BackToTopButton />
    <Footer />
    </>
  );
}