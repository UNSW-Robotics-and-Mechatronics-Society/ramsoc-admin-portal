// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutActivitiesInputObjectSchema as TenantCreateWithoutActivitiesInputObjectSchema } from './TenantCreateWithoutActivitiesInput.schema';
import { TenantUncheckedCreateWithoutActivitiesInputObjectSchema as TenantUncheckedCreateWithoutActivitiesInputObjectSchema } from './TenantUncheckedCreateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitiesInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutActivitiesInput>;
export const TenantCreateOrConnectWithoutActivitiesInputObjectZodSchema = makeSchema();
