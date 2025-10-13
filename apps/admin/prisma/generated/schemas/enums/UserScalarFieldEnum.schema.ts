// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createDate', 'updateDate'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;