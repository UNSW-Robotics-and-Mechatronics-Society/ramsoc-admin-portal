// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  capacity: z.literal(true).optional()
}).strict();
export const ActivitySessionAvgAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionAvgAggregateInputType>;
export const ActivitySessionAvgAggregateInputObjectZodSchema = makeSchema();
