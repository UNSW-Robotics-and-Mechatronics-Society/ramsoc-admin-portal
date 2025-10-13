// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema as EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema as ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema';
import { ActivitySessionOrderByRelationAggregateInputObjectSchema as ActivitySessionOrderByRelationAggregateInputObjectSchema } from './ActivitySessionOrderByRelationAggregateInput.schema';
import { ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema as ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema } from './ActivitySessionCheckInOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  createdEvents: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
  updatedEvents: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional(),
  updatedActivities: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionOrderByRelationAggregateInputObjectSchema).optional(),
  updatedActivitySessions: z.lazy(() => ActivitySessionOrderByRelationAggregateInputObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantMemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberOrderByWithRelationInput>;
export const TenantMemberOrderByWithRelationInputObjectZodSchema = makeSchema();
