import DawnofUnions from '../components/Banners/DawnOfUnions';
import DrumsofUnrest from '../components/Banners/DrumsOfUnrest';
import EatersofTime from '../components/Banners/EatersOfTime';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import BackToTopButton from '../components/BackToTopButton';
/*import ScolfWorld from '../components/Scolfworld';*/
import { Helmet } from "@vuer-ai/react-helmet-async";

export default function Books() {
  return (
    <>
      <Helmet>
          <title>Books | JP Corwyn</title>
          <meta
            name="description"
            content="Explore JP Corwyn's dark fantasy novels and novellas, including the Cycle of Bones series."
          />
          <meta property="og:title" content="Books by JP Corwyn" />
          <meta
            property="og:description"
            content="Discover the Cycle of Bones series and other dark fantasy works by JP Corwyn."
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