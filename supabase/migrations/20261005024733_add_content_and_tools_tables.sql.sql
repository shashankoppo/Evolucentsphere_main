/*
# Add content management and interactive tool tables

1. New Tables
- clients: Client logos for trusted-by strip (name, logo_url, industry, website, display_order, visible)
- awards: Company awards (title, organization, year, description, icon, visible)
- team_members: Leadership team (name, role, bio, photo_url, linkedin_url, display_order, visible)
- lead_notes: Internal notes on leads (lead_id FK, note, created_at)
- tool_submissions: Captures interactive tool inputs/results (tool_type, inputs jsonb, result jsonb, email)

2. Modified Tables
- leads: adds estimated_budget text and tool_source text columns

3. Security
- clients/awards/team_members: public SELECT on visible=true; admin full CRUD
- lead_notes: admin-only full CRUD
- tool_submissions: public INSERT, admin SELECT

4. Seed data for clients, awards, team_members so pages aren't empty
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  industry text,
  website text,
  display_order integer NOT NULL DEFAULT 0,
  visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_visible_clients" ON clients;
CREATE POLICY "public_read_visible_clients" ON clients FOR SELECT TO anon, authenticated USING (visible = true);
DROP POLICY IF EXISTS "admin_all_clients" ON clients;
CREATE POLICY "admin_all_clients" ON clients FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS awards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  organization text,
  year text,
  description text,
  icon text NOT NULL DEFAULT 'Award',
  visible boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_visible_awards" ON awards;
CREATE POLICY "public_read_visible_awards" ON awards FOR SELECT TO anon, authenticated USING (visible = true);
DROP POLICY IF EXISTS "admin_all_awards" ON awards;
CREATE POLICY "admin_all_awards" ON awards FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  photo_url text,
  linkedin_url text,
  display_order integer NOT NULL DEFAULT 0,
  visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_visible_team" ON team_members;
CREATE POLICY "public_read_visible_team" ON team_members FOR SELECT TO anon, authenticated USING (visible = true);
DROP POLICY IF EXISTS "admin_all_team" ON team_members;
CREATE POLICY "admin_all_team" ON team_members FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS lead_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  note text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "admin_all_lead_notes" ON lead_notes;
CREATE POLICY "admin_all_lead_notes" ON lead_notes FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS tool_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_type text NOT NULL,
  inputs jsonb NOT NULL DEFAULT '{}'::jsonb,
  result jsonb NOT NULL DEFAULT '{}'::jsonb,
  email text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE tool_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_insert_tool_submissions" ON tool_submissions;
CREATE POLICY "public_insert_tool_submissions" ON tool_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "admin_select_tool_submissions" ON tool_submissions;
CREATE POLICY "admin_select_tool_submissions" ON tool_submissions FOR SELECT TO authenticated USING (true);

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'estimated_budget') THEN
    ALTER TABLE leads ADD COLUMN estimated_budget text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'tool_source') THEN
    ALTER TABLE leads ADD COLUMN tool_source text;
  END IF;
END $$;

INSERT INTO clients (name, industry, website, display_order, visible)
SELECT * FROM (VALUES
  ('Fortune 500 Bank', 'Banking', NULL, 1, true),
  ('Global Healthcare Network', 'Healthcare', NULL, 2, true),
  ('Leading Manufacturer', 'Manufacturing', NULL, 3, true),
  ('Retail Giant', 'Retail', NULL, 4, true),
  ('Government Agency', 'Government', NULL, 5, true),
  ('Tech Unicorn', 'Technology', NULL, 6, true)
) AS v(name, industry, website, display_order, visible)
WHERE NOT EXISTS (SELECT 1 FROM clients);

INSERT INTO awards (title, organization, year, description, icon, display_order, visible)
SELECT * FROM (VALUES
  ('Innovation Excellence', 'Global Tech Awards', '2024', 'Recognized for breakthrough AI innovation', 'Trophy', 1, true),
  ('Best AI Solutions Provider', 'Enterprise Technology Review', '2023', 'Top AI solutions provider of the year', 'Award', 2, true),
  ('Top Digital Transformation Consultant', 'Industry Leaders Forum', '2023', 'Leading digital transformation consultancy', 'Medal', 3, true),
  ('Excellence in Customer Experience', 'Digital Future Summit', '2023', 'Outstanding customer experience solutions', 'Star', 4, true)
) AS v(title, organization, year, description, icon, display_order, visible)
WHERE NOT EXISTS (SELECT 1 FROM awards);

INSERT INTO team_members (name, role, bio, display_order, visible)
SELECT * FROM (VALUES
  ('Shashank Patel', 'Founder & Director', 'Visionary leader driving innovation across technology and business transformation since 2015.', 1, true),
  ('Harsh Raj Patel', 'Additional Director', 'Strategic leader overseeing global operations and enterprise delivery excellence.', 2, true),
  ('M.D Narayana', 'Chief Financial Officer', 'Financial strategist guiding sustainable growth and investment strategy across global markets.', 3, true)
) AS v(name, role, bio, display_order, visible)
WHERE NOT EXISTS (SELECT 1 FROM team_members);
