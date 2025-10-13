// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutEventsInputObjectSchema as TenantCreateWithoutEventsInputObjectSchema } from './TenantCreateWithoutEventsInput.schema';
import { TenantUncheckedCreateWithoutEventsInputObjectSchema as TenantUncheckedCreateWithoutEventsInputObjectSchema } from './TenantUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutEventsInput>;
export const TenantCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
