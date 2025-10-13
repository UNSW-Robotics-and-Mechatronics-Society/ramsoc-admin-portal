// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivityTypeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    activities: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional()
}));