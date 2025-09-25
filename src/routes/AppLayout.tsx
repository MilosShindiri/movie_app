import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Breadcrumbs from "../components/BreadCrumbs/Breadcrumbs";
import { HistoryWidget } from "../components/HistoryWidget/HistoryWidget";

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
