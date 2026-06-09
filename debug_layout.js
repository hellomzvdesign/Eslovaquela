const { chromium } = require('playwright');
const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/curriculum')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify([
      { id: 1, ti: 'Sección 1', em: '🌱', col: '#00A86B', gr: {}, ls: [
        { id: 1, ti: 'Lección 1', em: '👋', sl: [], w: [], p: [], mc: [] }
      ] }
    ]));
  }
  if (req.url.startsWith('/api/progress')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ user: {
      username: 'aahoj1', xp: 0, hearts: 4, heartsRegen: Date.now(),
      completed: [], testsPassed: [], streak: 1, lastActive: new Date().toISOString().slice(0,10), grammarUnlocked: []
    }}));
  }
  const file = path.join(__dirname, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise(r => server.listen(5391, r));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.addInitScript(() => {
    localStorage.setItem('slovako_token', 'mock-token');
  });

  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:5391/');
  await page.waitForTimeout(700);

  await page.screenshot({ path: 'debug_screenshot.png' });

  const info = await page.evaluate(() => {
    function rect(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { sel, rect: { x: r.x, y: r.y, w: r.width, h: r.height }, display: cs.display, position: cs.position, width: cs.width, maxWidth: cs.maxWidth, marginLeft: cs.marginLeft, marginRight: cs.marginRight, flexShrink: cs.flexShrink, flexGrow: cs.flexGrow };
    }
    return {
      html: rect('html'),
      body: rect('body'),
      nav: rect('.bottom-nav'),
      scwrap: rect('#sc-wrap'),
      scmap: rect('#sc-map'),
      viewport: { w: window.innerWidth, h: window.innerHeight },
      activeScreen: document.querySelector('.screen.active') ? document.querySelector('.screen.active').id : null,
      navClass: document.getElementById('bottom-nav') ? document.getElementById('bottom-nav').className : 'NOT FOUND',
    };
  });
  console.log(JSON.stringify(info, null, 2));

  await browser.close();
  server.close();
})();
