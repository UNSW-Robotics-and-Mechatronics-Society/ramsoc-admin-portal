// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeUpdateManyMutationInputObjectSchema as ActivityTypeUpdateManyMutationInputObjectSchema } from './objects/ActivityTypeUpdateManyMutationInput.schema';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';

export const ActivityTypeUpdateManyAndReturnSchema: z.ZodType<Prisma.ActivityTypeUpdateManyAndReturnArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), data: ActivityTypeUpdateManyMutationInputObjectSchema, where: ActivityTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeUpdateManyAndReturnArgs>;

export const ActivityTypeUpdateManyAndReturnZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), data: ActivityTypeUpdateManyMutationInputObjectSchema, where: ActivityTypeWhereInputObjectSchema.optional() }).strict();