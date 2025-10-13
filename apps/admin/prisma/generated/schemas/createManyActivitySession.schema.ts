// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCreateManyInputObjectSchema as ActivitySessionCreateManyInputObjectSchema } from './objects/ActivitySessionCreateManyInput.schema';

export const ActivitySessionCreateManySchema: z.ZodType<Prisma.ActivitySessionCreateManyArgs> = z.object({ data: z.union([ ActivitySessionCreateManyInputObjectSchema, z.array(ActivitySessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyArgs>;

export const ActivitySessionCreateManyZodSchema = z.object({ data: z.union([ ActivitySessionCreateManyInputObjectSchema, z.array(ActivitySessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();