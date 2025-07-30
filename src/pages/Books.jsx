import DawnofUnions from '../components/Banners/DawnOfUnions';
import DrumsofUnrest from '../components/Banners/DrumsOfUnrest';
import EatersofTime from '../components/Banners/EatersOfTime';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import BackToTopButton from '../components/BackToTopButton';
import ScolfWorld from '../components/Scolfworld';

export default function Books() {
  return (
    <>
        <Header />
        <ScolfWorld />
        <DawnofUnions />
        <DrumsofUnrest />
        <EatersofTime />
        <BackToTopButton />
        <Footer />
    </>
  );
}