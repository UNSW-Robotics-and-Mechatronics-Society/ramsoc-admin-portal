// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeUpdateWithoutActivitiesInputObjectSchema as ActivityTypeUpdateWithoutActivitiesInputObjectSchema } from './ActivityTypeUpdateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedUpdateWithoutActivitiesInput.schema';
import { ActivityTypeCreateWithoutActivitiesInputObjectSchema as ActivityTypeCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedCreateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityTypeUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema)])
}).strict();
export const ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInput>;
export const ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectZodSchema = makeSchema();
