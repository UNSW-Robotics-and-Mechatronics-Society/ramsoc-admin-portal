// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInUpdateManyMutationInputObjectSchema as ActivitySessionCheckInUpdateManyMutationInputObjectSchema } from './objects/ActivitySessionCheckInUpdateManyMutationInput.schema';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';

export const ActivitySessionCheckInUpdateManyAndReturnSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateManyAndReturnArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), data: ActivitySessionCheckInUpdateManyMutationInputObjectSchema, where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateManyAndReturnArgs>;

export const ActivitySessionCheckInUpdateManyAndReturnZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), data: ActivitySessionCheckInUpdateManyMutationInputObjectSchema, where: ActivitySessionCheckInWhereInputObjectSchema.optional() }).strict();