// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutTenantInputObjectSchema as ActivityUpdateWithoutTenantInputObjectSchema } from './ActivityUpdateWithoutTenantInput.schema';
import { ActivityUncheckedUpdateWithoutTenantInputObjectSchema as ActivityUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivityUncheckedUpdateWithoutTenantInput.schema';
import { ActivityCreateWithoutTenantInputObjectSchema as ActivityCreateWithoutTenantInputObjectSchema } from './ActivityCreateWithoutTenantInput.schema';
import { ActivityUncheckedCreateWithoutTenantInputObjectSchema as ActivityUncheckedCreateWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivityUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutTenantInput>;
export const ActivityUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
