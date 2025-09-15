import type { SearchFilterProps } from "../types/movies";
import { FilterWrapper } from "./TableStyled";

export const SearchFilter = ({ query, onQueryChange }: SearchFilterProps) => {
  return (
    <FilterWrapper>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onFocus={() => console.log("Input focused")}
        onBlur={() => console.log("Input blurred")}
        onChange={(e) => {
          console.log("Input changed to:", e.target.value);
          onQueryChange(e.target.value);
        }}
      />
    </FilterWrapper>
  );
};
