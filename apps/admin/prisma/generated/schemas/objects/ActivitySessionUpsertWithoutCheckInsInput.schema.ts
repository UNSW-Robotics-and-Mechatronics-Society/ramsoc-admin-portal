// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUpdateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutCheckInsInput.schema';
import { ActivitySessionCreateWithoutCheckInsInputObjectSchema as ActivitySessionCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCheckInsInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './ActivitySessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ActivitySessionUpdateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema)]),
  where: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional()
}).strict();
export const ActivitySessionUpsertWithoutCheckInsInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpsertWithoutCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpsertWithoutCheckInsInput>;
export const ActivitySessionUpsertWithoutCheckInsInputObjectZodSchema = makeSchema();
