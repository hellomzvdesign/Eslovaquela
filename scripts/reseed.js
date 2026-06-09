// Run: npm run reseed
// Re-applies the curriculum from seed.js to the production database
// by calling the protected /api/admin-seed endpoint (DATABASE_URL is
// only available at runtime on Vercel, not locally).
const fs = require('fs');
const path = require('path');

function loadEnvLocal() {
  const file = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  for (const line of content.split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (!m) continue;
    let value = m[2].trim().replace(/﻿/g, '');
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (process.env[m[1]] === undefined) process.env[m[1]] = value;
  }
}
loadEnvLocal();

const ADMIN_KEY = process.env.ADMIN_KEY;
const URL = process.env.RESEED_URL || 'https://eslovaquela.vercel.app/api/admin-seed';

if (!ADMIN_KEY) {
  console.error('Missing ADMIN_KEY. Run: npx vercel env pull .env.local');
  process.exit(1);
}

fetch(URL, { method: 'POST', headers: { 'x-admin-key': ADMIN_KEY } })
  .then(async res => {
    const body = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(body));
    console.log(body);
  })
  .catch(err => {
    console.error('Reseed failed:', err.message);
    process.exit(1);
  });
