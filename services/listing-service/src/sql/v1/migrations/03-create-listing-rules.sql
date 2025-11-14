CREATE TABLE IF NOT EXISTS listing_rules (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  value_text TEXT,
  value_int INTEGER,
  value_bool BOOLEAN,
  value_time TIME
);