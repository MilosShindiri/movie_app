import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";
import { MoviesChartSwitcher } from "../../components/Charts";

export const ChartsPage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([
      { label: "Home", url: "/" },
      { label: "Charts", url: "/charts" },
    ]);
  }, [setItems]);
  return (
    <>
      <section>
        <MoviesChartSwitcher />
      </section>
    </>
  );
};
