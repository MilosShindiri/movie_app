import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";

export default function App() {
  // here potencialy goes breadcrumps ref:https://www.youtube.com/watch?v=h7MTWLv3xvw
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
