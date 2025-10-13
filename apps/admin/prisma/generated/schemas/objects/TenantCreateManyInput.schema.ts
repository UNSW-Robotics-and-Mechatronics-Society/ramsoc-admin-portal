// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  logo: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional()
}).strict();
export const TenantCreateManyInputObjectSchema: z.ZodType<Prisma.TenantCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateManyInput>;
export const TenantCreateManyInputObjectZodSchema = makeSchema();
