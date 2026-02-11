# NestQuest

NestQuest is a modern real-estate web app for browsing properties, viewing details, and managing user access with protected routes. Built with React and Vite, it uses a component-driven UI, client-side routing, and data-driven dashboards.

## Features
- Property browsing, search, and details views
- Authentication flows with protected routes
- Admin dashboard for users, properties, and bookings
- Responsive UI with animations
- Toast notifications and loading states

## Tech Stack
- React 18 + Vite 5
- React Router
- Tailwind CSS v4 (via Vite plugin)
- Axios
- React Query
- Framer Motion, GSAP
- Recharts, Swiper

## Project Structure
- src/pages: Application pages (Home, Browse, Details, Auth, Admin, etc.)
- src/components: Shared UI components
- src/api: API clients
- src/auth: Auth context and route protection
- src/contexts: App contexts (e.g., property data)
- src/hooks: App hooks

## Getting Started
1. Install dependencies
	- npm install
2. Start the dev server
	- npm run dev
3. Build for production
	- npm run build
4. Preview the production build
	- npm run preview

## Environment Variables
Create a .env file at the project root and restart the dev server after changes.

- VITE_GOOGLE_CLIENT_ID: Google OAuth client ID used in auth flows

## API Configuration
The API base URL is currently set in src/api/axios.js.

- Production: https://nestquest-backend-production.up.railway.app/api/v1
- Local (commented): http://localhost:3000/api/v1

If you want environment-based URLs, move the base URL to an environment variable such as VITE_API_BASE_URL.

## Scripts
- npm run dev: Start development server
- npm run build: Build for production
- npm run preview: Preview production build
- npm run lint: Run ESLint
