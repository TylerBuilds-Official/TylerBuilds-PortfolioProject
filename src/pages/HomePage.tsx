import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroSection from '../components/private/hero/HeroSection';
import ProjectsSection from '../components/private/projects/ProjectsSection';

function HomePage() {
    useDocumentTitle();

    return (
        <>
            <HeroSection />
            <ProjectsSection mode="home" />
        </>
    );
}

export default HomePage;
