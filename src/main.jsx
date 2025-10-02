import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
