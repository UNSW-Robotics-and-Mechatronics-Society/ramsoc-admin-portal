// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutUpdatedByInputObjectSchema as ActivityUpdateWithoutUpdatedByInputObjectSchema } from './ActivityUpdateWithoutUpdatedByInput.schema';
import { ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema as ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedUpdateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
