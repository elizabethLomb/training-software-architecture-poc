CREATE TABLE IF NOT EXISTS listing_amenities (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT
);
