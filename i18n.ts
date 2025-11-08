import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Idiomas soportados
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validar que el locale sea válido
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'es'; // español por defecto
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
