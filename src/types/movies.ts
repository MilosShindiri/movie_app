export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
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
}

export interface Genre {
  id: number;
  name: string;
}

export interface SearchFilterProps {
  query: string;
  onQueryChange: (value: string) => void;
}
