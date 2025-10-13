// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUpdateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionCheckInsInput.schema';
import { TenantCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutActivitySessionCheckInsInput>;
export const TenantUpsertWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
