import { URLS_API } from "../../constants/urls";
import apiClient from "./apiCLient";

export async function getPopularMovies() {
  const response = await apiClient.get(URLS_API.GET_MOVIES);
  return response.data;
}

export async function getGenres() {
  const response = await apiClient.get(URLS_API.GET_GENRES);
  return response.data;
}
