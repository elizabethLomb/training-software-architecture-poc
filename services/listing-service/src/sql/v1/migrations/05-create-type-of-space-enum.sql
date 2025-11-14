DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'type_of_space_enum') THEN
    CREATE TYPE type_of_space_enum AS ENUM ('Entire Place', 'Bedroom', 'Shared Bedroom');
  END IF;
END$$;