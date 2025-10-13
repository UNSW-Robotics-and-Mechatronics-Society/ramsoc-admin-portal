// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  createDate: z.date(),
  updateDate: z.date(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  profile: z.unknown().optional(),
  tenantMembers: z.array(z.unknown())
}));