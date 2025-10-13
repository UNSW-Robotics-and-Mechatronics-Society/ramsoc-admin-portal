// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutActivitySessionsInputObjectSchema as TenantCreateWithoutActivitySessionsInputObjectSchema } from './TenantCreateWithoutActivitySessionsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitySessionsInput>;
export const TenantCreateOrConnectWithoutActivitySessionsInputObjectZodSchema = makeSchema();
