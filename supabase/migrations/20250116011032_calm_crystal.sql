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
    - Add policies for authenticated users
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

CREATE POLICY "Allow public read access to testimonials"
  ON testimonials FOR SELECT
  TO authenticated
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

CREATE POLICY "Allow public read access to case studies"
  ON case_studies FOR SELECT
  TO authenticated
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

CREATE POLICY "Allow public read access to blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
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

CREATE POLICY "Allow public read access to investor resources"
  ON investor_resources FOR SELECT
  TO authenticated
  USING (true);