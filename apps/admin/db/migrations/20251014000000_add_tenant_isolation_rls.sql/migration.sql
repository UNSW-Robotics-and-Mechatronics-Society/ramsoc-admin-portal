DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_roles WHERE rolname = 'authenticated'
  ) THEN
    CREATE ROLE authenticated;
  END IF;
END
$$;

-- Create auth schema if it doesn't exist (or we can use public schema)
CREATE SCHEMA IF NOT EXISTS auth;

-- Enable RLS on tenant-scoped tables
ALTER TABLE "Tenant" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "TenantMember" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Event" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Activity" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ActivitySession" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ActivitySessionCheckIn" ENABLE ROW LEVEL SECURITY;

-- Simple function to get current user's tenant IDs
CREATE OR REPLACE FUNCTION auth.get_user_tenant_ids()
RETURNS TEXT[] AS $$
DECLARE
    user_id TEXT;
    tenant_ids TEXT[];
BEGIN
    user_id := current_setting('app.current_user_id', true);

    IF user_id IS NULL OR user_id = '' THEN
        RETURN '{}';
    END IF;

    SELECT ARRAY_AGG("tenantId") INTO tenant_ids
    FROM "TenantMember"
    WHERE "userId" = user_id AND "isActive" = true;

    RETURN COALESCE(tenant_ids, '{}');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- SINGLE POLICY PER TABLE: Tenant isolation only
CREATE POLICY "tenant_isolation" ON "Tenant"
    FOR ALL TO authenticated
    USING (id = ANY(auth.get_user_tenant_ids()));

CREATE POLICY "tenant_isolation" ON "TenantMember"
    FOR ALL TO authenticated
    USING ("tenantId" = ANY(auth.get_user_tenant_ids()));

CREATE POLICY "tenant_isolation" ON "Event"
    FOR ALL TO authenticated
    USING ("tenantId" = ANY(auth.get_user_tenant_ids()));

CREATE POLICY "tenant_isolation" ON "Activity"
    FOR ALL TO authenticated
    USING ("tenantId" = ANY(auth.get_user_tenant_ids()));

CREATE POLICY "tenant_isolation" ON "ActivitySession"
    FOR ALL TO authenticated
    USING ("tenantId" = ANY(auth.get_user_tenant_ids()));

CREATE POLICY "tenant_isolation" ON "ActivitySessionCheckIn"
    FOR ALL TO authenticated
    USING ("tenantId" = ANY(auth.get_user_tenant_ids()));

-- Grant permissions
GRANT EXECUTE ON FUNCTION auth.get_user_tenant_ids() TO authenticated;
