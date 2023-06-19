import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const preferredRegion = ["sfo1"];

export async function GET(request: Request) {
  return NextResponse.json({ foo: "bar" });
}
