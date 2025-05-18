/*
  # Initial Schema Setup

  1. New Tables
    - contact_submissions
    - testimonials
    - case_studies
    - blog_posts
    - investor_resources

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for public/authenticated access
*/

-- Contact Submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to create contact submissions"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (true);

-- Case Studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  industry text NOT NULL,
  results jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read case studies"
  ON case_studies FOR SELECT
  TO public
  USING (true);

-- Blog Posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (true);

-- Investor Resources table
CREATE TABLE IF NOT EXISTS investor_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE investor_resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read investor resources"
  ON investor_resources FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO testimonials (client_name, company, content, rating)
VALUES
  ('John Smith', 'Tech Innovators Inc.', 'The AI solutions provided by Tenebris Navitas have transformed our business operations, leading to a 40% increase in efficiency.', 5),
  ('Sarah Johnson', 'Global Solutions Ltd.', 'Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle.', 5),
  ('Michael Chen', 'Future Systems', 'Outstanding service and cutting-edge technology. The results exceeded our expectations.', 4);

INSERT INTO case_studies (title, content, industry, results)
VALUES
  (
    'AI-Driven Manufacturing Optimization',
    'Implemented advanced AI systems to optimize manufacturing processes for a leading automotive company.',
    'Manufacturing',
    '{"Efficiency Increase": "45%", "Cost Reduction": "$2.5M annually", "Quality Improvement": "32%"}'
  ),
  (
    'Quantum Computing in Financial Services',
    'Leveraged quantum algorithms to enhance risk assessment and portfolio optimization.',
    'Financial Services',
    '{"Processing Speed": "100x faster", "Accuracy": "99.9%", "Cost Savings": "$5M+"}'
  ),
  (
    'Healthcare Analytics Platform',
    'Developed an AI-powered analytics platform for predictive healthcare diagnostics.',
    'Healthcare',
    '{"Diagnostic Accuracy": "95%", "Patient Outcomes": "30% improved", "Cost Efficiency": "40%"}'
  );