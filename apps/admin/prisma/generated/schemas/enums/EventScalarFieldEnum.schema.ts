// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'title', 'slug', 'coverImageUrl', 'siteUrl', 'description', 'visibility', 'createdById', 'updatedById', 'createDate', 'updateDate'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;