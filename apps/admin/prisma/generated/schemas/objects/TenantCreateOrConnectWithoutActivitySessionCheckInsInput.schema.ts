// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitySessionCheckInsInput>;
export const TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
