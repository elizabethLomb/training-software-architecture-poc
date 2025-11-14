CREATE TABLE IF NOT EXISTS listing_rules (
  id SERIAL PRIMARY KEY,
  pets_allowed BOOLEAN NOT NULL DEFAULT FALSE,
  smoking_allowed BOOLEAN NOT NULL DEFAULT FALSE,
  parties_allowed BOOLEAN NOT NULL DEFAULT FALSE,
  check_in_time TIME,
  check_out_time TIME,
  guest_capacity INTEGER NOT NULL,
  additional_rules TEXT
);