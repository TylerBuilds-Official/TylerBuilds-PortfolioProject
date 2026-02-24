import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ExperienceSection from '../components/private/experience/ExperienceSection';

function ExperiencePage() {
    useDocumentTitle('Experience');

    return <ExperienceSection />;
}

export default ExperiencePage;
