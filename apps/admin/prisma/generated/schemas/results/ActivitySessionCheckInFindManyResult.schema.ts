// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivitySessionCheckInFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  activitySessionId: z.string(),
  memberId: z.string(),
  checkInTime: z.date(),
  tenant: z.unknown(),
  activitySession: z.unknown(),
  member: z.unknown()
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