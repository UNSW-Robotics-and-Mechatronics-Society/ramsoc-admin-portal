// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeCreateWithoutActivitiesInputObjectSchema as ActivityTypeCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateWithoutActivitiesInput.schema';
import { ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedCreateWithoutActivitiesInput.schema';
import { ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema as ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateOrConnectWithoutActivitiesInput.schema';
import { ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectSchema as ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectSchema } from './ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectSchema as ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectSchema } from './ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInput.schema';
import { ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectSchema as ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectSchema } from './ActivityTypeUpdateManyWithWhereWithoutActivitiesInput.schema';
import { ActivityTypeScalarWhereInputObjectSchema as ActivityTypeScalarWhereInputObjectSchema } from './ActivityTypeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeCreateWithoutActivitiesInputObjectSchema).array(), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUncheckedCreateWithoutActivitiesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeCreateOrConnectWithoutActivitiesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUpsertWithWhereUniqueWithoutActivitiesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema), z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema), z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema), z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema), z.lazy(() => ActivityTypeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUpdateWithWhereUniqueWithoutActivitiesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectSchema), z.lazy(() => ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityTypeScalarWhereInputObjectSchema), z.lazy(() => ActivityTypeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityTypeUncheckedUpdateManyWithoutActivitiesNestedInputObjectSchema: z.ZodType<Prisma.ActivityTypeUncheckedUpdateManyWithoutActivitiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUncheckedUpdateManyWithoutActivitiesNestedInput>;
export const ActivityTypeUncheckedUpdateManyWithoutActivitiesNestedInputObjectZodSchema = makeSchema();
