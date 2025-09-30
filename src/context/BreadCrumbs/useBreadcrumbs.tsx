import { useContext } from "react";
import type { BreadcrumbsContextType } from "../../types/breadcrumbs";
import { BreadcrumbsContext } from "./BreadcrumbsContext";

export const useBreadcrumbs = (): BreadcrumbsContextType => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbsProvider");
  }
  return context;
};
