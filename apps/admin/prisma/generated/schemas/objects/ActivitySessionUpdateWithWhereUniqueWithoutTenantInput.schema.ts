// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutTenantInputObjectSchema as ActivitySessionUpdateWithoutTenantInputObjectSchema } from './ActivitySessionUpdateWithoutTenantInput.schema';
import { ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema as ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutTenantInput>;
export const ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
