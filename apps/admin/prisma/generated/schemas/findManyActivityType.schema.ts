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

export const ActivityTypeFindManySelectSchema: z.ZodType<Prisma.ActivityTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivityTypeSelect>;

export const ActivityTypeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ActivityTypeFindManySchema: z.ZodType<Prisma.ActivityTypeFindManyArgs> = z.object({ select: ActivityTypeFindManySelectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityTypeScalarFieldEnumSchema, ActivityTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeFindManyArgs>;

export const ActivityTypeFindManyZodSchema = z.object({ select: ActivityTypeFindManySelectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityTypeScalarFieldEnumSchema, ActivityTypeScalarFieldEnumSchema.array()]).optional() }).strict();