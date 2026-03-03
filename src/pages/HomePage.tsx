import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroSection from '../components/private/hero/HeroSection';
import StatsCounter from '../components/private/stats/StatsCounter';
import ProjectsSection from '../components/private/projects/ProjectsSection';

function HomePage() {
    useDocumentTitle();

    return (
        <>
            <HeroSection />
            <StatsCounter />
            <ProjectsSection mode="home" />
        </>
    );
}

export default HomePage;
