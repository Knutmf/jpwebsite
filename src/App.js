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
import "./styles.css"; // Import styles
import ScrollToHash from "./components/ScrollToHash";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
