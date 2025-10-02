import { renderToString } from "react-dom/server";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import { StaticRouter } from "react-router-dom/server"; // server

import App from "./App.jsx";

export async function render(url) {
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    appHtml,
    tags: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
      style: helmet.style.toString()
    }
  };
}
