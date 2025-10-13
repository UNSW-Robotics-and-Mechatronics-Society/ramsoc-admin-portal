// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantMemberUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  tenantId: z.string(),
  userId: z.string(),
  type: z.unknown(),
  isActive: z.boolean(),
  createDate: z.date(),
  updateDate: z.date(),
  tenant: z.unknown(),
  user: z.unknown(),
  createdEvents: z.array(z.unknown()),
  updatedEvents: z.array(z.unknown()),
  createdActivities: z.array(z.unknown()),
  updatedActivities: z.array(z.unknown()),
  createdActivitySessions: z.array(z.unknown()),
  updatedActivitySessions: z.array(z.unknown()),
  ActivitySessionCheckIn: z.array(z.unknown())
}));