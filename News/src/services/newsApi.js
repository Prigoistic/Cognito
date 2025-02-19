const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

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
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
    }
    
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('News API Error:', error.message);
    return [];
  }
};