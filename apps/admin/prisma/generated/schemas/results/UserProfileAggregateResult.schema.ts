// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserProfileAggregateResultSchema = z.object({  _count: z.object({
    userId: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    preferredName: z.number(),
    image: z.number(),
    gender: z.number(),
    university: z.number(),
    studyLevel: z.number(),
    zID: z.number(),
    createDate: z.number(),
    updateDate: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    userId: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    preferredName: z.string().nullable(),
    image: z.string().nullable(),
    gender: z.string().nullable(),
    university: z.string().nullable(),
    studyLevel: z.string().nullable(),
    zID: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    preferredName: z.string().nullable(),
    image: z.string().nullable(),
    gender: z.string().nullable(),
    university: z.string().nullable(),
    studyLevel: z.string().nullable(),
    zID: z.string().nullable(),
    createDate: z.date().nullable(),
    updateDate: z.date().nullable()
  }).nullable().optional()});