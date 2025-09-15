import { flexRender } from "@tanstack/react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { StyledTable } from "./TableStyled";
import type { Table as TanstackTable } from "@tanstack/react-table";
import type { Movie } from "../types/movies";

interface Props {
  table: TanstackTable<Movie>;
}

export const TableBody = ({ table }: Props) => {
  return (
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
  );
};
