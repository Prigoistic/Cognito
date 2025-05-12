# Cognito News App

A modern, responsive news application built with React that delivers categorized news content with a beautiful user interface and dark mode support.

## Features

- Category-based news browsing (Headlines, Business, Tech, Science, Space, Health, Sports, Entertainment)
- Search functionality to find specific news topics
- Light/dark theme toggle
- Responsive design for all device sizes
- Clean, modern UI with a bento box style layout
- Fast and optimized performance

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

The application will be available at `http://localhost:5173`

## Project Structure

```
cognito-news/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # Theme context and other global state
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

## Acknowledgments

- Built with React and modern web technologies
- Powered by NewsAPI for real-time news data
- Icons and design resources from various open-source projects
