import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Button from '../../global/Button';

function HeroSection() {
    const navigate = useNavigate();
    const decoRef = useRef<HTMLDivElement>(null);
    const charLeftRef = useRef<HTMLSpanElement>(null);
    const charMidRef = useRef<HTMLSpanElement>(null);
    const charRightRef = useRef<HTMLSpanElement>(null);
    const slashDecoRef = useRef<HTMLDivElement>(null);
    const slashLeftRef = useRef<HTMLSpanElement>(null);
    const slashRightRef = useRef<HTMLSpanElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const FADE_DISTANCE = 380;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / FADE_DISTANCE, 1);
            const opacity = 0.15 * (1 - progress);

            if (decoRef.current) {
                decoRef.current.style.transform = `translateY(${scrollY * 0.28}px)`;
                decoRef.current.style.opacity = String(opacity);
            }
            if (charLeftRef.current) {
                charLeftRef.current.style.transform =
                    `translateX(${-scrollY * 0.18}px) rotate(${-scrollY * 0.07}deg)`;
            }
            if (charMidRef.current) {
                charMidRef.current.style.transform =
                    `translateY(${scrollY * 0.1}px) scale(${1 - progress * 0.12})`;
            }
            if (charRightRef.current) {
                charRightRef.current.style.transform =
                    `translateX(${scrollY * 0.18}px) rotate(${scrollY * 0.07}deg)`;
            }

            // hero content — lingers slightly then fades
            const contentProgress = Math.max(0, Math.min((scrollY - 100) / 420, 1));
            if (contentRef.current) {
                contentRef.current.style.opacity = String(1 - contentProgress);
                contentRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
            }

            // // deco — faster fade, slides apart
            const slashProgress = Math.min(scrollY / 200, 1);
            if (slashDecoRef.current) {
                slashDecoRef.current.style.opacity = String(0.08 * (1 - slashProgress));
                slashDecoRef.current.style.transform = `translateY(${-scrollY * 0.15}px)`;
            }
            if (slashLeftRef.current) {
                slashLeftRef.current.style.transform =
                    `translateX(${scrollY * 0.09}px) translateY(${-scrollY * 0.25}px)`;
            }
            if (slashRightRef.current) {
                slashRightRef.current.style.transform =
                    `translateX(${-scrollY * 0.09}px) translateY(${scrollY * 0.25}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div ref={decoRef} className="hero__deco" aria-hidden="true">
                <span ref={charLeftRef} className="hero__deco-char">&lt;</span>
                <span ref={charMidRef} className="hero__deco-char">~</span>
                <span ref={charRightRef} className="hero__deco-char">&gt;</span>
            </div>
            <div ref={slashDecoRef} className="hero__deco-slash" aria-hidden="true">
                <span ref={slashLeftRef} className="hero__deco-char">/</span>
                <span ref={slashRightRef} className="hero__deco-char">/</span>
            </div>
            <div ref={contentRef} className="hero__content">
                <h1 className="hero__name hero-reveal hero-reveal--1">Tyler Emery</h1>
                <p className="hero__title hero-reveal hero-reveal--2">Full-Stack Software Engineer</p>
                <p className="hero__subtitle hero-reveal hero-reveal--3">
                    Construction teams, fabrication operations, small businesses. I build the software
                    that turns their manual workflows into systems that run themselves.
                </p>
                <p className="hero__terminal hero-reveal hero-reveal--5" aria-label="automating industries">
                    <span className="hero__terminal-prompt">{'>'}</span>
                    <span className="hero__terminal-text"> automating industries</span>
                    <span className="hero__terminal-cursor" aria-hidden="true">_</span>
                </p>
                <div className="hero__actions hero-reveal hero-reveal--4">
                    <Button
                        variant="primary"
                        onClick={() => navigate('/projects')}
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => navigate('/contact')}
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
