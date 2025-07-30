import Header from '../components/Header';  
import Footer from '../components/Footer';  
import PublisherContent from '../components/PublisherContent';
import BackToTopButton from '../components/BackToTopButton';


export default function Publisher() {
  return (
    <>
      <Header /> 
      <PublisherContent />
      <BackToTopButton />
      <Footer />
    </>
  );
}