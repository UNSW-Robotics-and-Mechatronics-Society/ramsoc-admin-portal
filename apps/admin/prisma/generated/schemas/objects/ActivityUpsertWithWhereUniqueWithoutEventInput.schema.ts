// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutEventInputObjectSchema as ActivityUpdateWithoutEventInputObjectSchema } from './ActivityUpdateWithoutEventInput.schema';
import { ActivityUncheckedUpdateWithoutEventInputObjectSchema as ActivityUncheckedUpdateWithoutEventInputObjectSchema } from './ActivityUncheckedUpdateWithoutEventInput.schema';
import { ActivityCreateWithoutEventInputObjectSchema as ActivityCreateWithoutEventInputObjectSchema } from './ActivityCreateWithoutEventInput.schema';
import { ActivityUncheckedCreateWithoutEventInputObjectSchema as ActivityUncheckedCreateWithoutEventInputObjectSchema } from './ActivityUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivityUpdateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivityCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const ActivityUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutEventInput>;
export const ActivityUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
