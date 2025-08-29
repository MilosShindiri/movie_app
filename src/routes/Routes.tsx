import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailsPage from "../pages/Details";
import TablePage from "../pages/Table";
import ChartsPage from "../pages/Charts";
import LoginPage from "../pages/Login";
import { PagePaths } from "./utils";
import { AppLayout } from "./AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: PagePaths.HOME, element: <HomePage /> },
      { path: PagePaths.TABLE, element: <TablePage /> },
      { path: PagePaths.CHARTS, element: <ChartsPage /> },
      { path: PagePaths.DETAILS, element: <DetailsPage /> },
    ],
  },
  {
    path: PagePaths.LOGIN,
    element: <LoginPage />,
  },
]);
