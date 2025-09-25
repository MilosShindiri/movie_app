import { useContext } from "react";
import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbsContextType } from "../types/breadcrumbs";

export const useBreadcrumbs = (): BreadcrumbsContextType => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbsProvider");
  }
  return context;
};
