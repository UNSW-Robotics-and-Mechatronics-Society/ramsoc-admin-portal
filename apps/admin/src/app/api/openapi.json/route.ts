import { openApiDocument } from "@/server/open-api";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(openApiDocument);
};
