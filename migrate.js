// Run: node migrate.js
const { execute } = require('./api/db');

async function migrate() {
  console.log('Running migrations...');
  const stmts = [
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS streak integer NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS last_active text NOT NULL DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS grammar_unlocked jsonb NOT NULL DEFAULT '[]'",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS streak_freezes integer NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS freeze_tier integer NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS last_reward_streak integer NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS used_bonus_decks jsonb NOT NULL DEFAULT '{}'",
    `CREATE TABLE IF NOT EXISTS user_mistakes (
      username text REFERENCES users(username),
      concept_tag text NOT NULL,
      wrong_count integer NOT NULL DEFAULT 0,
      last_wrong_at bigint NOT NULL,
      PRIMARY KEY (username, concept_tag)
    )`
  ];
  for (const sql of stmts) {
    try { await execute(sql); console.log('✓', sql.slice(0, 70)); }
    catch (e) { console.error('✗', sql.slice(0, 50), '|', String(e)); }
  }
  console.log('Done.');
  process.exit(0);
}
migrate().catch(err => { console.error(err); process.exit(1); });
