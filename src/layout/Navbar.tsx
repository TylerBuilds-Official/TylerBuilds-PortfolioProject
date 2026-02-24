import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeSelector from '../components/global/ThemeSelector';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => document.body.classList.remove('menu-open');
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar__brand">
                Tyler Emery
            </NavLink>

            <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                        `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                >
                    Contact
                </NavLink>

                {/* Theme selector inside mobile menu */}
                <div className="navbar__theme-mobile">
                    <ThemeSelector />
                </div>
            </div>

            <div className="navbar__actions">
                <div className="navbar__theme-desktop">
                    <ThemeSelector />
                </div>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className="navbar__hamburger-line" />
                    <span className="navbar__hamburger-line" />
                    <span className="navbar__hamburger-line" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
