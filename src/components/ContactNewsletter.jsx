import React from 'react';

function ContactNewsletter() {
  return (
    <section className="contact-newsletter" id="contact">
      <h2>Contact & Newsletter</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
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
  );
}

export default ContactNewsletter;