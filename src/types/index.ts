/* ========================================
   Types — Shared TypeScript Interfaces
   ======================================== */

export type ProjectTier = 'flagship' | 'enterprise' | 'supporting' | 'infrastructure' | 'utility';

export interface ProjectMetric {
    label: string;
    value: string;
    isPlaceholder: boolean;
}

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    category: ProjectTier;
    techStack: string[];
    problem: string;
    solution: string;
    impact: string;
    highlights: string[];
    metrics?: ProjectMetric[];
    hasDetailPage: boolean;
    githubUrl?: string;            // FIXME: audit repos — add links for public, remove for private
    image?: string;
}

export interface TechCategory {
    name: string;
    items: string[];
}

export interface ExperienceInitiative {
    title: string;
    description: string;
    techStack: string[];
    highlights: string[];
}

export interface ExperienceGroup {
    company: string;
    role: string;
    description: string;
    initiatives: ExperienceInitiative[];
}

export type ThemeName = 'dark' | 'light' | 'midnight' | 'terminal' | 'paper';
