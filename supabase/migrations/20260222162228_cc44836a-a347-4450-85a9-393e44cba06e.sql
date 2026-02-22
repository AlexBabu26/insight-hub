
-- Seed roles
INSERT INTO roles (id, name, description, is_system_role, is_active, status) VALUES
  (1, 'Admin', 'Full system administrator', true, true, 'active'),
  (2, 'Manager', 'Team and account manager', true, true, 'active'),
  (3, 'Analyst', 'Data analyst with read access', true, true, 'active'),
  (4, 'Editor', 'Content editor', false, true, 'active'),
  (5, 'Viewer', 'Read-only access', false, true, 'active')
ON CONFLICT (id) DO NOTHING;

-- Seed companies
INSERT INTO companies (id, name, status, email1, website1, phone1, is_internal_company) VALUES
  (1, 'Acme Corp', 'active', 'info@acme.com', 'https://acme.com', '+1-555-0101', false),
  (2, 'TechVault Inc', 'active', 'hello@techvault.io', 'https://techvault.io', '+1-555-0102', false),
  (3, 'DataStream Analytics', 'active', 'contact@datastream.co', 'https://datastream.co', '+1-555-0103', false),
  (4, 'CloudNine Solutions', 'active', 'sales@cloudnine.dev', 'https://cloudnine.dev', '+1-555-0104', false),
  (5, 'Pinnacle Media', 'inactive', 'press@pinnacle.media', 'https://pinnacle.media', '+1-555-0105', false),
  (6, 'GreenLeaf Energy', 'active', 'info@greenleaf.energy', 'https://greenleaf.energy', '+1-555-0106', false),
  (7, 'NexGen Robotics', 'active', NULL, 'https://nexgenrobotics.ai', '+1-555-0107', false),
  (8, 'BlueSky Ventures', 'prospect', 'invest@bluesky.vc', 'https://bluesky.vc', NULL, false),
  (9, 'IronClad Security', 'active', 'support@ironclad.sec', 'https://ironclad.sec', '+1-555-0109', false),
  (10, 'OurCompany HQ', 'active', 'admin@ourcompany.com', 'https://ourcompany.com', '+1-555-0100', true),
  (11, 'Stellar Logistics', 'active', 'ops@stellar-logistics.com', 'https://stellar-logistics.com', '+1-555-0111', false),
  (12, 'Quantum Labs', 'active', 'research@quantumlabs.io', NULL, '+1-555-0112', false),
  (13, 'Horizon Finance', 'inactive', 'accounts@horizonfin.com', 'https://horizonfin.com', '+1-555-0113', false),
  (14, 'Arctic Systems', 'prospect', NULL, 'https://arcticsys.com', '+1-555-0114', false),
  (15, 'Summit Healthcare', 'active', 'admin@summithealth.org', 'https://summithealth.org', '+1-555-0115', false)
ON CONFLICT (id) DO NOTHING;

-- Seed contacts (including can_list, visible, created_at, updated_at)
INSERT INTO contacts (id, first_name, last_name, title, email1, phone1, company_id, status, can_list, visible, created_at, updated_at) VALUES
  (1, 'Alice', 'Johnson', 'CEO', 'alice@acme.com', '+1-555-1001', 1, 'active', true, true, now(), now()),
  (2, 'Bob', 'Smith', 'CTO', 'bob@techvault.io', '+1-555-1002', 2, 'active', true, true, now(), now()),
  (3, 'Carol', 'Williams', 'Data Lead', 'carol@datastream.co', '+1-555-1003', 3, 'active', true, true, now(), now()),
  (4, 'David', 'Brown', 'VP Sales', 'david@cloudnine.dev', '+1-555-1004', 4, 'active', true, true, now(), now()),
  (5, 'Eva', 'Martinez', 'Editor', 'eva@pinnacle.media', '+1-555-1005', 5, 'inactive', true, true, now(), now()),
  (6, 'Frank', 'Lee', 'COO', 'frank@greenleaf.energy', '+1-555-1006', 6, 'active', true, true, now(), now()),
  (7, 'Grace', 'Kim', 'Engineer', 'grace@nexgenrobotics.ai', '+1-555-1007', 7, 'active', true, true, now(), now()),
  (8, 'Henry', 'Davis', 'Partner', 'henry@bluesky.vc', '+1-555-1008', 8, 'active', true, true, now(), now()),
  (9, 'Ivy', 'Wilson', 'CISO', 'ivy@ironclad.sec', '+1-555-1009', 9, 'active', true, true, now(), now()),
  (10, 'Jack', 'Taylor', 'Admin', 'jack@ourcompany.com', '+1-555-1010', 10, 'active', true, true, now(), now()),
  (11, 'Karen', 'Anderson', 'Logistics Mgr', 'karen@stellar-logistics.com', '+1-555-1011', 11, 'active', true, true, now(), now()),
  (12, 'Liam', 'Thomas', 'Researcher', 'liam@quantumlabs.io', '+1-555-1012', 12, 'active', true, true, now(), now()),
  (13, 'Mia', 'Jackson', 'CFO', 'mia@horizonfin.com', '+1-555-1013', 13, 'inactive', true, true, now(), now()),
  (14, 'Noah', 'White', 'Architect', 'noah@arcticsys.com', '+1-555-1014', 14, 'active', true, true, now(), now()),
  (15, 'Olivia', 'Harris', 'Director', 'olivia@summithealth.org', '+1-555-1015', 15, 'active', true, true, now(), now())
ON CONFLICT (id) DO NOTHING;

-- Seed users
INSERT INTO users (id, username, status, role_id, company_id, created_at, updated_at) VALUES
  (gen_random_uuid(), 'admin_jack', 'active', 1, 10, now(), now()),
  (gen_random_uuid(), 'mgr_alice', 'active', 2, 1, now(), now()),
  (gen_random_uuid(), 'analyst_carol', 'active', 3, 3, now(), now()),
  (gen_random_uuid(), 'editor_eva', 'inactive', 4, 5, now(), now()),
  (gen_random_uuid(), 'viewer_bob', 'active', 5, 2, now(), now()),
  (gen_random_uuid(), 'mgr_frank', 'active', 2, 6, now(), now()),
  (gen_random_uuid(), 'analyst_grace', 'active', 3, 7, now(), now()),
  (gen_random_uuid(), 'admin_ivy', 'active', 1, 9, now(), now()),
  (gen_random_uuid(), 'editor_liam', 'active', 4, 12, now(), now()),
  (gen_random_uuid(), 'viewer_olivia', 'active', 5, 15, now(), now());
