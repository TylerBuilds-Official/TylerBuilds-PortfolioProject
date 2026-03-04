import { useState, useEffect, useRef, useCallback } from 'react';

interface Stat {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

const stats: Stat[] = [
    { label: 'Systems Deployed', value: 10, suffix: '+' },
    { label: 'Industries Served', value: 5 },
    { label: 'Hours of Manual Work Replaced', value: 100, suffix: 's' },
    { label: 'Developer', value: 1 },
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
        // Low values get a longer duration so the counter doesn't just snap
        const durations = stats.map(s => s.value <= 5 ? DURATION * 2.5 : DURATION);

        function tick(now: number) {
            if (now - lastFrame < interval) {
                requestAnimationFrame(tick);
                return;
            }
            lastFrame = now;

            const elapsed = now - start;

            setCounts(stats.map((s, i) => {
                const progress = Math.min(elapsed / durations[i], 1);
                return Math.round(easeOutExpo(progress) * s.value);
            }));

            const allDone = durations.every((d) => elapsed >= d);
            if (!allDone) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowH = window.innerHeight;
            const sectionNaturalTop = el.offsetTop;
            // Buffer by nav height so the effect never fires on initial load
            const triggerAt = sectionNaturalTop - windowH + 64;

            if (scrollY > triggerAt) {
                const progress = scrollY - triggerAt;
                el.style.transform = `translateY(${-progress * 0.35}px)`;
            } else {
                el.style.transform = '';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
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
