import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    method: "GET",
    count: 1,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    method: "POST",
    count: 1,
  });
}
