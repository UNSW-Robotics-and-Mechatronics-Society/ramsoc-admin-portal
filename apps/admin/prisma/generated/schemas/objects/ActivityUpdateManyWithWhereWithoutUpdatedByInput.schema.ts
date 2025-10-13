// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutUpdatedByInputObjectSchema as ActivityUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutUpdatedByInput>;
export const ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = makeSchema();
