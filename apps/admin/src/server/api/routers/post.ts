import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  // Simplest possible procedure to test
  ping: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/ping",
        tags: ["test"],
        summary: "Simple ping",
        description: "Returns pong",
      },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .query(() => {
      return { message: "pong" };
    }),

  hello: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/post/hello",
        tags: ["post"],
        summary: "Get hello message",
        description: "Returns a greeting message with the provided text",
      },
    })
    .input(
      z.object({
        text: z
          .string()
          .optional()
          .describe("The text to include in the greeting"),
      })
    )
    .output(z.object({ greeting: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text || "World"}`,
      };
    }),

  // Simple health check endpoint without authentication
  health: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/post/health",
        tags: ["post"],
        summary: "Health check",
        description: "Simple health check endpoint",
      },
    })
    .input(z.void())
    .output(
      z.object({
        status: z.string(),
        timestamp: z.string(),
      })
    )
    .query(() => {
      return {
        status: "ok",
        timestamp: new Date().toISOString(),
      };
    }),

  create: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/post/create",
        tags: ["post"],
        summary: "Create a new post",
        description: "Creates a new post for the authenticated user",
        protect: true,
      },
    })
    .input(
      z.object({ name: z.string().min(1).describe("The name of the post") })
    )
    .output(
      z.object({
        id: z.number(),
        name: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        createdById: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/post/latest",
        tags: ["post"],
        summary: "Get latest post",
        protect: true,
        description:
          "Returns the latest post created by the authenticated user",
      },
    })
    .input(z.void())
    .output(
      z
        .object({
          id: z.number(),
          name: z.string(),
          createdAt: z.date(),
          updatedAt: z.date(),
          createdById: z.string(),
        })
        .nullable()
    )
    .query(async ({ ctx }) => {
      const post = await ctx.db.post.findFirst({
        orderBy: { createdAt: "desc" },
        where: { createdBy: { id: ctx.session.user.id } },
      });

      return post ?? null;
    }),

  getSecretMessage: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/post/secret",
        tags: ["post"],
        protect: true,
        summary: "Get secret message",
        description: "Returns a secret message for authenticated users",
      },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .query(() => {
      return { message: "you can now see this secret message!" };
    }),
});
