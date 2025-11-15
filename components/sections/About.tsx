'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Profile Photo Centered */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-20"
          >
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 rounded-full blur-2xl opacity-60" />

              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30"
              >
                <Image
                  src="/profile/jairporfolio-removebg-preview.png"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Info Cards - Below Photo */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
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

            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
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

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { number: '10+', label: 'Tecnologías' },
              { number: '7+', label: 'Proyectos' },
              { number: '100%', label: 'Dedicación' },
              { number: '24/7', label: 'Disponible' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
