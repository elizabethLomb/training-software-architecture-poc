CREATE TABLE IF NOT EXISTS cancellation_policies ( 
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL, 
  description TEXT, 
  refund_percentage INTEGER NOT NULL, 
  cancellation_window INTERVAL NOT NULL 
);