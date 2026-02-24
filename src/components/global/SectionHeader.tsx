interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
}

function SectionHeader({ title, subtitle, center = false, className = '' }: SectionHeaderProps) {
    return (
        <div className={`section-header ${center ? 'section-header--center' : ''} ${className}`.trim()}>
            <h2 className="section-header__title">{title}</h2>
            <span className="section-header__accent-bar" />
            {subtitle && (
                <p className="section-header__subtitle">{subtitle}</p>
            )}
        </div>
    );
}

export default SectionHeader;
