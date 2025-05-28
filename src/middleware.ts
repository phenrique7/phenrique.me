import { NextRequest, NextResponse } from "next/server";
import { ensureChosenLanguage } from "@/utils/locale";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const acceptLanguage = requestHeaders.get("accept-language");
  const locale = acceptLanguage?.split(",")[0];
  const displayLanguage = ensureChosenLanguage(locale) ?? "en";

  request.nextUrl.pathname = `/${displayLanguage}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // only run on root (/) URL
    "/",
  ],
};
