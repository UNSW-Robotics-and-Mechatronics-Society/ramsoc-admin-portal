// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  preferredName: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  university: SortOrderSchema.optional(),
  studyLevel: SortOrderSchema.optional(),
  zID: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional()
}).strict();
export const UserProfileMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserProfileMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileMinOrderByAggregateInput>;
export const UserProfileMinOrderByAggregateInputObjectZodSchema = makeSchema();
