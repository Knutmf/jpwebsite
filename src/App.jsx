import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Books from "./pages/Books";
import BuyNow from "./pages/BookPage";
import DrumsBookPage from "./pages/DrumsBookPage";
import EatersBookPage from "./pages/EatersBookPage";
import Music from "./pages/Music";
import Publisher from "./pages/Publisher";
import LatestNews from "./pages/Latestnews";
import Merch from "./pages/Merch";
import Support from "./pages/Support";
import "./styles.css";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <div className="app">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/books" element={<Books />} />
        <Route path="/Buy" element={<BuyNow />} />
        <Route path="/Drums" element={<DrumsBookPage />} />
        <Route path="/Eaters" element={<EatersBookPage />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/latest" element={<LatestNews />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Publisher" element={<Publisher />} />
      </Routes>
    </div>
  );
}
