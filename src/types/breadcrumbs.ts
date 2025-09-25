export type BreadcrumbItem = {
  label: string;
  url?: string;
};

export type BreadcrumbsContextType = {
  items: BreadcrumbItem[];
  setItems: (items: BreadcrumbItem[]) => void;
};
