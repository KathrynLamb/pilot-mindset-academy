import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect admin pages & admin APIs
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/admin")
  ) {
    const isAuthed = req.cookies.get("admin-auth")?.value === "true";

    if (!isAuthed) {
      // Redirect UI requests to /admin/login
      if (!pathname.startsWith("/api")) {
        const url = req.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }

      // Block API requests
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
