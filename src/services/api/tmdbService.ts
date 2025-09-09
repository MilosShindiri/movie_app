import { URLS_API } from "../../constants/urls";
import type { MoviesResponse } from "../../types/movies";
import apiClient from "./apiCLient";

export async function getPopularMovies(): Promise<MoviesResponse> {
  const response = await apiClient.get(URLS_API.GET_MOVIES);
  return response.data;
}

export async function getGenres() {
  const response = await apiClient.get(URLS_API.GET_GENRES);
  return response.data;
}
