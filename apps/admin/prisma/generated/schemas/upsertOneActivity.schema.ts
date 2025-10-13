// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './objects/ActivityInclude.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityCreateInputObjectSchema as ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema';
import { ActivityUncheckedCreateInputObjectSchema as ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema';
import { ActivityUpdateInputObjectSchema as ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema';
import { ActivityUncheckedUpdateInputObjectSchema as ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema';

export const ActivityUpsertOneSchema: z.ZodType<Prisma.ActivityUpsertArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), where: ActivityWhereUniqueInputObjectSchema, create: z.union([ ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActivityUpsertArgs>;

export const ActivityUpsertOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), where: ActivityWhereUniqueInputObjectSchema, create: z.union([ ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema ]) }).strict();