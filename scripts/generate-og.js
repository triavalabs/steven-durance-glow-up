// scripts/generate-og.js
// Generate a 1200x630 Open Graph image from the built site in /dist.
//
// Netlify build command should install Chromium first, then run this, e.g.:
//   npx puppeteer browsers install chromium && npm run build && node scripts/generate-og.js
//
// Requires dev deps: puppeteer, serve-handler
//   npm i -D puppeteer serve-handler

import http from 'http';
import { once } from 'events';
import path from 'path';
import { fileURLToPath } from 'url';
import serveHandler from 'serve-handler';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = process.env.OG_SERVER_PORT ? Number(process.env.OG_SERVER_PORT) : 5055;
const ORIGIN = `http://localhost:${PORT}/`;
const OUTPUT = path.join(DIST_DIR, 'og.jpg');
const VIEWPORT = { width: 1200, height: 630, deviceScaleFactor: 1 };

// Optional: pass a selector in env to capture a specific section
const TARGET_SELECTOR = process.env.OG_SELECTOR || '#og-card';

// Elements to hide during capture (add data-og-hide to force-hide any element)
const HIDE_SELECTORS = [
  '[data-og-hide]',
  '.cookie-banner',
  '.modal',
  '.intercom-lightweight-app',
  '.chat-widget',
  '.sticky-banner',
  '.fixed.bottom-0',
  '#tidio-chat',
  '#hubspot-messages-iframe-container',
];

function log(...args) {
  console.log('[OG]', ...args);
}

async function startServer() {
  const server = http.createServer((req, res) =>
    serveHandler(req, res, { public: DIST_DIR })
  );
  server.listen(PORT);
  await once(server, 'listening');
  log(`Local server started at ${ORIGIN}`);
  return server;
}

async function main() {
  const server = await startServer();

  // Use managed Chromium path installed by `puppeteer browsers install chromium`
  const executablePath = puppeteer.executablePath();
  if (!executablePath) {
    throw new Error('No Chromium executablePath found. Ensure you ran: npx puppeteer browsers install chromium');
  }

  const browser = await puppeteer.launch({
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    // Load homepage
    await page.goto(ORIGIN, { waitUntil: 'networkidle0', timeout: 120_000 });

    // Hide overlays/popups
    const hideCSS = `${HIDE_SELECTORS.join(',')} { display: none !important; visibility: hidden !important; }`;
    await page.addStyleTag({ content: hideCSS });

    // If selector exists, screenshot that element; else capture the viewport
    let clipped = false;
    if (TARGET_SELECTOR) {
      const el = await page.$(TARGET_SELECTOR);
      if (el) {
        const box = await el.boundingBox();
        if (box && box.width > 0 && box.height > 0) {
          await page.screenshot({
            path: OUTPUT,
            type: 'jpeg',
            quality: 90,
            clip: {
              x: Math.max(0, Math.floor(box.x)),
              y: Math.max(0, Math.floor(box.y)),
              width: Math.min(VIEWPORT.width, Math.ceil(box.width)),
              height: Math.min(VIEWPORT.height, Math.ceil(box.height)),
            },
          });
          clipped = true;
          log(`Captured selector ${TARGET_SELECTOR} → ${OUTPUT}`);
        }
      }
    }

    if (!clipped) {
      // Fallback: full 1200x630 viewport
      await page.screenshot({
        path: OUTPUT,
        type: 'jpeg',
        quality: 90,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      });
      log(`Captured viewport → ${OUTPUT}`);
    }
  } catch (err) {
    console.error('[OG] Error generating og.jpg\n', err);
    process.exitCode = 1;
  } finally {
    await browser.close().catch(() => {});
    server.close();
  }
}

main();
