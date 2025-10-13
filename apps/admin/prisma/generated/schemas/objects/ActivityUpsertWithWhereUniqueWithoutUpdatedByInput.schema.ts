// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutUpdatedByInputObjectSchema as ActivityUpdateWithoutUpdatedByInputObjectSchema } from './ActivityUpdateWithoutUpdatedByInput.schema';
import { ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema as ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedUpdateWithoutUpdatedByInput.schema';
import { ActivityCreateWithoutUpdatedByInputObjectSchema as ActivityCreateWithoutUpdatedByInputObjectSchema } from './ActivityCreateWithoutUpdatedByInput.schema';
import { ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
