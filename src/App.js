import React from 'react';
import Header from './components/header';
import BackToTopButton from './components/BackToTopButton';
import MainContent from './components/MainContent';
import SocialFeed from './components/SocialFeed';
import ContactNewsletter from './components/ContactNewsletter';
import Footer from './components/Footer';
import './styles.css'; // Import styles



function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <SocialFeed />
      <ContactNewsletter />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
