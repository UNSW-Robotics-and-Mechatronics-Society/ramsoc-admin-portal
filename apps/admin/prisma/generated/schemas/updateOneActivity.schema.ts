// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './objects/ActivityInclude.schema';
import { ActivityUpdateInputObjectSchema as ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema';
import { ActivityUncheckedUpdateInputObjectSchema as ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';

export const ActivityUpdateOneSchema: z.ZodType<Prisma.ActivityUpdateArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), data: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema]), where: ActivityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityUpdateArgs>;

export const ActivityUpdateOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), data: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema]), where: ActivityWhereUniqueInputObjectSchema }).strict();