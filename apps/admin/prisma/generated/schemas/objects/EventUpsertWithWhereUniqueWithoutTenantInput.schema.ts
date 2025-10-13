// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTenantInputObjectSchema as EventUpdateWithoutTenantInputObjectSchema } from './EventUpdateWithoutTenantInput.schema';
import { EventUncheckedUpdateWithoutTenantInputObjectSchema as EventUncheckedUpdateWithoutTenantInputObjectSchema } from './EventUncheckedUpdateWithoutTenantInput.schema';
import { EventCreateWithoutTenantInputObjectSchema as EventCreateWithoutTenantInputObjectSchema } from './EventCreateWithoutTenantInput.schema';
import { EventUncheckedCreateWithoutTenantInputObjectSchema as EventUncheckedCreateWithoutTenantInputObjectSchema } from './EventUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventUpdateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const EventUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutTenantInput>;
export const EventUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
