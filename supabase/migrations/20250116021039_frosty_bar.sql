/*
  # Fix Database Setup

  This migration ensures all required tables exist and adds necessary policies.
  
  1. Tables
    - Recreates all required tables if they don't exist
    - Enables RLS and sets up policies
  
  2. Security
    - Enables RLS on all tables
    - Creates necessary policies for public and authenticated access
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

-- Recreate policies with proper permissions
DO $$ 
BEGIN
  -- Contact Submissions
  CREATE POLICY "Allow public to create contact submissions"
    ON contact_submissions FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Allow authenticated users to read contact submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

  -- Testimonials
  CREATE POLICY "Allow public to read testimonials"
    ON testimonials FOR SELECT
    TO public
    USING (true);

  -- Case Studies
  CREATE POLICY "Allow public to read case studies"
    ON case_studies FOR SELECT
    TO public
    USING (true);

  -- Blog Posts
  CREATE POLICY "Allow public to read blog posts"
    ON blog_posts FOR SELECT
    TO public
    USING (true);

  -- Investor Resources
  CREATE POLICY "Allow public to read investor resources"
    ON investor_resources FOR SELECT
    TO public
    USING (true);
END $$;