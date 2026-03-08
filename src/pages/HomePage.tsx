import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroSection from '../components/private/hero/HeroSection';
import StatsCounter from '../components/private/stats/StatsCounter';
import ProjectsSection from '../components/private/projects/ProjectsSection';
import LeafVine from '../components/global/LeafVine';

function HomePage() {
    useDocumentTitle();

    return (
        <>
            <HeroSection />
            <StatsCounter />
            <div className="leaf-vine-region">
                <LeafVine />
                <ProjectsSection mode="home" />
            </div>
        </>
    );
}

export default HomePage;
