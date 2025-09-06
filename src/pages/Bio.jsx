import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import '../styles.css';
import img1 from '../assets/images/img1.jpg';
import BackToTopButton from '../components/BackToTopButton';

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
                      I tell stories. Whether through words or through lyrics, I love weaving and twisting tales. The Cycle of Bones (my dark military fantasy series) grew out of a love for big, lived-in worlds where choices matter and characters don’t get to walk away unchanged. <br />
                    </p> 
                    
                    <p>My music (some call it folk alternative rock, but I like to call it blind indie rock) chases the same truths, just in a different language. However it comes out, my goal is always the same: to make something that connects with my audience and hopefully, stays a while. 🙂</p>

                    <p>Look…I was born legally blind. (<i>See</i> what I did there?) It’s never been the only thing about me, but it’s shaped the way I create. I learned early on to listen closer, to imagine harder, and to trust the details other people missed–even when I was a teen sneaking out at night to play Dungeons and Dragons with friends or taking care of horses. Being blind never stopped me from creating; it just means I need a seeing-eye human every now and then. (Speaking of, thanks to my team for helping with this website!)</p>

                    <p>Over the years I’ve worked with gold- and multi-platinum producers, put books into readers’ hands around the world, and shared stages, pages, and conversations I never expected. The tools change—pen, guitar, voice—but it all comes back to storytelling.</p>
                    
                    <p>So, if something here sparks your imagination, stick around. Drop me a note, or sign up for the newsletter. I’d be glad to keep the conversation going.</p>
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