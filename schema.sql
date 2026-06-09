CREATE TABLE IF NOT EXISTS users (
  username text PRIMARY KEY,
  name text NOT NULL,
  password_hash text NOT NULL,
  salt text NOT NULL,
  xp integer NOT NULL DEFAULT 0,
  hearts integer NOT NULL DEFAULT 5,
  hearts_regen bigint NOT NULL DEFAULT (extract(epoch from now())::bigint * 1000),
  completed jsonb NOT NULL DEFAULT '[]',
  tests_passed jsonb NOT NULL DEFAULT '[]'
);
