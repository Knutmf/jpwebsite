
export default function PublisherContent() {
  return (
    <section className="publisher-page">
      {/* Header */}
      <div className="publisher-header">
        <h1>Publisher Information</h1>
        <p className="tagline">Bringing Bold Fantasy to Life</p>
      </div>

      {/* Publisher Overview */}
      <div className="publisher-section">
        <h2>About the Publisher</h2>
        <p>
          Skolf Press is a small, independent publisher dedicated to immersive storytelling
          in fantasy, speculative fiction, and myth-inspired literature. We aim to amplify unique
          voices and publish bold, emotionally resonant works for readers of all kinds.
        </p>
      </div>

      {/* Publisher Contact */}
      <div className="publisher-section">
        <h2>Contact Information</h2>
        <p>
          📧 Email: <a href="mailto:info@skolfpress.com">info@skolfpress.com</a><br />
          🌐 Website: <a href="https://skolfpress.com" target="_blank" rel="noopener noreferrer">skolfpress.com</a><br />
          📍 Based in: Tampa, Florida
        </p>
      </div>

      {/* Submissions */}
      <div className="publisher-section">
        <h2>Submissions</h2>
        <p>
          Skolf Press is not currently accepting unsolicited manuscripts. Please follow our newsletter
          or social channels for updates on future submission opportunities.
        </p>
      </div>

      {/* Divider */}
      <div className="full-line"></div>

      {/* Terms of Service */}
      <div className="publisher-section">
        <h2>Terms of Service</h2>
        <p>
          By accessing or using this website, you agree to be bound by the following terms:
        </p>
        <ul>
          <li>This website and all associated content are the property of Skolf Press.</li>
          <li>You may not copy, distribute, or modify materials without permission.</li>
          <li>Any links to third-party platforms (e.g., Amazon, Spotify) are provided for convenience only.</li>
          <li>All purchases, subscriptions, and third-party content are subject to their respective platform terms.</li>
        </ul>
        <p>
          We reserve the right to modify these terms at any time without notice. Continued use of this website
          constitutes acceptance of those changes.
        </p>
      </div>

      {/* Call to Action */}
      <div className="publisher-cta">
        <a href="/bio#contact" className="contact-publisher-btn">Contact Us</a>
      </div>
    </section>
  );
}