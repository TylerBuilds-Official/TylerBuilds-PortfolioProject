import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
    options: UseScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);
    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
