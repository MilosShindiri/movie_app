import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "../services/api/tmdbService";
import type { MovieQueryParams } from "../types/movies";

export const getMoviesOptions = (params: MovieQueryParams = {}) => {
  return queryOptions({
    queryKey: ["movies", params],
    queryFn: () => {
      if (params.query && params.query.trim() !== "") {
        return tmdbService.getSearchedMovies(params);
      }
      return tmdbService.getPopularMovies(params);
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const getGenresOptions = () =>
  queryOptions({
    queryKey: ["movie-genres"],
    queryFn: tmdbService.getGenres,
  });

export const usePopularMovies = (params: MovieQueryParams = {}) =>
  useQuery(getMoviesOptions(params));

export const useGenres = () => useQuery(getGenresOptions());
