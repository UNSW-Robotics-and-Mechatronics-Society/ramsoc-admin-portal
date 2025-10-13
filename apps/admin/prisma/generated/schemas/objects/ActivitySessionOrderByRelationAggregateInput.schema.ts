// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ActivitySessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionOrderByRelationAggregateInput>;
export const ActivitySessionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
