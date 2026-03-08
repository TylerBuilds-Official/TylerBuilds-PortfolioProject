import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project, ProjectTier } from '../../../types';
import { projects } from '../../../data/projects';
import SectionHeader from '../../global/SectionHeader';
import Button from '../../global/Button';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

type FilterOption = 'all' | ProjectTier;

const filterOptions: { value: FilterOption; label: string }[] = [
    { value: 'all',            label: 'All' },
    { value: 'flagship',       label: 'Flagship' },
    { value: 'enterprise',     label: 'Enterprise' },
    { value: 'supporting',     label: 'Supporting' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'utility',        label: 'Utility' },
];

const tierOrder: { tier: ProjectTier; label: string }[] = [
    { tier: 'flagship',       label: 'Flagship Projects' },
    { tier: 'enterprise',     label: 'Enterprise Tools' },
    { tier: 'supporting',     label: 'Supporting Projects' },
    { tier: 'infrastructure', label: 'Infrastructure & Tooling' },
    { tier: 'utility',        label: 'Utilities' },
];

interface ProjectsSectionProps {
    mode?: 'home' | 'full';
}

function ProjectsSection({ mode = 'full' }: ProjectsSectionProps) {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const displayedProjects = useMemo(() => {
        if (mode === 'home') {
            return projects.filter(p => p.category === 'flagship');
        }

        if (activeFilter === 'all') return projects;
        return projects.filter(p => p.category === activeFilter);
    }, [mode, activeFilter]);

    function handleViewDetails(project: Project) {
        setSelectedProject(project);
        setModalOpen(true);
    }

    function handleCloseModal() {
        setModalOpen(false);
    }

    const isHome = mode === 'home';
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!isHome) return;
        const el = sectionRef.current;
        if (!el) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerAt = el.offsetTop - window.innerHeight + 64;

            if (scrollY > triggerAt) {
                const progress = Math.min(scrollY - triggerAt, 182);
                el.style.transform = `translateY(${-progress * 0.27}px)`;
            } else {
                el.style.transform = '';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    return (
        <section
            ref={sectionRef}
            className={`projects-section ${isHome ? 'projects-section--home' : ''}`}
        >
            <div className="container">
                <SectionHeader
                    title={isHome ? 'Featured Projects' : 'Projects'}
                    subtitle={
                        isHome
                            ? 'A selection of flagship projects, from enterprise AI platforms to full-stack business applications.'
                            : 'Everything I\'ve built, from enterprise platforms to standalone utilities.'
                    }
                    center={isHome}
                />

                {/* Filter bar — full page only */}
                {!isHome && (
                    <div className="projects-filter">
                        {filterOptions.map(opt => (
                            <button
                                key={opt.value}
                                className={`projects-filter__btn ${activeFilter === opt.value ? 'projects-filter__btn--active' : ''}`}
                                onClick={() => setActiveFilter(opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Grid */}
                {!isHome && activeFilter === 'all' ? (
                    tierOrder.map(({ tier, label }) => {
                        const tierProjects = displayedProjects.filter(p => p.category === tier);
                        if (tierProjects.length === 0) return null;

                        return (
                            <div key={tier} className={`projects-tier-group projects-tier-group--${tier}`}>
                                <h3 className="projects-tier-group__label">{label}</h3>
                                <div className="projects-grid">
                                    {tierProjects.map((project, i) => (
                                        <ProjectCard
                                            key={project.slug}
                                            project={project}
                                            index={i}
                                            variant="default"
                                            onViewDetails={handleViewDetails}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="projects-grid">
                        {displayedProjects.map((project, i) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={i}
                                variant={isHome ? 'featured' : 'default'}
                                onViewDetails={handleViewDetails}
                            />
                        ))}
                    </div>
                )}

                {/* Homepage CTA */}
                {isHome && (
                    <div className="projects-section__cta">
                        <Button
                            variant="secondary"
                            onClick={() => navigate('/projects')}
                        >
                            View All Projects
                        </Button>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            <ProjectDetailModal
                project={selectedProject}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default ProjectsSection;
