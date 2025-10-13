// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema';
import { ActivitySessionCheckInUpdateManyMutationInputObjectSchema as ActivitySessionCheckInUpdateManyMutationInputObjectSchema } from './ActivitySessionCheckInUpdateManyMutationInput.schema';
import { ActivitySessionCheckInUncheckedUpdateManyWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInput>;
export const ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
