CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service_interest text,
  message text,
  source text DEFAULT 'website',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_leads" ON leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_leads_admin" ON leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_leads_admin" ON leads FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_leads_admin" ON leads FOR DELETE TO authenticated USING (true);
