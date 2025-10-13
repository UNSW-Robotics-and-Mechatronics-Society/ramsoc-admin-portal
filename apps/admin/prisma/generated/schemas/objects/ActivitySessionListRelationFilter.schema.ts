// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './ActivitySessionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional()
}).strict();
export const ActivitySessionListRelationFilterObjectSchema: z.ZodType<Prisma.ActivitySessionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionListRelationFilter>;
export const ActivitySessionListRelationFilterObjectZodSchema = makeSchema();
