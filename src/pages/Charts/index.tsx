import { useEffect } from "react";
import MoviesChartSwitcher from "../../components/MoviesChartSwitcher";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";

const ChartsPage = () => {
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

export default ChartsPage;
