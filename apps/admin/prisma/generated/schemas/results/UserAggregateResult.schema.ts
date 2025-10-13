// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    emailVerified: z.number(),
    image: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    accounts: z.number(),
    sessions: z.number(),
    profile: z.number(),
    tenantMembers: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional()});