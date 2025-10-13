// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryModeSchema>;