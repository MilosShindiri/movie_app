import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";

const HomePage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([{ label: "", url: "/" }]);
  }, [setItems]);
  return (
    <>
      <section>
        <h1>Home working!</h1>
      </section>
    </>
  );
};

export default HomePage;
