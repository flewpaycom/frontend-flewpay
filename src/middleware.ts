import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { routing } from './i18n/routing';

// Combine both middlewares
const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
  function middleware(req) {
    // First run the i18n middleware
    const response = intlMiddleware(req);

    // Check protected routes
    const isProtectedRoute = ['/dashboard', '/profile'].some(
      path => req.nextUrl.pathname.includes(path)
    );

    if (isProtectedRoute && !req.nextauth.token) {
      const locale = req.nextUrl.pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/auth`, req.url));
    }

    return response;
  },
  {
    callbacks: {
      authorized: () => true // We handle authorization in the middleware function
    }
  }
);

export default authMiddleware;

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /static (public files)
    // '/((?!api|_next|_vercel|static|favicon.ico).*)',
    // Match all internationalized routes
    '/(es|en|pt)/:path*'
  ]
};