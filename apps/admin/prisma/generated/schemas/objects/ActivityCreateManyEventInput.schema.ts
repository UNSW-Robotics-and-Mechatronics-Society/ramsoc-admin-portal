// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  coverImageUrl: z.string().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  createdById: z.string(),
  updatedById: z.string().optional().nullable()
}).strict();
export const ActivityCreateManyEventInputObjectSchema: z.ZodType<Prisma.ActivityCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateManyEventInput>;
export const ActivityCreateManyEventInputObjectZodSchema = makeSchema();
