import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  try {
    const url = req.url;

    // Read the client index.html
    const templatePath = path.resolve(__dirname, "../dist/client/index.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    // Read the Vite manifest for correct asset paths
    const manifestPath = path.resolve(__dirname, "../dist/client/manifest.json");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    // Import the SSR server bundle
    const { render } = await import("../dist/server/entry-server.js");
    const { appHtml, tags } = await render(url);

    // Determine client entry script from manifest
    const entryKey =
      Object.keys(manifest).find((k) => k.endsWith("entry-client.jsx")) ||
      Object.keys(manifest).find(
        (k) => k.endsWith("entry-client.js") || k.endsWith("main.js")
      );

    let scripts = "";
    if (entryKey) {
      const entry = manifest[entryKey];
      if (entry.file) {
        scripts += `<script type="module" src="/${entry.file}"></script>`;
      }
      if (entry.css) {
        entry.css.forEach((cssFile) => {
          tags.link += `<link rel="stylesheet" href="/${cssFile}">`;
        });
      }
    }

    // Inject SSR content and meta tags into template
    const html = template
      .replace("<!--ssr-outlet-->", appHtml)
      .replace(
        "<!--head-tags-->",
        `${tags.title}${tags.meta}${tags.link}${tags.style}`
      )
      .replace("<!--scripts-->", `${tags.script}${scripts}`);

    res.setHeader("Content-Type", "text/html");
    res.status(200).end(html);
  } catch (e) {
    console.error("SSR error", e);
    res.status(500).end("SSR failed: " + e.message);
  }
}
