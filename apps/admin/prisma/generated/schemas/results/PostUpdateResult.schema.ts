// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const PostUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown(),
  createdById: z.string()
}));