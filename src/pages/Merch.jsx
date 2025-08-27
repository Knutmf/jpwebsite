import Header from '../components/Header';  
import Footer from '../components/Footer';  
import MerchComponent from '../components/MerchComponent';
import BackToTopButton from '../components/BackToTopButton';


export default function Merch() {
  return (
    <>
      <Header /> 
      <MerchComponent />
      <BackToTopButton />
      <Footer />
    </>
  );
}