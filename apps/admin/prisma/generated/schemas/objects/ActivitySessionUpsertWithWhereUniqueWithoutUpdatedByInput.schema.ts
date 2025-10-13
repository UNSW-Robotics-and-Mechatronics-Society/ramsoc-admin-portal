// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutUpdatedByInputObjectSchema as ActivitySessionUpdateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUpdateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutUpdatedByInput.schema';
import { ActivitySessionCreateWithoutUpdatedByInputObjectSchema as ActivitySessionCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
