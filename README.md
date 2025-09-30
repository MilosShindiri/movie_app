# Movie App

A modern React-based web application for discovering, searching, and exploring movies. Powered by [TMDB](https://www.themoviedb.org/) APIs, it features trending movies, detailed movie pages, genre browsing, and a recent history widget.

## Features

- 🔍 **Search** for movies by title
- 🎬 **Trending** and popular movies display
- 📂 **Browse** by genres
- 📄 **Movie details** with similar movies suggestions
- 🕒 **Recent history** widget
- 🍞 **Breadcrumb navigation**
- ⚡ **Fast** and responsive UI
- ⏳ **Caching** and optimized data fetching with React Query

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TMDB API](https://developers.themoviedb.org/3)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/movie_app.git
   cd movie_app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.envExample` to `.env` and add your TMDB API key.

4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  App.tsx
  index.tsx
  components/
  constants/
  context/
  hooks/
  pages/
  queries/
  routes/
  services/
  styles/
  types/
  utils/
public/
  images/
  favicon.svg
```

Made with ❤️ using React and TMDB API.
