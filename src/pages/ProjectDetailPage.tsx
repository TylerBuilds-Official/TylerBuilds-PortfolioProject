import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectImages } from '../data/projectImages';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getTechIconClass } from '../utils/techIcons';
import Tag from '../components/global/Tag';
import Button from '../components/global/Button';
import { renderInlineMarkdown } from '../utils/inlineMarkdown';
import ProjectImageGallery from '../components/private/projects/ProjectImageGallery';

const githubIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const backIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const project = projects.find(p => p.slug === slug && p.hasDetailPage);

    useDocumentTitle(project?.title);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }
    const hasScreenshots = getProjectImages(project).length > 0;

    return (
        <div className="project-detail-page">
            <div className="container">

                {/* Hero */}
                <div className="project-detail-hero">
                    <button
                        className="project-detail-hero__back"
                        onClick={() => navigate('/projects')}
                    >
                        {backIcon}
                        Back to Projects
                    </button>

                    <div className="project-detail-hero__tags">
                        <Tag variant="category">{project.category}</Tag>
                        {project.techStack.map(tech => (
                            <Tag key={tech} iconClass={getTechIconClass(tech)}>{tech}</Tag>
                        ))}
                    </div>

                    <h1 className="project-detail-hero__title">{project.title}</h1>
                    <p className="project-detail-hero__tagline">{project.tagline}</p>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="project-detail-metrics">
                        {project.metrics.map(metric => (
                            <div
                                key={metric.label}
                                className={`project-detail-metrics__item ${metric.isPlaceholder ? 'project-detail-metrics__item--placeholder' : ''}`}
                            >
                                <div className="project-detail-metrics__value">{metric.value}</div>
                                <div className="project-detail-metrics__label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content */}
                <div className="project-detail-content">
                    {hasScreenshots && (
                        <div className="project-detail-content__section">
                            <p className="project-detail-content__label">Screenshots</p>
                            <ProjectImageGallery project={project} />
                        </div>
                    )}

                    <div className="project-detail-content__section">
                        <div className="project-detail-content__card">
                            <p className="project-detail-content__label">Problem</p>
                            <p className="project-detail-content__text">{renderInlineMarkdown(project.problem)}</p>
                        </div>
                    </div>

                    <div className="project-detail-content__section">
                        <div className="project-detail-content__card">
                            <p className="project-detail-content__label">Solution</p>
                            <p className="project-detail-content__text">{renderInlineMarkdown(project.solution)}</p>
                        </div>
                    </div>

                    <div className="project-detail-content__section">
                        <div className="project-detail-content__card project-detail-content__card--impact">
                            <p className="project-detail-content__label">Impact</p>
                            <p className="project-detail-content__text">{renderInlineMarkdown(project.impact)}</p>
                        </div>
                    </div>

                    {project.highlights.length > 0 && (
                        <div className="project-detail-content__section">
                            <p className="project-detail-content__label">Highlights</p>
                            <ul className="project-detail-content__highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{renderInlineMarkdown(h)}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="project-detail-actions">
                    <Button
                        variant="secondary"
                        onClick={() => navigate('/projects')}
                    >
                        Back to Projects
                    </Button>
                    {project.githubUrl && (
                        <Button
                            variant="ghost"
                            icon={githubIcon}
                            onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                        >
                            View Source
                        </Button>
                    )}
                </div>

            </div>
        </div>
    );
}

export default ProjectDetailPage;
