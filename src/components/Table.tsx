import { toast } from "react-toastify";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import type { Movie } from "../types/movies";
import { Wrapper } from "./TableStyled";
import { SidebarFilter } from "./SidebarFilter";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TablePagination } from "./TablePagination";
import { TableLoader } from "./TableLoader";

import { useTableState } from "../hooks/useTableState";
import { useTableParams } from "../hooks/useTableParams";
import { useMoviesTable } from "../hooks/useMoviesTable";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const {
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
  } = useTableState();
  const navigate = useNavigate();
  const order = sorting[0]?.desc ? "desc" : "asc";
  const sort = sorting[0]?.id ?? "";

  const params = useTableParams(
    query,
    sort,
    order,
    pagination.pageIndex,
    filters
  );
  const { data, isLoading, error } = useMoviesTable(params);

  const movies = data?.results ?? [];

  const columnHelper = createColumnHelper<Movie>();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      enableSorting: false,
      cell: (info) => {
        const title = info.getValue();
        const shortTitle =
          title.length > 50 ? title.slice(0, 50) + "..." : title;
        const movieId = info.row.original.id;
        return (
          <span
            onClick={() =>
              navigate(`movie/${movieId}`, {
                state: {
                  from: "table",
                  title: title,
                },
              })
            }
          >
            {shortTitle}
          </span>
        );
      },
    }),
    columnHelper.accessor("release_date", {
      header: "Release Date",
      enableSorting: true,
      cell: (info) => {
        const value = info.getValue();
        if (!value) return "No date info";
        const date = new Date(value);
        return new Intl.DateTimeFormat("RS").format(date);
      },
    }),
    columnHelper.accessor("vote_average", {
      header: "Rating",
      enableSorting: true,
      cell: (info) => info.getValue()?.toFixed(1) ?? "",
    }),
  ];

  const table = useReactTable({
    data: movies,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    enableMultiSort: true,
    manualPagination: true,
    pageCount: Math.min(data?.total_pages ?? -1, 500),
  });

  const { pageIndex } = table.getState().pagination;
  const maxPages = Math.min(data?.total_pages ?? 1, 500);

  if (error) {
    toast.error("Error loading movies.");
  }

  return (
    <Wrapper>
      <TableHeader
        query={query}
        setQuery={setQuery}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <SidebarFilter
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedGenre={filters.genre}
        selectedYear={filters.year}
        onApply={(newFilters) => {
          setFilters(newFilters);
          setPagination((prev) => ({ ...prev, pageIndex: 0 }));
        }}
      />

      {isLoading ? (
        <TableLoader />
      ) : (
        <>
          <TableBody table={table} />
          <TablePagination
            pageIndex={pageIndex}
            maxPages={maxPages}
            setPageIndex={table.setPageIndex}
            previousPage={table.previousPage}
            nextPage={table.nextPage}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
          />
        </>
      )}
    </Wrapper>
  );
};
