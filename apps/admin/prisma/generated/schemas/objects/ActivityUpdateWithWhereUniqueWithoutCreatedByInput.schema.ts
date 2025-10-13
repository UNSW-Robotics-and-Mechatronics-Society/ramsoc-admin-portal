// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutCreatedByInputObjectSchema as ActivityUpdateWithoutCreatedByInputObjectSchema } from './ActivityUpdateWithoutCreatedByInput.schema';
import { ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema as ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
