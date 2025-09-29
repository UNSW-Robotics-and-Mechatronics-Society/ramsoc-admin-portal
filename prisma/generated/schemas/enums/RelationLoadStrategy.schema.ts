// @ts-nocheck
/* eslint-disable */

import { z } from 'zod';

export const RelationLoadStrategySchema = z.enum(['query', 'join'])

export type RelationLoadStrategy = z.infer<typeof RelationLoadStrategySchema>;