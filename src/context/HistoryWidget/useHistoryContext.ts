import { useContext } from "react";
import { MovieHistoryWidgetContext } from "./HistoryContext";

export const useMovieHistory = () => {
  const context = useContext(MovieHistoryWidgetContext);
  if (!context) {
    throw new Error(
      "useHistoryContext must be used within an MovieHistoryProvider"
    );
  }
  return context;
};
