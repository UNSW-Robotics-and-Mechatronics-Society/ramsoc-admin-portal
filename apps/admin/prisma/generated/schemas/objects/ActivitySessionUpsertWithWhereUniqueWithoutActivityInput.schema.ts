// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutActivityInputObjectSchema as ActivitySessionUpdateWithoutActivityInputObjectSchema } from './ActivitySessionUpdateWithoutActivityInput.schema';
import { ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema as ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutActivityInput.schema';
import { ActivitySessionCreateWithoutActivityInputObjectSchema as ActivitySessionCreateWithoutActivityInputObjectSchema } from './ActivitySessionCreateWithoutActivityInput.schema';
import { ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema as ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutActivityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema)])
}).strict();
export const ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpsertWithWhereUniqueWithoutActivityInput>;
export const ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectZodSchema = makeSchema();
