import { FaSlidersH } from "react-icons/fa";
import { FilterButton } from "./TableStyled";

interface FiltersProps {
  onClick: () => void;
}

export const Filters = ({ onClick }: FiltersProps) => {
  return (
    <FilterButton onClick={onClick}>
      <FaSlidersH size={16} />
      Filters
    </FilterButton>
  );
};
