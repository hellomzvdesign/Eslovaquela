// Compara el estado real del currículo con el estándar de ritmo:
// 7 lecciones + 1 test, 11 palabras nuevas/sección (1-2 por lección),
// test con tq de 15-20 preguntas y 0 palabras nuevas.
const { CURRICULUM } = require('../data/curriculum.js');

console.log('sec | lecciones | test | palabras w | w/lección | tq | máx w en una lección');
for (const sec of CURRICULUM) {
  const lessons = sec.ls.filter(l => !l.isTest);
  const test = sec.ls.find(l => l.isTest);
  const wCounts = lessons.map(l => (l.w || []).length);
  const totalW = wCounts.reduce((a, b) => a + b, 0);
  const tq = test ? (test.tq || []).length : 0;
  const testW = test ? (test.w || []).length : 0;
  console.log(
    `${sec.id.padEnd(3)} | ${String(lessons.length).padStart(2)}        | ${test ? (testW === 0 ? 'ok' : 'w!=0') : 'FALTA'}  | ${String(totalW).padStart(3)}        | ${wCounts.join(',')} | ${String(tq).padStart(2)} | ${Math.max(...wCounts)}`
  );
}
