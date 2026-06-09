const { execute, hashPassword, verifyPassword, signToken } = require('./db');

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

function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase();
}

function validUsername(value) {
  return /^[a-z0-9_-]{3,30}$/.test(String(value || '').trim().toLowerCase());
}

function validPassword(password) {
  return typeof password === 'string' && password.length >= 4;
}

function validName(name) {
  return typeof name === 'string' && name.trim().length >= 2;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' });
  try {
    const body = await parseJson(req);
    const mode = body.mode === 'register' ? 'register' : 'login';
    const username = normalizeUsername(body.username);
    const password = body.password;
    const name = body.name ? String(body.name).trim() : '';

    if (!validUsername(username) || !validPassword(password)) {
      return sendJson(res, 400, { error: 'Usuario o contraseña inválidos.' });
    }

    if (mode === 'register') {
      if (!validName(name)) {
        return sendJson(res, 400, { error: 'Ingresa un nombre válido.' });
      }
      const exists = await execute('SELECT username FROM users WHERE username = $1', [username]);
      if (exists.rowCount) return sendJson(res, 400, { error: 'El usuario ya existe.' });

      const { salt, hash } = hashPassword(password);
      await execute(
        `INSERT INTO users (username, name, password_hash, salt, xp, hearts, hearts_regen, completed, tests_passed)
         VALUES ($1, $2, $3, $4, 0, 5, $5, $6, $7)`,
        [username, name, hash, salt, Date.now(), JSON.stringify([]), JSON.stringify([])]
      );

      const token = signToken({ username });
      return sendJson(res, 200, {
        token,
        user: { username, name, xp: 0, hearts: 5, heartsRegen: Date.now(), completed: [], testsPassed: [] }
      });
    }

    const result = await execute('SELECT * FROM users WHERE username = $1', [username]);
    if (!result.rowCount) return sendJson(res, 400, { error: 'Usuario o contraseña incorrectos.' });

    const row = result.rows[0];
    if (!verifyPassword(password, row.salt, row.password_hash)) {
      return sendJson(res, 400, { error: 'Usuario o contraseña incorrectos.' });
    }

    const token = signToken({ username });
    return sendJson(res, 200, {
      token,
      user: {
        username: row.username,
        name: row.name,
        xp: row.xp,
        hearts: row.hearts,
        heartsRegen: Number(row.hearts_regen || Date.now()),
        completed: row.completed || [],
        testsPassed: row.tests_passed || []
      }
    });
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { error: 'Server error' });
  }
};
