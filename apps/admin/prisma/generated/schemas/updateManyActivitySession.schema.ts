// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionUpdateManyMutationInputObjectSchema as ActivitySessionUpdateManyMutationInputObjectSchema } from './objects/ActivitySessionUpdateManyMutationInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';

export const ActivitySessionUpdateManySchema: z.ZodType<Prisma.ActivitySessionUpdateManyArgs> = z.object({ data: ActivitySessionUpdateManyMutationInputObjectSchema, where: ActivitySessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyArgs>;

export const ActivitySessionUpdateManyZodSchema = z.object({ data: ActivitySessionUpdateManyMutationInputObjectSchema, where: ActivitySessionWhereInputObjectSchema.optional() }).strict();