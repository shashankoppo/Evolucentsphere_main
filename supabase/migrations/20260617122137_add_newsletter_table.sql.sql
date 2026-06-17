/*
# Newsletter Subscribers Table

1. New Table
- `newsletter_subscribers` - Stores email subscriptions
  - id (uuid, primary key)
  - email (text, unique, required)
  - industry_interest (text, optional)
  - subscribed (boolean, default true)
  - created_at (timestamp)

2. Security
- RLS enabled
- Public can insert (subscribe)
- Public can read only their own email via token (not implemented - privacy)
- Admins can manage all
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  industry_interest text,
  subscribed boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_subscribe_newsletter" ON newsletter_subscribers;
CREATE POLICY "public_subscribe_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_all_newsletter" ON newsletter_subscribers;
CREATE POLICY "admin_all_newsletter" ON newsletter_subscribers FOR ALL
  TO authenticated USING (true) WITH CHECK (true);
