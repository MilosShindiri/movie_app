import { Filters } from "../../Filters/FilterBtn";
import { SearchFilter } from "../../Filters/FilterSearch/Search";
import { FilterContainer, Header } from "../TableStyled";

interface Props {
  query: string;
  setQuery: (val: string) => void;
  toggleSidebar: () => void;
  isFilterActive: boolean;
}

export const TableHeader = ({
  query,
  setQuery,
  toggleSidebar,
  isFilterActive,
}: Props) => {
  return (
    <Header>
      <h1>Explore our movie collection</h1>
      <FilterContainer>
        <Filters onClick={toggleSidebar} />
        <SearchFilter
          query={query}
          onQueryChange={setQuery}
          isFilterActive={isFilterActive}
        />
      </FilterContainer>
    </Header>
  );
};
