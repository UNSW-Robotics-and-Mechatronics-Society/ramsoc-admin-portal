// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const EventUpsertResultSchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  title: z.string(),
  slug: z.string(),
  coverImageUrl: z.string().optional(),
  siteUrl: z.string().optional(),
  description: z.string().optional(),
  visibility: z.unknown(),
  createdById: z.string(),
  updatedById: z.string().optional(),
  createDate: z.date(),
  updateDate: z.date(),
  tenant: z.unknown(),
  createdBy: z.unknown(),
  updatedBy: z.unknown().optional(),
  activities: z.array(z.unknown())
});