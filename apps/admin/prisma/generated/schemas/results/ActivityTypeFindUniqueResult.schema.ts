// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const ActivityTypeFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  activities: z.array(z.unknown())
}));