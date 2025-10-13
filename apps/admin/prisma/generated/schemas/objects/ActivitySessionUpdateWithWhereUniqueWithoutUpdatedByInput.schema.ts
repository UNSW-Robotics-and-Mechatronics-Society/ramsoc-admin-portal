// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutUpdatedByInputObjectSchema as ActivitySessionUpdateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUpdateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
