// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';

export const ActivityDeleteManySchema: z.ZodType<Prisma.ActivityDeleteManyArgs> = z.object({ where: ActivityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityDeleteManyArgs>;

export const ActivityDeleteManyZodSchema = z.object({ where: ActivityWhereInputObjectSchema.optional() }).strict();