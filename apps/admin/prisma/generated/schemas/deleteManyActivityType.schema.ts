// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';

export const ActivityTypeDeleteManySchema: z.ZodType<Prisma.ActivityTypeDeleteManyArgs> = z.object({ where: ActivityTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeDeleteManyArgs>;

export const ActivityTypeDeleteManyZodSchema = z.object({ where: ActivityTypeWhereInputObjectSchema.optional() }).strict();