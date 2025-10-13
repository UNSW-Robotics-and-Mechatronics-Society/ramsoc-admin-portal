// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeCreateWithoutActivitiesInputObjectSchema as ActivityTypeCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedCreateWithoutActivitiesInput.schema';
import { ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema as ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateOrConnectWithoutActivitiesInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './ActivityTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema).array(), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema), z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityTypeCreateNestedManyWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeCreateNestedManyWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCreateNestedManyWithoutActivitiesInput>;
export const ActivityTypeCreateNestedManyWithoutActivitiesInputObjectZodSchema = makeSchema();
