'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiPrisma,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiGit,
  SiFlutter,
  SiDart,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbShield } from 'react-icons/tb';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiPrisma,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiGit,
  TbShield,
  SiFlutter,
  SiDart,
  VscCode,
};

export default function TechStack() {
  const t = useTranslations('stack');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = {
    frontend: [
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'HTML', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'Flutter', icon: 'SiFlutter', color: '#02569B' },
      { name: 'Dart', icon: 'SiDart', color: '#0175C2' },
    ],
    backend: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Prisma', icon: 'SiPrisma', color: '#2D3748' },
      { name: 'tRPC', type: 'image', image: '/logos/trpc.png', color: '#2596BE' },
      { name: 'Zod', icon: 'TbShield', color: '#3E67B1' },
      { name: 'PHP', icon: 'SiPhp', color: '#777BB4' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    ],
    database: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    ],
    cloud: [
      { name: 'AWS', icon: 'SiAmazon', color: '#FF9900' },
      { name: 'Hostinger', type: 'image', image: '/logos/hostinger.png.png', color: '#673FBD' },
    ],
    tools: [
      { name: 'Visual Studio Code', icon: 'VscCode', color: '#007ACC' },
      { name: 'n8n', type: 'image', image: '/logos/n8n.png', color: '#EA4B71' },
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
    ],
  };

  const categories = ['frontend', 'backend', 'database', 'cloud', 'tools'] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="stack"
      ref={ref}
      className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Technologies by category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category} variants={categoryVariants}>
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center md:text-left">
                  {t(`categories.${category}`)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {technologies[category].map((tech: any, index) => {
                    const IconComponent = tech.icon ? iconMap[tech.icon] : null;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0 } : { opacity: 0, scale: 0.8, rotateZ: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          y: -5,
                        }}
                        className="group relative bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex flex-col items-center gap-3">
                          {tech.type === 'image' ? (
                            <div className="relative w-12 h-12">
                              <Image
                                src={tech.image}
                                alt={tech.name}
                                fill
                                sizes="48px"
                                className="object-contain transition-all duration-300"
                              />
                            </div>
                          ) : IconComponent ? (
                            <IconComponent
                              className="w-12 h-12 transition-colors duration-300"
                              style={{ color: tech.color }}
                            />
                          ) : null}
                          <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors text-center">
                            {tech.name}
                          </span>
                        </div>

                        {/* Hover glow effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                          style={{
                            background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)`,
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
