import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // Lista de locales soportados
  locales,

  // Locale por defecto
  defaultLocale: 'es',

  // Mostrar el locale en la URL siempre
  localePrefix: 'always'
});

export const config = {
  // Matcher ignorando archivos internos de Next.js
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
