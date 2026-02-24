import type { ReactNode } from 'react';

type TagVariant = 'default' | 'accent' | 'category';

interface TagProps {
    children: ReactNode;
    variant?: TagVariant;
    className?: string;
}

function Tag({ children, variant = 'default', className = '' }: TagProps) {
    return (
        <span className={`tag tag--${variant} ${className}`.trim()}>
            {children}
        </span>
    );
}

export default Tag;
