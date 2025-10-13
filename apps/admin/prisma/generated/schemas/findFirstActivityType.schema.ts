// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeOrderByWithRelationInputObjectSchema as ActivityTypeOrderByWithRelationInputObjectSchema } from './objects/ActivityTypeOrderByWithRelationInput.schema';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeScalarFieldEnumSchema } from './enums/ActivityTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivityTypeFindFirstSelectSchema: z.ZodType<Prisma.ActivityTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivityTypeSelect>;

export const ActivityTypeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ActivityTypeFindFirstSchema: z.ZodType<Prisma.ActivityTypeFindFirstArgs> = z.object({ select: ActivityTypeFindFirstSelectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityTypeScalarFieldEnumSchema, ActivityTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeFindFirstArgs>;

export const ActivityTypeFindFirstZodSchema = z.object({ select: ActivityTypeFindFirstSelectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityTypeScalarFieldEnumSchema, ActivityTypeScalarFieldEnumSchema.array()]).optional() }).strict();