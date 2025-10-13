// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  capacity: z.literal(true).optional()
}).strict();
export const ActivitySessionSumAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionSumAggregateInputType>;
export const ActivitySessionSumAggregateInputObjectZodSchema = makeSchema();
