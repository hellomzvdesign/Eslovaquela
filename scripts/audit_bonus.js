// Audit bonus decks: ¿la respuesta correcta del quiz aparece en las cartas del deck?
const fs = require('fs');
const path = require('path');
let src = fs.readFileSync(path.join(__dirname, '../data/bonus.js'), 'utf8');
src = src.replace('const BONUS_DECKS', 'var BONUS_DECKS');
eval(src);

function norm(s) { return String(s).toLowerCase().replace(/[.,!?¿¡:;"„“”'()…]/g, '').trim(); }
function toks(s) { return String(s).split(/[\s/,]+/).map(norm).filter(t => t && /[a-záäčďéíľĺňóôŕšťúýž]/i.test(t)); }

let n = 0;
for (const [cat, decks] of Object.entries(BONUS_DECKS)) {
  for (const deck of decks) {
    const shown = new Set();
    (deck.cards || []).forEach(c => {
      if (Array.isArray(c)) { toks(c[0]).forEach(t => shown.add(t)); toks(c[1]).forEach(t => shown.add(t)); }
      else { ['place', 'tip', 'fact', 'img'].forEach(k => toks(c[k] || '').forEach(t => shown.add(t))); }
    });
    (deck.quiz || []).forEach(q => {
      if (typeof q.ci !== 'number' || q.ci < 0 || q.ci >= q.opts.length) {
        console.log(`STRUCT ${cat}/${deck.id}: ci invalido en "${q.q}"`); n++; return;
      }
      const correct = q.opts[q.ci];
      const miss = toks(correct).filter(t => !shown.has(t));
      if (miss.length && miss.length === toks(correct).length) {
        console.log(`? ${cat}/${deck.id}: correcta "${correct}" no aparece en las cartas — q: "${q.q}"`); n++;
      }
    });
  }
}
console.log(`hallazgos: ${n}`);
