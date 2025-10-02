import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const url = req.url;

    // Read client index.html and manifest
    const templatePath = path.resolve(process.cwd(), "dist/client/index.html");
    const manifestPath = path.resolve(process.cwd(), "dist/client/manifest.json");

    const template = fs.readFileSync(templatePath, "utf-8");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    // Import SSR server bundle inside api/dist
    const { render } = await import("./dist/entry-server.js");
    const { appHtml, tags } = await render(url);

    // Determine client entry script
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

    const html = template
      .replace("<!--ssr-outlet-->", appHtml)
      .replace("<!--head-tags-->", `${tags.title}${tags.meta}${tags.link}${tags.style}`)
      .replace("<!--scripts-->", `${tags.script}${scripts}`);

    res.setHeader("Content-Type", "text/html");
    res.status(200).end(html);
  } catch (e) {
    console.error("SSR error", e);
    res.status(500).end("SSR failed: " + e.message);
  }
}
