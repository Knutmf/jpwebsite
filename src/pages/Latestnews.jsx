import Header from '../components/Header';  
import Footer from '../components/Footer';  
import LatestNewsComponent from '../components/LatestNewsComponent';
import BackToTopButton from '../components/BackToTopButton';


export default function LatestNews() {
  return (
    <>
      <Header /> 
      <LatestNewsComponent />
      <BackToTopButton />
      <Footer />
    </>
  );
}