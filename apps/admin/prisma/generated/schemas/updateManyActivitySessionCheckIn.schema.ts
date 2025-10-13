// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInUpdateManyMutationInputObjectSchema as ActivitySessionCheckInUpdateManyMutationInputObjectSchema } from './objects/ActivitySessionCheckInUpdateManyMutationInput.schema';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';

export const ActivitySessionCheckInUpdateManySchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateManyArgs> = z.object({ data: ActivitySessionCheckInUpdateManyMutationInputObjectSchema, where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateManyArgs>;

export const ActivitySessionCheckInUpdateManyZodSchema = z.object({ data: ActivitySessionCheckInUpdateManyMutationInputObjectSchema, where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict();