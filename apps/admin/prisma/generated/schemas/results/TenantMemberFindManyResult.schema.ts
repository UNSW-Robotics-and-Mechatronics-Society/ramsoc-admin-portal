// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantMemberFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});