import album1 from '../assets/images/albumcover1.jpg';
import album2 from '../assets/images/albumcover2.jpg';
import album3 from '../assets/images/albumcover3.png';
import { Link } from 'react-router-dom';

export default function MusicPage() {
  return (
    <>
      

      <main className="music-page">

        {/* Latest Single Section */}
        <section className="latest-single">
          <h1>Latest Single</h1>
          <div className="single-container">
            <img src={album1} alt="Latest Single Cover" className="single-cover" />
            <div className="single-links">
              <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">🎧 Listen on Spotify</a>
              <a href="https://music.apple.com/dummy-link" target="_blank" rel="noopener noreferrer" className="apple-music-link">🍎 Listen on Apple Music</a>
              <a href="https://youtube.com/dummy-link" target="_blank" rel="noopener noreferrer" className="youtube-link">▶ Watch on YouTube</a>
            </div>
          </div>
        </section>

        {/* Album Sections */}
        <section className="album-series">
          <h2>Albums</h2>
          <div className="album-grid">
            {/* Album 1 */}
            <div className="album-card">
              <img src={album1} alt="Album 1" className="album-cover" />
              <h3>Album Title One</h3>
              <div className="album-links">
                <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">Spotify</a>
                <a href="https://music.apple.com/dummy-link" target="_blank" rel="noopener noreferrer" className="apple-music-link">Apple Music</a>
                <a href="https://youtube.com/dummy-link" target="_blank" rel="noopener noreferrer" className="youtube-link">YouTube</a>
              </div>
            </div>

            {/* Album 2 */}
            <div className="album-card">
              <img src={album2} alt="Album 2" className="album-cover" />
              <h3>Album Title Two</h3>
              <div className="album-links">
                <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">Spotify</a>
                <a href="https://music.apple.com/dummy-link" target="_blank" rel="noopener noreferrer" className="apple-music-link">Apple Music</a>
                <a href="https://youtube.com/dummy-link" target="_blank" rel="noopener noreferrer" className="youtube-link">YouTube</a>
              </div>
            </div>

            {/* Album 3 */}
            <div className="album-card">
              <img src={album3} alt="Album 3" className="album-cover" />
              <h3>Album Title Three</h3>
              <div className="album-links">
                <a href="https://open.spotify.com/dummy-link" target="_blank" rel="noopener noreferrer" className="spotify-link">Spotify</a>
                <a href="https://music.apple.com/dummy-link" target="_blank" rel="noopener noreferrer" className="apple-music-link">Apple Music</a>
                <a href="https://youtube.com/dummy-link" target="_blank" rel="noopener noreferrer" className="youtube-link">YouTube</a>
              </div>
            </div>
          </div>
        </section>

        <section className="live-videos">
          <h2 className="section-heading">Live YouTube Videos</h2>
          <p className="section-intro">
            Watch the latest live performances and music videos directly from our channel.
          </p>

          <div className="live-video-grid">
            <div className="live-video-card">
              <iframe
                src="https://www.youtube.com/embed/Y1RsbhFvBv0?si=sq1pO2kZx_vWNOrI"
                title="Live Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="video-title">Live Performance 1</h3>
            </div>

            <div className="live-video-card">
              <iframe
                src="https://www.youtube.com/embed/iFpDLvkYJ1o?si=GoNa4Y9Bn-XNIbAK"
                title="Live Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="video-title">Livestreamed performance.</h3>
            </div>

            <div className="live-video-card">
              <iframe
                src="https://www.youtube.com/embed/_VEGaSk8DyU?si=rp3tZK7oLOBlXoiT"
                title="Live Video from recording studio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="video-title">Live from the recording studio in Norway</h3>
            </div>
          </div>
        </section>

        {/* Explore More Music / Misc Section */}
        <section className="more-music">
          <h2>Explore More Music</h2>
          <p>Check out singles, collaborations, and exclusive tracks available on all streaming platforms!</p>
          <div className="more-music-grid">
            <div className="music-card">
              <img src={album1} alt="Single 1" />
              <h3>Single One</h3>
              <Link to="/single1">Listen</Link>
            </div>
            <div className="music-card">
              <img src={album2} alt="Single 2" />
              <h3>Single Two</h3>
              <Link to="/single2">Listen</Link>
            </div>
            <div className="music-card">
              <img src={album3} alt="Single 3" />
              <h3>Single Three</h3>
              <Link to="/single3">Listen</Link>
            </div>
          </div>
        </section>

      </main>
      
    </>
  );
}