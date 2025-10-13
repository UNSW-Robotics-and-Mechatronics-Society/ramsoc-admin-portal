// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutTypesInputObjectSchema as ActivityUncheckedUpdateManyWithoutTypesInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateManyWithoutTypesInputObjectSchema)])
}).strict();
export const ActivityUpdateManyWithWhereWithoutTypesInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutTypesInput>;
export const ActivityUpdateManyWithWhereWithoutTypesInputObjectZodSchema = makeSchema();
