import { Helmet } from "@vuer-ai/react-helmet-async";
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
       <Helmet>
        <title>JP Corwyn | Dawn of Unions</title>
        
        {/* Meta description */}
        <meta
          name="description"
          content="Dawn of Unions is a dark fantasy novella and prequel to the Cycle of Bones series by JP Corwyn. Survival, sacrifice, and brutal choices in a cursed village filled with demonic horrors and realistic battles."
        />

        {/* Meta keywords */}
        <meta
          name="keywords"
          content="Cycle of Bones, dark fantasy, military fantasy, horror fantasy, gritty fantasy, prequel novella, fantasy series, epic saga, unlikely hero, survival against impossible odds, cursed village, demonic horrors, realistic battles, grimdark fantasy, survival, sacrifice, brutal choices"
        />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Dawn of Unions by JP Corwyn" />
        <meta
          property="og:description"
          content="A grimdark fantasy novella in the Cycle of Bones series. Dark fantasy, demonic horrors, survival, and brutal choices."
        />
        <meta property="og:image" content="../assets/images/bookslide1.png" />
      </Helmet>



    <Header />
    <main className="book-page">

      {/* Book Details Section */}
      <section className="book-detail-section">
  <div className="book-cover-container">
    <img src={bookCover} alt="Dawn of Unions book cover" className="book-cover" />
    <div className="book-links">
      <a href="https://4horsemenpublications.com/product/the-dawn-of-unions-the-cycle-of-bones-0/" target="_blank" rel="noopener noreferrer" className="buy-link primary-buy">📘 Buy it now!</a>
      <a href="https://www.amazon.com/Dawn-Unions-Cycle-Bones-ebook/dp/B0CR64J7FB?ref_=ast_author_dp" target="_blank" rel="noopener noreferrer" className="buy-link secondary-buy">📘 Buy on Amazon</a>
      <a href="https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=eL94ydLTRea15nef4fypkg" target="_blank" rel="noopener noreferrer" className="spotify-link">🎧 Listen on Spotify</a>
      <a href="https://www.goodreads.com/book/show/48891396-the-dawn-of-unions" target="_blank" rel="noopener noreferrer">
        View my Goodreads reviews
      </a>
    </div>
  </div>

  <div className="book-info">
    <h2 className="book-title">Cycle of Bones – Dawn of Unions</h2>
    <p className="book-description">
    Kaith knows he’s been luckier than most. Born to a blacksmith, he’s grateful that hard work and fortune earned him a position as a man-at-arms in the Countess’s service. But when he accompanies her entourage to a joyful annual festival, the young soldier is shocked to find the village besieged, its people cursed, and Her Excellency’s knights slaughtered.<br /><br />

     Trapped inside the helpless town, Kaith and his fellow armsmen must stand against a terrifying enemy. But when the force that rises against them is an army of familiar faces—friends and kin twisted into lifeless horrors—he fears his small contingent will soon join their ranks. Facing rampant terror with little hope, can Kaith prevent darkness from claiming anyone left standing?<br />
     The Dawn of Unions is the first book and novella to the Cycle of Bones, a dark military fantasy series.<br /><br />

     If you like…<br />
     - Unlikely heroes standing against impossible odds<br />
     - Realistic battles where every decision counts<br />
     - A dark fantasy survival story against demonic horrors


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
