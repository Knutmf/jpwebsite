import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Bookslideone from '../assets/images/bookslide1.png';
import Bookslidetwo from '../assets/images/bookslide2.png';
import Bookslidethree from '../assets/images/bookslide3.png';
import albumcover1 from '../assets/images/albumcover1.png';
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
          Creating words and worlds through stories and songs
        </h1>
      </section>

    <div className="gradient-border"></div>

      {/* Latest Releases Section */}
      <section className="latest-releases">
      <h2>Latest Releases</h2>
      <div className="release-cards">
        <Link to="/Eaters" className="release-card">
          <img src={Bookslidethree} alt="Eaters of Time book cover" />
          <h3>Eaters of Time</h3>
          {/*<p>
            Shadows lengthen, peace shatters, and Havoc’s Horn sounds across the land…
          </p>*/}
        </Link>
        

        <Link to="/Music" className="release-card">
          <img src={albumcover1} alt="Cycle of Bones soundtrack album" />
          <h3>The Cycle of Bones Soundtrack Vol. 1</h3>
          {/*<p>
            A cinematic score capturing the rise of the rebellion. Atmospheric
            and epic, this album sets the tone.
          </p>*/}
        </Link>
      </div>
    </section>

<div className="gradientborder"></div>


      {/* Explore the Book Series Section */}
      <section className="book-series">
        <h2>Explore the Book Series</h2>
        <p className="book-intro">
          Dive into the world of gripping stories, unforgettable characters, and unforgettable journeys. Discover more about the titles that fans are raving about.
        </p>
        <div className="book-series-grid">
          <Link to="/Buy" className="book-card">
            <img src={Bookslideone} alt="Dawn of Unions book cover" />
            <h3>Dawn of Unions</h3>
            {/*<p>
              Kaith and his armsmen must fight a demonic army to save their besieged
              village and its cursed survivors. Can Kaith prevent darkness from
              claiming anyone left standing?
            </p>*/}
          </Link>

          <Link to="/Drums" className="book-card">
            <img src={Bookslidetwo} alt="Drums of Unrest book cover" />
            <h3>Drums of Unrest</h3>
            {/*<p>
              As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy. 
            </p>*/}
          </Link>

          <Link to="/Eaters" className="book-card">
            <img src={Bookslidethree} alt="Eaters of Time book cover" />
            <h3>Eaters of Time</h3>
            {/*<p>
              A land now divided by war, where ancient sorcery and monstrous threats lurk ever closer. Sir Kaith and three other heroes rise to protect the world, but can they truly outwit the darkness and save Skolf?
            </p>*/}
          </Link>
        </div>
      </section>

      {/* Explore the Music Section */}
  <section className="music-explore">
  <h2>Explore the Music</h2>
  <p className="music-intro">
    Step into the soundscape that complements the stories. Experience immersive
    tracks, rich moods, and the emotional soundtrack of Corwyn's world.
  </p>
  <div className="music-grid">
    <Link to="/music#Cycle-of-Bones-Soundtrack" className="music-card">
      <img src={albumcover1} alt="Album One Cover" />
      <h3>Cycle of Bones Original Soundtrack Vol. 1</h3>
      <p>
        A cinematic score capturing the rise of the rebellion. Atmospheric and
        epic, this album sets the tone.
      </p>
    </Link>

    <Link to="/music#Listening-From-the-Outside" className="music-card">
      <img src={albumcover2} alt="Album Two Cover" />
      <h3>Listening from the Outside</h3>
      <p>
        An intimate journey of sound and story that speaks to anyone who's ever felt just outside the noise of the world.
      </p>
    </Link>

    <Link to="/music#In-Plain-Sight" className="music-card">
      <img src={albumcover3} alt="Album Three Cover" />
      <h3>In Plain Sight</h3>
      <p>
        A powerful blend of soaring vocals and heartfelt lyrics that inspire self resilience and human connection.
      </p>
    </Link>
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
          src="https://www.youtube.com/embed/0RyA1-njlmk?si=FSbds-nzU5pItNpY"
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
          If you enjoy my music and stories — consider supporting my journey!
          Your contributions help me focus more time on creating and sharing my work.
        </p>

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
