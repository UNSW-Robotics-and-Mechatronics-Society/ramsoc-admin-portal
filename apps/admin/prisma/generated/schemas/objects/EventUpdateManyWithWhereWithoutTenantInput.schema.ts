// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutTenantInputObjectSchema as EventUncheckedUpdateManyWithoutTenantInputObjectSchema } from './EventUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutTenantInput>;
export const EventUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
