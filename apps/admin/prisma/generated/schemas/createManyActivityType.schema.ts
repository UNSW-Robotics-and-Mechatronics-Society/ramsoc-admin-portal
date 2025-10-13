// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeCreateManyInputObjectSchema as ActivityTypeCreateManyInputObjectSchema } from './objects/ActivityTypeCreateManyInput.schema';

export const ActivityTypeCreateManySchema: z.ZodType<Prisma.ActivityTypeCreateManyArgs> = z.object({ data: z.union([ ActivityTypeCreateManyInputObjectSchema, z.array(ActivityTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeCreateManyArgs>;

export const ActivityTypeCreateManyZodSchema = z.object({ data: z.union([ ActivityTypeCreateManyInputObjectSchema, z.array(ActivityTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();