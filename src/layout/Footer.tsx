function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer__links">
                <div className="footer__copy">
                    <p className="footer__text">
                        &copy; {year} Tyler Emery.
                    </p>
                </div>
                <a
                    href="https://github.com/TylerBuilds-Official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    GitHub
                </a>
                <a
                    href="https://tylerbuilds.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    TylerBuilds
                </a>
                <a
                    href="https://www.linkedin.com/in/tyler-emery-15a612396/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
