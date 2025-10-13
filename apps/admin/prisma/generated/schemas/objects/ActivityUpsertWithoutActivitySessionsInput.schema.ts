// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityUpdateWithoutActivitySessionsInputObjectSchema as ActivityUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUpdateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedUpdateWithoutActivitySessionsInput.schema';
import { ActivityCreateWithoutActivitySessionsInputObjectSchema as ActivityCreateWithoutActivitySessionsInputObjectSchema } from './ActivityCreateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedCreateWithoutActivitySessionsInput.schema';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ActivityUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema)]),
  where: z.lazy(() => ActivityWhereInputObjectSchema).optional()
}).strict();
export const ActivityUpsertWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithoutActivitySessionsInput>;
export const ActivityUpsertWithoutActivitySessionsInputObjectZodSchema = makeSchema();
