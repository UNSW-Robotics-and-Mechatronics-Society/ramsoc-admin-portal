// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { ActivityUncheckedCreateNestedManyWithoutEventInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutEventInput.schema'

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
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutUpdatedByInput>;
export const EventUncheckedCreateWithoutUpdatedByInputObjectZodSchema = makeSchema();
