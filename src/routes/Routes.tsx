import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ProtectedRoute } from "./ProtectedRoute";
import { PagePaths } from "./routes_utils";
import { AppLayout } from "./AppLayout";
import { HomePage } from "../pages/Home";
import { TablePage } from "../pages/Table";
import { DetailsPage } from "../pages/Details";
import { ChartsPage } from "../pages/Charts";
import { LoginPage } from "../pages/Login";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <AppLayout />,
        children: [{ path: PagePaths.HOME, element: <HomePage /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AppLayout />,
            children: [
              { path: PagePaths.TABLE, element: <TablePage /> },
              { path: PagePaths.DETAILS, element: <DetailsPage /> },
              { path: PagePaths.CHARTS, element: <ChartsPage /> },
            ],
          },
        ],
      },
      { path: PagePaths.LOGIN, element: <LoginPage /> },
    ],
  },
]);
