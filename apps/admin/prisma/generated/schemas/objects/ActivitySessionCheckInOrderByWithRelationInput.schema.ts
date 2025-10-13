// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ActivitySessionOrderByWithRelationInputObjectSchema as ActivitySessionOrderByWithRelationInputObjectSchema } from './ActivitySessionOrderByWithRelationInput.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './TenantMemberOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activitySessionId: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  checkInTime: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  activitySession: z.lazy(() => ActivitySessionOrderByWithRelationInputObjectSchema).optional(),
  member: z.lazy(() => TenantMemberOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInOrderByWithRelationInput>;
export const ActivitySessionCheckInOrderByWithRelationInputObjectZodSchema = makeSchema();
