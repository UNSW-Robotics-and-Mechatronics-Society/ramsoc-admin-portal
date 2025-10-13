// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const ActivityTypeCreateWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.ActivityTypeCreateWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCreateWithoutActivitiesInput>;
export const ActivityTypeCreateWithoutActivitiesInputObjectZodSchema = makeSchema();
