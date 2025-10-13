// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './objects/ActivityUpdateManyMutationInput.schema';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';

export const ActivityUpdateManyAndReturnSchema: z.ZodType<Prisma.ActivityUpdateManyAndReturnArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityUpdateManyAndReturnArgs>;

export const ActivityUpdateManyAndReturnZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict();