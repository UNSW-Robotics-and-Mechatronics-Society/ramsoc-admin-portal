// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivitySessionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  tenantId: z.string(),
  activityId: z.string(),
  visibility: z.unknown(),
  startTime: z.date(),
  endTime: z.date(),
  location: z.string().optional(),
  capacity: z.number().int().optional(),
  codeType: z.unknown(),
  code: z.string().optional(),
  codeValidFrom: z.date().optional(),
  codeValidTo: z.date().optional(),
  createDate: z.date(),
  updateDate: z.date(),
  createdById: z.string(),
  updatedById: z.string().optional(),
  allowSelfCheckIn: z.boolean(),
  activity: z.unknown(),
  tenant: z.unknown(),
  createdBy: z.unknown(),
  updatedBy: z.unknown().optional(),
  checkIns: z.array(z.unknown())
}));