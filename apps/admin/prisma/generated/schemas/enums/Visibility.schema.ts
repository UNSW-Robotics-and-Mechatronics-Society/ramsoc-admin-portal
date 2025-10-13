// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const VisibilitySchema = z.enum(['PUBLIC', 'PRIVATE'])

export type Visibility = z.infer<typeof VisibilitySchema>;