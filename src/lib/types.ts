export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}
