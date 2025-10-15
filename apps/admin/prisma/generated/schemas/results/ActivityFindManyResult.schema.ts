// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivityFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  eventId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  slug: z.string(),
  coverImageUrl: z.string().optional(),
  visibility: z.unknown(),
  createDate: z.date(),
  updateDate: z.date(),
  createdById: z.string(),
  updatedById: z.string().optional(),
  tenant: z.unknown(),
  event: z.unknown(),
  createdBy: z.unknown(),
  updatedBy: z.unknown().optional(),
  types: z.array(z.unknown()),
  activitySessions: z.array(z.unknown())
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