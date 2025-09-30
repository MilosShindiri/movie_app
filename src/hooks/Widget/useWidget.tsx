import { useMovieHistory } from "../../context/HistoryWidget/useHistoryContext";
import { useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../../routes/routes_utils";

export const useWidget = () => {
  const { addToHistory, movieHistory, clearHistory } = useMovieHistory();
  const navigate = useNavigate();
  const { id: currentId } = useParams<{ id: string }>();

  const handleMovieClick = (id: number) => {
    if (currentId === String(id)) return;
    navigate(`${PagePaths.DETAILS.replace(":id", String(id))}`);
  };

  return {
    handleMovieClick,
    addToHistory,
    movieHistory,
    clearHistory,
  };
};
