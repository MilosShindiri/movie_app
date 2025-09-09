import { useSuspenseQuery } from "@tanstack/react-query";
import { getPopularMovies, getGenres } from "../services/api/tmdbService";

export const usePopularMovies = () => {
  return useSuspenseQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
};

export const useGenres = () => {
  return useSuspenseQuery({
    queryKey: ["movieGenres"],
    queryFn: getGenres,
  });
};
