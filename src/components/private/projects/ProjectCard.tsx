import type { Project } from '../../../types';
import Card from '../../global/Card';
import Tag from '../../global/Tag';
import Button from '../../global/Button';

interface ProjectCardProps {
    project: Project;
    onViewDetails: (project: Project) => void;
}

const githubIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
    const maxTech = 4;
    const visibleTech = project.techStack.slice(0, maxTech);
    const overflow = project.techStack.length - maxTech;

    return (
        <Card variant="elevated" className="project-card">
            <div className="project-card__header">
                <Tag variant="category">{project.category}</Tag>
            </div>

            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__tagline">{project.tagline}</p>

            <div className="project-card__tech">
                {visibleTech.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                ))}
                {overflow > 0 && <Tag>+{overflow}</Tag>}
            </div>

            <div className="project-card__actions">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onViewDetails(project)}
                >
                    Details
                </Button>
                {project.githubUrl && (
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={githubIcon}
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                    >
                        Source
                    </Button>
                )}
            </div>
        </Card>
    );
}

export default ProjectCard;
