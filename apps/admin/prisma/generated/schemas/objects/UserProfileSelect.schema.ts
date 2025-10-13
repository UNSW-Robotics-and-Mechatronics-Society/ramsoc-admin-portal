// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  userId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  preferredName: z.boolean().optional(),
  image: z.boolean().optional(),
  gender: z.boolean().optional(),
  university: z.boolean().optional(),
  studyLevel: z.boolean().optional(),
  zID: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const UserProfileSelectObjectSchema: z.ZodType<Prisma.UserProfileSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileSelect>;
export const UserProfileSelectObjectZodSchema = makeSchema();
