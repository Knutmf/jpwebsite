import Header from '../components/Header';  
import Footer from '../components/Footer';  
import BackToTopButton from '../components/BackToTopButton';
import MusicPage from '../components/MusicPage';
import { Helmet } from '@vuer-ai/react-helmet-async';

export default function Music() {
  return (
    <>

     <Helmet>
                <title>JP Corwyn | Music</title>
                <meta
                  name="description"
                  content="Experience JP Corwyn—Blind Indie Rock musician and composer whose powerful vocals and inspirational lyrics blurs the line between sound and story."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://jpcorwyn.com.com/current-page" />
                
              
                <meta property="og:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
                <meta property="og:description" content="Experience JP Corwyn—Blind Indie Rock musician and composer whose powerful vocals and inspirational lyrics  blurs the line between sound and story. #BlindIndieRock" />
                <meta property="og:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />
                <meta property="og:url" content="https://jpcorwyn.com/page-url" />
                <meta property="og:type" content="website" />
    
               
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
                <meta name="twitter:description" content="Experience JP Corwyn—Blind Indie Rock musician and composer whose powerful vocals and inspirational lyrics  blurs the line between sound and story. #BlindIndieRock" />
                <meta name="twitter:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />
    
            </Helmet>
      <Header /> 
      <MusicPage />
      <BackToTopButton />
      <Footer />
    </>
  );
}
