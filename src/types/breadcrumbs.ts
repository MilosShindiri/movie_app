export type BreadcrumbItem = {
  label: string;
  url?: string | null;
};

export type BreadcrumbsContextType = {
  items: BreadcrumbItem[];
  setItems: (items: BreadcrumbItem[]) => void;
};
