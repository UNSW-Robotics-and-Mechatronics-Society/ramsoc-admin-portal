// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitySessionsInputObjectSchema as TenantCreateWithoutActivitySessionsInputObjectSchema } from './TenantCreateWithoutActivitySessionsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionsInput.schema';
import { TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema as TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema } from './TenantCreateOrConnectWithoutActivitySessionsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitySessionsInput>;
export const TenantCreateNestedOneWithoutActivitySessionsInputObjectZodSchema = makeSchema();
