// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeScalarWhereInputObjectSchema as ActivityTypeScalarWhereInputObjectSchema } from './ActivityTypeScalarWhereInput.schema';
import { ActivityTypeUpdateManyMutationInputObjectSchema as ActivityTypeUpdateManyMutationInputObjectSchema } from './ActivityTypeUpdateManyMutationInput.schema';
import { ActivityTypeUncheckedUpdateManyWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedUpdateManyWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedUpdateManyWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityTypeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityTypeUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityTypeUncheckedUpdateManyWithoutActivitiesInputObjectSchema)])
}).strict();
export const ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeUpdateManyWithWhereWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUpdateManyWithWhereWithoutActivitiesInput>;
export const ActivityTypeUpdateManyWithWhereWithoutActivitiesInputObjectZodSchema = makeSchema();
