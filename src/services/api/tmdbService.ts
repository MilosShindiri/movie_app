import { URLS_API } from "../../constants/urls";
import apiClient from "./apiCLient";
import type { MovieQueryParams, MoviesResponse } from "../../types/movies";

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
};
