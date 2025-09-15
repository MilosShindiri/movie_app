import { useMemo } from "react";
import { useDebounce } from "./useDebounce";

export const useTableParams = (
  query: string,
  sort: string,
  order: "asc" | "desc" = "asc",
  pageIndex: number,
  filters: { genre?: number; year?: number }
) => {
  const normalizedQuery = query.replace(/\s+/g, " ").trim();
  const debouncedQuery = useDebounce(
    normalizedQuery === "" ? undefined : normalizedQuery,
    500
  );

  const sortMapping: Record<string, string> = {
    release_date: "release_date",
    vote_average: "vote_average",
    title: "original_title",
  };

  const sortField = sort ? sortMapping[sort] : undefined;

  const params = useMemo(() => {
    return {
      query: debouncedQuery,
      sortBy: sortField ? `${sortField}.${order}` : undefined,
      page: pageIndex + 1,
      genre: filters.genre,
      year: filters.year,
    };
  }, [debouncedQuery, sortField, order, pageIndex, filters]);

  return params;
};
