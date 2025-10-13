// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutEventsInputObjectSchema as TenantUpdateWithoutEventsInputObjectSchema } from './TenantUpdateWithoutEventsInput.schema';
import { TenantUncheckedUpdateWithoutEventsInputObjectSchema as TenantUncheckedUpdateWithoutEventsInputObjectSchema } from './TenantUncheckedUpdateWithoutEventsInput.schema';
import { TenantCreateWithoutEventsInputObjectSchema as TenantCreateWithoutEventsInputObjectSchema } from './TenantCreateWithoutEventsInput.schema';
import { TenantUncheckedCreateWithoutEventsInputObjectSchema as TenantUncheckedCreateWithoutEventsInputObjectSchema } from './TenantUncheckedCreateWithoutEventsInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutEventsInput>;
export const TenantUpsertWithoutEventsInputObjectZodSchema = makeSchema();
