// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const ActivityTypeCreateManyInputObjectSchema: z.ZodType<Prisma.ActivityTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCreateManyInput>;
export const ActivityTypeCreateManyInputObjectZodSchema = makeSchema();
