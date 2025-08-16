import { NextRequest, NextResponse } from "next/server";

import { ensureChosenLanguage } from "@/utils/locale";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const acceptLanguage = requestHeaders.get("accept-language");
  const locale = acceptLanguage?.split(",")[0];
  const displayLanguage = ensureChosenLanguage(locale) ?? "en";

  // check if the route already has a language
  if (request.nextUrl.pathname.startsWith(`/${displayLanguage}`)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${displayLanguage}${request.nextUrl.pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/", "/reading/:path*"],
};
