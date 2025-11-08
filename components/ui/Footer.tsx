'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/20 bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm text-center md:text-left"
          >
            © {currentYear} Jair Benítez. {t('rights')}.
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-foreground/60 text-sm"
          >
            <span>{t('madeWith')}</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <FaHeart className="text-primary" />
            </motion.div>
            <span>{t('by')} Jair</span>
          </motion.div>

          {/* Tech stack badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm text-center md:text-right"
          >
            Built with Next.js & Tailwind CSS
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
