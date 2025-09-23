import { createContext } from "react";
import type { MovieHistoryContextType } from "../types/historyWidget";

export const MovieHistoryWidgetContext = createContext<
  MovieHistoryContextType | undefined
>(undefined);
