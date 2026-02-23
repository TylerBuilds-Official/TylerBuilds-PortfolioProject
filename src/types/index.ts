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
    image?: string;
}

export interface TechCategory {
    name: string;
    items: string[];
}

export interface ExperienceEntry {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
}

export type ThemeName = 'dark' | 'light' | 'midnight' | 'terminal' | 'paper';
