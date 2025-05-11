const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Important: NewsAPI has CORS restrictions for production deployments
// For Netlify deployment, we'll need to use a proxy or serverless function eventually
// This is a workaround for development
export const fetchNews = async (query = 'general') => {
  try {
    let url;
    if (query === 'space') {
      // Special handling for space news
      url = `https://newsapi.org/v2/everything?q=space+NASA+SpaceX&sortBy=publishedAt&apiKey=${API_KEY}`;
    } else if (query === 'general' || ['business', 'entertainment', 'health', 'science', 'sports', 'technology'].includes(query)) {
      // Fetch top headlines by category
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&apiKey=${API_KEY}`;
    } else {
      // Search for news
      url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;
    }
    
    // For Netlify, we need to handle CORS issues
    // In production, this should be replaced with a serverless function
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
    }
    
    const data = await response.json();
    
    // Map the data to ensure consistent structure and avoid null values
    const articles = data.articles.map(article => ({
      ...article,
      description: article.description || 'No description available',
      urlToImage: article.urlToImage || null,
      publishedAt: article.publishedAt || new Date().toISOString(),
      source: article.source || { name: 'Unknown Source' }
    }));
    
    return articles;
  } catch (error) {
    console.error('News API Error:', error.message);
    // Return fallback data if there's an error
    return [];
  }
};