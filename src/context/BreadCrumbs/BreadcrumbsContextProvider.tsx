import { useState, type ReactNode } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbItem } from "../../types/breadcrumbs";

type BreadcrumbsProviderProps = {
  children: ReactNode;
};

export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const [items, setItems] = useState<BreadcrumbItem[]>([]);

  return (
    <BreadcrumbsContext.Provider value={{ items, setItems }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};
