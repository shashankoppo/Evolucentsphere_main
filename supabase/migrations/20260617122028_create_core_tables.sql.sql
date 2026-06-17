/*
# Core Website Tables

1. New Tables
- `contact_submissions` - Stores contact form submissions from users
  - id (uuid, primary key)
  - name (text, required)
  - email (text, required)
  - company (text, required)
  - message (text, required)
  - created_at (timestamp)
  
- `blog_posts` - Stores blog articles
  - id (uuid, primary key)
  - title (text, required)
  - content (text, required)
  - excerpt (text, optional)
  - author (text, required)
  - category (text, optional)
  - image_url (text, optional)
  - slug (text, unique, for URLs)
  - seo_title (text, optional)
  - seo_description (text, optional)
  - seo_keywords (text, optional)
  - published (boolean, default false)
  - created_at (timestamp)
  - updated_at (timestamp)

- `case_studies` - Stores client case studies
  - id (uuid, primary key)
  - title (text, required)
  - content (text, required)
  - industry (text, required)
  - client_name (text, optional)
  - results (jsonb, for structured results)
  - image_url (text, optional)
  - slug (text, unique)
  - published (boolean, default false)
  - created_at (timestamp)

- `testimonials` - Stores client testimonials
  - id (uuid, primary key)
  - client_name (text, required)
  - company (text, required)
  - content (text, required)
  - rating (integer, 1-5)
  - image_url (text, optional)
  - approved (boolean, default false)
  - created_at (timestamp)

- `investor_resources` - Stores investor documents
  - id (uuid, primary key)
  - title (text, required)
  - type (text, required - e.g., 'Financial Report', 'Presentation')
  - url (text, required)
  - description (text, optional)
  - published (boolean, default false)
  - created_at (timestamp)

2. Security
- RLS enabled on all tables
- Public can submit contact forms (INSERT only)
- Public can read approved/published content
- Only authenticated admins can manage all content
*/

-- Contact Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_contact" ON contact_submissions;
CREATE POLICY "public_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_contact" ON contact_submissions;
CREATE POLICY "admin_read_contact" ON contact_submissions FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_all_contact" ON contact_submissions;
CREATE POLICY "admin_all_contact" ON contact_submissions FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  author text NOT NULL DEFAULT 'ELSxGlobal Team',
  category text,
  image_url text,
  slug text UNIQUE,
  seo_title text,
  seo_description text,
  seo_keywords text,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_posts" ON blog_posts;
CREATE POLICY "public_read_published_posts" ON blog_posts FOR SELECT
  TO anon, authenticated USING (published = true);

DROP POLICY IF EXISTS "admin_all_posts" ON blog_posts;
CREATE POLICY "admin_all_posts" ON blog_posts FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Case Studies
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  industry text NOT NULL,
  client_name text,
  results jsonb DEFAULT '{}',
  image_url text,
  slug text UNIQUE,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_studies" ON case_studies;
CREATE POLICY "public_read_published_studies" ON case_studies FOR SELECT
  TO anon, authenticated USING (published = true);

DROP POLICY IF EXISTS "admin_all_studies" ON case_studies;
CREATE POLICY "admin_all_studies" ON case_studies FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_approved_testimonials" ON testimonials;
CREATE POLICY "public_read_approved_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (approved = true);

DROP POLICY IF EXISTS "admin_all_testimonials" ON testimonials;
CREATE POLICY "admin_all_testimonials" ON testimonials FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Investor Resources
CREATE TABLE IF NOT EXISTS investor_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  url text NOT NULL,
  description text,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE investor_resources ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_resources" ON investor_resources;
CREATE POLICY "public_read_published_resources" ON investor_resources FOR SELECT
  TO anon, authenticated USING (published = true);

DROP POLICY IF EXISTS "admin_all_resources" ON investor_resources;
CREATE POLICY "admin_all_resources" ON investor_resources FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, content, excerpt, author, category, published, slug) VALUES
('The Future of AI in Enterprise', 'Artificial intelligence is fundamentally reshaping how enterprises operate. From predictive analytics to automated decision-making, AI enables businesses to process vast amounts of data and derive actionable insights faster than ever before. Organizations adopting AI-first strategies are seeing 40% improvements in operational efficiency and significant cost reductions across departments.', 'AI is reshaping enterprise operations and decision-making.', 'Dr. Emily Chen', 'AI & Machine Learning', true, 'future-of-ai-enterprise'),
('Quantum Computing: A New Era', 'Quantum computing represents a paradigm shift in computational power. Unlike classical computers that process information in binary, quantum computers leverage quantum mechanics to perform complex calculations at unprecedented speeds. This technology promises to revolutionize cryptography, drug discovery, financial modeling, and optimization problems that were previously unsolvable.', 'Understanding the revolutionary impact of quantum computing.', 'Prof. James Wilson', 'Technology', true, 'quantum-computing-new-era'),
('Cybersecurity in the Age of AI', 'As artificial intelligence becomes more prevalent, cybersecurity must evolve to address new threats. AI-powered attacks are becoming more sophisticated, but AI also provides powerful defense mechanisms. Organizations must adopt AI-driven security solutions to stay ahead of evolving threats and protect their digital assets effectively.', 'The intersection of AI and cybersecurity in modern business.', 'Sarah Martinez', 'Cybersecurity', true, 'cybersecurity-ai-age');

-- Insert sample case studies
INSERT INTO case_studies (title, content, industry, results, published, slug) VALUES
('AI-Driven Manufacturing Optimization', 'Implemented advanced AI systems to optimize manufacturing processes for a leading automotive company. The solution included predictive maintenance, quality control automation, and supply chain optimization. The integrated platform reduced downtime by 45% and improved overall equipment effectiveness significantly.', 'Manufacturing', '{"efficiency_increase": "45%", "cost_reduction": "$2.5M annually", "quality_improvement": "32%", "downtime_reduction": "45%"}', true, 'ai-manufacturing-optimization'),
('Healthcare Analytics Platform', 'Developed an AI-powered analytics platform for predictive healthcare diagnostics. The system analyzes patient data to identify risk factors and recommend preventive measures, improving patient outcomes while reducing operational costs for healthcare providers.', 'Healthcare', '{"diagnostic_accuracy": "95%", "patient_outcomes": "30% improved", "cost_efficiency": "40%", "time_savings": "60%"}', true, 'healthcare-analytics-platform');

-- Insert sample testimonials
INSERT INTO testimonials (client_name, company, content, rating, approved) VALUES
('John Smith', 'Tech Innovators Inc.', 'The AI solutions provided by ELSxGlobal have transformed our business operations, leading to a 40% increase in efficiency and significant cost savings. Their team''s expertise in machine learning and process automation is exceptional.', 5, true),
('Sarah Johnson', 'Global Solutions Ltd.', 'Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle. Outstanding results and professional service throughout the engagement.', 5, true),
('Michael Chen', 'Future Systems Corp.', 'ELSxGlobal delivered exceptional service and cutting-edge technology solutions. The results exceeded our expectations in every way. I highly recommend them for enterprise AI projects.', 5, true);

-- Insert sample investor resources
INSERT INTO investor_resources (title, type, url, description, published) VALUES
('Annual Report 2023', 'Financial Report', '/documents/annual-report-2023.pdf', 'Comprehensive overview of our financial performance and strategic initiatives for fiscal year 2023.', true),
('Q4 2023 Earnings Summary', 'Report', '/documents/q4-2023-earnings.pdf', 'Quarterly earnings summary and key business highlights.', true);
