const { CURRICULUM } = require('../data/curriculum.js');

// Normalize a Slovak token for comparison
function norm(s) {
  return s.toLowerCase()
    .replace(/[.,!?¿¡:;"'()„“”…]/g, '')
    .trim();
}

// Tokenize a Slovak sentence/phrase into words
function tokenize(s) {
  if (!s) return [];
  return s.split(/\s+/).map(norm).filter(Boolean);
}

// Common grammar words that don't need to be "introduced" as vocab
// (articles don't exist in Slovak, but pronouns/conjunctions taught very early)
let cumulativeVocab = new Set(); // global, across all sections

for (const sec of CURRICULUM) {
  console.log(`\n===== ${sec.id} ${sec.ti} =====`);

  // Add grammar-table vocab for this section (taught via gr.patches before lessons start)
  for (const patch of (sec.gr && sec.gr.patches) || []) {
    for (const row of patch.r || []) {
      for (const cell of row) {
        tokenize(cell).forEach(t => cumulativeVocab.add(t));
      }
    }
  }

  for (const les of sec.ls || []) {
    const lessonWords = (les.w || []).map(w => norm(w[0]));
    const newVocabSet = new Set(lessonWords);

    // Add to cumulative AFTER processing this lesson's exercises (words become "known" once introduced)
    // but exercises in the SAME lesson should be allowed to use this lesson's new words
    const knownBeforeThisLesson = new Set(cumulativeVocab);
    const knownIncludingThisLesson = new Set([...cumulativeVocab, ...lessonWords]);

    // Gather Slovak text from p (translation exercises) and mc (multiple choice)
    let exerciseTokens = new Set();
    for (const p of les.p || []) {
      // p = [es, sk, [[sk_chunk, es_chunk],...], distractors, note]
      tokenize(p[1]).forEach(t => exerciseTokens.add(t));
      if (Array.isArray(p[2])) {
        for (const chunk of p[2]) {
          tokenize(chunk[0]).forEach(t => exerciseTokens.add(t));
        }
      }
      if (Array.isArray(p[3])) {
        p[3].forEach(d => exerciseTokens.add(norm(d)));
      }
    }
    for (const mc of les.mc || []) {
      // mc = [question_es, options[], answerIdx, explanation]
      // options and explanation may contain sk words in quotes - skip, too noisy
    }

    // Check coverage: which lesson 'w' words appear in p/mc exercise tokens
    const usedNewWords = lessonWords.filter(w => exerciseTokens.has(w) || [...exerciseTokens].some(t => t.includes(w) || w.includes(t)));
    const unusedNewWords = lessonWords.filter(w => !usedNewWords.includes(w));

    // Check for tokens used in exercises that are NOT in known vocab (cumulative + this lesson)
    // and not trivial (length <= 1)
    const unknownTokens = [...exerciseTokens].filter(t => {
      if (t.length <= 1) return false;
      if (knownIncludingThisLesson.has(t)) return false;
      // also check substring match against known vocab (handles inflection loosely)
      for (const k of knownIncludingThisLesson) {
        if (k.length >= 3 && (t.startsWith(k) || k.startsWith(t))) return false;
      }
      return true;
    });

    if (unusedNewWords.length || unknownTokens.length) {
      console.log(`  ${les.id} "${les.ti}" | w=[${lessonWords.join(', ')}]`);
      if (unusedNewWords.length) console.log(`    NOT PRACTICED in p/mc: ${unusedNewWords.join(', ')}`);
      if (unknownTokens.length) console.log(`    UNKNOWN tokens in p/mc (not in w so far): ${unknownTokens.join(', ')}`);
    }

    lessonWords.forEach(w => cumulativeVocab.add(w));
  }
}
