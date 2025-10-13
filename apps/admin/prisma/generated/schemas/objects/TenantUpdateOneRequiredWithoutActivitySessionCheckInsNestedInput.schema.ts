// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionCheckInsInput.schema';
import { TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateOrConnectWithoutActivitySessionCheckInsInput.schema';
import { TenantUpsertWithoutActivitySessionCheckInsInputObjectSchema as TenantUpsertWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUpsertWithoutActivitySessionCheckInsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInputObjectSchema as TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInput.schema';
import { TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUpdateWithoutActivitySessionCheckInsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionCheckInsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitySessionCheckInsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutActivitySessionCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUpdateWithoutActivitySessionCheckInsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInput>;
export const TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectZodSchema = makeSchema();
