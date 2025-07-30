import bookslidetwo from '../../assets/images/bookslide2.png';

export default function DrumsOfUnrest() {
  return (
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
  );
}