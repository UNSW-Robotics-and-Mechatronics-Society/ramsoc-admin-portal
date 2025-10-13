// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutCreatedByInputObjectSchema as ActivityUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivityUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutCreatedByInput>;
export const ActivityUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
