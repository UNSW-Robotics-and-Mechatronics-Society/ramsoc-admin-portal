// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutActivitiesInputObjectSchema as TenantUpdateWithoutActivitiesInputObjectSchema } from './TenantUpdateWithoutActivitiesInput.schema';
import { TenantUncheckedUpdateWithoutActivitiesInputObjectSchema as TenantUncheckedUpdateWithoutActivitiesInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitiesInput.schema';
import { TenantCreateWithoutActivitiesInputObjectSchema as TenantCreateWithoutActivitiesInputObjectSchema } from './TenantCreateWithoutActivitiesInput.schema';
import { TenantUncheckedCreateWithoutActivitiesInputObjectSchema as TenantUncheckedCreateWithoutActivitiesInputObjectSchema } from './TenantUncheckedCreateWithoutActivitiesInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitiesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitiesInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutActivitiesInput>;
export const TenantUpsertWithoutActivitiesInputObjectZodSchema = makeSchema();
