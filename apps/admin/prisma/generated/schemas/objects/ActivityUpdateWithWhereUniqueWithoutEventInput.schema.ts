// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutEventInputObjectSchema as ActivityUpdateWithoutEventInputObjectSchema } from './ActivityUpdateWithoutEventInput.schema';
import { ActivityUncheckedUpdateWithoutEventInputObjectSchema as ActivityUncheckedUpdateWithoutEventInputObjectSchema } from './ActivityUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const ActivityUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutEventInput>;
export const ActivityUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
