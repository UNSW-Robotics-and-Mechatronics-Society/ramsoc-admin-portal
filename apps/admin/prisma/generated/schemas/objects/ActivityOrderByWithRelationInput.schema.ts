// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './TenantMemberOrderByWithRelationInput.schema';
import { ActivityTypeOrderByRelationAggregateInputObjectSchema as ActivityTypeOrderByRelationAggregateInputObjectSchema } from './ActivityTypeOrderByRelationAggregateInput.schema';
import { ActivitySessionOrderByRelationAggregateInputObjectSchema as ActivitySessionOrderByRelationAggregateInputObjectSchema } from './ActivitySessionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slug: SortOrderSchema.optional(),
  coverImageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  visibility: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  types: z.lazy(() => ActivityTypeOrderByRelationAggregateInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ActivityOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActivityOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityOrderByWithRelationInput>;
export const ActivityOrderByWithRelationInputObjectZodSchema = makeSchema();
