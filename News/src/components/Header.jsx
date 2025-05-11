import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Switch from './toggle';

// Updated categories to match the image
const newsCategories = [
  { id: 'general', name: 'Headlines', icon: '🏠' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'technology', name: 'Tech', icon: '💻' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'space', name: 'Space', icon: '🚀' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' }
];

// Inline styles to ensure they're applied
const styles = {
  mainHeader: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'var(--surface)'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: 'var(--surface)'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  logoTitle: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'var(--primary)'
  },
  logo: {
    width: '36px',
    height: '36px',
    marginRight: '10px',
    objectFit: 'contain'
  },
  appTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    margin: 0,
    color: 'var(--primary)',
    letterSpacing: '-0.5px'
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    marginLeft: '20px',
    marginRight: '20px'
  },
  categoryList: {
    display: 'flex',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    gap: '4px'
  },
  navCategory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: '0.95rem'
  },
  navCategoryActive: {
    color: 'var(--primary)',
    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
    fontWeight: 600
  },
  categoryIcon: {
    marginRight: '8px',
    fontSize: '1.1em'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '24px',
    padding: '5px 15px',
    marginRight: '15px',
    width: '250px'
  },
  searchInput: {
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '8px',
    width: '100%',
    color: 'var(--text)'
  },
  buttonReset: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px'
  },
  themeToggleWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
};

function Header({ setCurrentCategory, currentCategory }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'; // Default to dark theme to match image
    });

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Set theme on initial load
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Handle search submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Use 'search:query' format to distinguish from regular categories
            setCurrentCategory(`search:${searchQuery}`);
        }
    };

    // Clear search
    const clearSearch = () => {
        setSearchQuery('');
        // If we were in search mode, go back to general
        if (currentCategory.startsWith('search:')) {
            setCurrentCategory('general');
        }
    };

    return (
        <header style={styles.mainHeader}>
            {/* Header content with integrated nav bar */}
            <div style={styles.headerContent}>
                <div style={styles.headerLeft}>
                    <Link to="/" style={styles.logoTitle}>
                        <img src="/logo.svg" alt="Cognito Logo" style={styles.logo} />
                        <h1 style={styles.appTitle}>Cognito</h1>
                    </Link>
                </div>
                
                {/* Navigation categories in the middle */}
                <div style={styles.categoryContainer}>
                    <div style={styles.categoryList}>
                        {newsCategories.map((category) => (
                            <button
                                key={category.id}
                                style={{
                                    ...styles.navCategory,
                                    ...(currentCategory === category.id ? styles.navCategoryActive : {})
                                }}
                                onClick={() => {
                                    setCurrentCategory(category.id);
                                    // Clear search when switching categories
                                    setSearchQuery('');
                                }}
                            >
                                <span style={styles.categoryIcon}>{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                <div style={styles.headerRight}>
                    <form style={styles.searchBar} onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={styles.searchInput}
                        />
                        {searchQuery && (
                            <button 
                                type="button" 
                                onClick={clearSearch}
                                style={styles.buttonReset}
                            >
                                ✕
                            </button>
                        )}
                        <button 
                            type="submit" 
                            style={styles.buttonReset}
                        >
                            🔍
                        </button>
                    </form>
                    
                    <div style={styles.themeToggleWrapper}>
                        <Switch onChange={toggleTheme} checked={theme === 'dark'} />
                    </div>
                </div>
            </div>
        </header>
    );
}

// Add PropTypes validation
Header.propTypes = {
    setCurrentCategory: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired
};

export default Header;