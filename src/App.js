import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Books from './pages/Books';
import BuyNow from './pages/BookPage';
import Music from './pages/Music';
import Publisher from './pages/Publisher';
//import Contact from './pages/Contact';
import Support from './pages/Support';
import './styles.css'; // Import styles
import ScrollToHash from './components/ScrollToHash';



function App() {
  return (
    <div className="app">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/books" element={<Books />} />
        <Route path="/Buy" element={<BuyNow />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Publisher" element={<Publisher />} />
      </Routes>
    
    </div>
  );
}

export default App;
