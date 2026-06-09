const { execute, verifyToken } = require('./db');

function parseJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      if (!body) return resolve({});
      try { resolve(JSON.parse(body)); } catch (err) { reject(err); }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function getToken(req) {
  const auth = req.headers.authorization || req.headers.Authorization;
  if (!auth || !auth.toLowerCase().startsWith('bearer ')) return null;
  return auth.slice(7).trim();
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeUserRow(row) {
  return {
    username: row.username,
    name: row.name,
    xp: row.xp,
    hearts: row.hearts,
    heartsRegen: Number(row.hearts_regen || Date.now()),
    completed: row.completed || [],
    testsPassed: row.tests_passed || [],
    streak: row.streak || 0,
    lastActive: row.last_active || '',
    grammarUnlocked: row.grammar_unlocked || []
  };
}

module.exports = async (req, res) => {
  const token = getToken(req);
  if (!token) return sendJson(res, 401, { error: 'Token missing' });

  let payload;
  try { payload = verifyToken(token); } catch (err) { return sendJson(res, 401, { error: 'Token inválido' }); }

  if (req.method === 'GET') {
    try {
      const result = await execute('SELECT * FROM users WHERE username = $1', [payload.username]);
      if (!result.rowCount) return sendJson(res, 404, { error: 'Usuario no encontrado' });
      return sendJson(res, 200, { user: normalizeUserRow(result.rows[0]) });
    } catch (err) {
      console.error(err);
      return sendJson(res, 500, { error: 'Server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = await parseJson(req);
      const xp = Number(body.xp) || 0;
      const hearts = Math.max(0, Math.min(5, Number(body.hearts) || 0));
      const heartsRegen = Number(body.heartsRegen) || Date.now();
      const completed = JSON.stringify(safeArray(body.completed));
      const testsPassed = JSON.stringify(safeArray(body.testsPassed));
      const streak = Number(body.streak) || 0;
      const lastActive = String(body.lastActive || '');
      const grammarUnlocked = JSON.stringify(safeArray(body.grammarUnlocked));

      const result = await execute(
        `UPDATE users SET xp=$1, hearts=$2, hearts_regen=$3, completed=$4, tests_passed=$5,
         streak=$6, last_active=$7, grammar_unlocked=$8 WHERE username=$9 RETURNING *`,
        [xp, hearts, heartsRegen, completed, testsPassed, streak, lastActive, grammarUnlocked, payload.username]
      );
      if (!result.rowCount) return sendJson(res, 404, { error: 'Usuario no encontrado' });
      return sendJson(res, 200, { user: normalizeUserRow(result.rows[0]) });
    } catch (err) {
      console.error(err);
      return sendJson(res, 500, { error: 'Server error' });
    }
  }

  return sendJson(res, 405, { error: 'Method not allowed' });
};
