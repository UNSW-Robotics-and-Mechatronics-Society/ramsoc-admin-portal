// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutTenantInputObjectSchema as ActivityUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivityUpdateManyMutationInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ActivityUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutTenantInput>;
export const ActivityUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
