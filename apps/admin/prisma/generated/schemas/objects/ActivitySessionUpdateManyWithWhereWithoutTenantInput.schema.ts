// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema';
import { ActivitySessionUpdateManyMutationInputObjectSchema as ActivitySessionUpdateManyMutationInputObjectSchema } from './ActivitySessionUpdateManyMutationInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutTenantInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyWithWhereWithoutTenantInput>;
export const ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
