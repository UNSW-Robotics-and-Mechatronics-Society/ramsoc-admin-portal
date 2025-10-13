// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeUpdateWithoutActivitiesInputObjectSchema as ActivityTypeUpdateWithoutActivitiesInputObjectSchema } from './ActivityTypeUpdateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedUpdateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityTypeUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedUpdateWithoutActivitiesInputObjectSchema)])
}).strict();
export const ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInput>;
export const ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectZodSchema = makeSchema();
