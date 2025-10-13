// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const ActivityTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'description'])

export type ActivityTypeScalarFieldEnum = z.infer<typeof ActivityTypeScalarFieldEnumSchema>;