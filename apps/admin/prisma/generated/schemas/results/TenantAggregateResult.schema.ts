// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const TenantAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    logo: z.number(),
    siteUrl: z.number(),
    description: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    tenantMembers: z.number(),
    events: z.number(),
    activities: z.number(),
    activitySessions: z.number(),
    activitySessionCheckIns: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    logo: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    logo: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional()});