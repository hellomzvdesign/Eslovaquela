// Run: node migrate.js
const { execute } = require('./api/db');

async function migrate() {
  console.log('Running migrations...');
  const stmts = [
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS streak integer NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS last_active text NOT NULL DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS grammar_unlocked jsonb NOT NULL DEFAULT '[]'",
    "ALTER TABLE sections ADD COLUMN IF NOT EXISTS grammar_ref jsonb NOT NULL DEFAULT '{}'"
  ];
  for (const sql of stmts) {
    try { await execute(sql); console.log('✓', sql.slice(0, 70)); }
    catch (e) { console.error('✗', sql.slice(0, 50), '|', String(e)); }
  }
  console.log('Done.');
  process.exit(0);
}
migrate().catch(err => { console.error(err); process.exit(1); });
