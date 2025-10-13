// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema as ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInput>;
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
