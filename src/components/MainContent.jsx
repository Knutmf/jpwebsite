import { useEffect, useRef, useState } from 'react';
import '../styles.css';
import { FaPatreon } from 'react-icons/fa';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpg';
import bookslideone from '../assets/images/bookslide1.png';
import bookslidetwo from '../assets/images/bookslide2.png';
import bookslidethree from '../assets/images/bookslide3.png';


      



function MainContent() {
 
  // Refs for each section
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  // Visibility state for each section
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          if (el === ref1.current) setVisible1(true);
          if (el === ref2.current) setVisible2(true);
          if (el === ref3.current) setVisible3(true);
          if (el === ref4.current) setVisible4(true);
        }
      });
    },
    { threshold: 0.7,
    rootMargin: '0px 0px -100px 0px',
  }
  );

  if (ref1.current) observer.observe(ref1.current);
  if (ref2.current) observer.observe(ref2.current);
  if (ref3.current) observer.observe(ref3.current);
  if (ref4.current) observer.observe(ref4.current);

  return () => observer.disconnect();
}, []);

  return (


   <main className="main">
      

      <section
        ref={ref1}
        className={`bio ${visible1 ? 'visible' : 'hidden-left'}`}
      >
          <h2 id="about">About The Man</h2>
          
          <div className="bio-content">
            <img src={img1} 
                 alt="The Man" 
                 width="300"
                 loading="lazy"  />
              <p>
                Legally blind since birth; JP Corwyn considers himself once and Always a New Yorker, (born out on Long Island) though he spent several post-high school years in Washington, DC. He now makes his home in Tampa, Florida. Corwyn&#39;s spent much of 2019 abroad. 
                After a few months in beautiful South Korea; Corwyn is currently in England finishing the next book in his series. 
                Well travelled and well versed, Corwyn brings his life experience and passions into both his fantasy novels and his emotive music.
              </p>
          </div>
      </section>


      <section  
        ref={ref2}
        className={`bio ${visible2 ? 'visible' : 'hidden-right'}`}>
          
          <h2>The Musician</h2>
          
           <div className="bio-content">
            <img src={img2} 
                 loading="lazy" 
                 alt="The Musician" 
                 width="300" />
                <p>
                    Almost able to sing before he could talk, JP has always had a deep connection with everything musical. 
                    On vocals and acoustic guitar, Corwyn has helmed an EP and two full length albums to date, seeing him team up with gold-winning engineer and producer, David Pezza, and multi-platinum producer, Micheal Seifert.
                </p>
            </div>
      </section>

      <section 
        ref={ref3}
        className={`bio ${visible3 ? 'visible' : 'hidden-left'}`}>
        
          <h2>The Author</h2>

           <div className="bio-content">
            <img src={img3}
                 loading="lazy" 
                 alt="The Author" 
                 width="300" />
                <p>
                    A lifelong love affair with literature, fantasy, and fiction; it was inevitable that JP Corwyn would use his talents for story telling to create a world of his own. 
                    His new fantasy series, starting with the Cycle of Bones, are bold, brave, and immersive. Discover the world of Skolf, available on Amazon November, 2019
                </p>
                </div>
      </section>

      <section 
        ref={ref4}
        className={`bio ${visible4 ? 'visible' : 'hidden-right'}`}>
        
        <h2>Many Other talents</h2>

        <div className="bio-content">
            <p>
                Aside from his primary passions as a musician and novelist, J.P. has a number of other talents you might be interested in.
            </p>
        <ul>
          <li>🎨 <strong>Composer</strong> – Composes things </li>
          <li>🖋 <strong>The voice</strong> – Voices things</li>
          <li>🎨 <strong>Side projects</strong> – Sides things</li>
        </ul>
       </div>
      
      </section>

    

     {/* Book 1 */}
<section className="DawnofUnions" id="portfolio">
  <div className="banner-content">
    <div className="banner-row">
      <img src={bookslideone} 
           loading="lazy" 
           alt="Dawn of Unions" 
           className="banner-image" />

      <div className="text-content">
        <h2 className="banner-title">Book 1: Dawn of Unions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <a
          href="https://www.amazon.com/dp/B000123456?tag=yourtag-20"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Buy on Amazon
        </a>
      </div>
    </div>

    <div className="spotify-embed">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator"
        width="300"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  </div>
</section>

{/* Book 2 */}
<section className="DrumsofUnrest">
  <div className="banner-content">
    <div className="banner-row">
      <img src={bookslidetwo} 
           loading="lazy" 
           alt="Drums of Unrest" 
           className="banner-image" />

      <div className="text-content">
        <h2 className="banner-title">Book 2: Drums of Unrest</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

         <a
          href="https://www.amazon.com/dp/B000123456?tag=yourtag-20"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Buy on Amazon
        </a>
      </div>
    </div>

     <div className="spotify-embed">
      <iframe
        src="https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator"
        width="300"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  </div>
</section>

{/* Book 3 */}
<section className="EatersofTime">
  <div className="banner-content">
    <div className="banner-row">
      <img src={bookslidethree} 
           loading="lazy" 
           alt="Eaters of Time Cover" 
           className="banner-image" />

      <div className="text-content">
        <h2 className="banner-title">Book 3: Eaters of Time</h2>
        <p>
          A cosmic odyssey through realms unknown, Eaters of Time blends philosophical musings with fast-paced narrative.
        </p>

         <a
          href="https://www.amazon.com/dp/B000123456?tag=yourtag-20"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Buy on Amazon
        </a>
      </div>
    </div>

    <div className="spotify-embed">
      <iframe
        src="https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator"
        width="300"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
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

      
    </main>
  );
}

export default MainContent;