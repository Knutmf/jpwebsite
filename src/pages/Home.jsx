import Header from '../components/Header';  
import Footer from '../components/Footer';  
import Home from '../components/Home';
import BackToTopButton from '../components/BackToTopButton';


export default function HomePage() {
  return (
    <>
      <Header /> 
      <Home />
      <BackToTopButton />
      <Footer />
    </>
  );
}