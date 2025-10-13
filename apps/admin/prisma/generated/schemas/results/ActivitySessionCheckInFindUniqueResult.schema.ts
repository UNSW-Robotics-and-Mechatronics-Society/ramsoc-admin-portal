// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivitySessionCheckInFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  tenantId: z.string(),
  activitySessionId: z.string(),
  memberId: z.string(),
  checkInTime: z.date(),
  tenant: z.unknown(),
  activitySession: z.unknown(),
  member: z.unknown()
}));