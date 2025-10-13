// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeUpdateManyMutationInputObjectSchema as ActivityTypeUpdateManyMutationInputObjectSchema } from './objects/ActivityTypeUpdateManyMutationInput.schema';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';

export const ActivityTypeUpdateManySchema: z.ZodType<Prisma.ActivityTypeUpdateManyArgs> = z.object({ data: ActivityTypeUpdateManyMutationInputObjectSchema, where: ActivityTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeUpdateManyArgs>;

export const ActivityTypeUpdateManyZodSchema = z.object({ data: ActivityTypeUpdateManyMutationInputObjectSchema, where: ActivityTypeWhereInputObjectSchema.optional() }).strict();