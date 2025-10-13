// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateOrConnectWithoutActivitySessionCheckInsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitySessionCheckInsInput>;
export const TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
