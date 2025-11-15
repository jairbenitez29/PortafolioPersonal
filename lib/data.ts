import { ContactInfo, TechStack, Project } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'jairbenitez29@gmail.com',
  whatsapp: '+573135399868',
  instagram: 'https://www.instagram.com/jairbenitez13?igsh=MXFxY3RmM21zbmwzOQ==',
  github: 'https://github.com/jairbenitez29',
  linkedin: 'https://linkedin.com/in/jair-benitez-71522a37a',
};

export const techStack: TechStack[] = [
  // Frontend
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend' },
  { name: 'React', icon: 'SiReact', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'HTML', icon: 'SiHtml5', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend' },
  { name: 'tRPC', icon: 'SiTrpc', category: 'backend' },
  { name: 'Prisma', icon: 'SiPrisma', category: 'backend' },
  { name: 'Zod', icon: 'SiZod', category: 'backend' },
  { name: 'PHP', icon: 'SiPhp', category: 'backend' },
  { name: 'Python', icon: 'SiPython', category: 'backend' },

  // Databases
  { name: 'MySQL', icon: 'SiMysql', category: 'database' },

  // Cloud & Hosting
  { name: 'AWS', icon: 'SiAmazonaws', category: 'cloud' },
  { name: 'Hostinger', icon: 'SiHostinger', category: 'cloud' },

  // Tools
  { name: 'n8n', icon: 'SiN8n', category: 'tools' },
  { name: 'Git', icon: 'SiGit', category: 'tools' },
];

// Proyectos - Agrega tus proyectos aquí
export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Educación Educadia',
    description: 'Plataforma integral para la gestión y aplicación de exámenes escolares con sistema de retroalimentación automatizada.',
    image: '/proyectosdestacados/sistemaeducadia/educadia1.png',
    technologies: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Prisma', 'tRPC', 'Tailwind CSS', 'Zod', 'MySQL'],
    category: 'specialized',
    client: 'Educadia',
    fullDescription: 'Sistema robusto diseñado para la administración y aplicación de evaluaciones académicas en instituciones educativas. Implementa autenticación de múltiples roles, panel administrativo completo para la gestión de exámenes, asignación masiva de evaluaciones, seguimiento individual de resultados por estudiante, retroalimentación inmediata de respuestas correctas e incorrectas, y generación de reportes detallados exportables a Excel con filtros personalizables por escuela y grado académico.',
    images: [
      '/proyectosdestacados/sistemaeducadia/educadia1.png',
      '/proyectosdestacados/sistemaeducadia/educadia2.png',
      '/proyectosdestacados/sistemaeducadia/educadia3.png',
      '/proyectosdestacados/sistemaeducadia/educadia4.png',
      '/proyectosdestacados/sistemaeducadia/educadia5.png',
      '/proyectosdestacados/sistemaeducadia/educadia6.png',
      '/proyectosdestacados/sistemaeducadia/educadia7.png',
    ],
  },
  {
    id: '2',
    title: 'Sistema de Seguimiento por °C',
    description: 'Plataforma de monitoreo en tiempo real de temperatura para refrigeradores clínicos con visualización de datos y generación de reportes.',
    image: '/proyectosdestacados/SistemaTemp/Temp1.png',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'Chart.js', 'MySQL', 'JWT', 'PDFKit'],
    category: 'specialized',
    client: 'Clínica local',
    fullDescription: 'Sistema especializado de monitoreo térmico para refrigeradores clínicos que garantiza el control riguroso de las condiciones de almacenamiento. La plataforma implementa autenticación segura mediante JWT, gestión diferenciada de roles (administrador y operario), asignación dinámica de equipos a operadores, visualización en tiempo real mediante ploteo automático de datos, dashboard administrativo para supervisión integral, y generación de reportes en PDF con filtros avanzados por refrigerador, mes y año para auditorías y cumplimiento normativo.',
    images: [
      '/proyectosdestacados/SistemaTemp/Temp1.png',
      '/proyectosdestacados/SistemaTemp/Temp2.png',
      '/proyectosdestacados/SistemaTemp/Temp3.png',
      '/proyectosdestacados/SistemaTemp/Temp4.png',
      '/proyectosdestacados/SistemaTemp/Temp5.png',
      '/proyectosdestacados/SistemaTemp/Temp6.png',
      '/proyectosdestacados/SistemaTemp/Temp7.png',
      '/proyectosdestacados/SistemaTemp/Temp8.png',
      '/proyectosdestacados/SistemaTemp/Temp9.png',
    ],
    video: '/proyectosdestacados/SistemaTemp/SistemTemp.mp4',
  },
];
