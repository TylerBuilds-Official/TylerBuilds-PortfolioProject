import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
}

function SectionHeader({ title, subtitle, center = false, className = '' }: SectionHeaderProps) {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`section-header reveal ${center ? 'section-header--center' : ''} ${className}`.trim()}
        >
            <h2 className="section-header__title">{title}</h2>
            <span className="section-header__accent-bar" />
            {subtitle && (
                <p className="section-header__subtitle">{subtitle}</p>
            )}
        </div>
    );
}

export default SectionHeader;
