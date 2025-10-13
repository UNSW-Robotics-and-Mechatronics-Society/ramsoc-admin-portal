// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  title: z.string(),
  slug: z.string(),
  coverImageUrl: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  createdById: z.string(),
  updatedById: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional()
}).strict();
export const EventUncheckedCreateWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutActivitiesInput>;
export const EventUncheckedCreateWithoutActivitiesInputObjectZodSchema = makeSchema();
