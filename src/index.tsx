import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieHistoryWidgetProvider } from "./context/RecentMoviesContext";
import { BreadcrumbsProvider } from "./context/BreadcrumbsContextProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MovieHistoryWidgetProvider>
        <BreadcrumbsProvider>
          <RouterProvider router={router} />
        </BreadcrumbsProvider>
      </MovieHistoryWidgetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
