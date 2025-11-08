'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactInfo } from '@/lib/data';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Construir mensaje para WhatsApp
      const mensaje = `*Mensaje desde portafolio web*\n\n*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Mensaje:*\n${data.message}`;

      // Obtener número de WhatsApp sin caracteres especiales
      const numeroWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, '');

      // Crear URL de WhatsApp con mensaje pre-llenado
      const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      // Abrir WhatsApp en nueva pestaña
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl mb-2">{t('subtitle')}</p>
            <p className="text-foreground/70 max-w-2xl mx-auto">{t('description')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">{t('info.email')}</h3>
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/60 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FaEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-medium text-foreground">{contactInfo.email}</p>
                  </div>
                </motion.a>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">{t('info.whatsapp')}</h3>
                <motion.a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/60 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FaWhatsapp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">WhatsApp</p>
                    <p className="font-medium text-foreground">{contactInfo.whatsapp}</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Media - Espacio para agregar más adelante */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">{t('info.social')}</h3>
                <div className="flex gap-4">
                  {contactInfo.github && (
                    <motion.a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                    >
                      <FaGithub className="w-6 h-6 text-primary" />
                    </motion.a>
                  )}
                  {contactInfo.linkedin && (
                    <motion.a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                    >
                      <FaLinkedin className="w-6 h-6 text-primary" />
                    </motion.a>
                  )}
                  {contactInfo.twitter && (
                    <motion.a
                      href={contactInfo.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                    >
                      <FaTwitter className="w-6 h-6 text-primary" />
                    </motion.a>
                  )}
                  {contactInfo.instagram && (
                    <motion.a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                    >
                      <FaInstagram className="w-6 h-6 text-primary" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                    placeholder="Tu mensaje..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('form.sending') : t('form.send')}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    {t('form.success')}
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    {t('form.error')}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
