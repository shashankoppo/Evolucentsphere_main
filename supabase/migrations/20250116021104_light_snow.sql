/*
  # Fix Database Schema and Policies

  1. Tables
    - Creates all required tables if they don't exist
    - Adds proper constraints and defaults
  
  2. Security
    - Enables RLS on all tables
    - Sets up appropriate policies for public and authenticated access
*/

-- Create tables if they don't exist
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
  -- Enable RLS
  ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
  ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
  ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
  ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
  ALTER TABLE investor_resources ENABLE ROW LEVEL SECURITY;

  -- Create policies
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

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'testimonials' AND policyname = 'Allow public to read testimonials'
  ) THEN
    CREATE POLICY "Allow public to read testimonials"
      ON testimonials FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'case_studies' AND policyname = 'Allow public to read case studies'
  ) THEN
    CREATE POLICY "Allow public to read case studies"
      ON case_studies FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'blog_posts' AND policyname = 'Allow public to read blog posts'
  ) THEN
    CREATE POLICY "Allow public to read blog posts"
      ON blog_posts FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'investor_resources' AND policyname = 'Allow public to read investor resources'
  ) THEN
    CREATE POLICY "Allow public to read investor resources"
      ON investor_resources FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;