// Audit: ¿hay preguntas que evalúan contenido no enseñado todavía?
// Recorre el currículo en orden, acumula lo "mostrado" en slides y verifica
// cada pregunta (w/p/mc/tq) contra ese conjunto. También hace checks
// estructurales y lint de español peninsular.
//
// Uso: node scripts/audit_questions.js

const { CURRICULUM } = require('../data/curriculum.js');

// ── tokenización ─────────────────────────────────────────────────────
function norm(s) {
  return String(s).toLowerCase()
    .replace(/[.,!?¿¡:;"'„“”…()→·]/g, '')
    .trim();
}
function tokenize(s) {
  if (!s) return [];
  return String(s)
    .split(/[\s/,]+/)
    .map(norm)
    .filter(t => t && !/^_+$/.test(t) && /[a-záäčďéíľĺňóôŕšťúýž]/i.test(t));
}

// ── conjunto global de tokens eslovacos (solo para DETECTAR idioma) ──
const GLOBAL_SK = new Set();
function addGlobal(s) { tokenize(s).forEach(t => GLOBAL_SK.add(t)); }
for (const sec of CURRICULUM) {
  for (const les of sec.ls || []) {
    (les.w || []).forEach(([sk]) => addGlobal(sk));
    (les.sl || []).forEach(s => {
      if (s[0] === 'v') (s[2] || []).forEach(([sk]) => addGlobal(sk));
      if (s[0] === 'g') (s[3] || []).forEach(pair => addGlobal(pair[1]));
    });
    (les.p || []).forEach(([, sk, ws, dis]) => {
      addGlobal(sk);
      (ws || []).forEach(([skTok]) => addGlobal(skTok));
      (dis || []).forEach(d => addGlobal(d));
    });
    (les.tq || []).forEach(q => {
      if (typeof q.answer === 'string') addGlobal(q.answer);
      (q.accept || []).forEach(a => addGlobal(a));
      if (q.audio) addGlobal(q.audio);
    });
  }
}
// palabras españolas frecuentes que colisionan con tokens eslovacos
// (no las tratamos como eslovaco al clasificar texto)
const ES_COLLIDE = new Set(['si','no','a','la','le','sa','mi','dobre']);

function looksSlovak(phrase) {
  const toks = tokenize(phrase);
  if (!toks.length) return false;
  const skHits = toks.filter(t => GLOBAL_SK.has(t)).length;
  const strongHits = toks.filter(t => GLOBAL_SK.has(t) && !ES_COLLIDE.has(t)).length;
  return strongHits > 0 && skHits / toks.length >= 0.6;
}

// ── recorrido en orden ──────────────────────────────────────────────
const shown = new Set();   // todo lo visto en slides hasta el punto actual
const vocab = new Set();   // solo lo enseñado como vocabulario (v / w)

const findings = []; // {sev, where, msg}
function flag(sev, where, msg) { findings.push({ sev, where, msg }); }

function addSlides(les) {
  (les.sl || []).forEach(s => {
    if (s[0] === 'v') (s[2] || []).forEach(([sk]) => {
      tokenize(sk).forEach(t => { shown.add(t); vocab.add(t); });
    });
    if (s[0] === 'g') (s[3] || []).forEach(pair => {
      tokenize(pair[1]).forEach(t => shown.add(t));
      // lado izquierdo: solo tokens que existen como eslovaco en el curso
      tokenize(pair[0]).forEach(t => { if (GLOBAL_SK.has(t)) shown.add(t); });
    });
    if (s[0] === 't') {
      // texto libre: contar como visto cualquier token eslovaco conocido
      tokenize(s[2]).forEach(t => { if (GLOBAL_SK.has(t)) shown.add(t); });
      tokenize(s[1]).forEach(t => { if (GLOBAL_SK.has(t)) shown.add(t); });
    }
  });
}

function missingTokens(phrase) {
  return tokenize(phrase).filter(t => !shown.has(t));
}

// preguntas que citan deliberadamente formas INCORRECTAS ("encuentra el error")
const INTENTIONAL_ERROR = /incorrect|error|equivocad|está mal|no es correct/i;

function checkQuotedSlovak(where, text) {
  if (INTENTIONAL_ERROR.test(String(text))) return;
  const m = String(text).match(/["“„]([^"“”„]+)["”]/g) || [];
  m.forEach(q => {
    const phrase = q.replace(/^["“„]|["”]$/g, '');
    if (!looksSlovak(phrase)) return;
    const miss = missingTokens(phrase);
    if (miss.length) flag('HARD', where, `frase eslovaca "${phrase}" usa tokens no enseñados: [${miss.join(', ')}]`);
  });
}

const SK_OPTION_PATTERNS = /c[oó]mo se dice|tradu|escribe en eslovaco|elige la traducci[oó]n|completa/i;

for (const sec of CURRICULUM) {
  for (const les of sec.ls || []) {
    const where0 = `${sec.id}/${les.id}`;
    addSlides(les); // los slides SIEMPRE se muestran antes de las preguntas

    // A) palabras w: deben aparecer en algún slide hasta este punto
    (les.w || []).forEach(([sk]) => {
      const miss = tokenize(sk).filter(t => !shown.has(t));
      if (miss.length) flag('HARD', where0, `palabra de ejercicio '${sk}' nunca mostrada en slides: [${miss.join(', ')}]`);
      tokenize(sk).forEach(t => { shown.add(t); vocab.add(t); });
    });

    // B) preguntas p (construir frase)
    (les.p || []).forEach(([es, sk, ws, dis]) => {
      const where = `${where0} p:"${es}"`;
      const miss = missingTokens(sk);
      if (miss.length) flag('HARD', where, `respuesta '${sk}' usa tokens no enseñados: [${miss.join(', ')}]`);
      // estructural: ws debe reconstruir sk
      const joined = tokenize((ws || []).map(w => w[0]).join(' ')).join(' ');
      if (joined !== tokenize(sk).join(' ')) flag('STRUCT', where, `desglose ws ('${joined}') no coincide con sk ('${tokenize(sk).join(' ')}')`);
      // tokens duplicados con la misma forma exacta rompen la UI de fichas
      const raw = (ws || []).map(w => w[0]);
      const dup = raw.filter((t, i) => raw.indexOf(t) !== i);
      if (dup.length) flag('STRUCT', where, `fichas duplicadas idénticas en el banco: [${[...new Set(dup)].join(', ')}]`);
      // distractores no enseñados (severidad baja)
      const dMiss = (dis || []).flatMap(d => tokenize(d)).filter(t => !shown.has(t));
      if (dMiss.length) flag('INFO', where, `distractores no enseñados: [${dMiss.join(', ')}]`);
    });

    // C) preguntas mc
    (les.mc || []).forEach(([q, opts, ci]) => {
      const where = `${where0} mc:"${q}"`;
      if (!Array.isArray(opts) || typeof ci !== 'number' || ci < 0 || ci >= opts.length) {
        flag('STRUCT', where, `índice de respuesta inválido (ci=${ci}, opts=${(opts || []).length})`);
        return;
      }
      checkQuotedSlovak(where, q);
      if (SK_OPTION_PATTERNS.test(q)) {
        const correct = opts[ci];
        if (looksSlovak(correct)) {
          const miss = missingTokens(correct);
          if (miss.length) flag('HARD', where, `respuesta correcta '${correct}' usa tokens no enseñados: [${miss.join(', ')}]`);
        }
        opts.forEach((o, i) => {
          if (i === ci || !looksSlovak(o)) return;
          const miss = missingTokens(o);
          if (miss.length) flag('INFO', where, `distractor '${o}' con tokens no enseñados: [${miss.join(', ')}]`);
        });
      }
    });

    // D) preguntas tq (tests)
    (les.tq || []).forEach(q => {
      const where = `${where0} tq:${q.id}`;
      checkQuotedSlovak(where, q.question);
      if (q.type === 'fill' || q.type === 'type') {
        const targets = [q.answer, ...(q.accept || [])].filter(s => typeof s === 'string');
        const main = targets[0] || '';
        if (looksSlovak(main) || tokenize(main).every(t => GLOBAL_SK.has(t))) {
          const miss = missingTokens(main);
          if (miss.length) flag('HARD', where, `respuesta '${main}' usa tokens no enseñados: [${miss.join(', ')}]`);
        }
      }
      if (q.type === 'listen' && q.audio) {
        const miss = missingTokens(q.audio);
        if (miss.length) flag('HARD', where, `audio '${q.audio}' usa tokens no enseñados: [${miss.join(', ')}]`);
      }
      if (q.type === 'mc' || q.type === 'listen') {
        if (!Array.isArray(q.options) || typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
          flag('STRUCT', where, `índice de respuesta inválido (answer=${q.answer}, opts=${(q.options || []).length})`);
        } else if (q.type === 'mc' && SK_OPTION_PATTERNS.test(q.question)) {
          const correct = q.options[q.answer];
          if (looksSlovak(correct)) {
            const miss = missingTokens(correct);
            if (miss.length) flag('HARD', where, `respuesta correcta '${correct}' usa tokens no enseñados: [${miss.join(', ')}]`);
          }
        }
      }
    });
  }
}

// ── concept_tags compartidos entre secciones (riesgo: findReviewQuestion
//    puede inyectar preguntas de secciones posteriores en un test anterior) ──
const tagSections = {};
CURRICULUM.forEach(sec => sec.ls.forEach(l => (l.tq || []).forEach(q => {
  if (!q.concept_tag) return;
  (tagSections[q.concept_tag] = tagSections[q.concept_tag] || new Set()).add(sec.id);
})));
Object.entries(tagSections).forEach(([tag, secs]) => {
  if (secs.size > 1) flag('XSEC', `concept_tag:${tag}`, `aparece en secciones [${[...secs].join(', ')}] — un repaso de errores puede traer preguntas de secciones aún no estudiadas`);
});

// ── lint español peninsular ──────────────────────────────────────────
const PENINSULAR = [
  /\b(vosotros|vosotras|vuestro|vuestra|vuestros|vuestras)\b/i,
  /\b(est[áa]is|so[íi]s|hab[ée]is|ten[ée]is|vais|quer[ée]is|pod[ée]is|sab[ée]is|hac[ée]is|com[ée]is|viv[íi]s|habl[áa]is)\b/i,
  /\b(coche|ordenador|m[óo]vil|patata|zumo|nevera|fontanero|calcetines)\b/i,
  /\bcoger\w*\b/i,
  /\bvale\b/i,
];
function lintEs(where, text) {
  if (typeof text !== 'string') return;
  PENINSULAR.forEach(rx => {
    const m = text.match(rx);
    if (m) flag('LATAM', where, `posible español peninsular: '${m[0]}' en "${text.slice(0, 90)}"`);
  });
}
function walkLint(obj, where) {
  if (typeof obj === 'string') return lintEs(where, obj);
  if (Array.isArray(obj)) return obj.forEach(x => walkLint(x, where));
  if (obj && typeof obj === 'object') Object.entries(obj).forEach(([k, v]) => walkLint(v, `${where}.${k}`));
}
CURRICULUM.forEach(sec => walkLint(sec, sec.id));

// ── salida ───────────────────────────────────────────────────────────
const order = { HARD: 0, STRUCT: 1, XSEC: 2, LATAM: 3, INFO: 4 };
findings.sort((a, b) => order[a.sev] - order[b.sev]);
let last = '';
for (const f of findings) {
  if (f.sev !== last) { console.log(`\n===== ${f.sev} (${findings.filter(x => x.sev === f.sev).length}) =====`); last = f.sev; }
  console.log(`  [${f.where}] ${f.msg}`);
}
if (!findings.length) console.log('Sin hallazgos.');
console.log(`\nTotal: ${findings.length} hallazgos.`);
