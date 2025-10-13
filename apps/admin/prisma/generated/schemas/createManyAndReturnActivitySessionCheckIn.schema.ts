// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInCreateManyInputObjectSchema as ActivitySessionCheckInCreateManyInputObjectSchema } from './objects/ActivitySessionCheckInCreateManyInput.schema';

export const ActivitySessionCheckInCreateManyAndReturnSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyAndReturnArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), data: z.union([ ActivitySessionCheckInCreateManyInputObjectSchema, z.array(ActivitySessionCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyAndReturnArgs>;

export const ActivitySessionCheckInCreateManyAndReturnZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), data: z.union([ ActivitySessionCheckInCreateManyInputObjectSchema, z.array(ActivitySessionCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();