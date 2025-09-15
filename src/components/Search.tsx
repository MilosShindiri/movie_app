import type { SearchFilterProps } from "../types/movies";
import { FilterWrapper } from "./TableStyled";

export const SearchFilter = ({ query, onQueryChange }: SearchFilterProps) => {
  return (
    <FilterWrapper>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          onQueryChange(e.target.value);
        }}
      />
    </FilterWrapper>
  );
};
