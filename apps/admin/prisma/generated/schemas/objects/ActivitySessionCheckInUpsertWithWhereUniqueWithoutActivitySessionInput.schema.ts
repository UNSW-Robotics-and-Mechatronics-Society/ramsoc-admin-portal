// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInput>;
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectZodSchema = makeSchema();
