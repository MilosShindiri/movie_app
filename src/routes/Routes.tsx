import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import DetailsPage from "../pages/Details";
import TablePage from "../pages/Table";
import ChartsPage from "../pages/Charts";
import LoginPage from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "table", element: <TablePage /> },
      { path: "charts", element: <ChartsPage /> },
      { path: "movieDetails/:id", element: <DetailsPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
