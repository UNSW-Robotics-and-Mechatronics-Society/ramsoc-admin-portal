// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutTypesInputObjectSchema as ActivityUpdateWithoutTypesInputObjectSchema } from './ActivityUpdateWithoutTypesInput.schema';
import { ActivityUncheckedUpdateWithoutTypesInputObjectSchema as ActivityUncheckedUpdateWithoutTypesInputObjectSchema } from './ActivityUncheckedUpdateWithoutTypesInput.schema';
import { ActivityCreateWithoutTypesInputObjectSchema as ActivityCreateWithoutTypesInputObjectSchema } from './ActivityCreateWithoutTypesInput.schema';
import { ActivityUncheckedCreateWithoutTypesInputObjectSchema as ActivityUncheckedCreateWithoutTypesInputObjectSchema } from './ActivityUncheckedCreateWithoutTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityUpdateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutTypesInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema)])
}).strict();
export const ActivityUpsertWithWhereUniqueWithoutTypesInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutTypesInput>;
export const ActivityUpsertWithWhereUniqueWithoutTypesInputObjectZodSchema = makeSchema();
