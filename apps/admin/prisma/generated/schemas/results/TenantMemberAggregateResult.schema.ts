// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantMemberAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    userId: z.number(),
    type: z.number(),
    isActive: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    tenant: z.number(),
    user: z.number(),
    createdEvents: z.number(),
    updatedEvents: z.number(),
    createdActivities: z.number(),
    updatedActivities: z.number(),
    createdActivitySessions: z.number(),
    updatedActivitySessions: z.number(),
    ActivitySessionCheckIn: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional()});