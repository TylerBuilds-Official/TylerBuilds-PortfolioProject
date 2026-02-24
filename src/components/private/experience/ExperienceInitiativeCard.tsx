import type { ExperienceInitiative } from '../../../types';
import Card from '../../global/Card';
import Tag from '../../global/Tag';

interface ExperienceInitiativeCardProps {
    initiative: ExperienceInitiative;
}

function ExperienceInitiativeCard({ initiative }: ExperienceInitiativeCardProps) {
    return (
        <Card variant="elevated" className="experience-initiative">
            <h3 className="experience-initiative__title">{initiative.title}</h3>
            <p className="experience-initiative__description">{initiative.description}</p>

            <div className="experience-initiative__tech">
                {initiative.techStack.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                ))}
            </div>

            {initiative.highlights.length > 0 && (
                <ul className="experience-initiative__highlights">
                    {initiative.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </ul>
            )}
        </Card>
    );
}

export default ExperienceInitiativeCard;
