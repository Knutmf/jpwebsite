import bookslidethree from '../../assets/images/bookslide3.png';

export default function EatersOfTime() {
  return (
    <section className="EatersOfTime">
      <div className="banner-content">
        <div className="banner-row">
          <img
            src={bookslidethree}
            loading="lazy"
            alt="Eaters of Time Cover"
            className="banner-image"
          />

          <div className="text-content">
            <h2 className="banner-title">Book 3: Eaters of Time</h2>
            <p>
              A land now divided by war, where ancient sorcery and monstrous threats lurk ever closer. Sir Kaith and three other heroes rise to protect the world, but can they truly outwit the darkness and save Skolf?
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
            style={{ borderRadius: '12px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}