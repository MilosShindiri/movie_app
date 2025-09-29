import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";
import { NowPlayingMovies } from "../../components/Home";
import { Footer } from "../../components/Home/HomeFooter";

export const HomePage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([{ label: "", url: "/" }]);
  }, [setItems]);

  return (
    <>
      <NowPlayingMovies />
      <Footer />
    </>
  );
};
