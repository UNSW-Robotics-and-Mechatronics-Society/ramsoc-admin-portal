// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutEventsInputObjectSchema as TenantCreateWithoutEventsInputObjectSchema } from './TenantCreateWithoutEventsInput.schema';
import { TenantUncheckedCreateWithoutEventsInputObjectSchema as TenantUncheckedCreateWithoutEventsInputObjectSchema } from './TenantUncheckedCreateWithoutEventsInput.schema';
import { TenantCreateOrConnectWithoutEventsInputObjectSchema as TenantCreateOrConnectWithoutEventsInputObjectSchema } from './TenantCreateOrConnectWithoutEventsInput.schema';
import { TenantUpsertWithoutEventsInputObjectSchema as TenantUpsertWithoutEventsInputObjectSchema } from './TenantUpsertWithoutEventsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutEventsInputObjectSchema as TenantUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutEventsInput.schema';
import { TenantUpdateWithoutEventsInputObjectSchema as TenantUpdateWithoutEventsInputObjectSchema } from './TenantUpdateWithoutEventsInput.schema';
import { TenantUncheckedUpdateWithoutEventsInputObjectSchema as TenantUncheckedUpdateWithoutEventsInputObjectSchema } from './TenantUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => TenantUpdateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutEventsNestedInput>;
export const TenantUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
