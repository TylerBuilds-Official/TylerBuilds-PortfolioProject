import { NavLink } from 'react-router-dom';
import ThemeSelector from '../components/global/ThemeSelector';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar__brand">
                Tyler Emery
            </NavLink>

            <div className="navbar__links">
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
            </div>

            <div className="navbar__actions">
                <ThemeSelector />
            </div>
        </nav>
    );
}

export default Navbar;
