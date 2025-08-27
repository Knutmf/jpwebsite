import '../styles.css'; // Adjust if needed
import bookCover from '../assets/images/bookslide1.png'; 
import bookCover2 from '../assets/images/bookslide2.png';
import bookCover3 from '../assets/images/bookslide3.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Header from '../components/Header';  
import Footer from '../components/Footer'; 
import BackToTopButton from '../components/BackToTopButton';


export default function BookPage({ bookId }) {
  // Scroll to top whenever this component is mounted or bookId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  }, [bookId]);
  
  return (
    <>
    <Header />

    <main className="book-page">

      {/* Book Details Section */}
      <section className="book-detail-section">
  <div className="book-cover-container">
    <img src={bookCover} alt="Dawn of Unions book cover" className="book-cover" />
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
    <h2 className="book-title">Cycle of Bones – Dawn of Unions</h2>
    <p className="book-description">
     Kaith knows he’s been luckier than most. Born to a blacksmith, he’s grateful that hard work and good fortune have granted him a position as a man–at–arms in the Countess’s service. But when he accompanies her entourage to a joyful annual festival, the young man is shocked to find the village besieged, the people cursed, and Her Excellency’s knights slaughtered.
     Forced to shelter in the now–helpless town, Kaith and his fellow armsmen are charged with repelling the demonic enemy. But when the force that returns is an army of familiar faces twisted with lifeless malice, he fears his tiny contingent will soon join their ranks. Facing rampant terror with little hope, can Kaith prevent darkness from claiming anyone left standing?
     The Dawn of Unions is the first book in the sweeping Cycle of Bones, a dark military fantasy series. If you enjoy unlikely heroes, realistic battles, and fighting for survival, then you’ll love JP Corwyn’s gritty novella.

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
            <img src={bookCover2} alt="Book 2" />
            <h3>Drums of Unrest</h3>
            <h4>Cycle of Bones Book 2</h4>
            <Link to="/Drums">Learn More</Link>
          </div>
          <div className="book-card-read">
            <img src={bookCover3} alt="Book 3" />
            <h3>Eaters of Time</h3>
            <h4>Cycle of Bones Book 3</h4>
            <Link to="/eaters">Learn More</Link>
          </div>
        </div>
      </section>

    </main>
    <BackToTopButton />
    <Footer />
    </>
  );
}