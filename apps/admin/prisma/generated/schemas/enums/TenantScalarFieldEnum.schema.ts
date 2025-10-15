// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const TenantScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'logo', 'siteUrl', 'description', 'createDate', 'updateDate'])

export type TenantScalarFieldEnum = z.infer<typeof TenantScalarFieldEnumSchema>;