// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema';
import { ActivitySessionCheckInUpdateManyMutationInputObjectSchema as ActivitySessionCheckInUpdateManyMutationInputObjectSchema } from './ActivitySessionCheckInUpdateManyMutationInput.schema';
import { ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInput>;
export const ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectZodSchema = makeSchema();
