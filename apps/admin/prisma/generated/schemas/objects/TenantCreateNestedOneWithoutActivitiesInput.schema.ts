// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitiesInputObjectSchema as TenantCreateWithoutActivitiesInputObjectSchema } from './TenantCreateWithoutActivitiesInput.schema';
import { TenantUncheckedCreateWithoutActivitiesInputObjectSchema as TenantUncheckedCreateWithoutActivitiesInputObjectSchema } from './TenantUncheckedCreateWithoutActivitiesInput.schema';
import { TenantCreateOrConnectWithoutActivitiesInputObjectSchema as TenantCreateOrConnectWithoutActivitiesInputObjectSchema } from './TenantCreateOrConnectWithoutActivitiesInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutActivitiesInput>;
export const TenantCreateNestedOneWithoutActivitiesInputObjectZodSchema = makeSchema();
