import { useState } from "react";
import { useMovieHistory } from "../context/useHistoryContext";
import { useNavigate } from "react-router-dom";
import { PagePaths } from "../routes/routes_utils";

export const useWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToHistory, movieHistory, clearHistory } = useMovieHistory();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    navigate(`${PagePaths.DETAILS.replace(":id", String(id))}`);
  };
  return {
    isExpanded,
    toggleExpanded,
    handleMovieClick,
    addToHistory,
    movieHistory,
    clearHistory,
  };
};
