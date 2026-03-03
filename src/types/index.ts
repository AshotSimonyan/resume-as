export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'codepen';
}

export interface Skill {
  name: string;
  logoUrl: string;
  invert?: boolean;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  tabLabel: string;
  title: string;
  date: string;
  bullets: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tags: string[];
  icon: 'scope' | 'design' | 'build' | 'mentor' | 'demo' | 'ship';
}

export interface FeaturedProject {
  number: string;
  company: string;
  year: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface OtherProject {
  name: string;
  builtAt: string;
  stack: string;
  url: string;
}

export interface ContactCard {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'phone' | 'linkedin';
  external?: boolean;
}

export interface SiteData {
  name: string;
  role: string;
  headline: string;
  heroDescription: string;
  resumeUrl: string;
  email: string;
  profileImage: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  aboutParagraphs: string[];
  skills: Skill[];
  experiences: ExperienceItem[];
  processSteps: ProcessStep[];
  featuredProjects: FeaturedProject[];
  otherProjects: OtherProject[];
  contactCards: ContactCard[];
}
