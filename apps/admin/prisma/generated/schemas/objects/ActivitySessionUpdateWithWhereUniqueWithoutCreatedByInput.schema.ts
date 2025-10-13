// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutCreatedByInputObjectSchema as ActivitySessionUpdateWithoutCreatedByInputObjectSchema } from './ActivitySessionUpdateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
