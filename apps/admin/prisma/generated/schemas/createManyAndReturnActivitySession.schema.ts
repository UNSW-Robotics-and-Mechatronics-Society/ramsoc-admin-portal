// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionCreateManyInputObjectSchema as ActivitySessionCreateManyInputObjectSchema } from './objects/ActivitySessionCreateManyInput.schema';

export const ActivitySessionCreateManyAndReturnSchema: z.ZodType<Prisma.ActivitySessionCreateManyAndReturnArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), data: z.union([ ActivitySessionCreateManyInputObjectSchema, z.array(ActivitySessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyAndReturnArgs>;

export const ActivitySessionCreateManyAndReturnZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), data: z.union([ ActivitySessionCreateManyInputObjectSchema, z.array(ActivitySessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();