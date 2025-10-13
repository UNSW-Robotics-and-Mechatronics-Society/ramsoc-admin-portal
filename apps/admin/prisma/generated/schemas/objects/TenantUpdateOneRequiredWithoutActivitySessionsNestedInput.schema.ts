// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutActivitySessionsInputObjectSchema as TenantCreateWithoutActivitySessionsInputObjectSchema } from './TenantCreateWithoutActivitySessionsInput.schema';
import { TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema as TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedCreateWithoutActivitySessionsInput.schema';
import { TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema as TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema } from './TenantCreateOrConnectWithoutActivitySessionsInput.schema';
import { TenantUpsertWithoutActivitySessionsInputObjectSchema as TenantUpsertWithoutActivitySessionsInputObjectSchema } from './TenantUpsertWithoutActivitySessionsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema as TenantUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutActivitySessionsInput.schema';
import { TenantUpdateWithoutActivitySessionsInputObjectSchema as TenantUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUpdateWithoutActivitySessionsInput.schema';
import { TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema as TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './TenantUncheckedUpdateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActivitySessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutActivitySessionsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutActivitySessionsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitySessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutActivitySessionsNestedInput>;
export const TenantUpdateOneRequiredWithoutActivitySessionsNestedInputObjectZodSchema = makeSchema();
