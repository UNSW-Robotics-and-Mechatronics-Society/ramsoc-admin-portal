// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema';
import { ActivitySessionUpdateManyMutationInputObjectSchema as ActivitySessionUpdateManyMutationInputObjectSchema } from './ActivitySessionUpdateManyMutationInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutUpdatedByInput>;
export const ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = makeSchema();
