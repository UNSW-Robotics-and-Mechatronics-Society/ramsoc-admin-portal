import { auth } from "@/server/auth";
import { AuthorizationService } from "@/server/auth/permissions";
import { db } from "@/server/db";
import { setRLSContext } from "./rls";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await auth();

  await setRLSContext(session?.user?.id ?? null);

  return {
    db,
    session,
    auth: new AuthorizationService(session),
    ...opts,
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;
