// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutActivitySessionsInputObjectSchema as TenantUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUpdateWithoutActivitySessionsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActivitySessionsInput>;
export const TenantUpdateToOneWithWhereWithoutActivitySessionsInputObjectZodSchema = makeSchema();
