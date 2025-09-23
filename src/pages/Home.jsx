import Header from '../components/Header';  
import Footer from '../components/Footer';  
import Home from '../components/Home';
import BackToTopButton from '../components/BackToTopButton';
import { Helmet } from '@vuer-ai/react-helmet-async';


export default function HomePage() {
  return (
    <>
     <Helmet>
            <title>JP Corwyn | Blind Indie Rock & Blind Indie Prose</title>
            <meta
              name="description"
              content="Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://jpcorwyn.com.com/current-page" />
            
          
            <meta property="og:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
            <meta property="og:description" content="Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" />
            <meta property="og:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />
            <meta property="og:url" content="https://jpcorwyn.com/page-url" />
            <meta property="og:type" content="website" />

           
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="JP Corwyn | Blind Indie Rock & Blind Indie Prose" />
            <meta name="twitter:description" content="Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" />
            <meta name="twitter:image" content="https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" />

        </Helmet>
      <Header /> 
      <Home />
      <BackToTopButton />
      <Footer />
    </>
  );
}