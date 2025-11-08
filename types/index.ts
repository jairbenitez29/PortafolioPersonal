export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  client?: string;
  category: 'crud' | 'trending' | 'specialized' | 'all';
  fullDescription?: string;
  images?: string[];
  video?: string;
}

export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools';
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}
