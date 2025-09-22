import { URLS_API } from "../../constants/urls";
import apiClient from "./apiCLient";
import type {
  Movie,
  MovieQueryParams,
  MoviesResponse,
} from "../../types/movies";

export const tmdbService = {
  getPopularMovies: (params: MovieQueryParams = {}): Promise<MoviesResponse> =>
    apiClient
      .get(URLS_API.GET_MOVIES, {
        params: {
          page: params.page ?? 1,
          with_genres: params.genre,
          primary_release_year: params.year,
          query: params.query,
          sort_by: params.sortBy,
        },
      })
      .then((res) => res.data),

  getSearchedMovies: (params: MovieQueryParams = {}): Promise<MoviesResponse> =>
    apiClient
      .get(URLS_API.GET_SEARCH, {
        params: {
          page: params.page ?? 1,
          query: params.query,
          sort_by: params.sortBy,
        },
      })
      .then((res) => res.data),

  getGenres: () => apiClient.get(URLS_API.GET_GENRES).then((res) => res.data),

  getMovieDetails: (id: number | string) =>
    apiClient.get(URLS_API.GET_MOVIE_DETAILS(id)).then((res) => res.data),

  getSimilarMovies: (id: number | string) =>
    apiClient.get(URLS_API.GET_SIMILAR_MOVIES(id)).then((res) => res.data),

  getTrending: (timeWindow: "day" | "week" = "day"): Promise<MoviesResponse> =>
    apiClient
      .get(URLS_API.GET_TRENDING_MOVIES(timeWindow))
      .then((res) => res.data),

  getTrendingMultiplePages: async (
    timeWindow: "day" | "week" = "day",
    totalPages: number = 25
  ): Promise<Movie[]> => {
    const requests = Array.from({ length: totalPages }, (_, i) =>
      apiClient.get<MoviesResponse>(URLS_API.GET_TRENDING_MOVIES(timeWindow), {
        params: { page: i + 1 },
      })
    );

    const responses = await Promise.all(requests);

    const allResults: Movie[] = responses.flatMap((res) => res.data.results);

    return allResults;
  },

  getTopMoviesByPopularity: async (
    daysAgo: number = 7,
    totalPages: number = 25
  ): Promise<Movie[]> => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const gteDate = date.toISOString().split("T")[0];

    const requests = Array.from({ length: totalPages }, (_, i) =>
      apiClient.get<MoviesResponse>(URLS_API.GET_MOVIES, {
        params: {
          sort_by: "popularity.desc",
          "primary_release_date.gte": gteDate,
          page: i + 1,
        },
      })
    );

    const responses = await Promise.all(requests);
    return responses.flatMap((res) => res.data.results);
  },
};
