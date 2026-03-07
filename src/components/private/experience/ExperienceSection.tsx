import { experience, education } from '../../../data/experience';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionHeader from '../../global/SectionHeader';
import ExperienceInitiativeCard from './ExperienceInitiativeCard';

function RevealGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}

function ExperienceSection() {
    return (
        <div className="experience-page">
            <div className="container">
                <SectionHeader
                    title="Experience"
                    subtitle="Professional experience across enterprise software and my own business."
                />

                {experience.map(group => (
                    <RevealGroup key={group.company} className="experience-group">
                        <div className="experience-group__header">
                            <h2 className="experience-group__company">{group.company}</h2>
                            <p className="experience-group__role">{group.role}</p>
                            <p className="experience-group__description">{group.description}</p>
                        </div>

                        <div className="experience-initiatives">
                            {group.initiatives.map(initiative => (
                                <ExperienceInitiativeCard
                                    key={initiative.title}
                                    initiative={initiative}
                                />
                            ))}
                        </div>
                    </RevealGroup>
                ))}

                {/* Education footnote */}
                <RevealGroup className="education-footnote">
                    <p className="education-footnote__label">Education</p>
                    <p className="education-footnote__degree">{education.degree}</p>
                    <p className="education-footnote__school">{education.school}</p>
                    <p className="education-footnote__status">{education.status}</p>
                </RevealGroup>

            </div>
        </div>
    );
}

export default ExperienceSection;
