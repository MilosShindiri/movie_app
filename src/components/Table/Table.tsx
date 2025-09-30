import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { useNavigate, type SetURLSearchParams } from "react-router-dom";
import { useTableParams } from "../../hooks/Table/useTableParams";
import { useMoviesTable } from "../../hooks/Table/useMoviesTable";
import type { Movie } from "../../types/movies";
import { movieDetailsPath } from "../../utils/pathUtils";
import { Wrapper } from "./TableStyled";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody/TableBody";
import { TablePagination } from "./TablePagination/TablePagination";
import { Loader } from "../Loader";
import { SidebarFilter } from "../Filters/SidebarFilter/SidebarFilter";
import { useTableState } from "../../hooks/Table/useTableReducer";

interface TableProps {
  initialPageIndex: number;
  initialSort?: string;
  initialOrder?: boolean;
  setSearchParams: SetURLSearchParams;
}

export const Table = ({
  initialPageIndex,
  initialSort,
  initialOrder,
  setSearchParams,
}: TableProps) => {
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
    updatePagination,
  } = useTableState(initialPageIndex, initialSort, initialOrder);

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
              navigate(movieDetailsPath(movieId), {
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

  useEffect(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", String(pagination.pageIndex + 1));
      return newParams;
    });
  }, [pagination.pageIndex, setSearchParams]);

  useEffect(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      newParams.set("page", String(pagination.pageIndex + 1));

      if (sorting.length > 0) {
        newParams.set("sort", sorting[0].id);
        newParams.set("order", sorting[0].desc ? "desc" : "asc");
      } else {
        newParams.delete("sort");
        newParams.delete("order");
      }

      return newParams;
    });
  }, [pagination.pageIndex, sorting, setSearchParams]);

  useEffect(() => {
    if (error) {
      toast.error("Error loading movies.");
    }
  }, [error]);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Wrapper>
      <TableHeader
        query={query}
        setQuery={setQuery}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <SidebarFilter
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        selectedGenre={filters.genre}
        selectedYear={filters.year}
        onApply={(newFilters) => {
          setFilters(newFilters);
          updatePagination({ pageIndex: 0 });
          closeSidebar();
        }}
      />

      {isLoading ? (
        <Loader />
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
