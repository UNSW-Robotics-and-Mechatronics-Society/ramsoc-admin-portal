// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutCreatedByInputObjectSchema as ActivityUpdateWithoutCreatedByInputObjectSchema } from './ActivityUpdateWithoutCreatedByInput.schema';
import { ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema as ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedUpdateWithoutCreatedByInput.schema';
import { ActivityCreateWithoutCreatedByInputObjectSchema as ActivityCreateWithoutCreatedByInputObjectSchema } from './ActivityCreateWithoutCreatedByInput.schema';
import { ActivityUncheckedCreateWithoutCreatedByInputObjectSchema as ActivityUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
