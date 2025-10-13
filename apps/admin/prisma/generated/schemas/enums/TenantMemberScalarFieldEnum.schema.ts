// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const TenantMemberScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'userId', 'type', 'isActive', 'createDate', 'updateDate'])

export type TenantMemberScalarFieldEnum = z.infer<typeof TenantMemberScalarFieldEnumSchema>;