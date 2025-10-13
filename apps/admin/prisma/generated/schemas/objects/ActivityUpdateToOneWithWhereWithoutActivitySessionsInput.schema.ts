// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema';
import { ActivityUpdateWithoutActivitySessionsInputObjectSchema as ActivityUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUpdateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedUpdateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ActivityUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema)])
}).strict();
export const ActivityUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.ActivityUpdateToOneWithWhereWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateToOneWithWhereWithoutActivitySessionsInput>;
export const ActivityUpdateToOneWithWhereWithoutActivitySessionsInputObjectZodSchema = makeSchema();
