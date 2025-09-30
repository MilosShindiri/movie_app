import { useEffect, useState, type ReactNode } from "react";
import { MovieHistoryWidgetContext } from "./HistoryContext";
import type { MovieHistoryItem } from "../../types/historyWidget";

export const MovieHistoryWidgetProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const MAX_MOVIES_IN_HISTORY = 5;
  const [movieHistory, setMovieHistory] = useState<MovieHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("movieHistory");
    if (saved) {
      const parsed = JSON.parse(saved);
      setMovieHistory(parsed);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("movieHistory", JSON.stringify(movieHistory));
    }
  }, [isLoaded, movieHistory]);

  useEffect(() => {
    if (!isLoaded) return;

    const token = localStorage.getItem("token");
    const isExpired =
      !token || Date.now() > Number(localStorage.getItem("tokenExpiresAt"));

    if (isExpired) {
      setMovieHistory([]);
      localStorage.removeItem("movieHistory");
    }
  }, [isLoaded]);

  const addToHistory = (movie: MovieHistoryItem) => {
    setMovieHistory((prevState) => {
      const filtered = prevState.filter((current) => current.id !== movie.id);
      const updated = [movie, ...filtered];

      return updated.slice(0, MAX_MOVIES_IN_HISTORY);
    });
  };

  const removeFromHistory = (id: number) => {
    setMovieHistory((prev) => prev.filter((current) => current.id !== id));
  };

  const clearHistory = () => {
    setMovieHistory([]);
    localStorage.removeItem("movieHistory");
  };

  return (
    <MovieHistoryWidgetContext.Provider
      value={{
        movieHistory,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </MovieHistoryWidgetContext.Provider>
  );
};
