// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutTypesInputObjectSchema as ActivityUpdateWithoutTypesInputObjectSchema } from './ActivityUpdateWithoutTypesInput.schema';
import { ActivityUncheckedUpdateWithoutTypesInputObjectSchema as ActivityUncheckedUpdateWithoutTypesInputObjectSchema } from './ActivityUncheckedUpdateWithoutTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutTypesInputObjectSchema)])
}).strict();
export const ActivityUpdateWithWhereUniqueWithoutTypesInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutTypesInput>;
export const ActivityUpdateWithWhereUniqueWithoutTypesInputObjectZodSchema = makeSchema();
