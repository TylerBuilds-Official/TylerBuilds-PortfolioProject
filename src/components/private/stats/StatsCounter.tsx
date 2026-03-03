import { useState, useEffect, useRef, useCallback } from 'react';

interface Stat {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

const stats: Stat[] = [
    { label: 'Projects Built', value: 16 },
    { label: 'Custom AI Tools', value: 30, suffix: '+' },
    { label: 'Stored Procedures', value: 31, suffix: '+' },
    { label: 'Source Files (Largest)', value: 261, suffix: '+' },
];

const DURATION = 1800;
const FPS = 60;

function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function StatsCounter() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

    const animate = useCallback(() => {
        const start = performance.now();
        const interval = 1000 / FPS;
        let lastFrame = start;

        function tick(now: number) {
            if (now - lastFrame < interval) {
                requestAnimationFrame(tick);
                return;
            }
            lastFrame = now;

            const elapsed = now - start;
            const progress = Math.min(elapsed / DURATION, 1);
            const eased = easeOutExpo(progress);

            setCounts(stats.map(s => Math.round(eased * s.value)));

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    animate();
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated, animate]);

    return (
        <section ref={sectionRef} className="stats-counter">
            <div className="container">
                <div className="stats-counter__grid">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="stats-counter__item">
                            <span className="stats-counter__value">
                                {stat.prefix ?? ''}{counts[i]}{stat.suffix ?? ''}
                            </span>
                            <span className="stats-counter__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsCounter;
