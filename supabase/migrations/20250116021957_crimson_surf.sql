/*
  # Fix Database Schema and Policies

  1. Tables
    - Creates all required tables if they don't exist
    - Adds proper constraints and defaults
  
  2. Security
    - Enables RLS on all tables
    - Sets up appropriate policies for public and authenticated access
*/

-- Drop existing policies to avoid conflicts
DO $$ 
BEGIN
  -- Contact Submissions
  DROP POLICY IF EXISTS "Allow public to create contact submissions" ON contact_submissions;
  DROP POLICY IF EXISTS "Allow authenticated users to read contact submissions" ON contact_submissions;
  
  -- Testimonials
  DROP POLICY IF EXISTS "Allow public to read testimonials" ON testimonials;
  
  -- Case Studies
  DROP POLICY IF EXISTS "Allow public to read case studies" ON case_studies;
  
  -- Blog Posts
  DROP POLICY IF EXISTS "Allow public to read blog posts" ON blog_posts;
  
  -- Investor Resources
  DROP POLICY IF EXISTS "Allow public to read investor resources" ON investor_resources;
END $$;

-- Create or update tables
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
  CREATE POLICY "Allow public to create contact submissions"
    ON contact_submissions FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Allow authenticated users to read contact submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

  CREATE POLICY "Allow public to read testimonials"
    ON testimonials FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Allow public to read case studies"
    ON case_studies FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Allow public to read blog posts"
    ON blog_posts FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Allow public to read investor resources"
    ON investor_resources FOR SELECT
    TO public
    USING (true);
END $$;