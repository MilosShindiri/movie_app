import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from "recharts";
import { useEffect, useState } from "react";
import { useGenres, useTopMovies } from "../../../queries/movies";

import {
  ChartContainer,
  Header,
  InfoLine,
  SelectGroup,
  StyledSelect,
  Title,
  TooltipContainer,
} from "./ChartStyled";
import type { CustomTooltipProps, Genre, Movie } from "../../../types/movies";
import { Loader } from "../../Loader";
import { toast } from "react-toastify";

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    const movie = payload[0].payload;

    return (
      <TooltipContainer>
        <strong>{label}</strong>
        <InfoLine>⭐ {movie.rating.toFixed(1)}</InfoLine>
        <InfoLine>🔥 Popularnost: {movie.popularity.toFixed(2)}</InfoLine>
      </TooltipContainer>
    );
  }

  return null;
};

const TrendingMoviesChart = () => {
  const [timeRange, setTimeRange] = useState<"day" | "week">("week");
  const [selectedGenre, setSelectedGenre] = useState<number | "all">("all");

  const daysAgo = timeRange === "day" ? 1 : 7;

  const { data: genres } = useGenres();
  const { data, isLoading, error } = useTopMovies(daysAgo);

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as "day" | "week");
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedGenre(value === "all" ? "all" : parseInt(value));
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Error loading movies.");
    }
  }, [error]);

  if (isLoading) return <Loader />;

  const filtered = data?.filter((movie: Movie) =>
    selectedGenre === "all" ? true : movie.genre_ids.includes(selectedGenre)
  );

  const top10 = filtered
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10)
    .map((item) => ({
      name: item.title || item.name || "N/A",
      popularity: item.popularity,
      rating: item.vote_average,
      votes: item.vote_count,
    }));

  return (
    <ChartContainer>
      <Header>
        <Title>
          🔥 Top 10 Most Popular Movies(
          {timeRange === "week" ? "This week" : "Today"})
        </Title>

        <SelectGroup>
          <StyledSelect value={timeRange} onChange={handleTimeChange}>
            <option value="day">Today</option>
            <option value="week">This week</option>
          </StyledSelect>

          <StyledSelect value={selectedGenre} onChange={handleGenreChange}>
            <option value="all">All genres</option>
            {genres?.genres?.map((genre: Genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </StyledSelect>
        </SelectGroup>
      </Header>

      <ResponsiveContainer>
        <BarChart
          data={top10}
          layout="vertical"
          margin={{
            top: 20,
            right: windowWidth < 500 ? 10 : 40,
            left: windowWidth < 500 ? 40 : 100,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis type="number" stroke="#ccc">
            <Label
              value="Popularity"
              offset={10}
              position="bottom"
              style={{ fill: "#aaa" }}
            />
          </XAxis>
          <YAxis
            type="category"
            dataKey="name"
            width={windowWidth < 500 ? 100 : 200}
            tick={{ fontSize: windowWidth < 500 ? 10 : 13, fill: "#fff" }}
          >
            <Label
              value="Name"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fill: "#aaa" }}
            />
          </YAxis>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
          />
          <Bar
            dataKey="popularity"
            fill="#9c6bff"
            barSize={windowWidth < 500 ? 16 : 24}
            radius={[0, 10, 10, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default TrendingMoviesChart;
