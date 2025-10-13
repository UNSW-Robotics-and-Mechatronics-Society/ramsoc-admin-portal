// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  preferredName: z.literal(true).optional(),
  image: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  university: z.literal(true).optional(),
  studyLevel: z.literal(true).optional(),
  zID: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional()
}).strict();
export const UserProfileMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserProfileMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileMaxAggregateInputType>;
export const UserProfileMaxAggregateInputObjectZodSchema = makeSchema();
