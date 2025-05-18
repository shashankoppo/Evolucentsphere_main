/*
  # Fix Database Setup

  This migration ensures all required tables exist and adds necessary sample data.
  
  1. Tables
    - Recreates all required tables if they don't exist
    - Enables RLS and sets up policies
  
  2. Sample Data
    - Adds initial data for testing and development
*/

-- Ensure tables exist
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  industry text NOT NULL,
  results jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS investor_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS and create policies
DO $$ 
BEGIN
  -- Contact Submissions
  ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contact_submissions' AND policyname = 'Allow public to create contact submissions'
  ) THEN
    CREATE POLICY "Allow public to create contact submissions"
      ON contact_submissions FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contact_submissions' AND policyname = 'Allow authenticated users to read contact submissions'
  ) THEN
    CREATE POLICY "Allow authenticated users to read contact submissions"
      ON contact_submissions FOR SELECT
      TO authenticated
      USING (true);
  END IF;

  -- Testimonials
  ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'testimonials' AND policyname = 'Allow public to read testimonials'
  ) THEN
    CREATE POLICY "Allow public to read testimonials"
      ON testimonials FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Case Studies
  ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'case_studies' AND policyname = 'Allow public to read case studies'
  ) THEN
    CREATE POLICY "Allow public to read case studies"
      ON case_studies FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Blog Posts
  ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'blog_posts' AND policyname = 'Allow public to read blog posts'
  ) THEN
    CREATE POLICY "Allow public to read blog posts"
      ON blog_posts FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Investor Resources
  ALTER TABLE investor_resources ENABLE ROW LEVEL SECURITY;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'investor_resources' AND policyname = 'Allow public to read investor resources'
  ) THEN
    CREATE POLICY "Allow public to read investor resources"
      ON investor_resources FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;

-- Add sample data if tables are empty
DO $$ 
BEGIN
  -- Testimonials
  IF NOT EXISTS (SELECT 1 FROM testimonials) THEN
    INSERT INTO testimonials (client_name, company, content, rating, created_at)
    VALUES
      ('John Smith', 'Tech Innovators Inc.', 'The AI solutions provided by Tenebris Navitas have transformed our business operations, leading to a 40% increase in efficiency.', 5, now()),
      ('Sarah Johnson', 'Global Solutions Ltd.', 'Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle.', 5, now()),
      ('Michael Chen', 'Future Systems', 'Outstanding service and cutting-edge technology. The results exceeded our expectations.', 4, now());
  END IF;

  -- Case Studies
  IF NOT EXISTS (SELECT 1 FROM case_studies) THEN
    INSERT INTO case_studies (title, content, industry, results, created_at)
    VALUES
      (
        'AI-Driven Manufacturing Optimization',
        'Implemented advanced AI systems to optimize manufacturing processes for a leading automotive company.',
        'Manufacturing',
        '{"Efficiency Increase": "45%", "Cost Reduction": "$2.5M annually", "Quality Improvement": "32%"}',
        now()
      ),
      (
        'Quantum Computing in Financial Services',
        'Leveraged quantum algorithms to enhance risk assessment and portfolio optimization.',
        'Financial Services',
        '{"Processing Speed": "100x faster", "Accuracy": "99.9%", "Cost Savings": "$5M+"}',
        now()
      ),
      (
        'Healthcare Analytics Platform',
        'Developed an AI-powered analytics platform for predictive healthcare diagnostics.',
        'Healthcare',
        '{"Diagnostic Accuracy": "95%", "Patient Outcomes": "30% improved", "Cost Efficiency": "40%"}',
        now()
      );
  END IF;

  -- Blog Posts
  IF NOT EXISTS (SELECT 1 FROM blog_posts) THEN
    INSERT INTO blog_posts (title, content, author, created_at)
    VALUES
      (
        'The Future of AI in Enterprise',
        'Exploring how artificial intelligence is reshaping enterprise operations and decision-making processes.',
        'Dr. Emily Chen',
        now()
      ),
      (
        'Quantum Computing: A New Era',
        'Understanding the revolutionary impact of quantum computing on business and technology.',
        'Prof. James Wilson',
        now()
      ),
      (
        'Cybersecurity in the Age of AI',
        'Examining the intersection of artificial intelligence and cybersecurity in modern business.',
        'Sarah Martinez',
        now()
      );
  END IF;

  -- Investor Resources
  IF NOT EXISTS (SELECT 1 FROM investor_resources) THEN
    INSERT INTO investor_resources (title, type, url, created_at)
    VALUES
      (
        'Annual Report 2023',
        'Financial Report',
        'https://example.com/annual-report-2023.pdf',
        now()
      ),
      (
        'Q4 2023 Earnings Presentation',
        'Presentation',
        'https://example.com/q4-2023-earnings.pdf',
        now()
      ),
      (
        'Investor Day 2024 Recording',
        'Video',
        'https://example.com/investor-day-2024',
        now()
      );
  END IF;
END $$;