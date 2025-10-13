// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const ActivityScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'eventId', 'title', 'description', 'visibility', 'createDate', 'updateDate', 'createdById', 'updatedById'])

export type ActivityScalarFieldEnum = z.infer<typeof ActivityScalarFieldEnumSchema>;