import { useState } from "react";
import { useMovieHistory } from "../context/useHistoryContext";
import { useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../routes/routes_utils";

export const useWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToHistory, movieHistory, clearHistory } = useMovieHistory();
  const navigate = useNavigate();

  const { id: currentId } = useParams<{ id: string }>();
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMovieClick = (id: number) => {
    if (currentId === String(id)) {
      setIsExpanded(false);
    }
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
