import { toast } from "react-toastify";
import type { SearchFilterProps } from "../../../types/movies";
import { FilterWrapper } from "../../Table/TableStyled";

export const SearchFilter = ({
  query,
  onQueryChange,
  isFilterActive = false,
}: SearchFilterProps & { isFilterActive?: boolean }) => {
  return (
    <FilterWrapper>
      <input
        type="text"
        placeholder={isFilterActive ? "Search disabled " : "Search..."}
        value={query}
        onChange={(e) => {
          if (!isFilterActive) {
            onQueryChange(e.target.value);
          }
        }}
        readOnly={isFilterActive}
        onClick={() => {
          if (isFilterActive) {
            toast.info("Disable filters to use search.");
          }
        }}
        style={{
          backgroundColor: isFilterActive ? "#f0f0f0" : "white",
          cursor: isFilterActive ? "not-allowed" : "text",
        }}
      />
    </FilterWrapper>
  );
};
