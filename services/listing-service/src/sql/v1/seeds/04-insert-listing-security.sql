INSERT INTO listing_security (name, description, value) VALUES
  ('It''s not a good option for children aged 2 to 12', 'This property has features that may not be safe for children', FALSE),
  ('Not a good option for babies under 2 years old', 'This property has features that may not be safe for babies or toddlers', FALSE),
  ('Potentially dangerous animals on the property', 'There are animals on the property that may pose a risk to guests', FALSE),
  ('Security cameras on property', 'The property is monitored by security cameras for safety', FALSE),
  ('Security cameras in common areas', 'Common areas of the property are monitored by security cameras', FALSE),
  ('Security cameras in private areas', 'Private areas of the property are monitored by security cameras', FALSE),
  ('Smoke alarm', 'Smoke alarm installed for safety', FALSE),
  ('Carbon monoxide alarm', 'Carbon monoxide alarm installed for safety', FALSE),
  ('Fire extinguisher', 'Fire extinguisher available for safety', FALSE),
  ('First aid kit', 'First aid kit available for emergencies', FALSE),
  ('Travelers have to climb stairs', 'The property requires climbing stairs which may not be suitable for all guests', FALSE),
  ('There are pets living on the property', 'Travelers may encounter pets during their stay or interact with them', FALSE),
  ('Weapons on the property', 'There are weapons stored on the property', FALSE)
ON CONFLICT (name) DO NOTHING;
