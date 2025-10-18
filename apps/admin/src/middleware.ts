import { NextRequest, NextResponse } from "next/server";

const API_WHITELIST = [
  /^\/api(\/|$)/, // all Next.js API routes (including /api/trpc, /api/auth, etc.)
  /^\/openapi\.json$/, // if you expose OpenAPI
  /^\/docs(\/|$)/, // optional swagger docs
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // api.* — allow only API paths / docs
  const allowed = API_WHITELIST.some((re) => re.test(pathname));
  if (allowed) {
    // Optionally attach CORS for api host
    const res = NextResponse.next();
    const origin = req.headers.get("origin") ?? "";
    const allowedOrigins = [
      "https://app.ramsocunsw.org",
      "https://admin.ramsocunsw.org",
      /\.vercel\.app$/, // previews
    ];
    const ok =
      allowedOrigins.some((o) =>
        typeof o === "string" ? o === origin : o.test(origin)
      ) || origin === "";

    if (ok) {
      res.headers.set("Access-Control-Allow-Origin", origin || "*");
      res.headers.set("Access-Control-Allow-Credentials", "true");
      res.headers.set(
        "Access-Control-Allow-Headers",
        "content-type, authorization"
      );
      res.headers.set(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
      );
    }
    return res;
  }

  // Block non-API routes on api.* (404 or redirect)
  return new NextResponse("Not Found", { status: 404 });
}

export const config = {
  // Run middleware for all paths; we’ll filter inside
  matcher: ["/:path*"],
};
