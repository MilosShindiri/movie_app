import { createContext } from "react";
import type { BreadcrumbsContextType } from "../../types/breadcrumbs";

export const BreadcrumbsContext = createContext<
  BreadcrumbsContextType | undefined
>(undefined);
