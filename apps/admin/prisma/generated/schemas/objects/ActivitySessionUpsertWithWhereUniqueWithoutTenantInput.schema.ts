// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutTenantInputObjectSchema as ActivitySessionUpdateWithoutTenantInputObjectSchema } from './ActivitySessionUpdateWithoutTenantInput.schema';
import { ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema as ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutTenantInput.schema';
import { ActivitySessionCreateWithoutTenantInputObjectSchema as ActivitySessionCreateWithoutTenantInputObjectSchema } from './ActivitySessionCreateWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutTenantInput>;
export const ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
