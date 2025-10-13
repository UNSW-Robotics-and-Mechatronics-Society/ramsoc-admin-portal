// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeCreateInputObjectSchema as ActivityTypeCreateInputObjectSchema } from './objects/ActivityTypeCreateInput.schema';
import { ActivityTypeUncheckedCreateInputObjectSchema as ActivityTypeUncheckedCreateInputObjectSchema } from './objects/ActivityTypeUncheckedCreateInput.schema';
import { ActivityTypeUpdateInputObjectSchema as ActivityTypeUpdateInputObjectSchema } from './objects/ActivityTypeUpdateInput.schema';
import { ActivityTypeUncheckedUpdateInputObjectSchema as ActivityTypeUncheckedUpdateInputObjectSchema } from './objects/ActivityTypeUncheckedUpdateInput.schema';

export const ActivityTypeUpsertOneSchema: z.ZodType<Prisma.ActivityTypeUpsertArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema, create: z.union([ ActivityTypeCreateInputObjectSchema, ActivityTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityTypeUpdateInputObjectSchema, ActivityTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActivityTypeUpsertArgs>;

export const ActivityTypeUpsertOneZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema, create: z.union([ ActivityTypeCreateInputObjectSchema, ActivityTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityTypeUpdateInputObjectSchema, ActivityTypeUncheckedUpdateInputObjectSchema ]) }).strict();