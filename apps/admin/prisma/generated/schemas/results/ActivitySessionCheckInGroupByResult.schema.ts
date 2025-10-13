// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivitySessionCheckInGroupByResultSchema = z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  activitySessionId: z.string(),
  memberId: z.string(),
  checkInTime: z.date(),
  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    activitySessionId: z.number(),
    memberId: z.number(),
    checkInTime: z.number(),
    tenant: z.number(),
    activitySession: z.number(),
    member: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    activitySessionId: z.string().nullable(),
    memberId: z.string().nullable(),
    checkInTime: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    activitySessionId: z.string().nullable(),
    memberId: z.string().nullable(),
    checkInTime: z.date().nullable()
  }).nullable().optional()
}));