import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useState } from "react";
import { useGenres, useTrendingMoviesAll } from "../../../queries/movies";
import { Loader } from "../../Loader";
import type { Genre, SimpleMovie, YearPopularity } from "../../../types/movies";
import {
  ChartBox,
  Filters,
  Header,
  StyledSelect,
} from "./LineChartByYearStyled";

const LineChartByYear = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | "all">("all");

  const { data: genres } = useGenres();
  const { data, isLoading } = useTrendingMoviesAll("week");

  if (isLoading || !data) return <Loader />;

  const filtered =
    selectedGenre === "all"
      ? data
      : data.filter((movie: SimpleMovie) =>
          movie.genre_ids.includes(selectedGenre)
        );

  const byYear: Record<string, { sum: number; count: number }> = {};

  filtered.forEach((movie) => {
    if (!movie.release_date) return;
    const year = new Date(movie.release_date).getFullYear().toString();
    if (!byYear[year]) {
      byYear[year] = { sum: 0, count: 0 };
    }
    byYear[year].sum += movie.popularity;
    byYear[year].count += 1;
  });

  const chartData: YearPopularity[] = Object.entries(byYear)
    .map(([year, { sum, count }]) => ({
      year,
      avgPopularity: sum / count,
    }))
    .sort((a, b) => a.year.localeCompare(b.year));

  return (
    <ChartBox>
      <Header>
        <h3>📈 Average popularity by year of release</h3>
        <Filters>
          <StyledSelect
            value={selectedGenre}
            onChange={(e) =>
              setSelectedGenre(
                e.target.value === "all" ? "all" : parseInt(e.target.value)
              )
            }
          >
            <option value="all">All genres</option>
            {genres?.genres?.map((genre: Genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </StyledSelect>
        </Filters>
      </Header>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1c1c2b", color: "#fff" }}
            formatter={(value: number) => value.toFixed(2)}
          />
          <Line
            type="monotone"
            dataKey="avgPopularity"
            stroke="#7b5dfa"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default LineChartByYear;
