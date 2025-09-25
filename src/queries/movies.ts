import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "../services/api/tmdbService";
import type { Movie, MovieQueryParams } from "../types/movies";
import { minutesToMilliseconds } from "../utils/timeUtils";

export const getMoviesOptions = (params: MovieQueryParams = {}) => {
  return queryOptions({
    queryKey: ["movies", params],
    queryFn: () => {
      if (params.query && params.query.trim() !== "") {
        return tmdbService.getSearchedMovies(params);
      }
      return tmdbService.getPopularMovies(params);
    },
    staleTime: minutesToMilliseconds(5),
    gcTime: minutesToMilliseconds(10),
  });
};

export const getGenresOptions = () =>
  queryOptions({
    queryKey: ["movie-genres"],
    queryFn: tmdbService.getGenres,
  });

export const getMovieDetailsOptions = (id: number | string) =>
  queryOptions({
    queryKey: ["movie-details", id],
    queryFn: () => tmdbService.getMovieDetails(id),
  });

export const useMovieDetails = (id: number | string) =>
  useQuery(getMovieDetailsOptions(id));

export const getSimilarMoviesOptions = (id: number | string) =>
  queryOptions({
    queryKey: ["similar-movies", id],
    queryFn: () => tmdbService.getSimilarMovies(id),
  });

export const useSimilarMovies = (id: number | string) =>
  useQuery(getSimilarMoviesOptions(id));

export const usePopularMovies = (params: MovieQueryParams = {}) =>
  useQuery(getMoviesOptions(params));

export const useGenres = () => useQuery(getGenresOptions());

export const useTrendingMoviesAll = (timeWindow: "day" | "week" = "day") =>
  useQuery<Movie[]>({
    queryKey: ["trending-movies-all", timeWindow],
    queryFn: () => tmdbService.getTrendingMultiplePages(timeWindow),
    staleTime: minutesToMilliseconds(10),
    gcTime: minutesToMilliseconds(20),
  });

export const useTopMovies = (daysAgo: number = 7) =>
  useQuery<Movie[]>({
    queryKey: ["top-movies", daysAgo],
    queryFn: () => tmdbService.getTopMoviesByPopularity(daysAgo),
    staleTime: minutesToMilliseconds(10),
    gcTime: minutesToMilliseconds(20),
  });

export const getNowPlayingOptions = () =>
  queryOptions({
    queryKey: ["now-playing"],
    queryFn: () => tmdbService.getNowPlaying().then((res) => res.results),
    staleTime: minutesToMilliseconds(10),
    gcTime: minutesToMilliseconds(20),
  });

export const useNowPlayingMovies = () => useQuery(getNowPlayingOptions());
