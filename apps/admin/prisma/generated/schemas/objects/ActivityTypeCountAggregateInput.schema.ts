// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActivityTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.ActivityTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCountAggregateInputType>;
export const ActivityTypeCountAggregateInputObjectZodSchema = makeSchema();
