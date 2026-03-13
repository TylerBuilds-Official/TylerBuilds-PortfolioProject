import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Button from '../components/global/Button';

function NotFoundPage() {
    useDocumentTitle('404');
    const navigate = useNavigate();

    return (
        <section className="not-found">
            <div className="not-found__deco" aria-hidden="true">
                <span className="not-found__deco-char">4</span>
                <span className="not-found__deco-char">0</span>
                <span className="not-found__deco-char">4</span>
            </div>

            <div className="not-found__content">
                <div className="not-found__terminal">
                    <span className="not-found__terminal-prompt">$</span>
                    <span className="not-found__terminal-text">cd /page-not-found</span>
                    <span className="not-found__terminal-cursor">_</span>
                </div>

                <h1 className="not-found__heading">Nothing here</h1>
                <p className="not-found__message">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="not-found__actions">
                    <Button variant="primary" onClick={() => navigate('/')}>
                        Back to Home
                    </Button>
                    <Button variant="ghost" onClick={() => navigate('/projects')}>
                        View Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
