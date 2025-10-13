// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const SessionCodeTypeSchema = z.enum(['NONE', 'STATIC', 'GENERATED'])

export type SessionCodeType = z.infer<typeof SessionCodeTypeSchema>;