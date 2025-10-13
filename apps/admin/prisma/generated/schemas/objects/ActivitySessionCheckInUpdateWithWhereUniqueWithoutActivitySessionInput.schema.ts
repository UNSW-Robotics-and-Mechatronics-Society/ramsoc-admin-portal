// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutActivitySessionInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInput>;
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectZodSchema = makeSchema();
