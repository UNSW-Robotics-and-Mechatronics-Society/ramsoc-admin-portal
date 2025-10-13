// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const UserProfileGroupByResultSchema = z.array(z.object({
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  preferredName: z.string(),
  image: z.string(),
  gender: z.string(),
  university: z.string(),
  studyLevel: z.string(),
  zID: z.string(),
  createDate: z.date(),
  updateDate: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));