import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

type CardVariant = 'flat' | 'elevated';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    interactive?: boolean;
    children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card({
    variant = 'flat',
    interactive = false,
    children,
    className = '',
    ...rest
}, ref) {
    return (
        <div
            ref={ref}
            className={
                `card card--${variant} ${interactive ? 'card--interactive' : ''} ${className}`.trim()
            }
            {...rest}
        >
            {children}
        </div>
    );
});

export default Card;
