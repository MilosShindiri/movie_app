import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import type { Movie } from "../types/movies";
import { getMoviesOptions } from "../queries/movies";
import {
  Header,
  LoaderWrapper,
  PaginationWrapper,
  StyledTable,
  Wrapper,
} from "./TableStyled";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type SortingState,
  type PaginationState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
  FaSort,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import { SearchFilter } from "./TableFilters";
import { useDebounce } from "../hooks/useDebounce";

export const Table = () => {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.replace(/\s+/g, " ").trim();
  const debouncedQuery = useDebounce(
    normalizedQuery === "" ? undefined : normalizedQuery,
    500
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const order = sorting[0]?.desc ? "desc" : "asc";
  const sort = sorting[0]?.id ?? undefined;

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
      page: pagination.pageIndex + 1,
    };
  }, [debouncedQuery, sortField, order, pagination.pageIndex]);

  console.log("FETCH PARAMS:", params);

  const { data, isLoading, error } = useQuery(getMoviesOptions(params));

  const movies = data?.results ?? [];

  const columnHelper = useMemo(() => createColumnHelper<Movie>(), []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        enableSorting: false,
        cell: (info) => {
          const title = info.getValue();
          const shortTitle =
            title.length > 50 ? title.slice(0, 50) + "..." : title;

          return <span title={title}>{shortTitle}</span>;
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
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: movies,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    enableMultiSort: true,
    manualPagination: true,
    pageCount: Math.min(data?.total_pages ?? -1, 500),
  });

  const { pageIndex } = table.getState().pagination;

  const maxPages = Math.min(data?.total_pages ?? 1, 500);

  return (
    <Wrapper>
      <Header>
        <h1>Movies</h1>
        <SearchFilter query={query} onQueryChange={setQuery} />
      </Header>

      {isLoading ? (
        <LoaderWrapper>
          <ClipLoader color="#36d7b7" size={50} />
        </LoaderWrapper>
      ) : error ? (
        toast.error("Error loading movies.")
      ) : (
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="users-table-cell">
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() &&
                        (header.column.getIsSorted() === "asc" ? (
                          <FaSortUp />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <FaSortDown />
                        ) : (
                          <FaSort />
                        ))}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      {!isLoading && data && (
        <PaginationWrapper>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={pageIndex === 0}
          >
            <FaAngleDoubleLeft />
          </button>

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: Math.min(maxPages, 5) }).map((_, i) => {
            const pageNumber = i + 1 + Math.floor(pageIndex / 5) * 5;
            if (pageNumber > maxPages) return null;

            return (
              <button
                key={pageNumber}
                onClick={() => table.setPageIndex(pageNumber - 1)}
                className={pageIndex + 1 === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          })}

          {Math.ceil(maxPages / 5) > Math.floor(pageIndex / 5) + 1 && (
            <span>...</span>
          )}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FaChevronRight />
          </button>

          <button
            onClick={() => table.setPageIndex(maxPages - 1)}
            disabled={pageIndex === maxPages - 1}
          >
            <FaAngleDoubleRight />
          </button>
        </PaginationWrapper>
      )}
    </Wrapper>
  );
};
