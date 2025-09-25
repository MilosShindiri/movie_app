import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGenres } from "../../queries/movies";
import type { Genre } from "../../types/movies";
import {
  SidebarFooter,
  SidebarHeader,
  SidebarSection,
  SidebarWrapper,
} from "./SidebarFilterStyled";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedGenre?: number;
  selectedYear?: number;
  onApply: (filters: { genre?: number; year?: number }) => void;
}

export const SidebarFilter = ({
  isOpen,
  onClose,
  selectedGenre,
  selectedYear,
  onApply,
}: Props) => {
  const { data } = useGenres();
  const genres: Genre[] = data?.genres ?? [];

  const [genreId, setGenreId] = useState<number | undefined>(selectedGenre);
  const [year, setYear] = useState<number | undefined>(selectedYear);

  const handleApply = () => {
    onApply({ genre: genreId, year });
    onClose();
  };

  const handleReset = () => {
    setGenreId(undefined);
    setYear(undefined);
    onApply({});
  };

  return (
    <SidebarWrapper $isOpen={isOpen}>
      <SidebarHeader>
        <h2>Filters</h2>
        <button onClick={onClose}>
          <IoMdClose />
        </button>
      </SidebarHeader>

      <SidebarSection>
        <label>Genre</label>
        <select
          value={genreId ?? ""}
          onChange={(e) =>
            setGenreId(e.target.value ? parseInt(e.target.value) : undefined)
          }
        >
          <option value="">All genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </SidebarSection>

      <SidebarSection>
        <label>Release Year</label>
        <input
          type="number"
          placeholder="e.g. 2022"
          value={year ?? ""}
          onChange={(e) =>
            setYear(e.target.value ? parseInt(e.target.value) : undefined)
          }
        />
      </SidebarSection>

      <SidebarFooter>
        <button onClick={handleApply}>Apply Filters</button>
        <button className="reset" onClick={handleReset}>
          Reset Filters
        </button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
