import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { routing } from './i18n/routing';

// Combine both middlewares
const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    if (
      pathname.startsWith('/images') ||
      pathname.startsWith('/assets') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    // Redirect root paths without a locale
    const isRootPath = pathname === '/';
    if (isRootPath) {
      const defaultLocale = "en";
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }

    const response = intlMiddleware(req);

    const isProtectedRoute = ['/dashboard'].some(path =>
      pathname.startsWith(path)
    );

    if (isProtectedRoute && !req.nextauth.token) {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/auth`, req.url));
    }

    return response;
  },
  {
    callbacks: {
      authorized: () => true
    }
  }
);
export default authMiddleware;
export const config = {
  matcher: [
    '/((?!api|_next|_vercel|images|assets|favicon.ico|sw.js).*)',
    '/(es|en|pt)/:path*'
  ]
};