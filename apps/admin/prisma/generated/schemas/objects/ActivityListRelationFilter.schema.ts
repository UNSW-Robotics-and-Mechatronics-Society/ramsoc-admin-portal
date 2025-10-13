// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActivityWhereInputObjectSchema).optional()
}).strict();
export const ActivityListRelationFilterObjectSchema: z.ZodType<Prisma.ActivityListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivityListRelationFilter>;
export const ActivityListRelationFilterObjectZodSchema = makeSchema();
