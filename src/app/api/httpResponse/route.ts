import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = parseInt(searchParams.get("status") || "200", 10);

  // Validate the status code
  if (isNaN(status) || status < 100 || status > 599) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid status code" }),
      { status: 400 }
    );
  }

  const body = await req.json();

  return new NextResponse(JSON.stringify(body), { status });
}


