// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema as ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInput>;
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
