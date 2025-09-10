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
} from "@tanstack/react-table";
import { useMemo } from "react";

export const Table = ({
  page = 1,
  genre,
  year,
  query,
  sortBy,
}: MovieQueryParams) => {
  const { data, isLoading, error } = useQuery(
    getMoviesOptions({ page, genre, year, query, sortBy })
  );

  const movies = data?.results ?? [];

  const columnHelper = useMemo(() => createColumnHelper<Movie>(), []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("release_date", {
        header: "Release Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("vote_average", {
        header: "Rating",
        cell: (info) => info.getValue().toFixed(1),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: movies,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                <th key={header.id}>
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
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
