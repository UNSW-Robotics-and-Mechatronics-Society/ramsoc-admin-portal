// @ts-nocheck
/* eslint-disable */

import { z } from 'zod';
export const PostCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown(),
  createdById: z.string()
});