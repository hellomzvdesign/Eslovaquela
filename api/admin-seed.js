const { seed } = require('../seed');

const ADMIN_KEY = (process.env.ADMIN_KEY || '').replace(/^﻿/, '');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'POST only' }));
  }
  const key = req.headers['x-admin-key'];
  if (!key || key !== ADMIN_KEY) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: 'Unauthorized' }));
  }
  try {
    await seed();
    res.end(JSON.stringify({ ok: true, message: 'Reseeded successfully' }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: String(e) }));
  }
};
