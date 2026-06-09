const { execute } = require('./db');

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(JSON.stringify(payload));
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') return sendJson(res, 405, { error: 'Method not allowed' });
  try {
    const sectionsRes = await execute('SELECT * FROM sections ORDER BY sort_order');
    const lessonsRes = await execute('SELECT * FROM lessons ORDER BY section_id, sort_order');

    const lessonsBySection = {};
    for (const row of lessonsRes.rows) {
      if (!lessonsBySection[row.section_id]) lessonsBySection[row.section_id] = [];
      const lesson = {
        id: row.id,
        ti: row.title,
        em: row.emoji,
        sl: row.slides,
        w: row.words,
        p: row.phrases,
        mc: row.multiple_choice
      };
      if (row.is_test) lesson.isTest = true;
      lessonsBySection[row.section_id].push(lesson);
    }

    const curriculum = sectionsRes.rows.map(sec => ({
      id: sec.id,
      ti: sec.title,
      em: sec.emoji,
      col: sec.color,
      gr: sec.grammar_ref || {},
      ls: lessonsBySection[sec.id] || []
    }));

    return sendJson(res, 200, curriculum);
  } catch (err) {
    console.error(err);
    return sendJson(res, 500, { error: 'Server error' });
  }
};
