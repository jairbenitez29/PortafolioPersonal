'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations('projects');
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  if (!project) return null;

  const handleImageClick = (index: number) => {
    setFullscreenImage(index);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const handlePreviousImage = () => {
    if (fullscreenImage !== null && project.images) {
      setFullscreenImage(fullscreenImage === 0 ? project.images.length - 1 : fullscreenImage - 1);
    }
  };

  const handleNextImage = () => {
    if (fullscreenImage !== null && project.images) {
      setFullscreenImage(fullscreenImage === project.images.length - 1 ? 0 : fullscreenImage + 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="bg-secondary border border-primary/30 rounded-2xl h-full flex flex-col shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Client */}
                {project.client && (
                  <div>
                    <p className="text-sm text-primary/80">
                      {t('card.client')}: {project.client}
                    </p>
                  </div>
                )}

                {/* Full Description */}
                {project.fullDescription && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Descripción</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {t('card.technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Gallery & Video */}
                {((project.images && project.images.length > 0) || project.video) && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {project.video ? 'Galería y Video' : 'Galería'}
                    </h3>
                    <div className="relative">
                      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary/20">
                        {project.images && project.images.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 snap-center"
                          >
                            <div
                              onClick={() => handleImageClick(index)}
                              className="relative w-[400px] h-[250px] md:w-[500px] md:h-[300px] rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all cursor-zoom-in group"
                            >
                              <Image
                                src={image}
                                alt={`${project.title} - Imagen ${index + 1}`}
                                fill
                                sizes="500px"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <svg
                                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {/* Video */}
                        {project.video && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (project.images?.length || 0) * 0.1 }}
                            className="flex-shrink-0 snap-center"
                          >
                            <div className="relative w-[400px] md:w-[500px] rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all">
                              <video
                                controls
                                className="w-full h-auto"
                                preload="metadata"
                              >
                                <source src={project.video} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                              </video>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Fullscreen Image Viewer */}
          <AnimatePresence>
            {fullscreenImage !== null && project.images && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseFullscreen}
                  className="fixed inset-0 bg-black/95 z-[60]"
                />

                {/* Fullscreen Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 z-[61] flex items-center justify-center p-4"
                >
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCloseFullscreen}
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  {/* Previous Button */}
                  {project.images.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePreviousImage}
                      className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </motion.button>
                  )}

                  {/* Next Button */}
                  {project.images.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNextImage}
                      className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  )}

                  {/* Image Counter */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-white text-sm font-medium">
                      {fullscreenImage + 1} / {project.images.length}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-full max-w-7xl max-h-full">
                    <Image
                      src={project.images[fullscreenImage]}
                      alt={`${project.title} - Imagen ${fullscreenImage + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
