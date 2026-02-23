import { useParams } from 'react-router-dom';

function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="container">
            <section className="section">
                <h1>Project: {slug}</h1>
                <p>Stub page. Dedicated flagship project detail coming in Phase 4.</p>
            </section>
        </div>
    );
}

export default ProjectDetailPage;
