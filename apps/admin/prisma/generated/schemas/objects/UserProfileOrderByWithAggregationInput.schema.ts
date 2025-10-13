// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserProfileCountOrderByAggregateInputObjectSchema as UserProfileCountOrderByAggregateInputObjectSchema } from './UserProfileCountOrderByAggregateInput.schema';
import { UserProfileMaxOrderByAggregateInputObjectSchema as UserProfileMaxOrderByAggregateInputObjectSchema } from './UserProfileMaxOrderByAggregateInput.schema';
import { UserProfileMinOrderByAggregateInputObjectSchema as UserProfileMinOrderByAggregateInputObjectSchema } from './UserProfileMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  firstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preferredName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  university: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  studyLevel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  zID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  _count: z.lazy(() => UserProfileCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserProfileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserProfileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserProfileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileOrderByWithAggregationInput>;
export const UserProfileOrderByWithAggregationInputObjectZodSchema = makeSchema();
