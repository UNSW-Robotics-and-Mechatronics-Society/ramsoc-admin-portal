// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutCreatedByInputObjectSchema as ActivitySessionUpdateWithoutCreatedByInputObjectSchema } from './ActivitySessionUpdateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutCreatedByInput.schema';
import { ActivitySessionCreateWithoutCreatedByInputObjectSchema as ActivitySessionCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
