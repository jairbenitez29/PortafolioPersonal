'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {t('experience')}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('bio')}
              </p>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Pasión
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('passion')}
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3 font-medium italic">
                {t('motto')}
              </p>
            </div>
          </motion.div>

          {/* Stats or highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '10+', label: 'Tecnologías' },
              { number: '7+', label: 'Proyectos' },
              { number: '100%', label: 'Dedicación' },
              { number: '24/7', label: 'Disponible' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-secondary/30 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
