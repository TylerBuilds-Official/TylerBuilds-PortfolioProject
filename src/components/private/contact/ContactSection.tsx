import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionHeader from '../../global/SectionHeader';
import Button from '../../global/Button';

function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const formRef = useScrollReveal<HTMLFormElement>({ threshold: 0.1 });
    const linksRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('');

        const form = e.currentTarget;
        const fd = new FormData(form);

        const name = String(fd.get('name') || '');
        const email = String(fd.get('email') || '');
        const message = String(fd.get('message') || '');

        const subject = `Portfolio contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                body: JSON.stringify({ subject, body }),
            });

            if (!response.ok) throw new Error('Failed to send');

            setStatus('sent');
            setStatusMessage(`Thanks${name ? `, ${name}` : ''}! I'll be in touch.`);
            form.reset();
        } catch {
            setStatus('error');
            setStatusMessage(
                'Something went wrong. You can reach me directly at info@tylerbuilds.net'
            );
        }
    }

    return (
        <div className="contact-page">
            <div className="container">
                <SectionHeader
                    title="Contact"
                    subtitle="Want to get in touch? Send me a message."
                />

                <form
                    ref={formRef}
                    className="contact-form reveal"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label className="contact-form__field contact-form__stagger-1">
                        <span className="contact-form__label">Name</span>
                        <input
                            className="contact-form__input"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                        />
                    </label>

                    <label className="contact-form__field contact-form__stagger-2">
                        <span className="contact-form__label">Email</span>
                        <input
                            className="contact-form__input"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                        />
                    </label>

                    <label className="contact-form__field contact-form__stagger-3">
                        <span className="contact-form__label">Message</span>
                        <textarea
                            className="contact-form__input contact-form__textarea"
                            name="message"
                            rows={5}
                            required
                            placeholder="What's on your mind?"
                        />
                    </label>

                    <div className="contact-form__stagger-4">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={status === 'sending'}
                            className={status === 'sending' ? 'btn--loading' : ''}
                        >
                            {status === 'sending' && <span className="btn__spinner" />}
                            {status === 'sending' ? 'Sending' : 'Send Message'}
                        </Button>
                    </div>

                    {statusMessage && (
                        <p className={`contact-form__status contact-form__status--${status}`}>
                            {statusMessage}
                        </p>
                    )}
                </form>

                <div ref={linksRef} className="contact-links reveal">
                    <a href="mailto:info@tylerbuilds.net" className="contact-links__item">
                        info@tylerbuilds.net
                    </a>
                    <a href="https://github.com/tylerbuilds-official" target="_blank" rel="noreferrer" className="contact-links__item">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/tyler-emery-15a612396/" target="_blank" rel="noreferrer" className="contact-links__item">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
