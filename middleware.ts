// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Only protect admin pages & admin APIs
//   if (
//     pathname.startsWith("/admin") ||
//     pathname.startsWith("/api/admin")
//   ) {
//     const isAuthed = req.cookies.get("admin-auth")?.value === "true";

//     if (!isAuthed) {
//       // Redirect UI requests to /admin/login
//       if (!pathname.startsWith("/api")) {
//         const url = req.nextUrl.clone();
//         url.pathname = "/admin/login";
//         return NextResponse.redirect(url);
//       }

//       // Block API requests
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/api/admin/:path*"],
// };


// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is accessing the admin area
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Allow access to the login page specifically
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for the auth cookie
    const token = request.cookies.get('admin_token');

    // If no token, kick them to login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};