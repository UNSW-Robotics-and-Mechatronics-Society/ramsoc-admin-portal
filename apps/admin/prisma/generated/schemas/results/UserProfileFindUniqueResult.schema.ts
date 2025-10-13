// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserProfileFindUniqueResultSchema = z.nullable(z.object({
  userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  preferredName: z.string().optional(),
  image: z.string().optional(),
  gender: z.string().optional(),
  university: z.string().optional(),
  studyLevel: z.string().optional(),
  zID: z.string().optional(),
  createDate: z.date(),
  updateDate: z.date(),
  user: z.unknown()
}));