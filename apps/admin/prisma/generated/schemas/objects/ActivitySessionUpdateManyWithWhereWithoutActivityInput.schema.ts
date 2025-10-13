// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema';
import { ActivitySessionUpdateManyMutationInputObjectSchema as ActivitySessionUpdateManyMutationInputObjectSchema } from './ActivitySessionUpdateManyMutationInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutActivityInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutActivityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutActivityInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutActivityInput>;
export const ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectZodSchema = makeSchema();
