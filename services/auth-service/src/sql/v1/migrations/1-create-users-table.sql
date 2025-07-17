CREATE TABLE IF NOT EXISTS users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT,
  last_name TEXT,
  email TEXT UNIQUE NOT NULL,
  role JSONB NOT NULL DEFAULT '["guest"]'::JSONB,
  password TEXT NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  properties JSONB  NOT NULL DEFAULT '[]'::JSONB,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_on TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);