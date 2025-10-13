// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutActivitiesInputObjectSchema as TenantUpdateWithoutActivitiesInputObjectSchema } from './TenantUpdateWithoutActivitiesInput.schema';
import { TenantUncheckedUpdateWithoutActivitiesInputObjectSchema as TenantUncheckedUpdateWithoutActivitiesInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitiesInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitiesInput>;
export const TenantUpdateToOneWithWhereWithoutActivitiesInputObjectZodSchema = makeSchema();
