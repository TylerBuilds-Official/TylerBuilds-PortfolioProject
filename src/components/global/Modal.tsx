import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Safety net — always clean up scroll lock on unmount
    useEffect(() => {
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    // Handle open/close animation states
    useEffect(() => {
        if (open) {
            previousFocusRef.current = document.activeElement as HTMLElement;
            setVisible(true);
            requestAnimationFrame(() => setAnimating(true));
            document.body.classList.add('modal-open');
        } else if (visible) {
            setAnimating(false);
            const timer = setTimeout(() => {
                setVisible(false);
                document.body.classList.remove('modal-open');
                previousFocusRef.current?.focus();
            }, 250);
            return () => clearTimeout(timer);
        }
    }, [open]);

    // Escape key
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    // Focus trap
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key !== 'Tab' || !panelRef.current) return;

        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }, []);

    // Auto-focus panel on open
    useEffect(() => {
        if (open && panelRef.current) {
            const firstFocusable = panelRef.current.querySelector<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            firstFocusable?.focus();
        }
    }, [open, visible]);

    // Backdrop click
    function handleBackdropClick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    if (!visible) return null;

    const stateClass = animating
        ? 'modal-backdrop--open'
        : 'modal-backdrop--closing';

    return createPortal(
        <div
            className={`modal-backdrop ${stateClass}`}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onKeyDown={handleKeyDown}
        >
            <div className="modal-panel" ref={panelRef}>
                {title && (
                    <div className="modal-header">
                        <h3 className="modal-header__title">{title}</h3>
                        <button
                            className="modal-header__close"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                )}
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
