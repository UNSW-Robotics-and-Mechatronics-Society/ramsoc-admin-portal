// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateNestedManyWithoutTypesInputObjectSchema as ActivityCreateNestedManyWithoutTypesInputObjectSchema } from './ActivityCreateNestedManyWithoutTypesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  activities: z.lazy(() => ActivityCreateNestedManyWithoutTypesInputObjectSchema)
}).strict();
export const ActivityTypeCreateInputObjectSchema: z.ZodType<Prisma.ActivityTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCreateInput>;
export const ActivityTypeCreateInputObjectZodSchema = makeSchema();
