// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeCreateManyInputObjectSchema as ActivityTypeCreateManyInputObjectSchema } from './objects/ActivityTypeCreateManyInput.schema';

export const ActivityTypeCreateManyAndReturnSchema: z.ZodType<Prisma.ActivityTypeCreateManyAndReturnArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), data: z.union([ ActivityTypeCreateManyInputObjectSchema, z.array(ActivityTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeCreateManyAndReturnArgs>;

export const ActivityTypeCreateManyAndReturnZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), data: z.union([ ActivityTypeCreateManyInputObjectSchema, z.array(ActivityTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();