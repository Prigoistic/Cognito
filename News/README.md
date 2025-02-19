#  Cognito News

A modern, responsive news application built with React that delivers categorized news content with a beautiful user interface and dark mode support.

## Features

- Real-time news updates across different categories
- Dark/Light theme toggle
- Responsive design for all devices
- Category-based news filtering
- Modern and clean user interface
- Fast and optimized performance

## Tech Stack

- React 19
- React Router DOM 7
- Styled Components
- Vite
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd cognito-news
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
cognito-news/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # Theme context and other global state
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and modern web technologies
- Powered by [News API] for real-time news data
- Icons and design resources from various open-source projects
