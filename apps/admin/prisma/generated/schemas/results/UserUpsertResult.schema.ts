import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  posts: z.array(z.unknown())
});