// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutEventsInputObjectSchema as TenantCreateWithoutEventsInputObjectSchema } from './TenantCreateWithoutEventsInput.schema';
import { TenantUncheckedCreateWithoutEventsInputObjectSchema as TenantUncheckedCreateWithoutEventsInputObjectSchema } from './TenantUncheckedCreateWithoutEventsInput.schema';
import { TenantCreateOrConnectWithoutEventsInputObjectSchema as TenantCreateOrConnectWithoutEventsInputObjectSchema } from './TenantCreateOrConnectWithoutEventsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutEventsInput>;
export const TenantCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
