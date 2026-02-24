import { useDocumentTitle } from '../hooks/useDocumentTitle';

function ContactPage() {
    useDocumentTitle('Contact');

    return (
        <div className="container">
            <section className="section">
                <h1>Contact</h1>
                <p>Coming soon.</p>
            </section>
        </div>
    );
}

export default ContactPage;
