import { NextApiRequest } from "next";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request: NextApiRequest) {
  draftMode().enable();
  return NextResponse.redirect(new URL("/", request.url));
}
