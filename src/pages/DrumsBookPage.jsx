import bookCover from '../assets/images/bookslide1.png'; 
import bookCover2 from '../assets/images/bookslide2.png';
import bookCover3 from '../assets/images/bookslide3.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer'; 
import BackToTopButton from '../components/BackToTopButton';
import { Helmet } from "@vuer-ai/react-helmet-async";

export default function DrumsBookPage() {
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
     <Helmet>
            <title>Drums of Unrest | JP Corwyn</title>
            
            {/* Meta description */}
            <meta
              name="description"
              content="Drums of Unrest is a dark fantasy novell in the Cycle of Bones series by JP Corwyn. As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy. "
            />
    
            {/* Meta keywords */}
            <meta
              name="keywords"
              content="Cycle of Bones, dark fantasy, military fantasy, horror fantasy, gritty fantasy, first novell, fantasy series, epic saga, flawed hero, sacrifice and duty, rising dead / undead army, shadows and malice, realistic battles, grimdark fantasy, war-torn world, swords and shields, desperate skirmishes"
            />
    
            {/* Open Graph / Social Sharing */}
            <meta property="og:title" content="Drums of Unrest by JP Corwyn" />
            <meta
              property="og:description"
              content="As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy. "
            />
            <meta property="og:image" content="../assets/images/bookslide2.png" />
          </Helmet>
      <Header />

      <main className="book-page">
        {/* Book Details Section */}
        <section className="book-detail-section">
          <div className="book-cover-container">
            <img src={bookCover2} alt="Drums of Unrest book cover" className="book-cover" />
            <div className="book-links">
              <a href="https://4horsemenpublications.com/product/the-drums-of-unrest-the-cycle-of-bones-1/" target="_blank" rel="noopener noreferrer" className="buy-link primary-buy">📘 Buy it now!</a>
              <a href="https://www.amazon.com/Drums-Unrest-Cycle-Bones-Book-ebook/dp/B0D124WN8Q?ref_=ast_author_dp" target="_blank" rel="noopener noreferrer" className="buy-link secondary-buy">📘 Buy on Amazon</a>
              <a href="https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=W1CunDOrR1CDoBkBf1oi5w" target="_blank" rel="noopener noreferrer" className="spotify-link">🎧 Listen on Spotify</a>
              <a href="https://www.goodreads.com/book/show/55936065-the-drums-of-unrest" target="_blank" rel="noopener noreferrer">
                View my Goodreads reviews
              </a>
            </div>
          </div>

          <div className="book-info">
            <h2 className="book-title">Cycle of Bones – Drums of Unrest</h2>
            <p className="book-description">
            In the wake of that unearthly siege, the foundations of power across Skolf begin to crumble. Kaith and his fellows must fight the phantoms of their own minds, even as County Thorion prepares for the war to come. The King of the Dead—the only enemy that truly matters—has spent centuries in exile somewhere “outside,” biding his time. His agents have shown a terrible patience as they gather power and influence for the day of his return… a day that draws ever closer. When all paths seem ill, Eobum, a man born to the spear, will be forced to make an impossible choice.<br /><br />

            But truth has power. Those willing to speak the truth can make an impact felt miles, even worlds away without ever knowing it.<br /><br />

            The Drums of Unrest is the first book in the sweeping Cycle of Bones dark military fantasy series, following the prequel Dawn of Unions. If you enjoy unlikely heroes, realistic battles, and fighting for survival, then you’ll love JP Corwyn’s gritty return to the world of Skolf.

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
              <img src={bookCover3} alt="Book 3" />
              <h3>Eaters of Time</h3>
              <h4>Cycle of Bones Book 3</h4>
              <Link to="/Eaters">Learn More</Link>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
