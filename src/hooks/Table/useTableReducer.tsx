import { useReducer } from "react";
import type { SortingState, PaginationState } from "@tanstack/react-table";

type TableState = {
  query: string;
  sorting: SortingState;
  isSidebarOpen: boolean;
  filters: { genre?: number; year?: number };
  pagination: PaginationState;
};

type TableAction =
  | { type: "setQuery"; payload: string }
  | { type: "setSorting"; payload: SortingState }
  | { type: "setIsSidebarOpen"; payload: boolean }
  | { type: "setFilters"; payload: { genre?: number; year?: number } }
  | { type: "setPagination"; payload: PaginationState }
  | { type: "updatePagination"; payload: Partial<PaginationState> };

const createInitialState = (initialPageIndex: number): TableState => ({
  query: "",
  sorting: [],
  isSidebarOpen: false,
  filters: {},
  pagination: {
    pageIndex: initialPageIndex,
    pageSize: 20,
  },
});

const reducer = (state: TableState, action: TableAction): TableState => {
  switch (action.type) {
    case "setQuery":
      return { ...state, query: action.payload };
    case "setSorting":
      return { ...state, sorting: action.payload };
    case "setIsSidebarOpen":
      return { ...state, isSidebarOpen: action.payload };
    case "setFilters":
      return { ...state, filters: action.payload };
    case "setPagination":
      return { ...state, pagination: action.payload };
    case "updatePagination":
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload },
      };
    default:
      return state;
  }
};

export const useTableState = (initialPageIndex: number = 0) => {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialPageIndex)
  );

  return {
    query: state.query,
    setQuery: (query: string) => dispatch({ type: "setQuery", payload: query }),

    sorting: state.sorting,
    setSorting: (
      updater: SortingState | ((old: SortingState) => SortingState)
    ) =>
      dispatch({
        type: "setSorting",
        payload:
          typeof updater === "function" ? updater(state.sorting) : updater,
      }),

    isSidebarOpen: state.isSidebarOpen,
    setIsSidebarOpen: (updater: boolean | ((old: boolean) => boolean)) =>
      dispatch({
        type: "setIsSidebarOpen",
        payload:
          typeof updater === "function"
            ? updater(state.isSidebarOpen)
            : updater,
      }),

    filters: state.filters,
    setFilters: (filters: { genre?: number; year?: number }) =>
      dispatch({ type: "setFilters", payload: filters }),

    pagination: state.pagination,
    setPagination: (
      updater: PaginationState | ((old: PaginationState) => PaginationState)
    ) =>
      dispatch({
        type: "setPagination",
        payload:
          typeof updater === "function" ? updater(state.pagination) : updater,
      }),

    updatePagination: (update: Partial<PaginationState>) =>
      dispatch({ type: "updatePagination", payload: update }),
  };
};
