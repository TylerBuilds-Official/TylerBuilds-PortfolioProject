function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">
                &copy; {year} Tyler Emery. Built from scratch.
            </p>
            <div className="footer__links">
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
                    href="https://linkedin.com/in/"
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
