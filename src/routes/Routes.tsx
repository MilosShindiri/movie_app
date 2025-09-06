import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import DetailsPage from "../pages/Details";
import TablePage from "../pages/Table";
import ChartsPage from "../pages/Charts";
import LoginPage from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";

import { PagePaths } from "./routes_utils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: PagePaths.HOME, element: <HomePage /> },
      { path: PagePaths.LOGIN, element: <LoginPage /> },
      { path: PagePaths.DETAILS, element: <DetailsPage /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: PagePaths.TABLE, element: <TablePage /> },
          { path: PagePaths.CHARTS, element: <ChartsPage /> },
        ],
      },
    ],
  },
]);
