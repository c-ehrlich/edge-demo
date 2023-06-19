import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// us-west-1, see https://vercel.com/docs/concepts/edge-network/regions
export const preferredRegion = "global";

export async function GET(request: Request) {
  return NextResponse.json({ foo: "bar" });
}
