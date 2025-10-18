import { z } from "zod";

import { protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { createTRPCRouter } from "../trpc";

export const testRouter = createTRPCRouter({
  // Simplest possible procedure to test
  ping: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/test/ping",
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
        path: "/test/hello",
        tags: ["test"],
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

  getSecretMessage: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/test/secret",
        tags: ["test"],
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
