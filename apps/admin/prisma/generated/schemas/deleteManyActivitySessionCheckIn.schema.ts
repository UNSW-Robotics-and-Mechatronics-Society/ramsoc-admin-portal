// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';

export const ActivitySessionCheckInDeleteManySchema: z.ZodType<Prisma.ActivitySessionCheckInDeleteManyArgs> = z.object({ where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInDeleteManyArgs>;

export const ActivitySessionCheckInDeleteManyZodSchema = z.object({ where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict();