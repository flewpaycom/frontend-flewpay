import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { routing } from './i18n/routing';

// Middleware de internacionalización
const intlMiddleware = createMiddleware(routing);

// Middleware de autenticación
const authMiddleware = withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Excluir rutas públicas (imágenes, assets, etc.)
    if (
      pathname.startsWith('/images') ||
      pathname.startsWith('/assets') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    // Redirección para la ruta raíz a la configuración de localización predeterminada
    if (pathname === '/') {
      const defaultLocale = 'en'; // Idioma predeterminado
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }

    // Verificar si la ruta requiere autenticación
    const isProtectedRoute = ['/en/dashboard/user'].some(path =>
      pathname.startsWith(path)
    );

    // Si es una ruta protegida y no hay sesión, redirigir al login
    if (isProtectedRoute && !req.nextauth.token) {
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/auth`, req.url));
    }

    // Aplicar el middleware de internacionalización
    return intlMiddleware(req);
  },
  {
    callbacks: {
      // Siempre permitir la autorización para evitar bloqueos
      authorized: () => true,
    },
  }
);

// Exportar middleware combinado
export default authMiddleware;

// Configuración del matcher
export const config = {
  matcher: [
    // Incluir todas las rutas relevantes excepto las excluidas explícitamente
    '/((?!api|_next|_vercel|images|assets|favicon.ico|sw.js).*)',
    '/(es|en|pt)/:path*',
  ],
};
