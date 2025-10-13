// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  preferredName: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  university: z.string().optional().nullable(),
  studyLevel: z.string().optional().nullable(),
  zID: z.string().optional().nullable(),
  createDate: z.coerce.date().optional()
}).strict();
export const UserProfileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserProfileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileUncheckedCreateInput>;
export const UserProfileUncheckedCreateInputObjectZodSchema = makeSchema();
