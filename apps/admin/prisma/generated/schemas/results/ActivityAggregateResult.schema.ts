// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivityAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    eventId: z.number(),
    title: z.number(),
    description: z.number(),
    visibility: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    createdById: z.number(),
    updatedById: z.number(),
    tenant: z.number(),
    event: z.number(),
    createdBy: z.number(),
    updatedBy: z.number(),
    types: z.number(),
    activitySessions: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    eventId: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    eventId: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()});