export const URLS_API = {
  GET_MOVIES: "/discover/movie",
  GET_GENRES: "/genre/movie/list",
  GET_SEARCH: "/search/movie",
  GET_MOVIE_DETAILS: (id: number | string) => `/movie/${id}`,
  GET_SIMILAR_MOVIES: (id: number | string) => `/movie/${id}/similar`,
} as const;
