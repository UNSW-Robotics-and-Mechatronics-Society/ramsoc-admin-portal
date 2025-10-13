// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithoutActivityInputObjectSchema as ActivitySessionUpdateWithoutActivityInputObjectSchema } from './ActivitySessionUpdateWithoutActivityInput.schema';
import { ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema as ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutActivityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutActivityInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateWithWhereUniqueWithoutActivityInput>;
export const ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectZodSchema = makeSchema();
