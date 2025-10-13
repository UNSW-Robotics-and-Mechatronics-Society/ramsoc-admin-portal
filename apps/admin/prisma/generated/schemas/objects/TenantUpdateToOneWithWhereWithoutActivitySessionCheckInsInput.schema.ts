// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUpdateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInput>;
export const TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
