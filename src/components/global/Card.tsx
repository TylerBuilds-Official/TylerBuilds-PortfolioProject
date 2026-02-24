import type { ReactNode, HTMLAttributes } from 'react';

type CardVariant = 'flat' | 'elevated';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    interactive?: boolean;
    children: ReactNode;
}

function Card({
    variant = 'flat',
    interactive = false,
    children,
    className = '',
    ...rest
}: CardProps) {
    return (
        <div
            className={
                `card card--${variant} ${interactive ? 'card--interactive' : ''} ${className}`.trim()
            }
            {...rest}
        >
            {children}
        </div>
    );
}

export default Card;
