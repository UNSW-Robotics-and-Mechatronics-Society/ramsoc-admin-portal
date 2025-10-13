// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ActivityWhereInputObjectSchema).optional()
}).strict();
export const ActivityScalarRelationFilterObjectSchema: z.ZodType<Prisma.ActivityScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivityScalarRelationFilter>;
export const ActivityScalarRelationFilterObjectZodSchema = makeSchema();
