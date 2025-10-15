// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
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