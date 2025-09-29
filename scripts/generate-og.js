// scripts/generate-og.js
// Auto-generate a 1200x630 OG image from the production build in /dist.
// Netlify runs this after `npm run build`.
// Requires: puppeteer and serve-handler (devDependencies).

import http from 'http';
import { once } from 'events';
import serveHandler from 'serve-handler';
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const port = 5055;
const url = `http://localhost:${port}/`;

const server = http.createServer((req, res) =>
  serveHandler(req, res, { public: distDir })
);

server.listen(port);
await once(server, 'listening');
console.log(`[OG] Local server started at ${url}`);

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });

  // Hide overlays if needed
  const hideSelectors = [
    '.cookie-banner', '.modal', '.chat-widget', '.sticky-banner', '.fixed.bottom-0'
  ];
  await page.addStyleTag({ content: `${hideSelectors.join(',')} { display: none !important; }` });

  const outputPath = path.join(distDir, 'og.jpg');
  await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90, clip: { x: 0, y: 0, width: 1200, height: 630 } });

  console.log('[OG] Saved:', outputPath);
} catch (err) {
  console.error('[OG] Error generating og.jpg', err);
  process.exitCode = 1;
} finally {
  await browser.close();
  server.close();
}
