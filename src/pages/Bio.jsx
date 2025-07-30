import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import '../styles.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpg';
import BackToTopButton from '../components/BackToTopButton';

export default function MainContent() {
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
    
<> 

<Header />

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
    <div className="full-line"></div>
    
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

          <div className="full-line"></div>
    
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

          <div className="full-line"></div>
    
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

          <div className="full-line"></div>
    </main>



<section className="contact-newsletter" id="contact">
      <h2>Contact & Newsletter</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form" id="Contact">
          <h3>Send Me a Message</h3>
          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree or form backend URL
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-form">
          <h3>Join My Newsletter</h3>
          <form
            action="https://your-mailchimp-url" // Replace with your Mailchimp or EmailOctopus embed link
            method="POST"
            target="_blank"
            noValidate
          >
            <input type="email" name="EMAIL" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>

<BackToTopButton />
<Footer />


</>


       
    
  );
}