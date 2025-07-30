import bookslideone from '../../assets/images/bookslide1.png';

export default function DawnOfUnions() {
  return (
    <section className="DawnofUnions banner-section">
      <div className="banner-content">
        <div className="banner-row">
          <img
            src={bookslideone}
            loading="lazy"
            alt="Dawn of Unions"
            className="banner-image"
          />
          <div className="text-content">
            <h2 className="banner-title">Book 1: Dawn of Unions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <a
              className="buy-button"
              href="https://www.amazon.com/example-affiliate-link"
              target="_blank"
              rel="noopener noreferrer"
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
  );
}