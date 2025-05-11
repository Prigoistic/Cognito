# Cognito News App

A modern news application that provides up-to-date news from various categories using the NewsAPI.

## Features

- Category-based news browsing (Headlines, Business, Tech, Science, Space, Health, Sports, Entertainment)
- Search functionality to find specific news topics
- Light/dark theme toggle
- Responsive design for all device sizes
- Clean, modern UI with a bento box style layout

## Tech Stack

- React 19
- React Router for navigation
- Styled Components for toggle button
- CSS3 for styling
- Vite for build tooling
- NewsAPI for data

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your NewsAPI key:

```
VITE_NEWS_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

## Deployment to Netlify

This app is configured for easy deployment to Netlify:

1. Create a new site on Netlify
2. Connect your repository
3. Add your NewsAPI key as an environment variable:
   - Key: `VITE_NEWS_API_KEY`
   - Value: Your API key
4. Deploy with the following settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Note:** The free tier of NewsAPI only allows requests from localhost. For production deployment, you'll need:

- Either a paid NewsAPI subscription
- Or implement a serverless function/backend proxy to make the API requests

## Important CORS Note

NewsAPI has CORS restrictions that prevent direct API calls from browsers in production environments. The current implementation works for local development but will need to be adapted for production use.

## License

MIT
