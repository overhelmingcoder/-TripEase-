# 🌤️ TripEase - AI-Powered Weather & Travel Assistant

TripEase is a Next.js 14 weather and travel assistant powered by AI. Built with modern web technologies, it provides comprehensive weather forecasting, interactive maps, and intelligent travel recommendations to help users plan their perfect trips.

![TripEase Banner](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 240sec of glory:  https://youtu.be/rfdk6j8K63k?si=0Yi7aQxQhhbZ5VIZ

## 🌟 Features

### 🌤️ Weather Intelligence
- **Real-time Weather Data**: Current conditions with detailed metrics
- **5-Day & 30-Day Forecasts**: Extended weather predictions for better planning
- **Air Quality Monitoring**: Pollution levels and health recommendations
- **UV Index Tracking**: Sun protection guidance with real-time updates
- **Interactive Weather Maps**: Visual weather patterns and storm tracking

### 🗺️ Interactive Maps
- **Dynamic Location Search**: Find any location worldwide
- **Weather Overlay**: Visual weather data on interactive maps
- **Population Density**: Demographic insights for travel planning
- **Local Attractions**: Discover points of interest near your destination

### 🤖 AI Travel Assistant
- **Smart Recommendations**: AI-powered vacation suggestions
- **Personalized Itineraries**: Custom travel plans based on preferences
- **Local Insights**: Connect with locals and get authentic recommendations
- **Travel Chatbot**: 24/7 AI assistance for travel queries

### 🏨 Travel Services
- **Hotel Booking Integration**: Seamless accommodation booking
- **Local Contact Network**: Connect with verified local guides
- **Vacation Planning**: Comprehensive trip planning tools

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB database
- API keys (see Environment Variables section)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/overhelmingcoder/TripEase.git
   cd TripEase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Weather API Configuration
OPENWEATHER_API_KEY=your_openweather_api_key_here

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=your_mongodb_connection_string_here

# AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Mapbox Configuration (optional)
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here

# NASA API Configuration (optional)
NASA_API_KEY=your_nasa_api_key_here
```

### API Keys Setup

1. **OpenWeather API**: Get your free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. **Google Gemini AI**: Obtain your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
3. **MongoDB**: Set up a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
4. **Mapbox** (optional): Get your token at [Mapbox](https://www.mapbox.com/)
5. **NASA API** (optional): Register at [NASA API Portal](https://api.nasa.gov/)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on every push to main**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/overhelmingcoder/TripEase)

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & APIs
- **Next.js API Routes** - Serverless functions
- **NextAuth.js** - Authentication
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling

### External Services
- **OpenWeather API** - Weather data
- **Google Gemini AI** - AI-powered recommendations
- **Mapbox** - Interactive maps
- **NASA APIs** - Satellite imagery and data

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🧪 Testing & CI/CD

### Running Tests
```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

### GitHub Actions
The repository includes automated CI/CD workflows:
- **Code Quality**: ESLint and TypeScript checks
- **Build Verification**: Ensures the app builds successfully
- **Deployment**: Automatic deployment to Vercel on main branch

## 📁 Project Structure

```
TripEase/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── Components/        # React components
│   ├── context/           # React context providers
│   ├── dashboard/         # Dashboard pages
│   └── utils/             # Utility functions
├── components/            # Reusable UI components
├── lib/                   # Library configurations
├── models/                # Database models
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenWeatherMap** for comprehensive weather data
- **Google Gemini** for AI-powered recommendations
- **Mapbox** for beautiful interactive maps
- **NASA** for satellite imagery and environmental data
- **Vercel** for seamless deployment platform

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/overhelmingcoder/TripEase/issues)
- **Discussions**: [GitHub Discussions](https://github.com/overhelmingcoder/TripEase/discussions)
- **Email**: [Contact Us](mailto:support@tripease.app)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=overhelmingcoder/TripEase&type=Date)](https://star-history.com/#overhelmingcoder/TripEase&Date)

---

<div align="center">
  <p>Made with ❤️ by the TripEase Team</p>
  <p>
    <a href="https://github.com/overhelmingcoder/TripEase">⭐ Star us on GitHub</a> •
    <a href="https://twitter.com/tripease">🐦 Follow us on Twitter</a> •
    <a href="https://tripease.app">🌐 Visit our website</a>
  </p>
</div>
