import { useNavigate } from 'react-router-dom';
import Button from '../../global/Button';

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__name hero-reveal hero-reveal--1">Tyler Emery</h1>
                <p className="hero__title hero-reveal hero-reveal--2">Full-Stack Software Engineer</p>
                <p className="hero__subtitle hero-reveal hero-reveal--3">
                    I build AI platforms, automation tools, and full-stack applications
                    that solve real problems — from enterprise data access to business management
                    to document classification.
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
