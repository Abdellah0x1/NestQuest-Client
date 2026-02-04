# NestQuest

NestQuest is a modern real-estate web app for browsing properties, viewing details, and managing user access with protected routes. Built with React and Vite, it uses a component-driven UI and client-side routing.

## Features
- Property browsing and details views
- Login and signup flows with protected routes
- Responsive UI with animations
- Toast notifications and loading states

## Tech Stack
- React 18 + Vite 5
- React Router
- Tailwind CSS
- Axios
- Framer Motion

## Project Structure
- src/pages: Application pages (Home, Browse, Details, Login, Signup, etc.)
- src/components: Shared UI components
- src/api: API clients
- src/auth: Auth context and route protection
- src/contexts: App contexts (e.g., property data)

## Getting Started
1. Install dependencies
	- npm install
2. Start the dev server
	- npm run dev
3. Build for production
	- npm run build
4. Preview the production build
	- npm run preview

## Scripts
- npm run dev: Start development server
- npm run build: Build for production
- npm run preview: Preview production build
- npm run lint: Run ESLint

## Notes
- If you add environment variables, create a .env file at the project root and restart the dev server.
