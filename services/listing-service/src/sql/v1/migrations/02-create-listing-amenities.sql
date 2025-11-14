CREATE TABLE IF NOT EXISTS listing_amenities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT
);
