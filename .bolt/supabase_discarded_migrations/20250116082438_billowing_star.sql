-- Create learning_patterns table for AI system
CREATE TABLE learning_patterns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pattern text NOT NULL,
  effectiveness float NOT NULL CHECK (effectiveness >= 0 AND effectiveness <= 1),
  created_at timestamptz DEFAULT now(),
  last_used timestamptz DEFAULT now(),
  success_rate float NOT NULL CHECK (success_rate >= 0 AND success_rate <= 1),
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE learning_patterns ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow system to manage learning patterns"
  ON learning_patterns
  USING (true);

-- Create indexes for performance
CREATE INDEX idx_learning_patterns_effectiveness ON learning_patterns (effectiveness DESC);
CREATE INDEX idx_learning_patterns_success_rate ON learning_patterns (success_rate DESC);
CREATE INDEX idx_learning_patterns_last_used ON learning_patterns (last_used DESC);

-- Create function to automatically update last_used timestamp
CREATE OR REPLACE FUNCTION update_learning_pattern_last_used()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_used = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update last_used
CREATE TRIGGER update_learning_pattern_last_used_trigger
  BEFORE UPDATE ON learning_patterns
  FOR EACH ROW
  EXECUTE FUNCTION update_learning_pattern_last_used();