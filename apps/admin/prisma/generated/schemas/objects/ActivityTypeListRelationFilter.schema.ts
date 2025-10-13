// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './ActivityTypeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActivityTypeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActivityTypeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActivityTypeWhereInputObjectSchema).optional()
}).strict();
export const ActivityTypeListRelationFilterObjectSchema: z.ZodType<Prisma.ActivityTypeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeListRelationFilter>;
export const ActivityTypeListRelationFilterObjectZodSchema = makeSchema();
