import { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsApi';
import PropTypes from 'prop-types';

export default function MainContent({ currentCategory, onClick }) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadNews = async () => {
            setIsLoading(true);
            try {
                // Handle search queries that come from the header
                let queryParam = currentCategory;
                
                if (currentCategory.startsWith('search:')) {
                    // Extract the search query
                    queryParam = currentCategory.substring(7);
                }
                
                const news = await fetchNews(queryParam);
                setArticles(news);
            } catch (error) {
                console.error('Error loading news:', error);
            }
            setIsLoading(false);
        };
        
        const debounceTimer = setTimeout(() => {
            loadNews();
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [currentCategory]);

    return (
        <div className="main-container" onClick={onClick}>
            {/* News Grid */}
            <main className="news-grid">
                {isLoading ? (
                    <div className="loading">Loading latest news...</div>
                ) : articles.length === 0 ? (
                    <div className="no-results">No articles found. Try a different search term.</div>
                ) : (
                    articles.map((article, index) => (
                        <article 
                            key={index}
                            className="news-article bento-box"
                        >
                            <div className="article-header">
                                <span className="article-source">{article.source?.name}</span>
                                <span className="article-date">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </span>
                            </div>
                            {article.urlToImage && (
                                <img 
                                    src={article.urlToImage} 
                                    alt={article.title} 
                                    className="article-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            )}
                            <div className="article-content">
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-description">{article.description}</p>
                                <a 
                                    href={article.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="read-more"
                                >
                                    Read full article →
                                </a>
                            </div>
                        </article>
                    ))
                )}
            </main>
        </div>
    );
}

MainContent.propTypes = {
    currentCategory: PropTypes.string.isRequired,
    onClick: PropTypes.func
};