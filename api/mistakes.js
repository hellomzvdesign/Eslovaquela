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

module.exports = async (req, res) => {
  const token = getToken(req);
  if (!token) return sendJson(res, 401, { error: 'Token missing' });

  let payload;
  try { payload = verifyToken(token); } catch (err) { return sendJson(res, 401, { error: 'Token inválido' }); }

  if (req.method === 'GET') {
    try {
      const result = await execute(
        `SELECT concept_tag, wrong_count, last_wrong_at FROM user_mistakes
         WHERE username = $1 ORDER BY wrong_count DESC, last_wrong_at DESC LIMIT 10`,
        [payload.username]
      );
      return sendJson(res, 200, { mistakes: result.rows });
    } catch (err) {
      console.error(err);
      return sendJson(res, 500, { error: 'Server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = await parseJson(req);
      const conceptTag = String(body.conceptTag || '').trim();
      if (!conceptTag) return sendJson(res, 400, { error: 'conceptTag requerido' });

      await execute(
        `INSERT INTO user_mistakes (username, concept_tag, wrong_count, last_wrong_at)
         VALUES ($1, $2, 1, $3)
         ON CONFLICT (username, concept_tag)
         DO UPDATE SET wrong_count = user_mistakes.wrong_count + 1, last_wrong_at = $3`,
        [payload.username, conceptTag, Date.now()]
      );
      return sendJson(res, 200, { ok: true });
    } catch (err) {
      console.error(err);
      return sendJson(res, 500, { error: 'Server error' });
    }
  }

  return sendJson(res, 405, { error: 'Method not allowed' });
};
