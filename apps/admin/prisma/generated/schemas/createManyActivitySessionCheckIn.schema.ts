// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInCreateManyInputObjectSchema as ActivitySessionCheckInCreateManyInputObjectSchema } from './objects/ActivitySessionCheckInCreateManyInput.schema';

export const ActivitySessionCheckInCreateManySchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyArgs> = z.object({ data: z.union([ ActivitySessionCheckInCreateManyInputObjectSchema, z.array(ActivitySessionCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyArgs>;

export const ActivitySessionCheckInCreateManyZodSchema = z.object({ data: z.union([ ActivitySessionCheckInCreateManyInputObjectSchema, z.array(ActivitySessionCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();