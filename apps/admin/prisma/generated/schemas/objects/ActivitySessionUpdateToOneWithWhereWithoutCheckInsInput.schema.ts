// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './ActivitySessionWhereInput.schema';
import { ActivitySessionUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUpdateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ActivitySessionUpdateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateToOneWithWhereWithoutCheckInsInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateToOneWithWhereWithoutCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateToOneWithWhereWithoutCheckInsInput>;
export const ActivitySessionUpdateToOneWithWhereWithoutCheckInsInputObjectZodSchema = makeSchema();
