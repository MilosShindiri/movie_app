import { Filters } from "./Filters";
import { SearchFilter } from "./Search";
import { FilterContainer, Header } from "./TableStyled";

interface Props {
  query: string;
  setQuery: (val: string) => void;
  toggleSidebar: () => void;
}

export const TableHeader = ({ query, setQuery, toggleSidebar }: Props) => {
  return (
    <Header>
      <h1>Explore our movie collection</h1>
      <FilterContainer>
        <Filters onClick={toggleSidebar} />
        <SearchFilter query={query} onQueryChange={setQuery} />
      </FilterContainer>
    </Header>
  );
};
