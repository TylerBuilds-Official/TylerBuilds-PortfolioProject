import { useNavigate } from 'react-router-dom';
import type { Project } from '../../../types';
import { getProjectImages } from '../../../data/projectImages';
import { getTechIconClass } from '../../../utils/techIcons';
import Modal from '../../global/Modal';
import Tag from '../../global/Tag';
import Button from '../../global/Button';
import { renderInlineMarkdown } from '../../../utils/inlineMarkdown';
import ProjectImageGallery from './ProjectImageGallery';

interface ProjectDetailModalProps {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}

const githubIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

function ProjectDetailModal({ project, open, onClose }: ProjectDetailModalProps) {
    const navigate = useNavigate();

    if (!project) return null;
    const hasScreenshots = getProjectImages(project).length > 0;

    function handleViewCaseStudy() {
        onClose();
        navigate(`/projects/${project!.slug}`);
    }

    return (
        <Modal open={open} onClose={onClose} title={project.title}>
            {/* Tech Stack */}
            <div className="project-detail__section">
                <div className="project-detail__tech">
                    <Tag variant="category">{project.category}</Tag>
                    {project.techStack.map(tech => (
                        <Tag key={tech} iconClass={getTechIconClass(tech)}>{tech}</Tag>
                    ))}
                </div>
            </div>

            {/* Screenshots */}
            {hasScreenshots && (
                <div className="project-detail__section">
                    <p className="project-detail__label">Screenshots</p>
                    <ProjectImageGallery project={project} />
                </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
                <div className="project-detail__section">
                    <div className="project-detail__metrics">
                        {project.metrics.map(metric => (
                            <div
                                key={metric.label}
                                className={`project-detail__metric ${metric.isPlaceholder ? 'project-detail__metric--placeholder' : ''}`}
                            >
                                <div className="project-detail__metric-value">{metric.value}</div>
                                <div className="project-detail__metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Problem */}
            <div className="project-detail__section">
                <div className="project-detail__card">
                    <p className="project-detail__label">Problem</p>
                    <p className="project-detail__text">{renderInlineMarkdown(project.problem)}</p>
                </div>
            </div>

            {/* Solution */}
            <div className="project-detail__section">
                <div className="project-detail__card">
                    <p className="project-detail__label">Solution</p>
                    <p className="project-detail__text">{renderInlineMarkdown(project.solution)}</p>
                </div>
            </div>

            {/* Impact */}
            <div className="project-detail__section">
                <div className="project-detail__card project-detail__card--impact">
                    <p className="project-detail__label">Impact</p>
                    <p className="project-detail__text">{renderInlineMarkdown(project.impact)}</p>
                </div>
            </div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
                <div className="project-detail__section">
                    <p className="project-detail__label">Highlights</p>
                    <ul className="project-detail__highlights">
                        {project.highlights.map((h, i) => (
                            <li key={i}>{renderInlineMarkdown(h)}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Actions */}
            <div className="project-detail__actions">
                {project.hasDetailPage && (
                    <Button variant="primary" onClick={handleViewCaseStudy}>
                        View Full Case Study
                    </Button>
                )}
                {project.githubUrl && (
                    <Button
                        variant="secondary"
                        icon={githubIcon}
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                        View Source
                    </Button>
                )}
            </div>
        </Modal>
    );
}

export default ProjectDetailModal;
