import { flexRender } from "@tanstack/react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { StyledTable } from "./TableStyled";
import type { Table as TanstackTable } from "@tanstack/react-table";
import type { Movie } from "../types/movies";
import { useNavigate } from "react-router-dom";
import { PagePaths } from "../routes/routes_utils";

interface Props {
  table: TanstackTable<Movie>;
}

export const TableBody = ({ table }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledTable>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                <div
                  className={
                    header.column.getCanSort() ? "sortable-header" : ""
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
          <tr
            key={row.id}
            onClick={() => {
              const movieId = row.original.id;
              navigate(PagePaths.DETAILS.replace(":id", String(movieId)));
            }}
            style={{ cursor: "pointer" }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
