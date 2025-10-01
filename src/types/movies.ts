export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  popularity: number;
  name: string;
  vote_count: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieQueryParams {
  page?: number;
  genre?: number;
  year?: number;
  query?: string;
  sortBy?: string;
  staleTime?: number;
  gcTime?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SearchFilterProps {
  query: string;
  onQueryChange: (value: string) => void;
  isFilterActive?: boolean;
}

export interface SimilarMovie {
  id: number;
  title: string;
  poster_path?: string;
}

export interface MovieDetailsProps {
  movie: Movie;
  similarMovies: SimilarMovie[];
  loadingSimilar: boolean;
  errorSimilar: Error | null;
}

export interface YearPopularity {
  year: string;
  avgPopularity: number;
}

export type SimpleMovie = Pick<
  Movie,
  "release_date" | "popularity" | "genre_ids"
>;

export type TooltipPayload = {
  payload: {
    name: string;
    popularity: number;
    rating: number;
    votes: number;
  };
};
export interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}
