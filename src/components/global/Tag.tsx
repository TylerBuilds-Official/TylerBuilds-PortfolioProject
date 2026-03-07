import type { ReactNode } from 'react';

type TagVariant = 'default' | 'accent' | 'category';

interface TagProps {
    children: ReactNode;
    variant?: TagVariant;
    className?: string;
    iconClass?: string | null;
}

function Tag({ children, variant = 'default', className = '', iconClass }: TagProps) {
    return (
        <span className={`tag tag--${variant} ${className}`.trim()}>
            {iconClass && <i className={`tag__icon ${iconClass}`} aria-hidden="true" />}
            {children}
        </span>
    );
}

export default Tag;
