// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutEventInputObjectSchema as ActivityUncheckedUpdateManyWithoutEventInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const ActivityUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutEventInput>;
export const ActivityUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
