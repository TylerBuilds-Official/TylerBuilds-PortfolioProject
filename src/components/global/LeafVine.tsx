import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Decorative vine anchored to the bottom of the stats banner.
 * Grows downward as the user scrolls, tracking the banner's parallax animation.
 * Uses SVG stroke-dashoffset for progressive path reveal.
 * Only renders when the leaf theme is active.
 */

const LEAF_COUNT = 7;

function LeafVine() {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);
    const leafRefs = useRef<(SVGGElement | null)[]>([]);

    // Measure path length on mount
    useEffect(() => {
        if (theme !== 'leaf' || !pathRef.current) return;
        setPathLength(pathRef.current.getTotalLength());
    }, [theme]);

    // Scroll-driven drawing + anchor tracking
    useEffect(() => {
        if (theme !== 'leaf' || pathLength === 0) return;

        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const el = containerRef.current;
                const path = pathRef.current;
                if (!el || !path) { ticking = false; return; }

                // Track the stats banner — it lives as a sibling before the vine region
                const statsBanner = document.querySelector('.stats-counter') as HTMLElement | null;
                if (statsBanner) {
                    const statsBottom = statsBanner.getBoundingClientRect().bottom;
                    const regionTop = el.parentElement?.getBoundingClientRect().top ?? 0;
                    // Negative offset pulls the vine up to meet the banner's rendered bottom
                    el.style.top = `${statsBottom - regionTop}px`;
                }

                // Calculate scroll progress for drawing
                // progress = 0 when vine top enters viewport
                // progress = 1 when vine bottom reaches viewport bottom (footer visible)
                const rect = el.getBoundingClientRect();
                const windowH = window.innerHeight;
                const progress = Math.max(0, Math.min(1 - (rect.bottom - windowH) / rect.height, 1));

                // Draw the path
                const offset = pathLength * (1 - progress);
                path.style.strokeDashoffset = String(offset);

                // Fade in leaves
                leafRefs.current.forEach((leaf, i) => {
                    if (!leaf) return;
                    const threshold = (i + 1) / (LEAF_COUNT + 1);
                    const leafProgress = Math.max(0, Math.min((progress - threshold * 0.85) / 0.1, 1));
                    leaf.style.opacity = String(leafProgress);
                });

                ticking = false;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme, pathLength]);

    if (theme !== 'leaf') return null;

    const leafPositions = [
        { side: 'right', x: 55, y: 100  },
        { side: 'left',  x: 20, y: 200  },
        { side: 'right', x: 55, y: 300  },
        { side: 'left',  x: 20, y: 400  },
        { side: 'right', x: 52, y: 500  },
        { side: 'left',  x: 20, y: 600  },
        { side: 'right', x: 50, y: 700  },
    ];

    return (
        <div ref={containerRef} className="leaf-vine" aria-hidden="true">
            <svg
                className="leaf-vine__svg"
                viewBox="0 0 70 800"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    ref={pathRef}
                    className="leaf-vine__path"
                    d="
                        M 35 0
                        C 35 40, 60 60, 55 100
                        C 50 140, 15 160, 20 200
                        C 25 240, 60 260, 55 300
                        C 50 340, 15 360, 20 400
                        C 25 440, 58 460, 52 500
                        C 46 540, 15 560, 20 600
                        C 25 640, 55 660, 50 700
                        C 45 740, 30 770, 35 800
                    "
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={pathLength || 1000}
                    strokeDashoffset={pathLength || 1000}
                />

                {leafPositions.map((leaf, i) => (
                    <g
                        key={i}
                        ref={el => { leafRefs.current[i] = el; }}
                        style={{ opacity: 0 }}
                        transform={`translate(${leaf.x}, ${leaf.y})`}
                    >
                        <path
                            d={leaf.side === 'left'
                                ? 'M0 0 C-5 -3, -18 -8, -24 -4 C-18 -1, -8 3, 0 0Z'
                                : 'M0 0 C5 -3, 18 -8, 24 -4 C18 -1, 8 3, 0 0Z'
                            }
                            fill="currentColor"
                            opacity="0.5"
                        />
                        <path
                            d={leaf.side === 'left'
                                ? 'M0 0 C-8 -3, -16 -5, -24 -4'
                                : 'M0 0 C8 -3, 16 -5, 24 -4'
                            }
                            stroke="currentColor"
                            strokeWidth="0.8"
                            fill="none"
                            opacity="0.3"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}

export default LeafVine;
