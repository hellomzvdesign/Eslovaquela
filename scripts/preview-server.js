// Lokálny náhľadový server s falošným auth/progress API (bez DB).
// Spustenie: node scripts/preview-server.js  → http://localhost:4173
const http = require('http');
const fs = require('fs');
const path = require('path');
const { CURRICULUM } = require('../data/curriculum');
const { BONUS_DECKS } = require('../data/bonus');

const ROOT = path.join(__dirname, '..');
const PORT = 4173;

// Falošný používateľ s odomknutým obsahom, nech vidno všetky stavy mapy.
const completedIds = [];
const testsPassed = [];
const grammarUnlocked = [];
CURRICULUM.slice(0, 1).forEach(sec => {
  sec.ls.forEach(l => { if (!l.isTest) completedIds.push(l.id); else testsPassed.push(l.id); });
  grammarUnlocked.push(sec.id);
});
// Druhá sekcia: prvé 2 lekcie hotové
if (CURRICULUM[1]) CURRICULUM[1].ls.slice(0, 2).forEach(l => { if (!l.isTest) completedIds.push(l.id); });

const FAKE_USER = {
  username: 'demo', name: 'Mariana', xp: 1240, hearts: 4,
  heartsRegen: Date.now(), completed: completedIds, testsPassed,
  streak: 5, lastActive: new Date().toISOString().slice(0, 10),
  grammarUnlocked, streakFreezes: 1, freezeTier: 2, lastRewardStreak: 0, usedBonusDecks: {},
};

const MIME = { '.html': 'text/html', '.webp': 'image/webp', '.png': 'image/png', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

function json(res, payload) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/api/curriculum') return json(res, CURRICULUM);
  if (url === '/api/bonus') return json(res, BONUS_DECKS);
  if (url === '/api/auth') return json(res, { token: 'demo-token', user: FAKE_USER });
  if (url === '/api/progress') {
    if (req.method === 'GET') return json(res, { user: FAKE_USER });
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => json(res, { user: { ...FAKE_USER, ...JSON.parse(body || '{}') } }));
    return;
  }
  if (url === '/api/mistakes') return json(res, { mistakes: [] });
  const file = path.join(ROOT, url === '/' ? 'index.html' : url);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('not found');
  }
  if (file.endsWith('index.html')) {
    // Injektáž pre headless náhľady: auto-login + ?screen=vocab|grammar|slides|lesson|complete|auth
    let html = fs.readFileSync(file, 'utf8');
    const inject = `<script>
const __q=new URLSearchParams(location.search).get('screen');
if(__q!=='auth')localStorage.setItem('slovako_token','demo');else localStorage.removeItem('slovako_token');
if(__q&&__q!=='auth'){const __t=setInterval(()=>{if(typeof C!=='undefined'&&C&&ST.user){clearInterval(__t);try{
  if(__q==='vocab')showTab('vocab');
  else if(__q==='grammar')showTab('grammar');
  else if(__q==='slides')startLesson(C[0],C[0].ls[0]);
  else if(__q==='lesson'){curSection=C[0];curLesson=C[0].ls[0];curCompanion=pickCompanion();beginExercises();}
  else if(__q==='complete'){curSection=C[0];curLesson=C[0].ls[0];curCompanion=pickCompanion();nCorr=10;nErr=1;showComplete();}
}catch(e){console.error(e)}}},100);}
<\/script>`;
    html = html.replace('<body>', '<body>' + inject);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(html);
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`preview: http://localhost:${PORT}`));
