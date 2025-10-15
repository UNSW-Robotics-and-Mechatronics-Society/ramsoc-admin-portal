// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantMemberOrderByRelationAggregateInputObjectSchema as TenantMemberOrderByRelationAggregateInputObjectSchema } from './TenantMemberOrderByRelationAggregateInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema as EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema as ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema';
import { ActivitySessionOrderByRelationAggregateInputObjectSchema as ActivitySessionOrderByRelationAggregateInputObjectSchema } from './ActivitySessionOrderByRelationAggregateInput.schema';
import { ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema as ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema } from './ActivitySessionCheckInOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  logo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  siteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  tenantMembers: z.lazy(() => TenantMemberOrderByRelationAggregateInputObjectSchema).optional(),
  events: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionOrderByRelationAggregateInputObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantOrderByWithRelationInput>;
export const TenantOrderByWithRelationInputObjectZodSchema = makeSchema();
