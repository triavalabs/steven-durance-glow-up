// scripts/generate-og.js
// Generate a 1200x630 Open Graph image from /dist using Playwright's bundled Chromium.
// Netlify build command should be:
//   npx playwright install chromium && npm run build && node scripts/generate-og.js
//
// Requires dev deps: playwright-chromium, serve-handler

import http from 'http';
import { once } from 'events';
import path from 'path';
import { fileURLToPath } from 'url';
import serveHandler from 'serve-handler';
import { chromium } from 'playwright-chromium';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = Number(process.env.OG_SERVER_PORT || 5055);
const ORIGIN = `http://localhost:${PORT}/`;
const OUTPUT = path.join(DIST_DIR, 'og.jpg');

const VIEWPORT = { width: 1200, height: 630 };
const TARGET_SELECTOR = process.env.OG_SELECTOR || '#og-card';
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

function log(...a) { console.log('[OG]', ...a); }

async function startServer() {
  const server = http.createServer((req, res) =>
    serveHandler(req, res, { public: DIST_DIR })
  );
  server.listen(PORT);
  await once(server, 'listening');
  log(`Local server at ${ORIGIN}`);
  return server;
}

async function main() {
  const server = await startServer();
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    const page = await browser.newPage();
    await page.setViewportSize(VIEWPORT);
    await page.goto(ORIGIN, { waitUntil: 'networkidle', timeout: 120_000 });

    const hideCSS = `${HIDE_SELECTORS.join(',')} { display: none !important; visibility: hidden !important; }`;
    await page.addStyleTag({ content: hideCSS });

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
          log(`Captured ${TARGET_SELECTOR} → ${OUTPUT}`);
        }
      }
    }

    if (!clipped) {
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
