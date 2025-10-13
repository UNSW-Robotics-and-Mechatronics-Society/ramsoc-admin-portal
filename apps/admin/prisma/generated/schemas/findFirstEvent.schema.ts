// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventFindFirstSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    title: z.boolean().optional(),
    slug: z.boolean().optional(),
    coverImageUrl: z.boolean().optional(),
    siteUrl: z.boolean().optional(),
    description: z.boolean().optional(),
    visibility: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenant: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EventSelect>;

export const EventFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    title: z.boolean().optional(),
    slug: z.boolean().optional(),
    coverImageUrl: z.boolean().optional(),
    siteUrl: z.boolean().optional(),
    description: z.boolean().optional(),
    visibility: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenant: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    activities: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EventFindFirstSchema: z.ZodType<Prisma.EventFindFirstArgs> = z.object({ select: EventFindFirstSelectSchema.optional(), include: EventIncludeObjectSchema.optional(), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EventFindFirstArgs>;

export const EventFindFirstZodSchema = z.object({ select: EventFindFirstSelectSchema.optional(), include: EventIncludeObjectSchema.optional(), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict();