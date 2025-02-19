import logo from '../../public/logo.svg';
import Switch from './toggle';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header({ setCurrentCategory, currentCategory }) {
    const { theme, toggleTheme } = useTheme();
    
    const categories = [
        { id: 'general', label: 'General' },
        { id: 'business', label: 'Business', icon: '💼' },
        { id: 'technology', label: 'Tech', icon: '💻' },
        { id: 'science', label: 'Science', icon: '🔬' },
        { id: 'space', label: 'Space', icon: '🚀' },
        { id: 'health', label: 'Health', icon: '🏥' },
        { id: 'sports', label: 'Sports', icon: '' },
        { id: 'entertainment', label: 'Entertainment', icon: '🎬' }
    ];

    const handleCategoryClick = (category) => (e) => {
        e.preventDefault();
        setCurrentCategory(category);
    };

    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        <header>
            <div className="header-content">
                <div className="header-left">
                    <Link to="/" className="logo-title">
                        <img src={logo} className="logo" alt="News app logo" />
                        <h1 className="cognito-title">Cognito</h1>
                    </Link>
                </div>

                <nav className="nav-container">
                    <ul className="category-list">
                        {categories.map(({ id, label, icon }) => (
                            <li key={id} className="category-item">
                                <button 
                                    className={`nav-category ${currentCategory === id ? 'active' : ''}`}
                                    onClick={handleCategoryClick(id)}
                                    title={label}
                                >
                                    <span className="category-icon" aria-hidden="true">
                                        {icon}
                                    </span>
                                    <span className="category-label">{label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="theme-toggle-container" onClick={(e) => e.stopPropagation()}>
                    <Switch 
                        onChange={handleThemeToggle}
                        checked={theme === 'dark'}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header