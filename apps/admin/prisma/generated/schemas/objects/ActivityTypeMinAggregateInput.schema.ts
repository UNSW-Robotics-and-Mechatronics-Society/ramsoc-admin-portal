// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const ActivityTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.ActivityTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeMinAggregateInputType>;
export const ActivityTypeMinAggregateInputObjectZodSchema = makeSchema();
