import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ContactSection from '../components/private/contact/ContactSection';

function ContactPage() {
    useDocumentTitle('Contact');

    return <ContactSection />;
}

export default ContactPage;
