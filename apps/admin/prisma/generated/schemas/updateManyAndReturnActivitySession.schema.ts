// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionUpdateManyMutationInputObjectSchema as ActivitySessionUpdateManyMutationInputObjectSchema } from './objects/ActivitySessionUpdateManyMutationInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';

export const ActivitySessionUpdateManyAndReturnSchema: z.ZodType<Prisma.ActivitySessionUpdateManyAndReturnArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), data: ActivitySessionUpdateManyMutationInputObjectSchema, where: ActivitySessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyAndReturnArgs>;

export const ActivitySessionUpdateManyAndReturnZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), data: ActivitySessionUpdateManyMutationInputObjectSchema, where: ActivitySessionWhereInputObjectSchema.optional() }).strict();