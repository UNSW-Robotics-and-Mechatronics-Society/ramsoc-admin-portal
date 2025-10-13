// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutTenantInputObjectSchema as ActivityUpdateWithoutTenantInputObjectSchema } from './ActivityUpdateWithoutTenantInput.schema';
import { ActivityUncheckedUpdateWithoutTenantInputObjectSchema as ActivityUncheckedUpdateWithoutTenantInputObjectSchema } from './ActivityUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivityUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutTenantInput>;
export const ActivityUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
