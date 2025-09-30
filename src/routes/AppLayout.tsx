import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { HistoryWidget } from "../components/HistoryWidget/HistoryWidget";
import { Breadcrumbs } from "../components/BreadCrumbs";

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
