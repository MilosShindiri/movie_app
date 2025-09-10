import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import type { Movie, MovieQueryParams } from "../types/movies";
import { getMoviesOptions } from "../queries/movies";
import { LoaderWrapper } from "./TableStyled";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

export const Table = ({ page = 1, genre, year, query }: MovieQueryParams) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const order = sorting[0]?.desc ? "desc" : "asc";
  const sort = sorting[0]?.id ?? undefined;

  const { data, isLoading, error } = useQuery(
    getMoviesOptions({
      page,
      genre,
      year,
      query,
      sortBy: sort ? `${sort}.${order}` : undefined,
    })
  );
  console.log(sorting);
  const movies = data?.results ?? [];

  const columnHelper = useMemo(() => createColumnHelper<Movie>(), []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("release_date", {
        header: "Release Date",
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("vote_average", {
        header: "Rating",
        enableSorting: true,
        cell: (info) => info.getValue()?.toFixed(1) ?? "N/A",
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: movies,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  if (isLoading)
    return (
      <LoaderWrapper>
        <ClipLoader color="#36d7b7" size={50} />
      </LoaderWrapper>
    );

  if (error) {
    toast.error("Error loading movies.");
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="users-table-cell">
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc" ? (
                      <FaSortUp />
                    ) : header.column.getIsSorted() === "desc" ? (
                      <FaSortDown />
                    ) : (
                      <FaSort />
                    )}
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
      </table>
    </div>
  );
};
