// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivitySessionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    activityId: z.number(),
    visibility: z.number(),
    startTime: z.number(),
    endTime: z.number(),
    location: z.number(),
    capacity: z.number(),
    codeType: z.number(),
    code: z.number(),
    codeValidFrom: z.number(),
    codeValidTo: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    createdById: z.number(),
    updatedById: z.number(),
    allowSelfCheckIn: z.number(),
    activity: z.number(),
    tenant: z.number(),
    createdBy: z.number(),
    updatedBy: z.number(),
    checkIns: z.number()
  }).optional(),
  _sum: z.object({
    capacity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    capacity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    activityId: z.string().nullable(),
    startTime: z.date().nullable(),
    endTime: z.date().nullable(),
    location: z.string().nullable(),
    capacity: z.number().int().nullable(),
    code: z.string().nullable(),
    codeValidFrom: z.date().nullable(),
    codeValidTo: z.date().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    activityId: z.string().nullable(),
    startTime: z.date().nullable(),
    endTime: z.date().nullable(),
    location: z.string().nullable(),
    capacity: z.number().int().nullable(),
    code: z.string().nullable(),
    codeValidFrom: z.date().nullable(),
    codeValidTo: z.date().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()});