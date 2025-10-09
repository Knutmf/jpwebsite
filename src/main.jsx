import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./styles.css";

const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
