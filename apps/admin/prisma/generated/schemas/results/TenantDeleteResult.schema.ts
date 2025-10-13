// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().optional(),
  siteUrl: z.string().optional(),
  description: z.string().optional(),
  createDate: z.date(),
  updateDate: z.date(),
  tenantMembers: z.array(z.unknown()),
  events: z.array(z.unknown()),
  activities: z.array(z.unknown()),
  activitySessions: z.array(z.unknown()),
  activitySessionCheckIns: z.array(z.unknown())
}));