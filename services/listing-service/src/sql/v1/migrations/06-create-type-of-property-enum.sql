DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'type_of_property_enum') THEN
    CREATE TYPE type_of_property_enum AS ENUM ('Apartment', 'House', 'Unique space', 'Bed & Breakfast', 'Boutique Hotel');
  END IF;
END$$;