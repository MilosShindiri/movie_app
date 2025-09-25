import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { HistoryWidget } from "../components/HistoryWidget";
import Breadcrumbs from "../components/Breadcrumbs";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <HistoryWidget />
    </>
  );
};
