import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
}

function Button({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    children,
    className = '',
    ...rest
}: ButtonProps) {
    const iconElement = icon
        ? <span className="btn__icon">{icon}</span>
        : null;

    return (
        <button
            className={`btn btn--${variant} btn--${size} ${className}`.trim()}
            {...rest}
        >
            {iconPosition === 'left' && iconElement}
            {children}
            {iconPosition === 'right' && iconElement}
        </button>
    );
}

export default Button;
