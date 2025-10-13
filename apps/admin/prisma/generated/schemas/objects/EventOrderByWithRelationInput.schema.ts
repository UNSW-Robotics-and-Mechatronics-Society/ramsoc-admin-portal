// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './TenantMemberOrderByWithRelationInput.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema as ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  coverImageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  siteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  visibility: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithRelationInput>;
export const EventOrderByWithRelationInputObjectZodSchema = makeSchema();
