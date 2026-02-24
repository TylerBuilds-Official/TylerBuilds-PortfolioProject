import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ProjectsSection from '../components/private/projects/ProjectsSection';

function ProjectsPage() {
    useDocumentTitle('Projects');

    return <ProjectsSection mode="full" />;
}

export default ProjectsPage;
