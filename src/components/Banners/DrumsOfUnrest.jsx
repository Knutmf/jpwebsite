import bookslidetwo from '../../assets/images/bookslide2.png';
import { Link } from "react-router-dom";

export default function DrumsOfUnrest() {
  return (
    <section className="DrumsofUnrest">
      <div className="banner-content">
        <div className="banner-row">
          
          <div className="image-column">
            <img 
              src={bookslidetwo} 
              loading="lazy" 
              alt="Drums of Unrest" 
              className="banner-image" 
            />
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

        
          <div className="text-content">
            <h2 className="banner-title">Book 2: Drums of Unrest</h2>
            <p>
              As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents 
              to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms 
              that haunt them in this gritty dark military fantasy.
            </p>
            <Link to="/Drums" className="buy-button">
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}