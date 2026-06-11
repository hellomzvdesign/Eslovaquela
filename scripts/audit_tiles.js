// ¿Algún distractor de 'p' es idéntico (misma forma exacta) a una ficha necesaria?
// Eso pondría dos fichas iguales en el banco y la UI de selección se confunde
// (tileClick compara por string).
const { CURRICULUM } = require('../data/curriculum.js');
let n = 0;
CURRICULUM.forEach(sec => sec.ls.forEach(les => (les.p || []).forEach(([es, sk, ws, dis]) => {
  const need = (ws || []).map(w => w[0]);
  (dis || []).forEach(d => {
    if (need.includes(d)) { console.log(`${sec.id}/${les.id} p:"${es}" — distractor '${d}' idéntico a ficha necesaria`); n++; }
  });
})));
console.log(`hallazgos: ${n}`);
