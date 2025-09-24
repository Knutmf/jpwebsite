import DawnofUnions from '../components/Banners/DawnOfUnions';
import DrumsofUnrest from '../components/Banners/DrumsOfUnrest';
import EatersofTime from '../components/Banners/EatersOfTime';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import BackToTopButton from '../components/BackToTopButton';
/*import ScolfWorld from '../components/Scolfworld';*/
import { Helmet } from '@vuer-ai/react-helmet-async';

export default function Books() {
  return (
    <>
      <Helmet>
          <title>JP Corwyn | Books</title>
          <meta
            name="description"
            content="Enter The Cycle of Bones—JP Corwyn’s dark military fantasy-horror series with rich and immersive worldbuilding and unforgettable characters."
          />
          <meta property="og:title" content="The Cycle of Bones | Dark Military Fantasy-Horror by JP Corwyn" />
          <meta
            property="og:description"
            content="JP Corwyn is the author of The Cycle of Bones — a dark military fantasy-horror book series with immersive worldbuilding and unforgettable characters. #BlindIndieProse"
          />
          <meta property="og:image" content="../assets/images/dawnimg.jpeg" />
        </Helmet>
        <Header />
       {/* <ScolfWorld /> */}
        <DawnofUnions />
        <DrumsofUnrest />
        <EatersofTime />
        <BackToTopButton />
        <Footer />
    </>
  );
}
