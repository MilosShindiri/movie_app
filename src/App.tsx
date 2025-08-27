import { Outlet } from "react-router-dom";

export default function App() {
  // ovde potencijalno ide breadcrumps ref:https://www.youtube.com/watch?v=h7MTWLv3xvw
  return (
    <>
      <Outlet />
    </>
  );
}
