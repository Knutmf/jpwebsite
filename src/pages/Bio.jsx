import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import img1 from '../assets/images/img1.jpg';
import BackToTopButton from '../components/BackToTopButton';
import { Helmet } from 'react-helmet-async';

export default function MainContent() {
    // Refs for each section
      const ref1 = useRef();
    
      
    
      // Visibility state for each section
      const [visible1, setVisible1] = useState(false);
      
      
    
      useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
              if (el === ref1.current) setVisible1(true);
             
              
            }
          });
        },
        { threshold: 0.7,
        rootMargin: '0px 0px -100px 0px',
      }
      );
    
      if (ref1.current) observer.observe(ref1.current);
      
      
    
      return () => observer.disconnect();
    }, []);
     
    
      return (
    
<> 

 <Helmet>
            <title>JP Corwyn | About </title>
            <meta
              name="description"
              content="About page.."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://jpcorwyn.com.com/current-page" />
            
          
            <meta property="og:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
            <meta property="og:description" content="Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" />
            <meta property="og:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />
            <meta property="og:url" content="https://jpcorwyn.com/page-url" />
            <meta property="og:type" content="website" />

           
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
            <meta name="twitter:description" content="Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" />
            <meta name="twitter:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />

        </Helmet>

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
                   <div className="bio-text">
                    <p>
                      Heya! I’m JP. Good to meet you.<br /><br />


                      Now, I know this is the bio section, and you’re probably expecting something self-important and grand. Good news! Other people have, indeed, written that way about me! So let’s all put our pinkies in the air, put on our “oh-so-sophisticated” expressions, and read the official bio section, shall we?<br /><br />

                      (Cue the third-person voiceover…)<br /><br />

                      JP Corwyn is a seasoned indie fantasy author and alternative rock musician whose work spans continents and cultures, generations and genres. Legally blind since birth, as Corwyn’s vision loss increased, his reputation for honest, powerful vocals and boundless imagination grew. Known for his dark fantasy series The Cycle of Bones, his evocative unplugged and rock performances, and his lively panel appearances, Corwyn continues captivating audiences and readers alike.<br /><br />

                      (Annnd…we’re back!)<br /><br />

                      So, what’s the really real? I’m a storyteller. Always have been. I grew up on (mostly bad) D&D, horror, mystery, history, and fantasy books, AND (of course) music. I also have a massive love for culture, language, and how they intersect across borders—both on a map and between people. Oh, and I grew up with that whole Blind Guy thing. I am, as I understand it, kinda contractually obligated to crack blind jokes whenever I spot them. (See? There’s one! Wait, no. There’s two! Go me!)<br /><br />

                      I’m told I sang before I spoke, so music’s always been a driving force in my life. Eventually, in 2019, I wrote my first book: The Dawn of Unions, the novella and prequel that launched my dark military fantasy series, The Cycle of Bones.<br /><br />

                      I also produce soundtracks for my books, blending my work as a fantasy author with my career as a singer-songwriter. The idea of combining my two worlds seemed sensible enough—but it really locked in when fans of my music read the novella, saw in-world song lyrics, and said: “Hey blinky! We know those songs are real. So, uh… album when? Streaming service when?”<br/>
                      In other words: “Dance, monkey, dance!” Or, I guess, “Sing, monkey, sing!”<br />
                      I know, I know—who could’ve seen that coming, right?<br /><br />

                      Arm duly twisted (written with all snark and sarcasm), I started recording soundtracks and albums that bring those stories into the music.<br /><br />

                      Anyroad, that’s the long and short of it. Stick around, read the books, stream the music, subscribe on YouTube, sign up for my newsletter, or come see me at a show or convention. I promise you’ll see me long before I see you.<br /><br />

                      Thanks for all the Electricity!</p>
                  </div>
                  
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