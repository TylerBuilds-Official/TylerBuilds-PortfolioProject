function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__copy">
                    &copy; {year} Tyler Emery
                </p>
                <span className="footer__tagline">
                    <span className="footer__prompt" aria-hidden="true">{'>'}</span>
                    <span className="footer__tagline-text">building software that works</span>
                </span>
                <div className="footer__links">
                    <a
                        href="https://github.com/TylerBuilds-Official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        GitHub
                    </a>
                    <span className="footer__sep" aria-hidden="true">/</span>
                    <a
                        href="https://tylerbuilds.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        TylerBuilds
                    </a>
                    <span className="footer__sep" aria-hidden="true">/</span>
                    <a
                        href="https://www.linkedin.com/in/tyler-emery-15a612396/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
