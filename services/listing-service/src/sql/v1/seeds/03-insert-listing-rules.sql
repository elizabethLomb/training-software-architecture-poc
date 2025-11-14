INSERT INTO listing_rules (name, description, value_text, value_int, value_bool, value_time) VALUES
  ('Pets are welcome', 'Although you do not allow pets, you must allow travelers to stay with their assistance animals, within reason', null, null, false, null),
  ('Permitted events', 'You can host events and gatherings at this property, as long as you follow local laws and regulations', null, null, false, null),
  ('Smoking, vaping, and using electronic cigarettes are permitted', 'Smoking, vaping, and using electronic cigarettes are allowed inside this property', null, null, false, null),
  ('Commercial photography and recording are permitted.', 'Commercial photography and recording are allowed at this property', null, null, false, null),
  ('Number of travelers', 'The maximum number of travelers allowed to stay at this property', null, 1, null, null),
  ('Check-in start time', 'The earliest time travelers can check in to this property', null, null, null, '15:00:00'),
  ('Check-in end time', 'The earliest time travelers can check in to this property', null, null, null, '21:00:00'),
  ('Check-out time', 'The latest time travelers must check out of this property', null, null, null, '15:00:00'),
  ('Additional rules', 'Please refer to the additional rules provided by the host for this property', '', null, null, null)
ON CONFLICT (name) DO NOTHING;