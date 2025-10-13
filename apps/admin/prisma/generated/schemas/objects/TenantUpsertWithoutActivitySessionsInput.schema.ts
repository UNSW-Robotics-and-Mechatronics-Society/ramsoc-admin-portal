// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutActivitySessionsInputObjectSchema as TenantUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUpdateWithoutActivitySessionsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionsInput.schema';
import { TenantCreateWithoutActivitySessionsInputObjectSchema as TenantCreateWithoutActivitySessionsInputObjectSchema } from './TenantCreateWithoutActivitySessionsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionsInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutActivitySessionsInput>;
export const TenantUpsertWithoutActivitySessionsInputObjectZodSchema = makeSchema();
