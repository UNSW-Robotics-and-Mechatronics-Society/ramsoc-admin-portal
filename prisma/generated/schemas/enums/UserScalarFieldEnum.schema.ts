// @ts-nocheck
/* eslint-disable */

import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;