// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserProfileFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});