import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // <- koristi App kao root shell
import HomePage from "../pages/Home";
import DetailsPage from "../pages/Details";
import TablePage from "../pages/Table";
import ChartsPage from "../pages/Charts";
import LoginPage from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { PagePaths } from "./routes_utils";
import { AppLayout } from "./AppLayout";

export const router = createBrowserRouter([
  {
    element: <App />, // <- ovo je sada root aplikacija
    children: [
      {
        element: <AppLayout />, // <- samo rute koje trebaju header
        children: [
          { path: PagePaths.HOME, element: <HomePage /> },
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
      { path: PagePaths.LOGIN, element: <LoginPage /> }, // bez headera
    ],
  },
]);
