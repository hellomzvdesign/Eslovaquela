CREATE TABLE IF NOT EXISTS users (
  username text PRIMARY KEY,
  name text NOT NULL,
  password_hash text NOT NULL,
  salt text NOT NULL,
  xp integer NOT NULL DEFAULT 0,
  hearts integer NOT NULL DEFAULT 5,
  hearts_regen bigint NOT NULL DEFAULT (extract(epoch from now())::bigint * 1000),
  completed jsonb NOT NULL DEFAULT '[]',
  tests_passed jsonb NOT NULL DEFAULT '[]',
  streak integer NOT NULL DEFAULT 0,
  last_active text NOT NULL DEFAULT '',
  grammar_unlocked jsonb NOT NULL DEFAULT '[]'
);

CREATE TABLE IF NOT EXISTS sections (
  id text PRIMARY KEY,
  sort_order integer NOT NULL,
  title text NOT NULL,
  emoji text NOT NULL,
  color text NOT NULL,
  grammar_ref jsonb NOT NULL DEFAULT '{}'
);

CREATE TABLE IF NOT EXISTS lessons (
  id text PRIMARY KEY,
  section_id text NOT NULL REFERENCES sections(id),
  sort_order integer NOT NULL,
  title text NOT NULL,
  emoji text NOT NULL,
  is_test boolean NOT NULL DEFAULT false,
  slides jsonb NOT NULL DEFAULT '[]',
  words jsonb NOT NULL DEFAULT '[]',
  phrases jsonb NOT NULL DEFAULT '[]',
  multiple_choice jsonb NOT NULL DEFAULT '[]',
  test_questions jsonb NOT NULL DEFAULT '[]'
);

CREATE TABLE IF NOT EXISTS user_mistakes (
  username text REFERENCES users(username),
  concept_tag text NOT NULL,
  wrong_count integer NOT NULL DEFAULT 0,
  last_wrong_at bigint NOT NULL,
  PRIMARY KEY (username, concept_tag)
);
