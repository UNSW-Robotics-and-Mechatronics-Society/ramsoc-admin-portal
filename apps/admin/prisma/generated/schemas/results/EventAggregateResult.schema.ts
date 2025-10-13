// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const EventAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    title: z.number(),
    slug: z.number(),
    coverImageUrl: z.number(),
    siteUrl: z.number(),
    description: z.number(),
    visibility: z.number(),
    createdById: z.number(),
    updatedById: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    tenant: z.number(),
    createdBy: z.number(),
    updatedBy: z.number(),
    activities: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    title: z.string().nullable(),
    slug: z.string().nullable(),
    coverImageUrl: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    title: z.string().nullable(),
    slug: z.string().nullable(),
    coverImageUrl: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional()});