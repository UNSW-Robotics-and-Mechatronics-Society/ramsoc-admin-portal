// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivityUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  tenantId: z.string(),
  eventId: z.string(),
  title: z.string(),
  description: z.string().optional(),
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
}));