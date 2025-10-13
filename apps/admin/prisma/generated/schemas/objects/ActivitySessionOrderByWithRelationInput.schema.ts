// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './ActivityOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './TenantMemberOrderByWithRelationInput.schema';
import { ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema as ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema } from './ActivitySessionCheckInOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activityId: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  endTime: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  capacity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeType: SortOrderSchema.optional(),
  code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeValidFrom: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeValidTo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  allowSelfCheckIn: SortOrderSchema.optional(),
  activity: z.lazy(() => ActivityOrderByWithRelationInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  updatedBy: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional(),
  checkIns: z.lazy(() => ActivitySessionCheckInOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ActivitySessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActivitySessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionOrderByWithRelationInput>;
export const ActivitySessionOrderByWithRelationInputObjectZodSchema = makeSchema();
