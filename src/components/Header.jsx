import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';  // For Header.jsx

export const Header = () => {
    return (
        <header className="header">
            <div className="container flex flex-jc-sb flex-ai-c">
                <div className="logo">
                    <a href="index.html">
                        <h1>Where in the world?</h1>
                    </a>
                </div>
                <button
                    type="button"
                    aria-label="Theme Switcher Button"
                    className="theme-toggle flex flex-jc-sb flex-ai-c"
                >
                    <FontAwesomeIcon icon={faMoon} className="theme-icon" />
                    <span className="theme-text">Dark Mode</span>
                </button>
            </div>
        </header>
    )
}