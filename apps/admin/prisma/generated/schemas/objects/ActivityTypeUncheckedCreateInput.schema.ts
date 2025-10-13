// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityUncheckedCreateNestedManyWithoutTypesInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutTypesInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutTypesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutTypesInputObjectSchema)
}).strict();
export const ActivityTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActivityTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUncheckedCreateInput>;
export const ActivityTypeUncheckedCreateInputObjectZodSchema = makeSchema();
