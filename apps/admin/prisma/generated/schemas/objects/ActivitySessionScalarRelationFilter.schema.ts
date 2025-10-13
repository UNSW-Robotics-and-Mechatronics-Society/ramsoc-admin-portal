// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './ActivitySessionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional()
}).strict();
export const ActivitySessionScalarRelationFilterObjectSchema: z.ZodType<Prisma.ActivitySessionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionScalarRelationFilter>;
export const ActivitySessionScalarRelationFilterObjectZodSchema = makeSchema();
