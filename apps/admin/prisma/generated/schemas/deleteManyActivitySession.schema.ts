// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';

export const ActivitySessionDeleteManySchema: z.ZodType<Prisma.ActivitySessionDeleteManyArgs> = z.object({ where: ActivitySessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionDeleteManyArgs>;

export const ActivitySessionDeleteManyZodSchema = z.object({ where: ActivitySessionWhereInputObjectSchema.optional() }).strict();