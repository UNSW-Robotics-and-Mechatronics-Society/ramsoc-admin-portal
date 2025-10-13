// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTenantInputObjectSchema as EventUpdateWithoutTenantInputObjectSchema } from './EventUpdateWithoutTenantInput.schema';
import { EventUncheckedUpdateWithoutTenantInputObjectSchema as EventUncheckedUpdateWithoutTenantInputObjectSchema } from './EventUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const EventUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutTenantInput>;
export const EventUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
