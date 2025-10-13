// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitiesInputObjectSchema as TenantCreateWithoutActivitiesInputObjectSchema } from './TenantCreateWithoutActivitiesInput.schema';
import { TenantUncheckedCreateWithoutActivitiesInputObjectSchema as TenantUncheckedCreateWithoutActivitiesInputObjectSchema } from './TenantUncheckedCreateWithoutActivitiesInput.schema';
import { TenantCreateOrConnectWithoutActivitiesInputObjectSchema as TenantCreateOrConnectWithoutActivitiesInputObjectSchema } from './TenantCreateOrConnectWithoutActivitiesInput.schema';
import { TenantUpsertWithoutActivitiesInputObjectSchema as TenantUpsertWithoutActivitiesInputObjectSchema } from './TenantUpsertWithoutActivitiesInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutActivitiesInputObjectSchema as TenantUpdateToOneWithWhereWithoutActivitiesInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutActivitiesInput.schema';
import { TenantUpdateWithoutActivitiesInputObjectSchema as TenantUpdateWithoutActivitiesInputObjectSchema } from './TenantUpdateWithoutActivitiesInput.schema';
import { TenantUncheckedUpdateWithoutActivitiesInputObjectSchema as TenantUncheckedUpdateWithoutActivitiesInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitiesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitiesInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutActivitiesNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitiesNestedInput>;
export const TenantUpdateOneRequiredWithoutActivitiesNestedInputObjectZodSchema = makeSchema();
