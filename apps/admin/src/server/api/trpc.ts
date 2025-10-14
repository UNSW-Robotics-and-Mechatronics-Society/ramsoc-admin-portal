/**
 * YOU LIKELY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */

import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { OpenApiMeta } from "trpc-to-openapi";
import z, { ZodError } from "zod";

import { auth } from "@/server/auth";
import { AuthorizationService, Permission } from "@/server/auth/permissions";
import { db } from "@/server/db";

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

/**
 * Set the current user context for RLS
 */
export async function setRLSContext(userId: string | null) {
  try {
    if (userId) {
      const sanitizedUserId = userId.replace(/'/g, "''");
      await db.$executeRawUnsafe(
        `SET app.current_user_id = '${sanitizedUserId}'`
      );
    } else {
      // Clear the context
      await db.$executeRawUnsafe(`SET app.current_user_id = ''`);
    }
  } catch (error) {
    // If RLS is not set up, just continue without setting context
    console.warn(
      "RLS context setting failed (this is expected if RLS is not yet configured):",
      error
    );
  }
}

/**
 * Reset RLS context (useful for system operations)
 */
export async function resetRLSContext() {
  await db.$executeRawUnsafe(`RESET app.current_user_id`);
}

/**
 * Execute a function with system privileges (bypasses RLS)
 */
export async function withSystemPrivileges<T>(
  fn: () => Promise<T>
): Promise<T> {
  const currentUserId = await db.$queryRaw<[{ current_setting: string }]>`
    SELECT current_setting('app.current_user_id', true) as current_setting
  `;

  try {
    await resetRLSContext();
    return await fn();
  } finally {
    // Restore previous context
    if (
      currentUserId[0]?.current_setting &&
      currentUserId[0].current_setting !== ""
    ) {
      await setRLSContext(currentUserId[0].current_setting);
    }
  }
}

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC
  .meta<OpenApiMeta>()
  .context<typeof createTRPCContext>()
  .create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure.use(timingMiddleware);

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure
  .use(timingMiddleware)
  .use(({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        // infers the `session` as non-nullable
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  });

/**
 * Tenant-aware procedure factory
 *
 * Creates procedures that require a tenantId and validate tenant access.
 */
export const tenantProcedure = protectedProcedure
  .input(
    z.object({
      tenantId: z.cuid(),
    })
  )
  .use(async ({ ctx, next, input }) => {
    const tenantId = input?.tenantId;
    if (!tenantId || typeof tenantId !== "string") {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "tenantId is required",
      });
    }

    // Verify user has access to this tenant
    const isMember = await ctx.auth.isMember(tenantId);
    if (!isMember) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Access denied to this tenant",
      });
    }

    return next({
      ctx: {
        ...ctx,
        tenantId,
      },
    });
  });

/**
 * Admin procedure factory
 *
 * Creates procedures that require admin role in a specific tenant.
 */
export const tenantAdminProcedure = protectedProcedure
  .input(
    z.object({
      tenantId: z.cuid(),
    })
  )
  .use(async ({ ctx, next, input }) => {
    const tenantId = input?.tenantId;
    if (!tenantId || typeof tenantId !== "string") {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "tenantId is required",
      });
    }

    await ctx.auth.requireAdmin(tenantId);

    return next({
      ctx: {
        ...ctx,
        tenantId,
      },
    });
  });

/**
 * Permission-based procedure factory
 *
 * Creates procedures that require specific permissions in a tenant.
 */
export const createPermissionProcedure = (permissions: Permission[]) => {
  return protectedProcedure
    .input(
      z.object({
        tenantId: z.cuid(),
      })
    )
    .use(async ({ ctx, next, input }) => {
      const tenantId = input?.tenantId;
      if (!tenantId || typeof tenantId !== "string") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "tenantId is required",
        });
      }

      await ctx.auth.requirePermissions(tenantId, permissions);

      return next({
        ctx: {
          ...ctx,
          tenantId,
        },
      });
    });
};
