import { useState } from "react";
import LineChartByYear from "./Charts/LineChartByYear";
import TrendingMoviesChart from "./Charts/Chart";
import { Header, ToggleButton, Wrapper } from "./MovieChartSwitcherStyled";

const MoviesChartSwitcher = () => {
  const [chartView, setChartView] = useState<"bar" | "line">("bar");

  const toggleChart = () => {
    setChartView((prev) => (prev === "bar" ? "line" : "bar"));
  };

  return (
    <Wrapper>
      <Header>
        <ToggleButton onClick={toggleChart}>
          {chartView === "bar" ? "📈 Show by year" : "📊 Show top 10"}
        </ToggleButton>
      </Header>

      {chartView === "bar" ? <TrendingMoviesChart /> : <LineChartByYear />}
    </Wrapper>
  );
};

export default MoviesChartSwitcher;
