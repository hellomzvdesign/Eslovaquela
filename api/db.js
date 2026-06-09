const { Pool } = require('pg');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

function hashPassword(password, salt) {
  salt = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  if (!salt || !hash) return false;
  const check = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(check, 'hex'), Buffer.from(hash, 'hex'));
}

function signToken(payload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET');
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}

function verifyToken(token) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET');
  return jwt.verify(token, secret);
}

async function execute(text, params) {
  return pool.query(text, params);
}

module.exports = { execute, hashPassword, verifyPassword, signToken, verifyToken };
