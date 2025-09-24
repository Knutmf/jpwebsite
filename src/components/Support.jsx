import { FaPatreon, FaDiscord } from 'react-icons/fa';
import { SiKofi, SiTeespring, SiSpotify } from 'react-icons/si';
import '../styles.css';

export default function Support() {
  return (
    <section className="support" id="support">
      <h2>Support My Work</h2>

      <div className="support-content">
        <p>
          If you enjoy my music, stories, or art — consider supporting my journey!
          Your contributions help me focus more time on creating and sharing what I love.
        </p>

        <div className="support-buttons section-block">
          <a
            href="https://www.patreon.com/JPCorwyn"
            target="_blank"
            rel="noopener noreferrer"
            className="patreon-btn"
          >
            <FaPatreon style={{ marginRight: '8px' }} />
            Support on Patreon
          </a>

        <a
            href="https://ko-fi.com/jpcorwyn"
            target="_blank"
            rel="noopener noreferrer"
            className="kofi-btn"
          >
            <SiKofi style={{ marginRight: '8px' }} />
            Tip via Ko-fi
          </a>
        </div> 

        <div className="full-line"></div>

        {/* Merch Section */}
        <div className="merch-section section-block">
          <h3>Official Merch</h3>
          <p>Wear the world of Skolf. Check out exclusive shirts, posters, and more!</p>
          <a
            href="https://jp-corwyn.creator-spring.com/?utm_medium=referral&utm_source=twitch_integration&utm_campaign=jp-corwyn"
            target="_blank"
            rel="noopener noreferrer"
            className="merch-btn"
          >
            <SiTeespring style={{ marginRight: '8px' }} />
            Visit My Teespring Store
          </a>
        </div>

        <div className="full-line"></div>

        {/* Spotify */}
          <div className="music-promo section-block">
            <h3>Listen on Spotify</h3>
            <p>
              Stream my music on Spotify and follow me to stay updated on new releases and playlists.
            </p>
            <a
              href="https://open.spotify.com/artist/5mPO25ibQzW96LaS6DmufE"
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-btn"
            >
              <SiSpotify style={{ marginRight: '8px' }} />
              Listen on Spotify
            </a>
          </div>

        <div className="full-line"></div>

        {/* Newsletter CTA */}
        <div className="join-newsletter section-block">
          <p>
            Stay connected.{' '}
            <a href="/bio#contact">
              Join the newsletter
            </a>{' '}
            for updates and behind-the-scenes exclusives.
          </p>
        </div>

        <div className="full-line"></div>

        {/* Discord Section */}
        <div className="discord-section section-block">
          <h3>Join the Community on Discord</h3>
          <p>Hang out with fans, ask questions, or chat about books and music. We’re waiting for you!</p>
          <a
            href="https://discord.gg/HWSkZtydZr"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-btn"
          >
            <FaDiscord style={{ marginRight: '8px', fontSize: '1.2rem' }} />
            Join Our Discord
          </a>
        </div>
      </div>
    </section>
  );
}