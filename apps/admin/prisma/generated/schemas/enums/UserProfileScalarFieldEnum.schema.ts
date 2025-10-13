// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const UserProfileScalarFieldEnumSchema = z.enum(['userId', 'firstName', 'lastName', 'preferredName', 'image', 'gender', 'university', 'studyLevel', 'zID', 'createDate', 'updateDate'])

export type UserProfileScalarFieldEnum = z.infer<typeof UserProfileScalarFieldEnumSchema>;