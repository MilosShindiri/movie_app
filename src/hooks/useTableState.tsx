import { useState } from "react";
import type { SortingState, PaginationState } from "@tanstack/react-table";

export const useTableState = (initialPageIndex: number = 0) => {
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<{ genre?: number; year?: number }>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: initialPageIndex,
    pageSize: 20,
  });

  return {
    query,
    setQuery,
    sorting,
    setSorting,
    isSidebarOpen,
    setIsSidebarOpen,
    filters,
    setFilters,
    pagination,
    setPagination,
  };
};
