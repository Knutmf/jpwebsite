// server.js
import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === "production";

async function createServer() {
  const app = express();

  // === FIX: Serve public assets first (short-circuit SSR) ===
  app.use('/favicon.ico', express.static(path.resolve(__dirname, 'public/faviconlogo.jpeg')));
  app.use('/logo192.png', express.static(path.resolve(__dirname, 'public/logo192.png')));
  app.use('/manifest.json', express.static(path.resolve(__dirname, 'public/manifest.json')));
  app.use('/assets/images', express.static(path.resolve(__dirname, 'public/assets/images')));

  if (!isProd) {
    // DEV: use Vite's middleware (fast HMR + SSR loadModule)
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: "ssr" },
      appType: "custom"
    });
    app.use(vite.middlewares);

    app.use("*", async (req, res) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);

        // load server entry via vite for SSR
        const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
        const { appHtml, tags } = await render(url);

        const html = template
          .replace("<!--ssr-outlet-->", appHtml)
          .replace("<!--head-tags-->", `${tags.title}${tags.meta}${tags.link}${tags.style}`)
          .replace(
            "<!--scripts-->",
            `${tags.script}<script type="module" src="/src/entry-client.jsx"></script>`
          );

        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.stack);
      }
    });
  } else {
    // PROD: serve built files from dist
    app.use(express.static(path.resolve(__dirname, "dist"), { index: false }));

    app.get("*", async (req, res) => {
      try {
        const url = req.originalUrl;
        const template = fs.readFileSync(path.resolve(__dirname, "dist", "index.html"), "utf-8");
        const manifest = JSON.parse(
          fs.readFileSync(path.resolve(__dirname, "dist", "manifest.json"), "utf-8")
        );

        // Import the SSR server bundle that Vite built
        const { render } = await import("./dist/server/entry-server.js");

        const { appHtml, tags } = await render(url);

        // find the client entry in the manifest
        const clientEntryKey = Object.keys(manifest).find((k) =>
          k.endsWith("entry-client.jsx")
        ) || Object.keys(manifest).find(k => k.endsWith("entry-client.js") || k.endsWith("main.js"));
        let scripts = "";
        if (clientEntryKey) {
          const entry = manifest[clientEntryKey];
          // main js
          if (entry.file) scripts += `<script type="module" src="/${entry.file}"></script>`;
          // css
          if (entry.css) {
            entry.css.forEach((cssFile) => {
              tags.link += `<link rel="stylesheet" href="/${cssFile}">`;
            });
          }
        }

        const html = template
          .replace("<!--ssr-outlet-->", appHtml)
          .replace("<!--head-tags-->", `${tags.title}${tags.meta}${tags.link}${tags.style}`)
          .replace("<!--scripts-->", `${tags.script}${scripts}`);

        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        console.error(e);
        res.status(500).end(e.stack);
      }
    });
  }

  return { app };
}

createServer().then(({ app }) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`> Server running at http://localhost:${port} (prod=${isProd})`);
  });
});
