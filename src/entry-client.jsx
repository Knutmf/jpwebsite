import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import App from "./App";

const helmetContext = {};

hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
