'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectModal from '@/components/ui/ProjectModal';
import Image from 'next/image';
import type { Project } from '@/types';

export default function Projects() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl">{t('subtitle')}</p>
            <p className="text-foreground/50 text-sm md:text-base mt-3 max-w-3xl mx-auto italic">
              {t('disclaimer')}
            </p>
          </motion.div>

          {/* Projects Horizontal Scroll */}
          <div className="relative">
            <motion.div
              variants={itemVariants}
              className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary/20"
              style={{ scrollbarWidth: 'thin' }}
            >
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => handleProjectClick(project)}
                    className="group flex-shrink-0 w-80 md:w-96 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 snap-center cursor-pointer"
                  >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="400px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Client/Personal */}
                    <div className="text-xs text-primary/80 mb-4">
                      {t('card.client')}: {project.client || t('card.personal')}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="text-xs text-foreground/60 mb-2">{t('card.technologies')}:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Click to view more */}
                    <div className="mt-4 text-center">
                      <span className="text-sm text-primary/70 group-hover:text-primary transition-colors">
                        Click para ver más detalles →
                      </span>
                    </div>
                  </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full text-center py-20"
                >
                  <p className="text-foreground/60 text-lg">{t('empty')}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
