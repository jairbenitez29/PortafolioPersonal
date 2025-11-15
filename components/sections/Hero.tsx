'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { contactInfo } from '@/lib/data';

export default function Hero() {
  const t = useTranslations('hero');

  // Generate particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary text-lg md:text-xl font-medium">
                {t('greeting')}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_3s_ease_infinite]">
                {t('name')}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">
                {t('role')}
              </h2>
              <p className="text-foreground/70 text-lg md:text-xl max-w-2xl lg:max-w-none">
                {t('description')}
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center items-center"
            >
          {/* GitHub */}
          <motion.a
            href={contactInfo.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-secondary/50 backdrop-blur-sm border-2 border-primary/20 rounded-full flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group relative"
          >
            <FaGithub className="w-7 h-7 text-primary group-hover:text-primary-light transition-colors" />
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30 -z-10" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={contactInfo.linkedin || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-secondary/50 backdrop-blur-sm border-2 border-primary/20 rounded-full flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group relative"
          >
            <FaLinkedin className="w-7 h-7 text-primary group-hover:text-primary-light transition-colors" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30 -z-10" />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-secondary/50 backdrop-blur-sm border-2 border-primary/20 rounded-full flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group relative"
          >
            <FaWhatsapp className="w-7 h-7 text-primary group-hover:text-primary-light transition-colors" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30 -z-10" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-secondary/50 backdrop-blur-sm border-2 border-primary/20 rounded-full flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group relative"
          >
            <FaInstagram className="w-7 h-7 text-primary group-hover:text-primary-light transition-colors" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30 -z-10" />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-secondary/50 backdrop-blur-sm border-2 border-primary/20 rounded-full flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group relative"
          >
            <SiGmail className="w-7 h-7 text-primary group-hover:text-primary-light transition-colors" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30 -z-10" />
          </motion.a>
        </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
