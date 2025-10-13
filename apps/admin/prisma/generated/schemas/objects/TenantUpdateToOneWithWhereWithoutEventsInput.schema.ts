// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutEventsInputObjectSchema as TenantUpdateWithoutEventsInputObjectSchema } from './TenantUpdateWithoutEventsInput.schema';
import { TenantUncheckedUpdateWithoutEventsInputObjectSchema as TenantUncheckedUpdateWithoutEventsInputObjectSchema } from './TenantUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutEventsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutEventsInput>;
export const TenantUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
