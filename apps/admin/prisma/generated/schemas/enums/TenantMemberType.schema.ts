// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const TenantMemberTypeSchema = z.enum(['ADMIN', 'MEMBER', 'MACHINE'])

export type TenantMemberType = z.infer<typeof TenantMemberTypeSchema>;