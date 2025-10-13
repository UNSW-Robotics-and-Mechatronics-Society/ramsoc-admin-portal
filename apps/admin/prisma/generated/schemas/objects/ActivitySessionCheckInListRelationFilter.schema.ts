// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './ActivitySessionCheckInWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInListRelationFilterObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInListRelationFilter>;
export const ActivitySessionCheckInListRelationFilterObjectZodSchema = makeSchema();
