'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Reemplazar el locale en la URL
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-primary/20 hover:border-primary transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium uppercase">{locale}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 right-0 bg-secondary border border-primary/20 rounded-lg overflow-hidden shadow-xl z-50"
        >
          <button
            onClick={() => switchLanguage('es')}
            className={`block w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors ${
              locale === 'es' ? 'bg-primary/20 text-primary' : ''
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={`block w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors ${
              locale === 'en' ? 'bg-primary/20 text-primary' : ''
            }`}
          >
            🇺🇸 English
          </button>
        </motion.div>
      )}
    </div>
  );
}
