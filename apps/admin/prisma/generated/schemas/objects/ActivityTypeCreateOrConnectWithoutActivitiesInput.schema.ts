// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeCreateWithoutActivitiesInputObjectSchema as ActivityTypeCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedCreateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema)])
}).strict();
export const ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeCreateOrConnectWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCreateOrConnectWithoutActivitiesInput>;
export const ActivityTypeCreateOrConnectWithoutActivitiesInputObjectZodSchema = makeSchema();
