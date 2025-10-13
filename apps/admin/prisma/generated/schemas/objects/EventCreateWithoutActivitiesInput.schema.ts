// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { TenantCreateNestedOneWithoutEventsInputObjectSchema as TenantCreateNestedOneWithoutEventsInputObjectSchema } from './TenantCreateNestedOneWithoutEventsInput.schema';
import { TenantMemberCreateNestedOneWithoutCreatedEventsInputObjectSchema as TenantMemberCreateNestedOneWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateNestedOneWithoutCreatedEventsInput.schema';
import { TenantMemberCreateNestedOneWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateNestedOneWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateNestedOneWithoutUpdatedEventsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  slug: z.string(),
  coverImageUrl: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutEventsInputObjectSchema),
  createdBy: z.lazy(() => TenantMemberCreateNestedOneWithoutCreatedEventsInputObjectSchema),
  updatedBy: z.lazy(() => TenantMemberCreateNestedOneWithoutUpdatedEventsInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutActivitiesInput>;
export const EventCreateWithoutActivitiesInputObjectZodSchema = makeSchema();
