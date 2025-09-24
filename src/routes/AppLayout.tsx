import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { HistoryWidget } from "../components/HistoryWidget";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <HistoryWidget />
    </>
  );
};
