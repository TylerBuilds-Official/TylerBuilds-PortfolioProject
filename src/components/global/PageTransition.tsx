import { type PropsWithChildren, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }: PropsWithChildren) {
    const location = useLocation();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [phase, setPhase] = useState<'visible' | 'fading' | 'entering'>('visible');
    const prevPath = useRef(location.pathname);
    const mounted = useRef(false);

    useEffect(() => {
        // Skip entirely on first mount (and StrictMode re-mount)
        if (!mounted.current) {
            mounted.current = true;
            prevPath.current = location.pathname;
            return;
        }

        // Skip if path hasn't actually changed
        if (location.pathname === prevPath.current) return;
        prevPath.current = location.pathname;

        setPhase('fading');

        const fadeOut = setTimeout(() => {
            setDisplayChildren(children);
            setPhase('entering');
        }, 160);

        const fadeIn = setTimeout(() => {
            setPhase('visible');
        }, 180);

        return () => {
            clearTimeout(fadeOut);
            clearTimeout(fadeIn);
        };
    }, [location.pathname]);

    // Keep children in sync when they change without a route change
    useEffect(() => {
        if (phase === 'visible') {
            setDisplayChildren(children);
        }
    }, [children, phase]);

    return (
        <div className={`page-transition page-transition--${phase}`}>
            {displayChildren}
        </div>
    );
}

export default PageTransition;
