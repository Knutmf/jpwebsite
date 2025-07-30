import { useEffect } from 'react';
import Bookslideone from '../assets/images/bookslide1.png';
import Bookslidetwo from '../assets/images/bookslide2.png';
import Bookslidethree from '../assets/images/bookslide3.png';
import albumcover1 from '../assets/images/albumcover1.jpg';
import albumcover2 from '../assets/images/albumcover2.jpg';
import albumcover3 from '../assets/images/albumcover3.png';
import { FaPatreon } from 'react-icons/fa';


function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const quote = document.querySelector('.quote-section');
      if (!quote) return;

      const fadeStart = 0;       // when fade begins
      const fadeUntil = 800;     // increase this for slower fade

      const scroll = window.scrollY;
      const opacity = 1 - Math.min(1, Math.max(0, (scroll - fadeStart) / (fadeUntil - fadeStart)));
      quote.style.opacity = opacity;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="home-page">

      {/* Quote Section */}
      <section className="quote-section">
        <h1 className="quote-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        </h1>
      </section>

      {/* Latest Releases Section */}
      <section className="latest-releases">
        <h2>Latest Releases</h2>
        <div className="release-cards">
          <div className="release-card">
            <h3>Latest Book Title</h3>
            <p>Brief description of the latest book release. Engaging and concise copy to entice fans.</p>
          </div>
          <div className="release-card">
            <h3>New Music Album</h3>
            <p>Short description of the newest music album, including genre, vibe, or special notes.</p>
          </div>
        </div>
      </section>

      {/* Explore the Book Series Section */}
<section className="book-series">
  <h2>Explore the Book Series</h2>
  <p className="book-intro">
    Dive into the world of gripping stories, unforgettable characters, and unforgettable journeys. Discover more about the titles that fans are raving about.
  </p>
  <div className="book-series-grid">
    <div className="book-card">
      <img src={Bookslideone} alt="Dawn of Unions book cover" />
      <h3>Dawn of Unions</h3>
      <p>A brief teaser or synopsis about Book One. Compelling and mysterious to spark interest.</p>
    </div>
    <div className="book-card">
      <img src={Bookslidetwo} alt="Drums of Unrest book cover" />
      <h3>Drums of Unrest</h3>
      <p>A brief teaser or synopsis about Book Two. Focus on what makes this story stand out.</p>
    </div>
    <div className="book-card">
      <img src={Bookslidethree} alt="Eaters of Time book cover" />
      <h3>Eaters of Time</h3>
      <p>A brief teaser or synopsis about Book Three. Hint at themes or characters without spoilers.</p>
    </div>
  </div>
</section>

      {/* Explore the Music Section */}
  <section className="music-explore">
    <h2>Explore the Music</h2>
    <p className="music-intro">
      Step into the soundscape that complements the stories. Experience immersive tracks, rich moods, and the emotional soundtrack of Corwyn's world.
    </p>
    <div className="music-grid">
      <div className="music-card">
        <img src={albumcover1} alt="Album One Cover" />
        <h3>Cycle of Bones Original Soundtrack</h3>
        <p>A cinematic score capturing the rise of the rebellion. Atmospheric and epic, this album sets the tone.</p>
      </div>
      <div className="music-card">
        <img src={albumcover2} alt="Album Two Cover" />
        <h3>Listening from the Outside</h3>
        <p>Driving drums and tension-filled melodies underscore the battle cries and turning tides of war.</p>
      </div>
      <div className="music-card">
        <img src={albumcover3} alt="Album Three Cover" />
        <h3>In Plain Sight</h3>
        <p>Ambient, haunting, and meditative. These tracks explore the mysteries and memories echoing through time.</p>
      </div>
    </div>
  </section>


    <section className="latest-video">
      <h2>Latest on YouTube</h2>
      <p className="video-description">
        Watch the newest release – music videos, behind-the-scenes content, or updates from Corwyn’s world.
      </p>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          title="Latest YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>




<section className="support" id="support">
    <h2>Support My Work</h2>
      <div className="support-content">
        <p>
          If you enjoy my music, stories, or art — consider supporting my journey!
          Your contributions help me focus more time on creating and sharing my work.
        </p>

        <p>This section could also include merch and other support methods like direct tips</p>

      <div className="support-buttons">
        <a href="https://www.patreon.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="patreon-btn"><FaPatreon style={{ marginRight: '8px' }} />
          Support on Patreon
        </a>
      </div>
    </div>
  </section>



   
       {/* Newsletter Signup Section */}
        <section className="newsletter-section">
        <div className="newsletter-overlay">
            <h2>Stay in the Loop</h2>
            <p>Subscribe to get the latest news, releases, and exclusive content straight to your inbox.</p>
            <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
            </form>
        </div>
        </section>
      

    </main>
  );
}

export default Home;