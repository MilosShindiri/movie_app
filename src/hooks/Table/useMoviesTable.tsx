import { useQuery } from "@tanstack/react-query";
import { getMoviesOptions } from "../../queries/movies";
import type { MovieQueryParams } from "../../types/movies";

export const useMoviesTable = (params: MovieQueryParams) => {
  return useQuery(getMoviesOptions(params));
};
