import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Bio from "./pages/Bio.jsx";
import Books from "./pages/Books.jsx";
import BuyNow from "./pages/BookPage.jsx";
import DrumsBookPage from "./pages/DrumsBookPage.jsx";
import EatersBookPage from "./pages/EatersBookPage.jsx";
import Music from "./pages/Music.jsx";
import Publisher from "./pages/Publisher.jsx";
import LatestNews from "./pages/Latestnews.jsx"; 
import Merch from "./pages/Merch.jsx";
import Support from "./pages/Support.jsx";
import "./styles.css";
import ScrollToHash from "./components/ScrollToHash.js"; 

export default function App() {
  return (
    <div className="app">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/books" element={<Books />} />
        <Route path="/buy" element={<BuyNow />} />          
        <Route path="/drums" element={<DrumsBookPage />} /> 
        <Route path="/eaters" element={<EatersBookPage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/latest" element={<LatestNews />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/support" element={<Support />} />
        <Route path="/publisher" element={<Publisher />} />
      </Routes>
    </div>
  );
}
