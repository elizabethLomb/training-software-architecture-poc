INSERT INTO cancellation_policies (name, description, refund_percentage, cancellation_window) VALUES
  ('Flexible', 'Full refund at least 1 day before arrival, Partial refund 1 day before arrival', 100, 1),
  ('Moderate', 'Full refund at least 5 days before arrival, Partial refund 5 days before arrival', 100, 5),
  ('Limited', 'Full refund at least 14 days before arrival, Partial refund from 7 to 14 days before arrival', 100, 14),
  ('Semi-strict', 'Full refund at least 30 days before arrival, Partial refund from 7 to 30 days before arrival', 50, 30)
ON CONFLICT (name) DO NOTHING;